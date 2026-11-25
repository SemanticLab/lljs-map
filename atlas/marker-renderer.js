// Rasterize the actual flat-shaded model at the map camera's angle. One cached
// stamp serves every instance of a design while panning at the same angle.

const maxPitch = Math.acos(1 / Math.sqrt(3)),
  bearing = -Math.PI / 5;
const srgb = (c) =>
  255 * (c <= 0.0031308 ? 12.92 * c : 1.055 * c ** (1 / 2.4) - 0.055);

// A single ring defines the footprint. A second ring or an apex closes the solid.
function solid(sides, height, pointed, quiet, vivid) {
  const vertices = [],
    faces = [];
  for (let i = 0; i < sides; i++) {
    const angle = (i * 2 * Math.PI) / sides + Math.PI / 4;
    vertices.push(Math.cos(angle), 0, Math.sin(angle));
  }
  if (pointed) vertices.push(0, height, 0);
  else
    for (let i = 0; i < sides; i++)
      vertices.push(vertices[i * 3], height, vertices[i * 3 + 2]);
  for (let i = 0; i < sides; i++) {
    const next = (i + 1) % sides;
    if (pointed) faces.push(i, next, sides, 0);
    else faces.push(i, next, sides + i, 0, next, sides + next, sides + i, 0);
  }
  for (let i = 1; i < sides - 1; i++) {
    faces.push(0, i, i + 1, 0);
    if (!pointed) faces.push(sides, sides + i + 1, sides + i, 0);
  }
  return { vertices, faces, quiet, vivid };
}

export const shapeKeys = { shrine: "cylinder", org: "cube", inst: "pyramid" };
const shapes = {
  cylinder: solid(24, 1.1, false, [204, 116, 100], [207, 102, 87]),
  cube: solid(4, Math.SQRT2, false, [65, 93, 119], [61, 103, 143]),
  pyramid: solid(3, 1.55, true, [99, 84, 119], [116, 90, 145]),
};

export function rasterizeMarker(key, pitch, yaw, resolution = 164, tone = 1) {
  const mesh = shapes[key];
  const { vertices, faces } = mesh;
  const color = mesh.quiet.map((value, i) => {
    const ch = (value + (mesh.vivid[i] - value) * tone) / 255;
    return ((ch + 0.055) / 1.055) ** 2.4;
  });
  const modelAngle = yaw + Math.PI / 3,
    c = Math.cos(modelAngle),
    s = Math.sin(modelAngle);
  const p = Math.cos(pitch),
    q = Math.sin(pitch),
    projected = new Float64Array(vertices.length);
  let left = Infinity,
    right = -Infinity,
    top = Infinity,
    bottom = -Infinity;
  for (let i = 0; i < vertices.length; i += 3) {
    const x = vertices[i],
      y = vertices[i + 1],
      z = vertices[i + 2],
      forward = s * x + c * z;
    const u = c * x - s * z,
      v = p * forward - q * y;
    projected[i] = u;
    projected[i + 1] = v;
    projected[i + 2] = q * forward + p * y;
    left = Math.min(left, u);
    right = Math.max(right, u);
    top = Math.min(top, v);
    bottom = Math.max(bottom, v);
  }
  const scale = (resolution - 2) / Math.max(right - left, bottom - top);
  const width = Math.ceil((right - left) * scale) + 2,
    height = Math.ceil((bottom - top) * scale) + 2;
  for (let i = 0; i < projected.length; i += 3) {
    projected[i] = (projected[i] - left) * scale + 1;
    projected[i + 1] = (projected[i + 1] - top) * scale + 1;
  }
  const pixels = new Uint8ClampedArray(width * height * 4),
    depths = new Float32Array(width * height).fill(-Infinity);
  for (let face = 0; face < faces.length; face += 4) {
    const a = faces[face] * 3,
      b = faces[face + 1] * 3,
      d = faces[face + 2] * 3;
    const x = projected[a],
      y = projected[a + 1],
      abx = projected[b] - x,
      aby = projected[b + 1] - y,
      acx = projected[d] - x,
      acy = projected[d + 1] - y,
      area = abx * acy - aby * acx;
    if (Math.abs(area) < 0.00001) continue;
    const nx1 = vertices[b] - vertices[a],
      ny1 = vertices[b + 1] - vertices[a + 1],
      nz1 = vertices[b + 2] - vertices[a + 2],
      nx2 = vertices[d] - vertices[a],
      ny2 = vertices[d + 1] - vertices[a + 1],
      nz2 = vertices[d + 2] - vertices[a + 2];
    const nx = ny1 * nz2 - nz1 * ny2,
      ny = nz1 * nx2 - nx1 * nz2,
      nz = nx1 * ny2 - ny1 * nx2;
    // Front and back faces share the same matte paint.
    const normalScale = (area < 0 ? 1 : -1) / Math.hypot(nx, ny, nz);
    const light =
      0.57 +
      0.48 * Math.max(0, (-0.4 * nx + 0.81 * ny + 0.42 * nz) * normalScale);
    const [r, g, blue] = color.map((ch) => srgb(ch * light));
    const maxX = Math.ceil(Math.max(x, x + abx, x + acx)),
      maxY = Math.ceil(Math.max(y, y + aby, y + acy));
    for (let iy = Math.floor(Math.min(y, y + aby, y + acy)); iy < maxY; iy++) {
      for (
        let ix = Math.floor(Math.min(x, x + abx, x + acx));
        ix < maxX;
        ix++
      ) {
        const dx = ix + 0.5 - x,
          dy = iy + 0.5 - y,
          u = (dx * acy - dy * acx) / area,
          v = (abx * dy - aby * dx) / area;
        if (u < 0 || v < 0 || u + v > 1) continue;
        const depth =
          projected[a + 2] +
          u * (projected[b + 2] - projected[a + 2]) +
          v * (projected[d + 2] - projected[a + 2]);
        const j = iy * width + ix;
        if (depth < depths[j]) continue;
        depths[j] = depth;
        pixels[4 * j] = r;
        pixels[4 * j + 1] = g;
        pixels[4 * j + 2] = blue;
        pixels[4 * j + 3] = 255;
      }
    }
  }
  // Keyline only the outer silhouette so printed street lines cannot break it up.
  for (let y = 1; y < height - 1; y++) {
    for (let x = 1; x < width - 1; x++) {
      const j = y * width + x;
      if (!Number.isFinite(depths[j])) continue;
      if (
        x < 2 ||
        x >= width - 2 ||
        y < 2 ||
        y >= height - 2 ||
        depths[j - 2] === -Infinity ||
        depths[j + 2] === -Infinity ||
        depths[j - 2 * width] === -Infinity ||
        depths[j + 2 * width] === -Infinity
      ) {
        pixels[4 * j] = 255;
        pixels[4 * j + 1] = 250;
        pixels[4 * j + 2] = 235;
      }
    }
  }
  return {
    width,
    height,
    pixels,
    anchorX: 1 - left * scale,
    anchorY: 1 - top * scale,
  };
}

const stamps = new Map();
export function markerStamp(key, pitch, tone = 1) {
  const step = Math.round((pitch / maxPitch) * 36),
    toneStep = Math.round(tone * 12),
    cacheKey = key + "/" + step + "/" + toneStep;
  if (!stamps.has(cacheKey)) {
    const result = rasterizeMarker(
      key,
      (maxPitch * step) / 36,
      (bearing * step) / 36,
      112,
      toneStep / 12,
    );
    const canvas = document.createElement("canvas");
    canvas.width = result.width;
    canvas.height = result.height;
    const ctx = canvas.getContext("2d"),
      data = ctx.createImageData(result.width, result.height);
    data.data.set(result.pixels);
    ctx.putImageData(data, 0, 0);
    stamps.set(cacheKey, { ...result, canvas });
    if (stamps.size > 32) stamps.delete(stamps.keys().next().value);
  }
  return stamps.get(cacheKey);
}

const thumbnails = new Map();
export function markerIconUrl(key) {
  if (!thumbnails.has(key))
    thumbnails.set(
      key,
      markerStamp(key, maxPitch).canvas.toDataURL("image/png"),
    );
  return thumbnails.get(key);
}
