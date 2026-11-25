// Jazz shrine miniatures. The local viewer and GLB exports use these same solids.
import * as T from "three";
import { RoundedBoxGeometry } from "three/addons/geometries/RoundedBoxGeometry.js";
const { Vector3: V, Group, Mesh, MeshStandardMaterial: Material } = T;
const swatches = {
  shell: ["#9c4031", 0.36, 0.27],
  red: ["#c16549", 0.35, 0.26],
  wine: ["#55251e", 0.28, 0.28],
  wood: ["#a65b30", 0.08, 0.33],
  maple: ["#cf8d50", 0.12, 0.3],
  ebony: ["#24231e", 0.18, 0.25],
  gold: ["#c79341", 0.82, 0.24],
  gleam: ["#ebbd73", 0.78, 0.2],
  aged: ["#76532e", 0.65, 0.34],
  silver: ["#b6bcc0", 0.83, 0.21],
  steel: ["#5d6866", 0.76, 0.29],
  ivory: ["#f1e7c7", 0.13, 0.33],
  bulb: ["#ffe2a4", 0.16, 0.2],
  vinyl: ["#252d30", 0.36, 0.19],
  groove: ["#515657", 0.56, 0.3],
  hide: ["#dfd8bc", 0.04, 0.56],
  pine: ["#213d36", 0.35, 0.3],
};
const mats = Object.fromEntries(
  Object.entries(swatches).map(([name, [color, metalness, roughness]]) => {
    const m = new Material({ color, metalness, roughness, side: T.DoubleSide });
    m.name = name;
    return [name, m];
  }),
);
const v = (a) => new V(...a);
function part(parent, geometry, mat, x = 0, y = 0, z = 0) {
  const o = new Mesh(geometry, mats[mat]);
  o.position.set(x, y, z);
  parent.add(o);
  return o;
}
function box(p, x, y, z, w, h, d, m, b = 0.025) {
  return part(
    p,
    new RoundedBoxGeometry(w, h, d, 1, Math.min(w / 3, h / 3, d / 3, b)),
    m,
    x,
    y,
    z,
  );
}
function orb(p, x, y, z, a, b, c, m) {
  const o = part(p, new T.SphereGeometry(1, 18, 12), m, x, y, z);
  o.scale.set(a, b, c);
  return o;
}
function rod(p, a, b, r, m, other = r, n = 18) {
  const av = v(a),
    bv = v(b),
    dir = bv.clone().sub(av);
  const o = part(p, new T.CylinderGeometry(other, r, dir.length(), n), m);
  o.position.copy(av.add(bv).multiplyScalar(0.5));
  o.quaternion.setFromUnitVectors(new V(0, 1, 0), dir.normalize());
  return o;
}
function pipe(p, points, r, m, closed = false) {
  const curve = new T.CatmullRomCurve3(points.map(v), closed);
  return part(
    p,
    new T.TubeGeometry(curve, Math.max(8, points.length * 4), r, 10, closed),
    m,
  );
}
function cylinder(p, x, y, z, r, h, m) {
  return part(p, new T.CylinderGeometry(r, r, h, 56), m, x, y, z);
}
function ring(p, x, y, z, r, t, m) {
  const o = part(p, new T.TorusGeometry(r, t, 8, 48), m, x, y, z);
  o.rotation.x = Math.PI / 2;
  return o;
}
function solid(p, outline, y, h, m, bevel = 0.025) {
  const sh = new T.Shape();
  outline.forEach(([x, z], i) => (i ? sh.lineTo(x, -z) : sh.moveTo(x, -z)));
  sh.closePath();
  const geom = new T.ExtrudeGeometry(sh, {
    depth: h,
    bevelEnabled: bevel > 0,
    bevelSegments: 2,
    bevelSize: bevel,
    bevelThickness: bevel,
    curveSegments: 20,
  });
  geom.rotateX(-Math.PI / 2);
  return part(p, geom, m, 0, y, 0);
}
function lathe(p, profile, m) {
  return part(
    p,
    new T.LatheGeometry(
      profile.map(([a, b]) => new T.Vector2(a, b)),
      54,
    ),
    m,
  );
}
const letters = {
  L: [
    [
      [0, 1],
      [0, 0],
      [0.66, 0],
    ],
  ],
  I: [
    [
      [0.33, 0],
      [0.33, 1],
    ],
  ],
  V: [
    [
      [0, 1],
      [0.33, 0],
      [0.66, 1],
    ],
  ],
  E: [
    [
      [0.66, 1],
      [0, 1],
      [0, 0],
      [0.66, 0],
    ],
    [
      [0, 0.5],
      [0.53, 0.5],
    ],
  ],
  M: [
    [
      [0, 0],
      [0, 1],
      [0.36, 0.48],
      [0.72, 1],
      [0.72, 0],
    ],
  ],
  U: [
    [
      [0, 1],
      [0, 0.22],
      [0.1, 0.05],
      [0.33, 0],
      [0.56, 0.05],
      [0.66, 0.22],
      [0.66, 1],
    ],
  ],
  S: [
    [
      [0.66, 0.9],
      [0.49, 1],
      [0.18, 1],
      [0, 0.85],
      [0, 0.64],
      [0.15, 0.54],
      [0.51, 0.48],
      [0.66, 0.35],
      [0.66, 0.14],
      [0.5, 0],
      [0.16, 0],
      [0, 0.1],
    ],
  ],
  C: [
    [
      [0.66, 0.88],
      [0.48, 1],
      [0.17, 1],
      [0, 0.82],
      [0, 0.2],
      [0.17, 0],
      [0.49, 0],
      [0.66, 0.13],
    ],
  ],
};
function relief(p, word) {
  const total = word.length * 0.87 - 0.2,
    scale = 1.53 / total;
  for (let i = 0; i < word.length; i++)
    for (const stroke of letters[word[i]] || []) {
      const pts = stroke.map(([x, y]) => [
        (x + i * 0.87 - total / 2) * scale,
        (y - 0.5) * scale,
        0.051,
      ]);
      for (let j = 1; j < pts.length; j++)
        rod(p, pts[j - 1], pts[j], scale * 0.068, "ivory", scale * 0.068, 8);
      for (const [x, y, z] of pts)
        orb(p, x, y, z, scale * 0.067, scale * 0.067, scale * 0.067, "ivory");
    }
}
function marquee() {
  const p = new Group();
  const poly = [
    [-1.7, -0.38],
    [1.7, -0.38],
    [1.7, 0.22],
    [0, 0.91],
    [-1.7, 0.22],
  ];
  box(p, 0, 0.45, -0.12, 0.32, 0.9, 0.4, "aged");
  box(p, 0, 0.08, -0.12, 1.11, 0.12, 0.64, "wine");
  solid(p, poly, 0.62, 0.82, "wine");
  solid(p, poly, 0.61, 0.065, "gold");
  solid(p, poly, 1.4, 0.075, "gleam");
  solid(
    p,
    poly.map(([x, z]) => [x * 0.98, z * 0.98]),
    1.49,
    0.052,
    "red",
  );
  for (const side of [-1, 1]) {
    const face = new Group();
    face.position.set(side * 0.85, 1.07, 0.572);
    face.rotation.y = side * Math.atan2(0.69, 1.7);
    p.add(face);
    box(face, 0, 0, 0, 1.73, 0.55, 0.06, "gold", 0.025);
    box(face, 0, 0, 0.03, 1.65, 0.47, 0.03, "pine", 0.015);
    relief(face, "LIVE MUSIC");
    for (let i = 0; i < 8; i++) {
      const x = (i - 3.5) * 0.217;
      orb(face, x, -0.328, 0.055, 0.046, 0.046, 0.043, "bulb");
    }
  }
  for (let i = 0; i < 3; i++) {
    box(p, 0, 1.61 + i * 0.13, -0.18, 1.45 - i * 0.35, 0.1, 0.35, "shell");
    box(p, 0, 1.67 + i * 0.13, -0.18, 1.46 - i * 0.35, 0.028, 0.37, "gleam");
  }
  return p;
}
function record() {
  const p = new Group(),
    disk = new Group();
  box(p, 0, 0.09, 0, 0.91, 0.13, 0.5, "wine");
  rod(p, [0, 0.12, 0], [0, 0.93, 0], 0.085, "gold");
  p.add(disk);
  disk.position.set(0, 1.13, 0);
  disk.rotation.x = Math.PI * 0.345;
  const profile = [
    [0.033, -0.045],
    [0.99, -0.045],
    [1.016, -0.029],
    [1.02, 0.024],
    [1.006, 0.045],
    [0.047, 0.045],
    [0.033, 0.034],
    [0.033, -0.045],
  ];
  lathe(disk, profile, "vinyl");
  for (const y of [-0.05, 0.05]) {
    const q = lathe(
      disk,
      [
        [0.034, y],
        [0.34, y],
        [0.35, y + 0.003],
        [0.034, y + 0.003],
      ],
      "shell",
    );
    q.name = "Record label";
    for (const r of [0.41, 0.55, 0.58, 0.73, 0.77, 0.9, 0.96])
      ring(disk, 0, y, 0, r, 0.003, "groove");
    ring(disk, 0, y * 1.1, 0, 0.28, 0.006, "gleam");
  }
  return p;
}
function piano() {
  const p = new Group(),
    sh = new T.Shape();
  sh.moveTo(-1, 0.86);
  sh.lineTo(1, 0.86);
  sh.lineTo(1, 0.22);
  sh.bezierCurveTo(0.98, -0.3, 0.43, -0.27, 0.29, -0.73);
  sh.bezierCurveTo(0.13, -1.32, -0.03, -1.64, -0.48, -1.66);
  sh.bezierCurveTo(-0.84, -1.67, -1, -1.4, -1, -1.18);
  sh.closePath();
  const outline = sh.getPoints(16).map((q) => [q.x, q.y]);
  for (const [x, z] of [
    [-0.77, 0.61],
    [0.77, 0.61],
    [-0.57, -1.24],
  ]) {
    rod(p, [x, 0.13, z], [x, 0.94, z], 0.072, "ebony", 0.114);
    orb(p, x, 0.1, z, 0.1, 0.105, 0.09, "gold");
  }
  solid(p, outline, 0.87, 0.29, "wine");
  solid(p, outline, 1.13, 0.035, "gold");
  const plate = outline.map(([x, z]) => [x * 0.92, Math.min(0.4, z * 0.94)]);
  solid(p, plate, 1.17, 0.015, "aged");
  for (let i = 0; i < 17; i++) {
    const x = -0.81 + i * 0.088;
    const end = -1.43 + 1.51 * (i / 16) ** 1.8;
    rod(p, [x, 1.208, 0.35], [x * 0.84, 1.208, end], 0.009, "gleam", 0.009, 5);
  }
  for (const x of [-0.5, 0.13])
    rod(p, [x, 1.22, 0.36], [x - 0.11, 1.22, -0.68], 0.033, "gold");
  box(p, 0, 1.15, 0.71, 1.84, 0.19, 0.52, "ebony");
  for (let i = 0; i < 19; i++) {
    const x = (i - 9) * 0.09;
    box(p, x, 1.25, 0.74, 0.084, 0.045, 0.35, "ivory", 0.005);
    if (i < 18 && ![2, 6].includes(i % 7))
      box(p, x + 0.044, 1.289, 0.67, 0.053, 0.049, 0.2, "ebony", 0.008);
  }
  const hinge = new Group();
  p.add(hinge);
  hinge.position.set(-0.97, 1.24, 0);
  hinge.rotation.z = 0.57;
  const lid = outline.map(([x, z]) => [x + 0.97, Math.min(0.39, z)]);
  solid(hinge, lid, 0.008, 0.065, "wine");
  solid(hinge, lid, 0.075, 0.015, "shell");
  rod(p, [0.48, 1.22, 0.1], [0.58, 2.24, 0.12], 0.026, "aged");
  rod(p, [-0.09, 0.28, 0.49], [-0.09, 0.89, 0.42], 0.025, "gold");
  rod(p, [0.09, 0.28, 0.49], [0.09, 0.89, 0.42], 0.025, "gold");
  box(p, 0, 0.28, 0.53, 0.36, 0.065, 0.22, "ebony");
  for (const x of [-0.095, 0, 0.095])
    box(p, x, 0.29, 0.67, 0.04, 0.033, 0.18, "gleam");
  return p;
}
function trumpet() {
  const p = new Group();
  pipe(
    p,
    [
      [-1.57, 0.81, 0.21],
      [-0.95, 0.81, 0.21],
      [0.55, 0.81, 0.21],
      [0.83, 0.78, 0.2],
      [0.94, 0.61, 0.14],
      [0.88, 0.43, 0.09],
      [0.7, 0.38, 0.07],
      [-0.52, 0.38, 0.07],
      [-0.77, 0.41, 0.04],
      [-0.86, 0.58, -0.01],
      [-0.79, 0.8, -0.04],
      [-0.53, 0.88, -0.05],
      [0.49, 0.88, -0.05],
    ],
    0.066,
    "gold",
  );
  const bell = lathe(
    p,
    [
      [0.062, 0],
      [0.082, 0.34],
      [0.123, 0.58],
      [0.196, 0.78],
      [0.29, 0.92],
      [0.446, 1.06],
      [0.455, 1.08],
      [0.437, 1.09],
      [0.278, 0.94],
      [0.185, 0.8],
      [0.11, 0.59],
      [0.07, 0.34],
      [0.047, 0],
    ],
    "gold",
  );
  bell.position.set(0.4, 0.88, -0.05);
  bell.rotation.z = -Math.PI / 2;
  const rim = ring(p, 1.48, 0.88, -0.05, 0.449, 0.018, "gleam");
  rim.rotation.set(0, Math.PI / 2, 0);
  for (let i = 0; i < 3; i++) {
    const x = -0.34 + i * 0.23;
    rod(p, [x, 0.45, 0.2], [x, 0.99, 0.2], 0.101, "gold");
    rod(p, [x, 1.01, 0.2], [x, 1.16, 0.2], 0.035, "silver");
    for (const y of [0.45, 0.97])
      rod(p, [x, y - 0.022, 0.2], [x, y + 0.022, 0.2], 0.112, "gleam");
    rod(p, [x, 1.155, 0.2], [x, 1.205, 0.2], 0.083, "aged");
    orb(p, x, 1.204, 0.2, 0.081, 0.018, 0.081, "ivory");
    pipe(
      p,
      [
        [x, 0.74, 0.13],
        [x, 0.77, -0.19 - i * 0.05],
        [x - 0.04, 0.6, -0.28 - i * 0.06],
        [x, 0.54, 0.12],
      ],
      0.042,
      "gold",
    );
  }
  rod(p, [-1.73, 0.81, 0.21], [-1.55, 0.81, 0.21], 0.078, "silver", 0.047);
  rod(p, [-1.84, 0.81, 0.21], [-1.72, 0.81, 0.21], 0.126, "silver", 0.076);
  return p;
}
function sax() {
  const p = new Group();
  // Continuous expanding bore follows the neck, bow and upturned bell.
  const pts = [
    [-0.68, 2.45, 0.06],
    [-0.48, 2.61, 0.04],
    [-0.26, 2.68, 0],
    [-0.09, 2.57, -0.04],
    [-0.08, 2.28, 0],
    [-0.19, 1.8, 0.05],
    [-0.32, 1.2, 0.12],
    [-0.43, 0.61, 0.19],
    [-0.38, 0.35, 0.22],
    [-0.15, 0.24, 0.23],
    [0.08, 0.29, 0.22],
    [0.24, 0.5, 0.2],
    [0.3, 0.85, 0.2],
    [0.37, 1.12, 0.22],
    [0.51, 1.43, 0.39],
    [0.59, 1.57, 0.49],
  ];
  const rs = [
    0.041, 0.046, 0.052, 0.057, 0.075, 0.095, 0.125, 0.147, 0.154, 0.162, 0.17,
    0.18, 0.19, 0.21, 0.275, 0.355,
  ];
  const curve = new T.CatmullRomCurve3(pts.map(v)),
    N = 90,
    L = 32,
    vertices = [],
    idx = [];
  const frames = curve.computeFrenetFrames(N, false);
  for (let k = 0; k <= N; k++) {
    const u = k / N,
      t = curve.getUtoTmapping(u),
      tt = t * (pts.length - 1),
      j = Math.min(pts.length - 2, Math.floor(tt)),
      r = T.MathUtils.lerp(rs[j], rs[j + 1], tt - j);
    const c = curve.getPointAt(u);
    for (let i = 0; i < L; i++) {
      const ang = (2 * Math.PI * i) / L;
      const pt = c
        .clone()
        .addScaledVector(frames.normals[k], r * Math.cos(ang))
        .addScaledVector(frames.binormals[k], r * Math.sin(ang));
      vertices.push(...pt.toArray());
    }
    if (k)
      for (let i = 0; i < L; i++) {
        const a = (k - 1) * L + i,
          b = (k - 1) * L + ((i + 1) % L);
        idx.push(a, b, a + L, b, b + L, a + L);
      }
  }
  const geom = new T.BufferGeometry();
  geom.setAttribute("position", new T.Float32BufferAttribute(vertices, 3));
  geom.setIndex(idx);
  geom.computeVertexNormals();
  part(p, geom, "gold");
  const end = v(pts.at(-1)),
    direction = curve.getTangentAt(1),
    lip = new Mesh(new T.TorusGeometry(0.355, 0.021, 10, 40), mats.gleam);
  lip.position.copy(end);
  lip.quaternion.setFromUnitVectors(new V(0, 0, 1), direction);
  p.add(lip);
  // The bell looks into the turn of the bore from above.
  pipe(
    p,
    [
      [-0.15, 2.14, 0.1],
      [-0.26, 1.78, 0.16],
      [-0.35, 1.39, 0.22],
      [-0.43, 0.96, 0.29],
      [-0.46, 0.8, 0.3],
    ],
    0.018,
    "aged",
  );
  for (let i = 0; i < 5; i++) {
    const y = 1.9 - i * 0.208,
      x = -0.18 - i * 0.047,
      z = 0.14 + i * 0.033;
    rod(p, [x - 0.057, y, z], [x - 0.083, y, z + 0.095], 0.021, "gleam");
    orb(p, x - 0.06, y - 0.049, z + 0.033, 0.073, 0.065, 0.029, "gold");
    pipe(
      p,
      [
        [x - 0.09, y + 0.029, z + 0.045],
        [x - 0.046, y + 0.056, z + 0.108],
        [x + 0.055, y + 0.12, z + 0.106],
      ],
      0.014,
      "gleam",
    );
  }
  pipe(
    p,
    [
      [0.19, 0.5, 0.37],
      [0.23, 0.58, 0.43],
      [0.39, 0.71, 0.43],
      [0.45, 0.86, 0.38],
      [0.46, 1.0, 0.32],
    ],
    0.021,
    "gold",
  );
  const mouth = rod(
    p,
    [-0.43, 2.6, 0.047],
    [-0.76, 2.41, 0.06],
    0.089,
    "ebony",
    0.04,
  );
  mouth.scale.z = 0.8;
  rod(p, [-0.51, 2.55, 0.05], [-0.56, 2.52, 0.05], 0.089, "gleam");
  pipe(
    p,
    [
      [-0.04, 2.15, 0.09],
      [-0.14, 1.7, 0.18],
      [-0.26, 1.15, 0.27],
      [-0.31, 0.89, 0.33],
    ],
    0.022,
    "gleam",
  );
  for (let i = 0; i < 6; i++) {
    const y = 2.07 - i * 0.203,
      x = -0.11 - i * 0.043,
      z = 0.124 + i * 0.038;
    rod(p, [x, y, z], [x + 0.095, y - 0.045, z + 0.07], 0.024, "gold");
    orb(p, x + 0.09, y - 0.038, z + 0.091, 0.069, 0.055, 0.024, "ivory");
  }
  for (let i = 0; i < 3; i++)
    orb(p, 0.37, 0.61 + i * 0.18, 0.35, 0.101, 0.095, 0.038, "gleam");
  return p;
}
function bass() {
  const p = new Group();
  // Successive elliptical sections give the belly and back independent, curved volume.
  const rows = [
    [0.12, 0.15],
    [0.16, 0.36],
    [0.26, 0.49],
    [0.43, 0.56],
    [0.62, 0.55],
    [0.76, 0.45],
    [0.86, 0.37],
    [0.91, 0.4],
    [0.97, 0.32],
    [1.07, 0.285],
    [1.16, 0.3],
    [1.23, 0.39],
    [1.27, 0.35],
    [1.39, 0.43],
    [1.5, 0.425],
    [1.6, 0.35],
    [1.7, 0.19],
    [1.77, 0.105],
  ];
  const radius = (y) => {
    let j = rows.findIndex((e) => e[0] >= y);
    if (j <= 0) return rows[j < 0 ? rows.length - 1 : 0][1];
    const [a, r] = rows[j - 1],
      [b, s] = rows[j];
    return r + ((s - r) * (y - a)) / (b - a);
  };
  const L = 48,
    verts = [],
    idx = [];
  function zAt(x, y) {
    const r = radius(y);
    return (
      0.114 +
      0.109 * Math.sqrt(Math.max(0, 1 - (x / r) ** 2)) * Math.min(1, r / 0.35)
    );
  }
  for (const [y, r] of rows) {
    for (let i = 0; i < L; i++) {
      const a = (i * Math.PI * 2) / L,
        x = r * Math.cos(a),
        s = Math.sin(a);
      verts.push(
        x,
        y,
        Math.sign(s) * (0.112 + 0.109 * Math.abs(s) * Math.min(1, r / 0.35)),
      );
    }
  }
  for (let j = 0; j < rows.length - 1; j++)
    for (let i = 0; i < L; i++) {
      const a = j * L + i,
        b = j * L + ((i + 1) % L);
      idx.push(a, a + L, b, b, a + L, b + L);
    }
  for (const j of [0, rows.length - 1])
    for (let i = 1; i < L - 1; i++) {
      const off = j * L;
      idx.push(off, off + i, off + i + 1);
    }
  const geom = new T.BufferGeometry();
  geom.setAttribute("position", new T.Float32BufferAttribute(verts, 3));
  geom.setIndex(idx);
  geom.computeVertexNormals();
  part(p, geom, "wood");
  for (const side of [-1, 1]) {
    const outline = [
      ...rows.map(([y, r]) => [r, y, side * 0.121]),
      ...[...rows].reverse().map(([y, r]) => [-r, y, side * 0.121]),
    ];
    pipe(p, outline, 0.017, "aged", true);
  }
  box(p, 0, 1.92, 0.041, 0.155, 0.63, 0.16, "wood");
  const finger = box(p, 0, 1.69, 0.21, 0.145, 1.0, 0.049, "ebony");
  finger.rotation.x = -0.06;
  box(p, 0, 2.31, 0.045, 0.18, 0.28, 0.17, "wood", 0.05);
  orb(p, 0, 2.51, 0.085, 0.115, 0.13, 0.115, "maple");
  for (const side of [-1, 1]) {
    const scroll = [];
    for (let i = 0; i < 24; i++) {
      const a = i * 0.29,
        r = 0.083 * (1 - i / 30);
      scroll.push([
        side * (0.089 + i * 0.0007),
        2.51 + Math.sin(a) * r,
        0.083 + Math.cos(a) * r,
      ]);
    }
    pipe(p, scroll, 0.012, "wood");
  }
  for (const side of [-1, 1]) {
    for (let i = 0; i < 2; i++) {
      const y = 2.235 + i * 0.13 + (side === 1 ? 0.028 : 0);
      rod(p, [side * 0.067, y, 0.075], [side * 0.174, y, 0.075], 0.032, "gold");
      orb(p, side * 0.185, y, 0.073, 0.035, 0.069, 0.037, "aged");
    }
    const holes = [
      [0.23, 0.82],
      [0.28, 0.86],
      [0.268, 0.9],
      [0.208, 0.92],
      [0.195, 1.0],
      [0.235, 1.08],
      [0.242, 1.13],
      [0.212, 1.16],
      [0.192, 1.12],
    ].map(([x, y]) => [side * x, y, zAt(x, y) + 0.006]);
    pipe(p, holes, 0.015, "ebony");
  }
  rod(p, [0, -0.04, 0], [0, 0.15, 0], 0.022, "steel");
  orb(p, 0, -0.047, 0, 0.035, 0.03, 0.035, "ebony");
  rod(p, [0, 0.28, 0.219], [0, 0.64, 0.239], 0.035, "ebony", 0.11, 4);
  box(p, 0, 0.79, 0.25, 0.267, 0.068, 0.06, "maple");
  for (const x of [-0.1, 0.1])
    box(p, x, 0.755, 0.223, 0.036, 0.048, 0.06, "maple");
  for (let i = 0; i < 4; i++) {
    const x = (i - 1.5) * 0.033;
    pipe(
      p,
      [
        [x * 1.2, 0.47, 0.267],
        [x * 1.6, 0.819, 0.283],
        [x * 0.87, 2.17, 0.22],
        [x * 0.75, 2.3, 0.138],
      ],
      0.005,
      "silver",
    );
  }
  p.rotation.z = -0.095;
  return p;
}
function snare() {
  const p = new Group();
  cylinder(p, 0, 0.51, 0, 0.89, 0.68, "shell");
  for (const y of [0.17, 0.86]) {
    cylinder(p, 0, y, 0, 0.93, 0.09, "silver");
    ring(p, 0, y + 0.036, 0, 0.914, 0.024, "steel");
  }
  cylinder(p, 0, 0.903, 0, 0.88, 0.019, "hide");
  ring(p, 0, 0.926, 0, 0.909, 0.033, "silver");
  for (let i = 0; i < 10; i++) {
    const a = (i * Math.PI) / 5,
      x = 0.898 * Math.sin(a),
      z = 0.898 * Math.cos(a);
    const lug = box(p, x, 0.51, z, 0.125, 0.22, 0.089, "silver");
    lug.rotation.y = a;
    rod(
      p,
      [x * 1.02, 0.195, z * 1.02],
      [x * 1.02, 0.846, z * 1.02],
      0.026,
      "steel",
    );
    for (const y of [0.21, 0.82])
      orb(p, x * 1.02, y, z * 1.02, 0.047, 0.043, 0.047, "silver");
  }
  function stick(a, b) {
    const A = v(a),
      B = v(b),
      D = B.clone().sub(A),
      pt = (s) => A.clone().addScaledVector(D, s).toArray();
    rod(p, pt(0), pt(0.77), 0.041, "maple", 0.032);
    rod(p, pt(0.77), pt(0.965), 0.032, "maple", 0.016);
    const pos = pt(0.98);
    orb(p, ...pos, 0.041, 0.03, 0.034, "maple");
  }
  stick([-1.03, 1.0, -0.48], [0.89, 0.98, 0.62]);
  stick([-0.86, 1.06, 0.68], [0.85, 1.08, -0.59]);
  return p;
}
export const library = [
  ["marquee", "Club marquee", marquee],
  ["record", "Tilted 78", record],
  ["piano", "Baby grand", piano],
  ["trumpet", "Trumpet", trumpet],
  ["sax", "Tenor sax", sax],
  ["bass", "Upright bass", bass],
  ["snare", "Snare drum", snare],
];
export function makeModel(key) {
  const [, name, build] = library.find((row) => row[0] === key);
  const object = build();
  object.name = name;
  const box = new T.Box3().setFromObject(object);
  const center = box.getCenter(new V());
  const root = new Group();
  root.name = name;
  object.position.add(new V(-center.x, -box.min.y, -center.z));
  root.add(object);
  root.updateMatrixWorld(true);
  return root;
}
