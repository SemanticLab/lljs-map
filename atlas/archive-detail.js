// The local scan and IIIF master cover the same sheet at different raster sizes.
export class ArchiveDetail {
  constructor(source, localSize, redraw) {
    this.source = source;
    this.localSize = localSize;
    this.redraw = redraw;
    this.cache = new Map();
    this.failures = 0;
    this.retryAfter = 0;
  }
  tile(x, y, w, h) {
    const key = x + "," + y + "," + w + "," + h;
    if (this.cache.has(key)) return this.cache.get(key);
    if (Date.now() < this.retryAfter) return null;
    const image = new Image();
    this.cache.set(key, image);
    image.onload = () => {
      this.failures = 0;
      this.redraw();
    };
    image.onerror = () => {
      this.cache.delete(key);
      if (++this.failures >= 3) this.retryAfter = Date.now() + 60000;
    };
    image.src =
      this.source.id.replace(/\/$/, "") + "/" + key + "/full/0/default.jpg";
    if (this.cache.size > 128)
      this.cache.delete(this.cache.keys().next().value);
    return image;
  }
  draw(ctx, bounds, scale) {
    if (scale <= 1 || !this.source) return;
    const { width, height } = this.source,
      rx = this.localSize.width / width,
      ry = this.localSize.height / height;
    const step = 512,
      x0 = Math.max(0, Math.floor(bounds.minX / rx / step) * step),
      y0 = Math.max(0, Math.floor(bounds.minY / ry / step) * step);
    const xmax = Math.min(width, bounds.maxX / rx),
      ymax = Math.min(height, bounds.maxY / ry);
    for (let x = x0; x < xmax; x += step) {
      for (let y = y0; y < ymax; y += step) {
        const w = Math.min(step, width - x),
          h = Math.min(step, height - y),
          img = this.tile(x, y, w, h);
        if (img?.complete && img.naturalWidth)
          ctx.drawImage(
            img,
            x * rx,
            y * ry,
            w * rx + 0.4 / scale,
            h * ry + 0.4 / scale,
          );
      }
    }
  }
}
