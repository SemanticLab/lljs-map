import portraits from "../data/people_portraits.json" with { type: "json" };

const lookups = new Map();
function commonsImage(filename) {
  return {
    commonsFile: filename,
    url:
      "https://commons.wikimedia.org/wiki/Special:FilePath/" +
      encodeURIComponent(filename) +
      "?width=300",
  };
}
// The bundled index supplies P3 and known P18 images immediately. Resolve other
// P8 links in a single read per record, sharing results across navigation.
function lookupMissing(ids) {
  const pending = [...new Set(ids)].filter(
    (id) => /^Q[1-9]\d*$/.test(id) && !lookups.has(id),
  );
  if (!pending.length) return;
  const url = new URL("https://www.wikidata.org/w/api.php");
  url.search = new URLSearchParams({
    action: "wbgetentities",
    props: "claims",
    ids: pending.join("|"),
    format: "json",
    origin: "*",
  });
  const query = fetch(url, {
    headers: {
      "Api-User-Agent": "BrooklynJazzAtlas/1.0 (Linking Lost Jazz Shrines)",
    },
  }).then((r) => {
    if (!r.ok) throw Error("Portrait lookup unavailable");
    return r.json();
  });
  for (const id of pending) {
    lookups.set(
      id,
      query
        .then((data) => {
          const names = (data.entities?.[id]?.claims?.P18 || [])
            .filter((c) => c.rank !== "deprecated")
            .sort(
              (a, b) =>
                Number(b.rank === "preferred") - Number(a.rank === "preferred"),
            )
            .map((c) => c.mainsnak?.datavalue?.value)
            .filter((x) => typeof x === "string");
          return names.length ? commonsImage(names[0]) : null;
        })
        .catch(() => {
          lookups.delete(id);
          return null;
        }),
    );
  }
}

function attach(row, photo, qid) {
  if (!photo?.url || !row.isConnected) return;
  const image = document.createElement("img");
  image.className = "portrait";
  image.loading = "lazy";
  image.decoding = "async";
  image.alt = "";
  const credit = document.createElement("a");
  credit.className = "photo-credit";
  credit.target = "_blank";
  credit.rel = "noreferrer";
  if (photo.commonsFile) {
    credit.href =
      "https://commons.wikimedia.org/wiki/File:" +
      encodeURIComponent(photo.commonsFile);
    credit.title =
      photo.commonsFile + " — author and license on Wikimedia Commons";
    credit.textContent = "Commons photo credit";
  } else {
    credit.href = "https://base.semlab.io/wiki/Item:" + qid;
    credit.title = "Semantic Lab image record";
    credit.textContent = "Semantic Lab photo";
  }
  image.onerror = () => {
    if (photo.local && image.getAttribute("src") === photo.local) {
      image.src = photo.url;
      return;
    }
    image.remove();
    credit.remove();
    if (photo.wikidata && !photo.commonsFile) {
      lookupMissing([photo.wikidata]);
      lookups.get(photo.wikidata)?.then((next) => attach(row, next, qid));
    }
  };
  row.prepend(image);
  row.lastElementChild.append(credit);
  image.src = photo.local || photo.url;
}

export function populatePortraits(list) {
  const rows = [...list.querySelectorAll("[data-person]")];
  const pending = rows
    .map((r) => portraits[r.dataset.person])
    .filter((p) => p?.wikidata && !p.url);
  lookupMissing(pending.map((p) => p.wikidata));
  for (const row of rows) {
    const qid = row.dataset.person,
      p = portraits[qid];
    if (p?.url) attach(row, p, qid);
    else if (p?.wikidata)
      lookups.get(p.wikidata)?.then((photo) => attach(row, photo, qid));
  }
}
