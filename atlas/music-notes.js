export const scoreBands = [
  { minimum: 0, label: "Under 35", notes: "♪" },
  { minimum: 35, label: "35 to <65", notes: "♪♪" },
  { minimum: 65, label: "65–100", notes: "♪♪♪" },
];

export function scoreNotes(score) {
  return scoreBands.reduce(
    (glyphs, band) => (score >= band.minimum ? band.notes : glyphs),
    "♪",
  );
}

export class MusicNotes {
  constructor(layer) {
    this.layer = layer;
    this.points = [];
    this.active = new Map();
    this.first = true;
    this.motion = matchMedia("(prefers-reduced-motion: reduce)");
    this.motion.addEventListener?.("change", () => this.schedule());
    document.addEventListener("visibilitychange", () => this.schedule());
    layer.addEventListener("animationend", ({ target }) => {
      if (this.active.has(target)) this.remove(target);
    });
  }

  remove(note) {
    note.remove();
    this.active.delete(note);
  }

  update(points, { w, h }, zoom) {
    this.overview = zoom < 1;
    this.limit = this.overview ? 1 : 2;
    this.points = points.filter(
      ({ tip }) => tip.x > 6 && tip.x < w - 12 && tip.y > 24 && tip.y < h,
    );
    for (const [note, source] of this.active) {
      const point = this.points.find(
        (p) => p.site === source.site && p.location === source.location,
      );
      if (point && this.active.size <= this.limit) this.position(note, point);
      else this.remove(note);
    }
    this.schedule();
  }

  position(note, point) {
    note.style.left = point.tip.x + "px";
    note.style.top = point.tip.y + "px";
    note.classList.toggle("distant", this.overview);
  }

  play(point) {
    if (!point || this.motion.matches || document.hidden) return;
    const phrase = document.createElement("span");
    phrase.textContent = scoreNotes(point.site.connectedness.score);
    this.position(phrase, point);
    this.active.set(phrase, point);
    this.layer.append(phrase);
  }

  inspect(point) {
    if (
      point?.site === this.inspected?.site &&
      point?.location === this.inspected?.location
    )
      return;
    this.inspected = point;
    if (!point) return;
    for (const phrase of this.active.keys()) this.remove(phrase);
    this.play(point);
  }

  schedule() {
    if (document.hidden || this.motion.matches || !this.points.length) {
      clearTimeout(this.timer);
      this.timer = null;
      for (const note of this.active.keys()) this.remove(note);
      this.first = true;
      return;
    }
    if (this.timer) return;
    const delay = this.first
      ? 650
      : (1150 + Math.random() * 900) * (this.overview ? 1.5 : 1);
    this.timer = setTimeout(() => {
      this.timer = null;
      if (!document.hidden && !this.motion.matches) {
        this.emit();
        this.first = false;
      }
      this.schedule();
    }, delay);
  }

  emit() {
    if (this.active.size >= this.limit) return;
    const singing = new Set(Array.from(this.active.values(), (p) => p.site));
    if (singing.has(this.inspected?.site)) return;
    const weights = this.points.map(({ site }) =>
      singing.has(site)
        ? 0
        : 0.015 + 0.75 * (site.connectedness.score / 100) ** 2.5,
    );
    const total = weights.reduce((sum, weight) => sum + weight, 0);
    // Give the first visible site a cue, then allow silence in sparse views.
    let draw = Math.random() * (this.first ? total : Math.max(1, total));
    for (let i = 0; i < weights.length; i++) {
      draw -= weights[i];
      if (draw >= 0) continue;
      this.play(this.points[i]);
      return;
    }
  }
}
