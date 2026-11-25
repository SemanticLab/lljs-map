// Seven small carvings. Model units are shared with the cut-corner plinths.
import * as T from "three";

const colors = {
  ink: "#303431",
  green: "#47736a",
  water: "#91aba0",
  clay: "#b26149",
  brick: "#7b4639",
  straw: "#d4b672",
  paper: "#e0d8c0",
  stone: "#b7ae94",
};
const paint = Object.fromEntries(
  Object.entries(colors).map(([name, color]) => {
    const m = new T.MeshStandardMaterial({
      name,
      color,
      roughness: 1,
      metalness: 0,
      flatShading: true,
      side: T.DoubleSide,
    });
    return [name, m];
  }),
);

function add(parent, geometry, color, x = 0, y = 0, z = 0) {
  const faces = geometry.index ? geometry.toNonIndexed() : geometry;
  if (faces !== geometry) geometry.dispose();
  faces.computeVertexNormals();
  const mesh = new T.Mesh(faces, paint[color]);
  mesh.position.set(x, y, z);
  parent.add(mesh);
  return mesh;
}
function box(p, x, y, z, w, h, d, color) {
  return add(p, new T.BoxGeometry(w, h, d), color, x, y, z);
}
function panel(p, xy, depth, color, z = 0, holes = []) {
  const path = (points, shape) => {
    points.forEach(([x, y], i) =>
      i ? shape.lineTo(x, y) : shape.moveTo(x, y),
    );
    shape.closePath();
    return shape;
  };
  const face = path(xy, new T.Shape());
  face.holes = holes.map((h) => path(h, new T.Path()));
  return add(
    p,
    new T.ExtrudeGeometry(face, { depth, bevelEnabled: false, steps: 1 }),
    color,
    0,
    0,
    z,
  );
}
function tier(p, xz, h, y, color) {
  const piece = panel(
    p,
    xz.map(([x, z]) => [x, -z]),
    h,
    color,
  );
  piece.rotation.x = -Math.PI / 2;
  piece.position.y = y;
  return piece;
}
function octagon(w, d, clip) {
  const a = w / 2,
    b = d / 2;
  return [
    [-a + clip, -b],
    [a - clip, -b],
    [a, -b + clip],
    [a, b - clip],
    [a - clip, b],
    [-a + clip, b],
    [-a, b - clip],
    [-a, -b + clip],
  ];
}
function base(p, w, d, band = "clay") {
  tier(p, octagon(w, d, 0.18), 0.09, 0, "ink");
  tier(p, octagon(w - 0.025, d - 0.025, 0.18), 0.14, 0.09, band);
  tier(p, octagon(w - 0.13, d - 0.13, 0.16), 0.095, 0.23, "stone");
  tier(p, octagon(w - 0.13, d - 0.13, 0.16), 0.025, 0.325, "paper");
}
function rod(p, a, b, r, color, r2 = r, sides = 6) {
  const start = new T.Vector3(...a),
    end = new T.Vector3(...b),
    axis = end.clone().sub(start);
  const item = add(
    p,
    new T.CylinderGeometry(r2, r, axis.length(), sides),
    color,
  );
  item.position.copy(start.add(end).multiplyScalar(0.5));
  item.quaternion.setFromUnitVectors(new T.Vector3(0, 1, 0), axis.normalize());
  return item;
}
function slat(p, a, b, width, depth, color) {
  const dx = b[0] - a[0],
    dy = b[1] - a[1];
  const item = box(
    p,
    (a[0] + b[0]) / 2,
    (a[1] + b[1]) / 2,
    a[2],
    width,
    Math.hypot(dx, dy),
    depth,
    color,
  );
  item.rotation.z = -Math.atan2(dx, dy);
  return item;
}
function lathe(p, profile, sides, color) {
  return add(
    p,
    new T.LatheGeometry(
      profile.map(([r, y]) => new T.Vector2(r, y)),
      sides,
    ),
    color,
  );
}
function disc(p, x, y, z, r, depth, color, sides = 12) {
  return rod(
    p,
    [x, y, z - depth / 2],
    [x, y, z + depth / 2],
    r,
    color,
    r,
    sides,
  );
}

// Stencil lettering is cut from short rectangular strokes.
const glyphs = {
  L: [
    [
      [0, 1],
      [0, 0],
      [0.62, 0],
    ],
  ],
  I: [
    [
      [0.25, 1],
      [0.25, 0],
    ],
  ],
  V: [
    [
      [0, 1],
      [0.31, 0],
      [0.62, 1],
    ],
  ],
  E: [
    [
      [0.62, 1],
      [0, 1],
      [0, 0],
      [0.62, 0],
    ],
    [
      [0, 0.51],
      [0.48, 0.51],
    ],
  ],
  M: [
    [
      [0, 0],
      [0, 1],
      [0.34, 0.48],
      [0.68, 1],
      [0.68, 0],
    ],
  ],
  U: [
    [
      [0, 1],
      [0, 0.19],
      [0.13, 0],
      [0.49, 0],
      [0.62, 0.19],
      [0.62, 1],
    ],
  ],
  S: [
    [
      [0.6, 0.94],
      [0.48, 1],
      [0.12, 1],
      [0, 0.85],
      [0, 0.63],
      [0.6, 0.38],
      [0.6, 0.13],
      [0.48, 0],
      [0.13, 0],
      [0, 0.09],
    ],
  ],
  C: [
    [
      [0.61, 0.91],
      [0.48, 1],
      [0.13, 1],
      [0, 0.79],
      [0, 0.19],
      [0.13, 0],
      [0.48, 0],
      [0.61, 0.09],
    ],
  ],
};
function lettering(p, text, height, y, z) {
  const left = (-((text.length - 1) * 0.86 + 0.63) * height) / 2;
  for (const [i, c] of [...text].entries())
    for (const path of glyphs[c] ?? []) {
      const pts = path.map(([x, v]) => [
        left + (x + i * 0.86) * height,
        y + (v - 0.5) * height,
        z,
      ]);
      for (let j = 1; j < pts.length; j++)
        slat(p, pts[j - 1], pts[j], height * 0.14, 0.019, "paper");
    }
}
function marquee(p) {
  // A wide face and short returns keep the words legible in the three-quarter view.
  tier(p, octagon(0.66, 0.4, 0.08), 0.4, 0, "green");
  const outline = [
    [-1.13, -0.31],
    [0.96, -0.34],
    [1.17, 0.13],
    [0.91, 0.43],
    [-0.9, 0.45],
    [-1.16, 0.2],
  ];
  tier(p, outline, 0.81, 0.31, "brick");
  tier(p, outline, 0.075, 0.3, "ink");
  tier(p, outline, 0.09, 1.11, "straw");
  const face = new T.Group();
  face.position.set(0, 0.735, 0.448);
  face.rotation.y = 0.011;
  p.add(face);
  box(face, 0, 0, 0.01, 1.77, 0.67, 0.04, "clay");
  lettering(face, "LIVE", 0.27, 0.15, 0.041);
  lettering(face, "MUSIC", 0.245, -0.17, 0.044);
  for (const side of [-1, 1]) {
    for (let i = 0; i < 2; i++)
      box(
        face,
        side * (0.67 + i * 0.105),
        0,
        0.042,
        0.039,
        0.39 - i * 0.11,
        0.021,
        "straw",
      );
  }
  for (let i = 0; i < 5; i++)
    box(
      p,
      (i - 2) * 0.38,
      0.26,
      0.375,
      0.095,
      0.095,
      0.095,
      "paper",
    ).rotation.z = Math.PI / 4;
  for (const [i, w] of [1.12, 0.76, 0.4].entries())
    box(
      p,
      0,
      1.24 + i * 0.12,
      -0.03,
      w,
      0.13,
      0.31,
      i === 1 ? "clay" : "green",
    );
}
function record(p) {
  panel(
    p,
    [
      [-0.42, 0],
      [0.42, 0],
      [0.25, 0.52],
      [-0.25, 0.52],
    ],
    0.26,
    "green",
    -0.13,
  );
  const g = new T.Group();
  p.add(g);
  g.position.set(0, 1.01, 0);
  g.rotation.x = -0.23;
  g.rotation.z = -0.135;
  const ring = (r, n) =>
    Array.from({ length: n }, (_, i) => [
      Math.sin((i * 2 * Math.PI) / n) * r,
      Math.cos((i * 2 * Math.PI) / n) * r,
    ]);
  panel(g, ring(0.92, 16), 0.135, "ink", -0.065, [ring(0.047, 8)]);
  for (const [r1, r2, c] of [
    [0.76, 0.735, "water"],
    [0.58, 0.56, "green"],
    [0.34, 0.047, "clay"],
    [0.11, 0.047, "straw"],
  ]) {
    for (const side of [-1, 1])
      panel(
        g,
        ring(r1, 16),
        0.009,
        c,
        side < 0 ? -0.079 : 0.073 + (r1 < 0.12 ? 0.009 : 0),
        [ring(r2, r2 > 0.2 ? 16 : 8)],
      );
  }
}
function piano(p) {
  const plan = [
    [-0.8, 0.65],
    [0.84, 0.65],
    [0.84, 0.02],
    [0.73, -0.22],
    [0.38, -0.3],
    [0.16, -0.55],
    [-0.01, -0.94],
    [-0.27, -1.18],
    [-0.58, -1.18],
    [-0.8, -0.98],
  ];
  for (const [x, z] of [
    [-0.64, 0.4],
    [0.65, 0.4],
    [-0.52, -0.83],
  ])
    rod(p, [x, 0, z], [x, 0.59, z], 0.087, "ink", 0.12, 4);
  tier(p, plan, 0.27, 0.53, "brick");
  tier(p, plan, 0.052, 0.8, "straw");
  const cropped = plan.map(([x, z]) => [x, Math.min(z, 0.2)]);
  tier(
    p,
    cropped.map(([x, z]) => [x * 0.91, z * 0.91]),
    0.028,
    0.854,
    "green",
  );
  for (let i = 0; i < 5; i++) {
    const x = -0.64 + i * 0.245;
    rod(
      p,
      [x, 0.9, 0.12],
      [x - 0.012, 0.9, -0.85 + i * 0.179],
      0.018,
      "straw",
      0.018,
      4,
    );
  }
  for (let i = 0; i < 8; i++)
    box(p, -0.658 + i * 0.188, 0.862, 0.467, 0.174, 0.073, 0.31, "paper");
  for (const i of [0, 1, 3, 4, 5])
    box(p, -0.565 + i * 0.188, 0.919, 0.39, 0.071, 0.055, 0.18, "ink");
  const lid = new T.Group();
  lid.position.set(-0.79, 0.9, 0);
  lid.rotation.z = 0.63;
  p.add(lid);
  const cover = cropped.map(([x, z]) => [x + 0.79, z]);
  tier(lid, cover, 0.055, 0, "ink");
  tier(lid, cover, 0.027, 0.055, "green");
  rod(p, [0.43, 0.9, 0.02], [0.42, 1.73, 0.02], 0.035, "brick", 0.035, 4);
}
function trumpet(p) {
  // One angular counterform replaces the small return pipes on a full-size trumpet.
  const outer = [
    [-0.89, 0.32],
    [-0.73, 0.16],
    [0.48, 0.16],
    [0.69, 0.34],
    [0.69, 0.78],
    [-0.72, 0.78],
    [-0.89, 0.62],
  ];
  const hole = [
    [-0.64, 0.39],
    [0.38, 0.39],
    [0.45, 0.46],
    [0.45, 0.57],
    [-0.63, 0.57],
    [-0.69, 0.52],
    [-0.69, 0.44],
  ];
  panel(p, outer, 0.23, "straw", -0.12, [hole]);
  slat(p, [-0.55, 0, 0], [-0.48, 0.22, 0], 0.11, 0.18, "green");
  slat(p, [0.38, 0, 0], [0.4, 0.22, 0], 0.11, 0.18, "green");
  rod(p, [-1.31, 0.79, 0], [0.49, 0.79, 0], 0.105, "straw", 0.11, 6);
  rod(p, [-1.48, 0.79, 0], [-1.3, 0.79, 0], 0.155, "brick", 0.077, 6);
  const bell = new T.Group();
  p.add(bell);
  bell.position.set(0.42, 0.79, 0);
  bell.rotation.z = -1.44;
  lathe(
    bell,
    [
      [0.1, 0],
      [0.13, 0.23],
      [0.39, 0.7],
      [0.46, 0.79],
      [0.46, 0.84],
      [0.37, 0.84],
    ],
    8,
    "straw",
  );
  lathe(
    bell,
    [
      [0.37, 0.84],
      [0.11, 0.32],
      [0.043, 0.16],
    ],
    8,
    "brick",
  );
  for (const x of [-0.55, -0.23, 0.09]) {
    box(p, x, 0.78, 0.14, 0.16, 0.56, 0.18, "clay");
    box(p, x, 1.08, 0.14, 0.085, 0.15, 0.11, "ink");
    box(p, x, 1.16, 0.14, 0.2, 0.075, 0.16, "paper");
  }
}
function sax(p) {
  const outline = [
    [-0.58, 1.99],
    [-0.38, 2.18],
    [-0.14, 2.16],
    [0.005, 1.98],
    [-0.026, 1.62],
    [-0.27, 0.64],
    [-0.25, 0.44],
    [-0.14, 0.33],
    [0.02, 0.35],
    [0.135, 0.49],
    [0.22, 0.93],
    [0.45, 0.86],
    [0.37, 0.37],
    [0.19, 0.11],
    [-0.03, 0],
    [-0.33, 0.035],
    [-0.52, 0.26],
    [-0.55, 0.56],
    [-0.26, 1.69],
    [-0.22, 1.96],
    [-0.31, 2.02],
    [-0.46, 1.95],
  ];
  panel(p, outline, 0.28, "straw", -0.14);
  const body = [
    [-0.46, 0.34],
    [-0.43, 0.58],
    [-0.17, 1.66],
    [-0.12, 1.86],
    [-0.11, 1.6],
    [-0.36, 0.54],
    [-0.34, 0.24],
  ];
  panel(p, body, 0.012, "clay", 0.141);
  const bell = new T.Group();
  p.add(bell);
  bell.position.set(0.275, 0.65, 0.01);
  bell.rotation.z = -0.4;
  bell.rotation.x = 0.35;
  lathe(
    bell,
    [
      [0.104, 0],
      [0.16, 0.28],
      [0.395, 0.68],
      [0.425, 0.72],
      [0.425, 0.77],
      [0.34, 0.77],
    ],
    8,
    "clay",
  );
  lathe(
    bell,
    [
      [0.34, 0.77],
      [0.075, 0.2],
    ],
    8,
    "brick",
  );
  lathe(
    bell,
    [
      [0.421, 0.719],
      [0.432, 0.73],
      [0.432, 0.774],
      [0.34, 0.774],
    ],
    8,
    "straw",
  );
  rod(p, [-0.44, 2.01, 0], [-0.72, 1.88, 0.01], 0.085, "ink", 0.047, 5);
  for (let i = 0; i < 3; i++)
    disc(
      p,
      -0.13 - i * 0.078,
      1.58 - i * 0.29,
      0.165,
      0.077,
      0.057,
      "paper",
      6,
    );
}
function bass(p) {
  // Two angular outlines and a raised center ridge form a carved belly.
  const side = [
    [0.13, 0.105],
    [0.33, 0.16],
    [0.47, 0.33],
    [0.49, 0.53],
    [0.41, 0.71],
    [0.26, 0.81],
    [0.24, 0.97],
    [0.36, 1.08],
    [0.37, 1.24],
    [0.25, 1.38],
    [0.1, 1.43],
  ];
  for (let i = 0; i < side.length - 1; i++) {
    const [a, y] = side[i],
      [b, Y] = side[i + 1];
    for (const sign of [-1, 1]) {
      const A = [sign * a, y, 0.09],
        B = [sign * b, Y, 0.09],
        C = [0, Y, 0.195],
        D = [0, y, 0.195];
      function quad(verts, col) {
        const g = new T.BufferGeometry();
        g.setAttribute(
          "position",
          new T.Float32BufferAttribute(verts.flat(), 3),
        );
        g.setIndex([0, 1, 2, 0, 2, 3]);
        add(p, g, col);
      }
      quad([A, B, C, D], sign < 0 ? "clay" : "brick");
      quad([[sign * a, y, -0.115], [sign * b, Y, -0.115], B, A], "brick");
    }
  }
  const outline = [...side, ...[...side].reverse().map(([x, y]) => [-x, y])];
  panel(p, outline, 0.011, "clay", -0.125);
  for (const [x, y] of [side[0], side.at(-1)]) {
    const end = new T.BufferGeometry();
    end.setAttribute(
      "position",
      new T.Float32BufferAttribute(
        [
          [-x, y, -0.115],
          [x, y, -0.115],
          [x, y, 0.09],
          [0, y, 0.195],
          [-x, y, 0.09],
        ].flat(),
        3,
      ),
    );
    end.setIndex([0, 1, 2, 0, 2, 3, 0, 3, 4]);
    add(p, end, "brick");
  }
  box(p, 0, 0.08, 0, 0.062, 0.16, 0.068, "ink");
  box(p, 0, 1.58, 0.015, 0.135, 0.62, 0.17, "clay");
  panel(
    p,
    [
      [-0.085, 0.97],
      [0.085, 0.97],
      [0.057, 1.96],
      [-0.057, 1.96],
    ],
    0.04,
    "ink",
    0.186,
  );
  panel(
    p,
    [
      [-0.09, 1.87],
      [0.074, 1.87],
      [0.155, 2.05],
      [0.11, 2.17],
      [-0.06, 2.2],
      [-0.12, 2.1],
    ],
    0.16,
    "clay",
    -0.06,
  );
  for (const [x, y] of [
    [-0.11, 2.02],
    [0.12, 2.11],
  ])
    disc(p, x, y, 0.005, 0.066, 0.17, "straw", 6);
  panel(
    p,
    [
      [-0.035, 0.26],
      [0.035, 0.26],
      [0.09, 0.54],
      [-0.09, 0.54],
    ],
    0.03,
    "ink",
    0.194,
  );
  box(p, 0, 0.64, 0.21, 0.23, 0.053, 0.051, "straw");
  for (const x of [-0.029, 0.029])
    slat(p, [x, 0.44, 0.243], [x, 1.95, 0.243], 0.014, 0.011, "paper");
  for (const s of [-1, 1])
    slat(
      p,
      [s * 0.24, 0.66, 0.137],
      [s * 0.17, 0.81, 0.162],
      0.029,
      0.029,
      "ink",
    );
}
function snare(p) {
  const n = 10;
  const band = (r, y, h, c) => rod(p, [0, y, 0], [0, y + h, 0], r, c, r, n);
  band(0.75, 0, 0.095, "ink");
  band(0.705, 0.095, 0.56, "green");
  band(0.76, 0.645, 0.09, "ink");
  band(0.715, 0.735, 0.027, "paper");
  band(0.711, 0.2, 0.061, "water");
  for (let i = 0; i < n; i++) {
    const a = (2 * Math.PI * i) / n,
      b = (2 * Math.PI * (i + 1)) / n;
    const point = (t, y) => [0.713 * Math.sin(t), y, 0.713 * Math.cos(t)];
    rod(p, point(a, 0.12), point(b, 0.62), 0.026, "straw", 0.029, 4);
  }
  rod(p, [-0.86, 0.8, 0.32], [0.62, 0.86, -0.43], 0.042, "clay", 0.025, 5);
  rod(p, [-0.68, 0.89, -0.52], [0.67, 0.84, 0.46], 0.041, "clay", 0.024, 5);
}
export const library = [
  ["marquee", "Club marquee", marquee, 1.78, 1.18],
  ["record", "Tilted 78", record, 1.54, 1.23],
  ["piano", "Baby grand", piano, 1.86, 2.04],
  ["trumpet", "Trumpet", trumpet, 1.93, 1.08],
  ["sax", "Tenor sax", sax, 1.48, 1.17],
  ["bass", "Upright bass", bass, 1.34, 1.09],
  ["snare", "Snare drum", snare, 1.81, 1.68],
];
// Two fixed emblems carry the non-shrine categories through the whole atlas.
function linkedRings(p) {
  for (const [x, y, angle, color] of [
    [-0.36, 0.56, -0.24, "green"],
    [0.39, 0.61, 0.93, "water"],
  ]) {
    const loop = add(p, new T.TorusGeometry(0.47, 0.13, 6, 12), color, x, y, 0);
    loop.rotation.y = angle;
    loop.rotation.z = 0.26;
    loop.scale.x = 1.2;
  }
}
function portico(p) {
  tier(p, octagon(1.65, 0.99, 0.08), 0.1, 0, "stone");
  tier(p, octagon(1.51, 0.86, 0.06), 0.1, 0.1, "straw");
  box(p, 0, 0.6, -0.24, 1.26, 0.82, 0.25, "brick");
  for (const x of [-0.53, 0, 0.53]) {
    rod(p, [x, 0.2, 0.22], [x, 0.94, 0.22], 0.127, "paper", 0.098, 6);
    box(p, x, 0.92, 0.22, 0.29, 0.1, 0.28, "stone");
  }
  box(p, 0, 1.01, 0, 1.7, 0.13, 0.91, "ink");
  panel(
    p,
    [
      [-0.91, 1.07],
      [0, 1.53],
      [0.91, 1.07],
    ],
    0.96,
    "straw",
    -0.48,
  );
  panel(
    p,
    [
      [-0.61, 1.12],
      [0, 1.41],
      [0.61, 1.12],
    ],
    0.017,
    "brick",
    0.48,
  );
}
export const landmarks = [
  ["org", "Linked rings", linkedRings, 1.96, 1.1, "green"],
  ["inst", "Columned portico", portico, 1.92, 1.27, "straw"],
];
export function makeModel(key) {
  const [, name, build, w, d, band] = [...library, ...landmarks].find(
    (entry) => entry[0] === key,
  );
  const root = new T.Group(),
    sculpture = new T.Group();
  root.name = name;
  sculpture.name = "Carving";
  base(root, w, d, band);
  build(sculpture);
  sculpture.position.y = 0.35;
  root.add(sculpture);
  root.updateMatrixWorld(true);
  return root;
}
