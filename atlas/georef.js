// Fit the annotation's order-one polynomial from resource pixels to WGS84.
// Invert the fitted transform so geographic points land on the unwarped scan.
export function georeference(annotation, imageSize) {
  const source = annotation.target.source;
  const points = annotation.body.features.map((f) => [
    ...f.properties.resourceCoords,
    ...f.geometry.coordinates,
  ]);
  const mean = [0, 1, 2, 3].map(
    (i) => points.reduce((sum, p) => sum + p[i], 0) / points.length,
  );
  let xx = 0,
    xy = 0,
    yy = 0,
    xLon = 0,
    yLon = 0,
    xLat = 0,
    yLat = 0;
  for (const point of points) {
    const [x, y, lon, lat] = point.map((v, i) => v - mean[i]);
    xx += x * x;
    xy += x * y;
    yy += y * y;
    xLon += x * lon;
    yLon += y * lon;
    xLat += x * lat;
    yLat += y * lat;
  }
  const det = xx * yy - xy * xy;
  const a = (yy * xLon - xy * yLon) / det,
    b = (xx * yLon - xy * xLon) / det;
  const c = (yy * xLat - xy * yLat) / det,
    d = (xx * yLat - xy * xLat) / det;
  const inverse = a * d - b * c;
  if (!Number.isFinite(inverse) || Math.abs(inverse) < 1e-18)
    throw Error("Invalid map control points");
  return (longitude, latitude) => {
    const lon = longitude - mean[2],
      lat = latitude - mean[3];
    return {
      x:
        ((mean[0] + (lon * d - lat * b) / inverse) * imageSize.width) /
        source.width,
      y:
        ((mean[1] + (lat * a - lon * c) / inverse) * imageSize.height) /
        source.height,
    };
  };
}
