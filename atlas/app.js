import { populatePortraits } from "./portraits.js";
import { markerIconUrl, shapeKeys } from "./marker-renderer.js";
import { MusicNotes, scoreBands, scoreNotes } from "./music-notes.js";
import data from "../data/brooklyn_jazz_sites.json";
import annotation from "../data/geo_ref.json";
import { Scene, scan } from "./scene.js";
import { buildCommunities } from "./communities.js";
import { georeference } from "./georef.js";
import { icon, types, category } from "./symbols.js";

const $ = (id) => document.getElementById(id);
const escape = (s) =>
  String(s ?? "").replace(
    /[&<>"']/g,
    (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        c
      ],
  );
const shortAddress = (s) =>
  (s || "Address unrecorded").replace(/,?\s*Brooklyn\b.*$/i, "").trim() || s;
const searchText = (value) =>
  (value || "")
    .normalize("NFD")
    .replace(/\p{M}/gu, "")
    .replace(/[‘’]/g, "'")
    .toLocaleLowerCase()
    .trim();
const mobile = () => matchMedia("(max-width:700px)").matches;
document
  .querySelectorAll("[data-icon]")
  .forEach((el) => (el.innerHTML = icon(el.dataset.icon)));
function showKey(open) {
  const enabled = $("communities").getAttribute("aria-pressed") === "true";
  $("legendItems").hidden = !open || enabled;
  $("communityKey").hidden = !open || !enabled;
  $("legendButton").setAttribute("aria-expanded", open);
}
showKey(!mobile());
$("legendButton").onclick = () =>
  showKey($("legendButton").getAttribute("aria-expanded") !== "true");
$("aboutButton").onclick = () => $("about").showModal();
$("closeAbout").onclick = () => $("about").close();
$("about").onclick = (e) => {
  if (e.target === $("about")) {
    const r = $("about").getBoundingClientRect();
    if (
      e.clientX < r.left ||
      e.clientX > r.right ||
      e.clientY < r.top ||
      e.clientY > r.bottom
    )
      $("about").close();
  }
};
$("browse").onclick = () => {
  $("sidebar").classList.add("open");
  ($("communityView").hidden
    ? $("recordView").hidden
      ? $("search")
      : $("back")
    : $("communityBack")
  ).focus();
};
$("closeIndex").onclick = () => {
  $("sidebar").classList.remove("open");
  $("browse").focus();
};

function start() {
  const locate = georeference(annotation, scan);
  const sites = data.sites,
    points = [];
  const communities = buildCommunities(sites);
  for (const site of sites) {
    for (const location of site.locations?.length ? site.locations : [site]) {
      if (
        !Number.isFinite(location.latitude) ||
        !Number.isFinite(location.longitude)
      )
        continue;
      const pos = locate(location.longitude, location.latitude);
      if (
        pos.x >= 0 &&
        pos.x < scan.width &&
        pos.y >= 0 &&
        pos.y < scan.height
      ) {
        points.push({
          ...pos,
          site,
          location,
          type: category(site),
          group: communities.bySite.get(site),
        });
      }
    }
  }
  let filterType = "all",
    selected = null,
    group = null,
    person = null,
    filtered = [];
  function clear() {
    notes.inspect(null);
    $("tooltip").hidden = true;
    $("coincident").hidden = true;
  }
  const notes = new MusicNotes($("musicNotes"));
  const scene = new Scene($("scene"), locate(-73.954, 40.6807), {
    markersDrawn: (points, camera, zoom) => notes.update(points, camera, zoom),
    clear,
    originalScan: annotation.target.source,
    tileError: () => {
      $("mapStatus").textContent =
        "A map tile could not load. Refresh to retry.";
      $("mapStatus").hidden = false;
    },
    orientation: (angle) => {
      $("needle").style.transform = "rotate(" + angle + "deg)";
    },
    mode: (mode) => {
      $("iso").setAttribute("aria-pressed", mode === "iso");
      $("top").setAttribute("aria-pressed", mode === "top");
    },
    community: (group) => openCommunity(group),
    hover: (point, pos, sitesAtPoint, ring) => {
      notes.inspect(point);
      if (!point && !ring) {
        $("tooltip").hidden = true;
        return;
      }
      const tip = $("tooltip");
      tip.textContent = ring
        ? ring.name + " community"
        : sitesAtPoint
            .map(
              (site) =>
                site.name +
                " · Connectedness " +
                site.connectedness.score +
                "/100",
            )
            .join("\n");
      tip.hidden = false;
      tip.style.left =
        Math.max(
          tip.offsetWidth / 2 + 4,
          Math.min(scene.cam.w - tip.offsetWidth / 2 - 4, pos.x),
        ) + "px";
      tip.style.top =
        (pos.y + 18 + tip.offsetHeight <= scene.cam.h
          ? pos.y + 18
          : Math.max(4, pos.y - 17 - tip.offsetHeight)) + "px";
    },
    select: (hits, pos) => {
      clear();
      const choices = [
        ...new Map(hits.map((point) => [point.site.qid, point])).values(),
      ];
      if (!choices.length) return;
      if (choices.length === 1) {
        openRecord(choices[0].site, choices[0]);
        return;
      }
      const picker = $("coincident");
      picker.replaceChildren();
      for (const point of choices) {
        const button = document.createElement("button");
        button.textContent = point.site.name;
        button.onclick = () => openRecord(point.site, point);
        picker.append(button);
      }
      picker.hidden = false;
      picker.style.left =
        Math.max(4, Math.min(pos.x + 8, scene.cam.w - picker.offsetWidth - 5)) +
        "px";
      picker.style.top =
        Math.max(
          4,
          Math.min(pos.y + 5, scene.cam.h - picker.offsetHeight - 5),
        ) + "px";
      picker.firstChild.focus();
    },
  });
  function markerImage(type) {
    return `<img class="symbol" alt="" src="${markerIconUrl(shapeKeys[type])}">`;
  }
  $("legendItems").innerHTML =
    Object.entries(types)
      .map(
        ([type, name]) =>
          '<div class="key-row">' + markerImage(type) + name + "</div>",
      )
      .join("") +
    '<div class="note-key"><strong>Connectedness / 100</strong>' +
    scoreBands
      .map(
        (band) =>
          '<div><b aria-label="' +
          band.notes.length +
          ' notes">' +
          band.notes +
          "</b> " +
          escape(band.label) +
          "</div>",
      )
      .join("") +
    "</div>";
  function groupKey() {
    $("communityKey").innerHTML = communities.groups
      .map(
        (g) =>
          `<button class="group-choice" data-group="${g.id}" aria-pressed="${g === group}"><i class="group-swatch" style="--group-color:${g.color}"></i>${escape(g.name)}</button>`,
      )
      .join("");
  }
  $("communityKey").onclick = (e) => {
    const button = e.target.closest("[data-group]");
    if (button)
      openCommunity(
        communities.groups.find((g) => g.id === Number(button.dataset.group)),
      );
  };
  function openCommunity(next, member = null) {
    group = next;
    person = member;
    selected = null;
    scene.selection = null;
    clear();
    scene.points = points;
    scene.highlightSites = person
      ? person.groups.get(group)
      : new Set(group.sites);
    scene.fitSites(scene.highlightSites);
    scene.redraw();
    groupKey();
    const panel = $("communityView");
    const roster = person
      ? [...scene.highlightSites].sort((a, b) => a.name.localeCompare(b.name))
      : group.people;
    const rows = roster
      .map((entry) => {
        if (person) {
          const mapped = points.some((p) => p.site === entry);
          return `<button data-venue="${entry.qid}">${escape(entry.name)} <small>${mapped ? "View record" : "Unmapped · View record"}</small></button>`;
        }
        const count = entry.groups.get(group).size;
        return `<button data-member="${entry.qid}"><span>${escape(entry.name)}${entry.groups.size > 1 ? `<small>In ${entry.groups.size} communities</small>` : ""}</span><small>${count} ${count === 1 ? "shrine" : "shrines"}</small></button>`;
      })
      .join("");
    const others = person
      ? [...person.groups.keys()].filter((g) => g !== group)
      : [];
    panel.innerHTML =
      `<button class="back" id="communityBack">${icon("chevron-left")}${person ? "Community members" : "Location index"}</button>
      <div class="community-caption"><i class="group-swatch" style="--group-color:${group.color}"></i>${person ? escape(group.name) : "Shared-person community"}</div>
      <h2>${escape(person ? person.name : group.name)}</h2>
      <p class="community-count">${person ? roster.length + (roster.length === 1 ? " shrine in this community" : " shrines in this community") : group.sites.length + " shrines · " + group.people.length + " people"}</p>
      <h3>${person ? "Associated shrines" : "People by number of shrines"}</h3>
      <div class="community-list">${rows}</div>` +
      (others.length
        ? '<h3>Also connected to</h3><div class="community-list">' +
          others
            .map(
              (g) =>
                `<button data-other="${g.id}">${escape(g.name)}<small>${person.groups.get(g).size} ${person.groups.get(g).size === 1 ? "shrine" : "shrines"}</small></button>`,
            )
            .join("") +
          "</div>"
        : "");
    $("indexView").hidden = $("recordView").hidden = true;
    panel.hidden = false;
    $("browseLabel").textContent = "Community details";
    panel.scrollTop = 0;
    if (mobile()) $("sidebar").classList.add("open");
    $("communityBack").focus({ preventScroll: true });
  }
  $("communityView").onclick = (e) => {
    const button = e.target.closest("button");
    if (!button) return;
    if (button.id === "communityBack") {
      if (person) openCommunity(group);
      else showIndex(true);
    } else if (button.dataset.member)
      openCommunity(group, communities.people.get(button.dataset.member));
    else if (button.dataset.other)
      openCommunity(
        communities.groups.find((g) => g.id === Number(button.dataset.other)),
        person,
      );
    else if (button.dataset.venue)
      openRecord(sites.find((s) => s.qid === button.dataset.venue));
  };
  $("communities").onclick = () => {
    scene.communityLayer = !scene.communityLayer;
    $("communities").setAttribute("aria-pressed", scene.communityLayer);
    $("legendButton").querySelector("span").textContent = scene.communityLayer
      ? "Communities"
      : "Map key";
    if (!scene.communityLayer && group) {
      if (!selected) showIndex();
      else {
        group = person = null;
        scene.highlightSites = null;
        render();
        $("back").innerHTML = icon("chevron-left") + "Location index";
      }
    }
    groupKey();
    showKey(scene.communityLayer || !mobile());
    clear();
    scene.redraw();
  };
  function showIndex(focus = false) {
    const previous = selected;
    if (group) {
      group = person = null;
      scene.highlightSites = null;
      groupKey();
      render();
    }
    selected = null;
    scene.selection = null;
    scene.redraw();
    clear();
    $("recordView").hidden = true;
    $("communityView").hidden = true;
    $("indexView").hidden = false;
    $("browseLabel").textContent = "Location index";
    if (focus) {
      const row =
        previous &&
        $("results").querySelector('[data-id="' + previous.qid + '"]');
      (row || $("search")).focus();
    }
  }
  function openRecord(site, point) {
    clear();
    selected = site;
    scene.selection = site.qid;
    if (group) scene.highlightSites = new Set([site]);
    const locations = points.filter((p) => p.site === site),
      target = point || locations[0];
    if (target) scene.focus(target);
    else scene.redraw();
    const active = site.active || {};
    const dates =
      active.from && active.to
        ? active.from === active.to
          ? active.from
          : active.from + " – " + active.to
        : active.from
          ? "From " + active.from
          : active.to
            ? "Until " + active.to
            : "Dates unrecorded";
    $("recordView").innerHTML =
      '<button id="back" class="back">' +
      icon("chevron-left") +
      (group ? "Back to community" : "Location index") +
      "</button>" +
      '<div class="record-type">' +
      markerImage(category(site)) +
      types[category(site)] +
      "</div><h2>" +
      escape(site.name) +
      "</h2>" +
      '<p class="address">' +
      escape(target?.location.address || site.address || "Address unrecorded") +
      "</p>" +
      '<div class="meta"><strong>Recorded activity</strong><br>' +
      escape(dates) +
      (active.confidence
        ? " · " + escape(active.confidence) + " confidence"
        : "") +
      "</div>" +
      '<div class="meta"><strong>Connectedness</strong><br><span aria-hidden="true">' +
      scoreNotes(site.connectedness.score) +
      "</span> " +
      site.connectedness.score +
      "/100 · " +
      site.connectedness.linked_entities +
      (site.connectedness.linked_entities === 1
        ? " linked entity"
        : " linked entities") +
      " · " +
      site.connectedness.interviews +
      (site.connectedness.interviews === 1 ? " interview" : " interviews") +
      " · " +
      site.connectedness.mentions +
      (site.connectedness.mentions === 1 ? " mention" : " mentions") +
      "</div>" +
      (!locations.length
        ? '<p class="address">This site has no mapped coordinates.</p>'
        : "") +
      (site.locations.length > 1
        ? '<h3>Locations</h3><div id="addresses"></div>'
        : "") +
      "<h3>Oral history</h3><p>" +
      escape(site.summary) +
      "</p>" +
      (site.people.length
        ? '<h3>People in the record</h3><ul class="people-list">' +
          site.people
            .map(
              (p) =>
                '<li data-person="' +
                escape(p.qid) +
                '"><div><a href="https://base.semlab.io/wiki/Item:' +
                encodeURIComponent(p.qid) +
                '" target="_blank" rel="noreferrer">' +
                escape(p.name) +
                "</a><small>" +
                escape(p.role) +
                "</small></div></li>",
            )
            .join("") +
          "</ul>"
        : "") +
      '<p><a class="source-link" href="' +
      escape(site.url) +
      '" target="_blank" rel="noreferrer">View Wikibase record</a></p>';
    const peopleList = $("recordView").querySelector(".people-list");
    if (peopleList) populatePortraits(peopleList);
    if ($("addresses")) {
      for (const address of site.locations) {
        const mapped = locations.find((p) => p.location === address);
        const el = document.createElement(mapped ? "button" : "p");
        el.textContent = address.address || "Address unrecorded";
        if (mapped) {
          el.className = "site-location";
          el.onclick = () => openRecord(site, mapped);
        } else el.className = "address";
        $("addresses").append(el);
      }
    }
    $("back").onclick = () =>
      group ? openCommunity(group, person) : showIndex(true);
    $("communityView").hidden = true;
    $("indexView").hidden = true;
    $("recordView").hidden = false;
    $("browseLabel").textContent = "Location record";
    $("recordView").scrollTop = 0;
    if (mobile()) $("sidebar").classList.add("open");
    $("back").focus({ preventScroll: true });
  }
  function render() {
    clear();
    const term = searchText($("search").value);
    filtered = sites.filter(
      (s) =>
        (filterType === "all" || category(s) === filterType) &&
        (!term ||
          [
            s.name,
            s.address,
            ...s.also_called,
            ...s.people.map((p) => p.name),
            ...s.locations.map((l) => l.address),
          ].some((v) => searchText(v).includes(term))),
    );
    filtered.sort(
      $("sort").value === "rank"
        ? (a, b) => a.connectedness.rank - b.connectedness.rank
        : (a, b) => a.name.localeCompare(b.name),
    );
    $("resultCount").textContent =
      filtered.length + " location" + (filtered.length === 1 ? "" : "s");
    $("results").innerHTML =
      filtered
        .map((s) => {
          const type = category(s);
          return (
            '<div class="index-entry"><button class="row" data-id="' +
            escape(s.qid) +
            '"><span class="symbol-tile ' +
            type +
            '">' +
            markerImage(type) +
            '</span><span class="row-text"><strong>' +
            escape(s.name) +
            "</strong><small>" +
            escape(shortAddress(s.address)) +
            '</small></span></button><a class="index-source" href="' +
            escape(s.url) +
            '" target="_blank" rel="noreferrer" aria-label="Open the Wikibase record for ' +
            escape(s.name) +
            '">Wikibase<span aria-hidden="true"> ↗</span></a></div>'
          );
        })
        .join("") ||
      '<p class="empty">No matching locations. Try a place, person, or address.</p>';
    const included = new Set(filtered);
    scene.points = points.filter((p) => included.has(p.site));
    scene.hover = null;
    scene.redraw();
    $("results").scrollTop = 0;
  }
  $("results").onclick = (e) => {
    const row = e.target.closest("[data-id]");
    if (row) openRecord(filtered.find((s) => s.qid === row.dataset.id));
  };
  $("results").onpointerover = (e) => {
    scene.hover = e.target.closest("[data-id]")?.dataset.id;
    scene.redraw();
  };
  $("results").onpointerleave = () => {
    scene.hover = null;
    scene.redraw();
  };
  $("search").oninput = render;
  $("sort").onchange = render;
  const filters = $("filters");
  for (const [key, name] of Object.entries({
    all: "All site types",
    ...types,
  })) {
    const button = document.createElement("button");
    button.textContent = name;
    button.dataset.type = key;
    button.setAttribute("aria-pressed", key === "all");
    button.onclick = () => {
      filterType = key;
      filters
        .querySelectorAll("button")
        .forEach((b) => b.setAttribute("aria-pressed", b === button));
      $("filter").classList.toggle("applied", key !== "all");
      $("filter").setAttribute("aria-label", "Filter site types, " + name);
      toggleFilter(false);
      $("filter").focus();
      render();
    };
    filters.append(button);
  }
  function toggleFilter(open) {
    filters.hidden = !open;
    $("filter").setAttribute("aria-expanded", open);
  }
  $("filter").onclick = () => toggleFilter(filters.hidden);
  document.addEventListener("pointerdown", (e) => {
    if (!e.target.closest(".filter-wrap")) toggleFilter(false);
    if (!e.target.closest("#coincident")) $("coincident").hidden = true;
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      if (!filters.hidden) {
        toggleFilter(false);
        $("filter").focus();
      } else if (!$("coincident").hidden) {
        clear();
        $("scene").focus();
      } else if ($("about").open) return;
      else if (selected) $("back").click();
      else if (!$("communityView").hidden) $("communityBack").click();
      else if (mobile()) $("closeIndex").click();
    }
  });
  $("iso").onclick = () => scene.view("iso");
  $("top").onclick = () => scene.view("top");
  $("reset").onclick = () => scene.view("iso", true);
  $("zoomIn").onclick = () => scene.zoomBy(1.45);
  $("zoomOut").onclick = () => scene.zoomBy(1 / 1.45);
  $("explore").onclick = () => {
    showIndex();
    $("sidebar").classList.remove("open");
    scene.view("iso", true);
  };
  render();
  $("mapStatus").hidden = true;
}
try {
  start();
} catch (error) {
  console.error(error);
  $("mapStatus").textContent =
    "Unable to load the atlas. Check that the site files are together and reload.";
}
