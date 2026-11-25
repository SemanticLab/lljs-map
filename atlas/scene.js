import { ArchiveDetail } from "./archive-detail.js";
import { markerStamp, shapeKeys } from "./marker-renderer.js";
// Orthographic camera. All mesh vertices and the flat map share the same transform.
export const scan = { width: 6936, height: 8999 };
const clamp = (v, min, max) => Math.min(max, Math.max(min, v));
const tilt = Math.acos(1 / Math.sqrt(3)),
  bearing = -Math.PI / 5;
const tileSize = 512,
  maxLevel = 3;
const homeZoom = 2.3;
const positionKey = (point) => point.x + "," + point.y;

class Raster {
  constructor(onLoad, onError) {
    this.cache = new Map();
    this.onLoad = onLoad;
    this.onError = onError;
  }
  tile(level, x, y) {
    const key = level + "/" + x + "-" + y;
    if (!this.cache.has(key)) {
      const img = new Image();
      img.onload = this.onLoad;
      img.onerror = this.onError;
      img.src = new URL("atlas/map/" + key + ".jpg", document.baseURI);
      this.cache.set(key, img);
      // Keep decoded memory bounded while panning around on small devices.
      if (this.cache.size > 110)
        this.cache.delete(this.cache.keys().next().value);
    }
    const img = this.cache.get(key);
    return img.complete && img.naturalWidth ? img : null;
  }
  draw(ctx, bounds, scale) {
    const level = clamp(Math.ceil(maxLevel + Math.log2(scale)), 0, maxLevel);
    const factor = 2 ** (maxLevel - level),
      size = tileSize * factor;
    for (
      let x = Math.max(0, Math.floor(bounds.minX / size));
      x < Math.min(Math.ceil(scan.width / size), Math.ceil(bounds.maxX / size));
      x++
    ) {
      for (
        let y = Math.max(0, Math.floor(bounds.minY / size));
        y <
        Math.min(Math.ceil(scan.height / size), Math.ceil(bounds.maxY / size));
        y++
      ) {
        const tile = this.tile(level, x, y);
        const left = x * size,
          top = y * size;
        const width = Math.min(size, scan.width - left),
          height = Math.min(size, scan.height - top);
        if (tile)
          ctx.drawImage(
            tile,
            left,
            top,
            width + 0.45 / scale,
            height + 0.45 / scale,
          );
        else if (level) {
          const coarse = this.tile(0, x >> level, y >> level);
          if (coarse) {
            const span = tileSize / 2 ** level;
            ctx.drawImage(
              coarse,
              (x % 2 ** level) * span,
              (y % 2 ** level) * span,
              width / 8,
              height / 8,
              left,
              top,
              width + 0.45 / scale,
              height + 0.45 / scale,
            );
          }
        }
      }
    }
  }
}

export class Scene {
  constructor(canvas, home, events) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d", { alpha: false });
    this.home = home;
    this.events = events;
    this.points = [];
    this.hits = [];
    this.rings = [];
    this.communityLayer = false;
    this.highlightSites = null;
    this.mode = "iso";
    this.cx = home.x;
    this.cy = home.y;
    this.zoom = homeZoom;
    this.blend = 1;
    this.overheadZoom = null;
    this.frame = 0;
    this.selection = null;
    this.swayPoint = null;
    this.swayCanvas = canvas.parentElement?.querySelector("#swayingShrine");

    this.raster = new Raster(() => this.redraw(), events.tileError);
    this.detail = new ArchiveDetail(events.originalScan, scan, () =>
      this.redraw(),
    );
    this.viewport = new ResizeObserver(() => this.redraw());
    this.viewport.observe(canvas);
    this.bind();
  }
  redraw() {
    if (!this.frame)
      this.frame = requestAnimationFrame(() => {
        this.frame = 0;
        this.draw();
      });
  }
  camera() {
    const w = this.canvas.clientWidth,
      h = this.canvas.clientHeight;
    const scale = clamp(Math.min(w / 1400, h / 890), 0.35, 1.05) * this.zoom;
    // As the camera pulls back, it gradually rises toward an overhead survey.
    const progress = clamp(
      Math.log(this.zoom / 0.32) / Math.log(1.45 / 0.32),
      0,
      1,
    );
    const angle = this.blend * progress * progress * (3 - 2 * progress);
    const pitch = tilt * angle,
      yaw = bearing * angle;
    return {
      w,
      h,
      scale,
      pitch,
      yaw,
      p: Math.cos(pitch),
      c: Math.cos(yaw),
      s: Math.sin(yaw),
    };
  }
  project(x, y, z = 0) {
    const { w, h, scale, c, s, p, pitch } = this.cam;
    x -= this.cx;
    y -= this.cy;
    return {
      x: w / 2 + scale * (c * x - s * y),
      y: h / 2 + scale * ((s * x + c * y) * p - z * Math.sin(pitch)),
    };
  }
  ground(px, py) {
    const { w, h, scale, c, s, p } = this.cam;
    const x = (px - w / 2) / scale,
      y = (py - h / 2) / (scale * p);
    return { x: this.cx + c * x + s * y, y: this.cy - s * x + c * y };
  }
  bounds() {
    const { w, h } = this.cam,
      corners = [
        [0, 0],
        [w, 0],
        [0, h],
        [w, h],
      ].map(([x, y]) => this.ground(x, y));
    return {
      minX: Math.min(...corners.map((p) => p.x)),
      maxX: Math.max(...corners.map((p) => p.x)),
      minY: Math.min(...corners.map((p) => p.y)),
      maxY: Math.max(...corners.map((p) => p.y)),
    };
  }
  draw() {
    this.cam = this.camera();
    const { w, h, scale, c, s, p } = this.cam,
      ctx = this.ctx;
    if (!w || !h) return;
    const dpr = Math.min(devicePixelRatio || 1, Math.sqrt(16000000 / (w * h))),
      W = Math.round(w * dpr),
      H = Math.round(h * dpr);
    if (this.canvas.width !== W || this.canvas.height !== H) {
      this.canvas.width = W;
      this.canvas.height = H;
    }
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.fillStyle = "#d8ddcf";
    ctx.fillRect(0, 0, w, h);
    const origin = this.project(0, 0);
    ctx.save();
    ctx.transform(
      scale * c,
      scale * s * p,
      -scale * s,
      scale * c * p,
      origin.x,
      origin.y,
    );
    const bounds = this.bounds();
    if (
      bounds.minX < 0 ||
      bounds.maxX > scan.width ||
      bounds.minY < 0 ||
      bounds.maxY > scan.height
    ) {
      ctx.fillStyle = "#405443";
      ctx.shadowColor = "#2b382c55";
      ctx.shadowBlur = 15;
      ctx.fillRect(0, 0, scan.width, scan.height);
      ctx.shadowBlur = 0;
    }
    ctx.imageSmoothingQuality = "high";
    this.raster.draw(ctx, bounds, scale * dpr);
    this.detail.draw(ctx, bounds, scale * dpr);
    ctx.fillStyle = "rgba(246,236,208," + 0.13 / Math.max(1, scale) + ")";
    ctx.fillRect(0, 0, scan.width, scan.height);
    ctx.restore();
    this.hits = [];
    const visible = this.points
      .map((point) => ({ ...point, base: this.project(point.x, point.y) }))
      .filter(
        ({ base: b }) =>
          b.x > -105 && b.x < w + 105 && b.y > -105 && b.y < h + 105,
      )
      .sort(
        (a, b) =>
          a.base.y - b.base.y ||
          Number(a.site.qid === this.selection) -
            Number(b.site.qid === this.selection) ||
          b.site.connectedness.rank - a.site.connectedness.rank,
      );
    const dancer =
      this.swayPoint?.site.qid === this.selection
        ? visible.find(
            (p) =>
              p.site === this.swayPoint.site &&
              p.location === this.swayPoint.location,
          )
        : null;
    if (this.swayCanvas) this.swayCanvas.hidden = !dancer;
    this.rings = [];
    if (this.communityLayer) this.drawCommunities(visible);
    for (const point of visible)
      this.marker(point, point === dancer && this.swayCanvas);
    const emphasized = this.highlightSites
      ? visible.filter((p) => this.highlightSites.has(p.site))
      : visible;
    this.events.markersDrawn?.(emphasized, this.cam, this.zoom);
    if (this.zoom >= 1) this.labels(emphasized);
    this.events.orientation((Math.atan2(s, c * p) * 180) / Math.PI);
  }
  markerSize(site, detail) {
    const neighborhoodSize =
      (30 + 52 * detail ** 0.85) *
      (0.94 + (0.12 * site.connectedness.score) / 100);
    return 8 + (neighborhoodSize - 8) * Math.min(1, this.zoom);
  }
  drawCommunities(visible) {
    const ctx = this.ctx;
    const detail = clamp(Math.log(Math.max(1, this.zoom)) / Math.log(14), 0, 1);
    const stacks = new Map();
    ctx.save();
    for (const point of visible) {
      if (!point.group) continue;
      const key = positionKey(point);
      if (!stacks.has(key)) stacks.set(key, new Map());
      const groups = stacks.get(key);
      const bright =
        !this.highlightSites || this.highlightSites.has(point.site);
      if (groups.has(point.group)) {
        if (bright) groups.get(point.group).bright = true;
        continue;
      }
      const radius =
        this.markerSize(point.site, detail) * 0.62 + 5 + groups.size * 6;
      const { x, y } = point.base;
      const ring = { x, y, radius, group: point.group, bright };
      groups.set(point.group, ring);
      this.rings.push(ring);
    }
    for (const { x, y, radius, group, bright } of this.rings) {
      ctx.beginPath();
      ctx.ellipse(x, y, radius, radius * this.cam.p, 0, 0, Math.PI * 2);
      ctx.fillStyle = ctx.strokeStyle = group.color;
      ctx.globalAlpha = bright ? 0.25 : 0.06;
      ctx.fill();
      ctx.globalAlpha = bright ? 0.9 : 0.28;
      ctx.lineWidth = bright ? 2 : 1;
      ctx.stroke();
    }
    ctx.restore();
  }
  communityAt(x, y) {
    let closest,
      distance = Infinity;
    for (const ring of this.rings) {
      const r = Math.hypot(x - ring.x, (y - ring.y) / this.cam.p);
      const edge = Math.abs(ring.radius - r);
      if (r <= ring.radius + 2 && edge < distance) {
        closest = ring.group;
        distance = edge;
      }
    }
    return closest;
  }
  marker(point, swayCanvas) {
    const { base, site } = point,
      { ctx, cam } = this;
    const detail = clamp(Math.log(Math.max(1, this.zoom)) / Math.log(14), 0, 1);
    const stamp = markerStamp(shapeKeys[point.type], cam.pitch, detail);
    const overviewScale = Math.min(1, this.zoom);
    const size = this.markerSize(site, detail);
    const k = size / Math.max(stamp.width, stamp.height);
    const left = base.x - stamp.anchorX * k,
      top = base.y - stamp.anchorY * k;
    const width = stamp.width * k,
      height = stamp.height * k;
    const radius = Math.max(5, width * 0.34);
    if (this.selection === site.qid || this.hover === site.qid) {
      ctx.beginPath();
      ctx.ellipse(
        base.x,
        base.y,
        radius + 5,
        (radius + 5) * cam.p,
        0,
        0,
        Math.PI * 2,
      );
      ctx.strokeStyle = "#173b31";
      ctx.lineWidth = 2;
      ctx.stroke();
    }
    ctx.globalAlpha =
      this.highlightSites && !this.highlightSites.has(site)
        ? 0.32
        : 0.72 + 0.28 * overviewScale;
    if (swayCanvas) {
      // Animate only this stamp. The scan and labels can stay on the idle map canvas.
      if (this.swayStamp !== stamp) {
        swayCanvas.width = stamp.width;
        swayCanvas.height = stamp.height;
        swayCanvas.getContext("2d").drawImage(stamp.canvas, 0, 0);
        this.swayStamp = stamp;
      }
      Object.assign(swayCanvas.style, {
        left: left + "px",
        top: top + "px",
        width: width + "px",
        height: height + "px",
        opacity: String(ctx.globalAlpha),
        transformOrigin: stamp.anchorX * k + "px " + stamp.anchorY * k + "px",
      });
    } else {
      ctx.drawImage(stamp.canvas, left, top, width, height);
    }
    ctx.globalAlpha = 1;
    point.tip = { x: base.x, y: top };
    this.hits.push({
      point,
      left,
      right: left + width,
      top,
      bottom: top + height,
      stamp,
      swayCanvas,
      k,
      pickRadius: clamp(size / 2, 4, 11),
    });
  }
  labels(visible) {
    const ctx = this.ctx,
      { w, h } = this.cam;
    ctx.font = "600 13px Georgia, serif";
    const placed = [];
    const selected = this.selection;
    const order = [...visible].sort(
      (a, b) =>
        Number(b.site.qid === selected) - Number(a.site.qid === selected) ||
        a.site.connectedness.rank - b.site.connectedness.rank,
    );
    const stacks = new Map();
    for (const point of order) {
      const key = positionKey(point);
      if (!stacks.has(key)) stacks.set(key, new Map());
      const sites = stacks.get(key);
      if (!sites.has(point.site.qid)) sites.set(point.site.qid, point);
    }
    for (const sites of stacks.values()) {
      if (placed.length >= Math.max(2, Math.min(5, Math.floor(w / 200)))) break;
      const members = [...sites.values()];
      const item = members[0];
      const tipY = Math.min(...members.map((p) => p.tip.y));
      const tw = Math.min(
        w - 16,
        Math.max(...members.map((p) => ctx.measureText(p.site.name).width)) +
          15,
      );
      const height = 21 + (members.length - 1) * 16;
      const x = clamp(item.tip.x - tw / 2, 8, w - 8 - tw);
      const y = tipY - height - 4;
      if (item.tip.x < 8 || item.tip.x > w - 8 || y < 68 || y + height > h - 79)
        continue;
      if (
        placed.some(
          (b) =>
            x < b.x + b.w + 48 &&
            x + tw > b.x - 48 &&
            y < b.y + b.height + 50 &&
            y + height > b.y - 50,
        )
      )
        continue;
      ctx.shadowColor = "#29362538";
      ctx.shadowBlur = 4;
      ctx.shadowOffsetY = 1;
      ctx.fillStyle = item.site.qid === selected ? "#1c4035" : "#faf7e8";
      ctx.fillRect(x, y, tw, height);
      ctx.shadowBlur = 0;
      ctx.shadowOffsetY = 0;
      ctx.strokeStyle = "#53624e";
      ctx.lineWidth = 0.7;
      ctx.strokeRect(x, y, tw, height);
      ctx.beginPath();
      ctx.moveTo(item.tip.x, y + height);
      ctx.lineTo(item.tip.x, tipY - 2);
      ctx.stroke();
      ctx.fillStyle = item.site.qid === selected ? "#fcfaf0" : "#22382c";
      members.forEach((p, i) =>
        ctx.fillText(p.site.name, x + 7, y + 14.5 + i * 16, tw - 14),
      );
      placed.push({ x, y, w: tw, height });
      this.hits.push({
        point: item,
        left: x,
        right: x + tw,
        top: y,
        bottom: y + height,
      });
    }
  }
  moveTo(x, y) {
    this.cx = clamp(x, 0, scan.width);
    this.cy = clamp(y, 0, scan.height);
    this.redraw();
  }
  fitSites(sites) {
    const points = this.points.filter((p) => sites.has(p.site));
    if (!points.length) return;
    this.stopAnimation();
    const xs = points.map((p) => p.x),
      ys = points.map((p) => p.y);
    const x = (Math.min(...xs) + Math.max(...xs)) / 2,
      y = (Math.min(...ys) + Math.max(...ys)) / 2;
    const radius = Math.max(
      1,
      ...points.map((p) => Math.hypot(p.x - x, p.y - y)),
    );
    const cam = this.camera();
    this.setZoom(
      clamp(
        (Math.min(cam.w, cam.h) * 0.38) / ((radius * cam.scale) / this.zoom),
        0.08,
        homeZoom,
      ),
    );
    this.moveTo(x, y);
  }
  focus(point) {
    this.stopAnimation();
    this.swayPoint = point.type === "shrine" ? point : null;
    this.setZoom(Math.max(this.zoom, homeZoom * 1.45));
    this.moveTo(point.x, point.y);
  }
  setZoom(zoom) {
    // A manually chosen overhead view also tilts back up over one zoom doubling.
    if (this.blend < 1 && this.overheadZoom === null)
      this.overheadZoom = this.zoom / 2 ** this.blend;
    this.zoom = zoom;
    if (this.overheadZoom !== null) {
      this.overheadZoom = Math.min(this.overheadZoom, zoom);
      this.blend = clamp(Math.log2(zoom / this.overheadZoom), 0, 1);
      if (this.blend === 1) this.overheadZoom = null;
    }
    this.cam = this.camera();
    this.mode = this.cam.pitch > 0 ? "iso" : "top";
    this.events.mode(this.mode);
  }
  zoomBy(factor, x = this.cam.w / 2, y = this.cam.h / 2) {
    this.stopAnimation();
    const before = this.ground(x, y);
    this.setZoom(clamp(this.zoom * factor, 0.08, 14));
    const after = this.ground(x, y);
    this.moveTo(this.cx + before.x - after.x, this.cy + before.y - after.y);
    this.events.clear();
  }
  stopAnimation() {
    cancelAnimationFrame(this.animation);
    this.animation = 0;
  }
  view(mode, reset = false) {
    this.stopAnimation();
    this.overheadZoom = null;
    this.events.clear();
    const from = this.blend,
      to = mode === "iso" ? 1 : 0,
      startZoom = this.zoom;
    const endZoom = reset
      ? homeZoom
      : mode === this.mode
        ? this.zoom
        : clamp(this.zoom * (to ? 1.5 : 1 / 1.5), to ? 1.45 : 0.08, 14);
    const start = performance.now(),
      duration = matchMedia("(prefers-reduced-motion: reduce)").matches
        ? 0
        : 330;
    this.mode = mode;
    const tick = (now) => {
      const t = duration ? clamp((now - start) / duration, 0, 1) : 1,
        ease = t * t * (3 - 2 * t);
      this.blend = from + (to - from) * ease;
      this.zoom = startZoom + (endZoom - startZoom) * ease;
      this.redraw();
      if (t < 1) this.animation = requestAnimationFrame(tick);
    };
    if (reset) this.moveTo(this.home.x, this.home.y);
    tick(start);
    this.events.mode(mode);
  }
  hitsAt(screenX, screenY) {
    const hit = this.hits
      .filter((b) => {
        let x = screenX,
          y = screenY;
        if (b.swayCanvas) {
          const transform = getComputedStyle(b.swayCanvas).transform;
          if (transform && transform !== "none") {
            const { a: cos, b: sin } = new DOMMatrixReadOnly(transform);
            const { base } = b.point,
              dx = x - base.x,
              dy = y - base.y;
            x = base.x + cos * dx + sin * dy;
            y = base.y - sin * dx + cos * dy;
          }
        }
        if (
          b.pickRadius &&
          Math.hypot(x - (b.left + b.right) / 2, y - (b.top + b.bottom) / 2) <=
            b.pickRadius
        )
          return true;
        if (x < b.left || x >= b.right || y < b.top || y >= b.bottom)
          return false;
        if (!b.stamp) return true;
        const ix = Math.floor((x - b.left) / b.k),
          iy = Math.floor((y - b.top) / b.k);
        return Boolean(b.stamp.pixels[(iy * b.stamp.width + ix) * 4 + 3]);
      })
      .reverse()
      .map((b) => b.point);
    if (hit.length) {
      const positions = new Set(hit.map(positionKey));
      for (const p of this.points)
        if (
          positions.has(positionKey(p)) &&
          !hit.some((q) => q.site === p.site)
        )
          hit.push(p);
    }
    return hit;
  }
  bind() {
    const el = this.canvas,
      pointers = new Map();
    let moved = false,
      initial,
      prevDistance;
    const local = (e) => {
      const r = el.getBoundingClientRect();
      return { x: e.clientX - r.left, y: e.clientY - r.top };
    };
    el.addEventListener("pointerdown", (e) => {
      if (e.button !== 0) return;
      this.stopAnimation();
      this.events.clear();
      el.setPointerCapture(e.pointerId);
      const v = local(e);
      pointers.set(e.pointerId, v);
      el.classList.add("dragging");
      if (pointers.size === 1) {
        initial = v;
        moved = false;
        prevDistance = null;
      } else {
        moved = true;
        const [a, b] = [...pointers.values()];
        prevDistance = Math.hypot(a.x - b.x, a.y - b.y);
      }
    });
    el.addEventListener("pointermove", (e) => {
      const pos = local(e),
        prev = pointers.get(e.pointerId);
      if (!prev) {
        if (e.pointerType === "mouse") {
          const hits = this.hitsAt(pos.x, pos.y);
          const item = hits[0];
          const sites = new Map();
          for (const hit of hits)
            if (hit.x === item.x && hit.y === item.y)
              sites.set(hit.site.qid, hit.site);
          const group = !item && this.communityAt(pos.x, pos.y);
          this.events.hover(item, pos, [...sites.values()], group);
          el.style.cursor = item || group ? "pointer" : "";
        }
        return;
      }
      pointers.set(e.pointerId, pos);
      if (pointers.size > 1) {
        const [a, b] = [...pointers.values()],
          dist = Math.hypot(a.x - b.x, a.y - b.y);
        if (prevDistance && dist)
          this.zoomBy(dist / prevDistance, (a.x + b.x) / 2, (a.y + b.y) / 2);
        prevDistance = dist;
        return;
      }
      if (Math.hypot(pos.x - initial.x, pos.y - initial.y) > 3) moved = true;
      if (moved) {
        const a = this.ground(prev.x, prev.y),
          b = this.ground(pos.x, pos.y);
        this.moveTo(this.cx + a.x - b.x, this.cy + a.y - b.y);
      }
    });
    const end = (e, click) => {
      if (!pointers.has(e.pointerId)) return;
      pointers.delete(e.pointerId);
      if (pointers.size) return;
      el.classList.remove("dragging");
      if (click && !moved) {
        const p = local(e);
        const hits = this.hitsAt(p.x, p.y);
        const group = !hits.length && this.communityAt(p.x, p.y);
        if (group) this.events.community(group);
        else this.events.select(hits, p);
      }
    };
    el.addEventListener("pointerup", (e) => end(e, true));
    el.addEventListener("pointercancel", (e) => end(e, false));
    el.addEventListener("pointerleave", () => this.events.hover(null));
    el.addEventListener(
      "wheel",
      (e) => {
        e.preventDefault();
        const p = local(e);
        this.zoomBy(
          Math.exp(
            -clamp(e.deltaY * (e.deltaMode === 1 ? 16 : 1), -200, 200) * 0.0027,
          ),
          p.x,
          p.y,
        );
      },
      { passive: false },
    );
    el.addEventListener("keydown", (e) => {
      if (["+", "=", "-"].includes(e.key)) {
        e.preventDefault();
        this.zoomBy(e.key === "-" ? 0.8 : 1.25);
        return;
      }
      const direction = {
        ArrowLeft: [-1, 0],
        ArrowRight: [1, 0],
        ArrowUp: [0, -1],
        ArrowDown: [0, 1],
      }[e.key];
      if (direction) {
        e.preventDefault();
        this.events.clear();
        const pos = this.ground(
          this.cam.w / 2 + direction[0] * 70,
          this.cam.h / 2 + direction[1] * 70,
        );
        this.moveTo(pos.x, pos.y);
      }
    });
  }
}
