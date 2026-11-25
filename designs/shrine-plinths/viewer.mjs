import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import mapDetail from "./map-detail.jpg";
import { library, makeModel } from "./models.mjs";

const byId = (id) => document.getElementById(id);
const stage = byId("stage"),
  poster = byId("poster"),
  cameras = ["iso", "reverse", "overhead"];
const angles = {
  marquee: [22, 27],
  record: [-33, 31],
  piano: [29, 33],
  trumpet: [30, 29],
  sax: [28, 26],
  bass: [30, 26],
  snare: [30, 31],
};
let renderer,
  scene,
  camera,
  controls,
  active,
  model,
  radius,
  frame,
  ready = false;
function fit(mode) {
  const [base, elevation] = angles[active];
  const az = THREE.MathUtils.degToRad(base + (mode === "reverse" ? 115 : 0)),
    el = THREE.MathUtils.degToRad(
      mode === "overhead" ? 89.8 : mode === "reverse" ? 50 : elevation,
    );
  const box = new THREE.Box3().setFromObject(model);
  box.getCenter(controls.target);
  const projected = new THREE.Vector3(),
    right = new THREE.Vector3(Math.cos(az), 0, -Math.sin(az));
  const dir = new THREE.Vector3(
      Math.sin(az) * Math.cos(el),
      Math.sin(el),
      Math.cos(az) * Math.cos(el),
    ),
    up = new THREE.Vector3().crossVectors(dir, right);
  let halfW = 0,
    halfH = 0;
  model.traverse((o) => {
    if (!o.isMesh) return;
    const points = o.geometry.attributes.position;
    for (let i = 0; i < points.count; i++) {
      projected
        .fromBufferAttribute(points, i)
        .applyMatrix4(o.matrixWorld)
        .sub(controls.target);
      halfW = Math.max(halfW, Math.abs(projected.dot(right)));
      halfH = Math.max(halfH, Math.abs(projected.dot(up)));
    }
  });
  camera.zoom =
    1 / (1.18 * Math.max(halfW / (camera.right || 1), halfH / camera.top));
  camera.position.copy(controls.target).addScaledVector(dir, radius * 4);
  camera.updateProjectionMatrix();
  controls.update();
}
function useCamera(mode) {
  cameras.forEach((id) =>
    byId(id).setAttribute("aria-pressed", String(id === mode)),
  );
  if (ready) {
    controls.autoRotate = false;
    byId("spin").setAttribute("aria-pressed", "false");
    fit(mode);
  } else
    poster.src =
      "views/" + active + (mode === "reverse" ? "-other.jpg" : "-front.jpg");
}
function resize() {
  if (!ready) return;
  const w = stage.clientWidth,
    h = stage.clientHeight,
    ratio = w / h;
  camera.left = -ratio;
  camera.right = ratio;
  camera.top = 1;
  camera.bottom = -1;
  camera.updateProjectionMatrix();
  renderer.setSize(w, h, false);
}
function choose(key) {
  const entry = library.find(([id]) => key === id);
  active = key;
  byId("names")
    .querySelectorAll("button")
    .forEach((b) =>
      b.setAttribute("aria-pressed", String(b.dataset.model === key)),
    );
  poster.alt = entry[1];
  poster.src = "views/" + key + "-front.jpg";
  byId("download").href = "models/" + key + ".glb";
  byId("download").setAttribute("aria-label", "Download " + entry[1] + " GLB");
  if (ready) {
    if (model) {
      scene.remove(model);
      model.traverse((o) => o.geometry?.dispose());
    }
    model = makeModel(key);
    model.traverse((o) => {
      o.castShadow = true;
      o.receiveShadow = true;
    });
    scene.add(model);
    radius =
      new THREE.Box3()
        .setFromObject(model)
        .getSize(new THREE.Vector3())
        .length() * 0.5;
    renderer.domElement.setAttribute(
      "aria-label",
      entry[1] + " mesh. Use the camera buttons or drag to rotate.",
    );
  }
  useCamera("iso");
}
for (const [key, name] of library) {
  const b = document.createElement("button");
  b.dataset.model = key;
  b.textContent = name;
  b.onclick = () => choose(key);
  byId("names").append(b);
}
cameras.forEach((id) => (byId(id).onclick = () => useCamera(id)));
function start() {
  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.toneMapping = THREE.NoToneMapping;

  scene = new THREE.Scene();
  scene.background = new THREE.Color("#f1efe8");
  const map = new THREE.TextureLoader().load(mapDetail);
  map.colorSpace = THREE.SRGBColorSpace;
  map.anisotropy = Math.min(8, renderer.capabilities.getMaxAnisotropy());
  const sheet = new THREE.Mesh(
    new THREE.PlaneGeometry(16.25, 16.25),
    new THREE.MeshBasicMaterial({ map, toneMapped: false }),
  );
  sheet.rotation.x = -Math.PI / 2;
  sheet.position.y = -0.012;
  scene.add(sheet);
  camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.01, 60);
  controls = new OrbitControls(camera, renderer.domElement);
  controls.enablePan = false;
  controls.enableDamping = true;
  controls.minZoom = 0.16;
  controls.maxZoom = 7;
  controls.maxPolarAngle = Math.PI / 2 - 0.01;
  controls.autoRotateSpeed = 0.9;
  controls.addEventListener("start", () => {
    controls.autoRotate = false;
    byId("spin").setAttribute("aria-pressed", "false");
    cameras.forEach((id) => byId(id).setAttribute("aria-pressed", "false"));
  });
  scene.add(new THREE.HemisphereLight(0xfff9ea, 0xaea48b, 1.45));
  const sun = new THREE.DirectionalLight(0xfff6df, 1.6);
  sun.position.set(-3.3, 5.2, 4);
  sun.castShadow = true;
  sun.shadow.mapSize.set(2048, 2048);
  Object.assign(sun.shadow.camera, {
    left: -3.2,
    right: 3.2,
    top: 3.2,
    bottom: -3.2,
    far: 15,
  });
  sun.shadow.normalBias = 0.012;
  scene.add(sun);
  const fill = new THREE.DirectionalLight(0xf0efdf, 0.45);
  fill.position.set(4, 3, -2);
  scene.add(fill);
  const floor = new THREE.Mesh(
    new THREE.PlaneGeometry(150, 150),
    new THREE.ShadowMaterial({ opacity: 0.19 }),
  );
  floor.rotation.x = -Math.PI / 2;
  floor.position.y = -0.007;
  floor.receiveShadow = true;
  scene.add(floor);
  stage.append(renderer.domElement);
  ready = true;
  resize();
  poster.hidden = true;
  new ResizeObserver(() => {
    resize();
    const preset = cameras.find(
      (id) => byId(id).getAttribute("aria-pressed") === "true",
    );
    if (preset && model) fit(preset);
  }).observe(stage);
  let previous = 0;
  function paint(time) {
    controls.update(Math.min(0.05, (time - previous) / 1000));
    previous = time;
    renderer.render(scene, camera);
    frame = requestAnimationFrame(paint);
  }
  frame = requestAnimationFrame(paint);
}
function fallback() {
  ready = false;
  cancelAnimationFrame(frame);
  renderer?.domElement.remove();
  poster.hidden = false;
  byId("overhead").hidden = byId("spin").hidden = true;
  byId("fallback").hidden = false;
  byId("hint").textContent =
    "Choose Isometric or Reverse to compare two renders of the mesh.";
}
try {
  start();
  renderer.domElement.addEventListener("webglcontextlost", (e) => {
    e.preventDefault();
    fallback();
    useCamera("iso");
  });
} catch (err) {
  console.warn("Studio renders are available while WebGL is unavailable.", err);
  fallback();
}
byId("spin").onclick = () => {
  controls.autoRotate = !controls.autoRotate;
  byId("spin").setAttribute("aria-pressed", String(controls.autoRotate));
  cameras.forEach((id) => byId(id).setAttribute("aria-pressed", "false"));
};
choose("marquee");
