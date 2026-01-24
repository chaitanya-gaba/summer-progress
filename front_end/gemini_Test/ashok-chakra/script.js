const canvas = document.getElementById("webgl");

// ---------------- SCENE ----------------
const scene = new THREE.Scene();

// ---------------- CAMERA ----------------
const camera = new THREE.PerspectiveCamera(
  50,
  window.innerWidth / window.innerHeight,
  0.1,
  100
);
camera.position.z = 9;

// ---------------- RENDERER ----------------
const renderer = new THREE.WebGLRenderer({
  canvas,
  antialias: true,
  alpha: true
});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

// ---------------- LIGHTS ----------------
scene.add(new THREE.AmbientLight(0xffffff, 0.7));

const dirLight = new THREE.DirectionalLight(0xffffff, 0.6);
dirLight.position.set(5, 5, 5);
scene.add(dirLight);

// =================================================
//                 ASHOKA CHAKRA (CENTER)
// =================================================
const chakra = new THREE.Group();
scene.add(chakra);

const chakraMat = new THREE.MeshStandardMaterial({
  color: 0x1f4cff,
  metalness: 0.35,
  roughness: 0.25
});

// Outer ring
chakra.add(
  new THREE.Mesh(
    new THREE.TorusGeometry(2.4, 0.08, 32, 200),
    chakraMat
  )
);

// Hub
const hub = new THREE.Mesh(
  new THREE.CylinderGeometry(0.15, 0.15, 0.3, 32),
  chakraMat
);
hub.rotation.x = Math.PI / 2;
chakra.add(hub);

// Spokes
const SPOKES = 24;
for (let i = 0; i < SPOKES; i++) {
  const spoke = new THREE.Mesh(
    new THREE.BoxGeometry(0.04, 2.2, 0.04),
    chakraMat
  );
  const a = (i / SPOKES) * Math.PI * 2;
  spoke.position.set(Math.cos(a) * 1.1, Math.sin(a) * 1.1, 0);
  spoke.rotation.z = a;
  chakra.add(spoke);
}

// ---------------- CURSOR INTERACTION ----------------
let targetX = 0, targetY = 0;
let currentX = 0, currentY = 0;

window.addEventListener("mousemove", (e) => {
  targetX = (e.clientX / window.innerWidth - 0.5) * 2;
  targetY = -(e.clientY / window.innerHeight - 0.5) * 2;
});

// =================================================
//                   TIRANGA FLAG
// =================================================
const flagGroup = new THREE.Group();
scene.add(flagGroup);

// Top-right placement
flagGroup.position.set(3.6, 2.2, 0);

// Flag geometry (high segments for smooth wave)
const flagGeo = new THREE.PlaneGeometry(3, 2, 40, 20);

// ---------- FLAG TEXTURE ----------
const flagCanvas = document.createElement("canvas");
flagCanvas.width = 600;
flagCanvas.height = 400;
const ctx = flagCanvas.getContext("2d");

// Saffron
ctx.fillStyle = "#FF9933";
ctx.fillRect(0, 0, 600, 133);

// White
ctx.fillStyle = "#FFFFFF";
ctx.fillRect(0, 133, 600, 133);

// Green
ctx.fillStyle = "#138808";
ctx.fillRect(0, 266, 600, 134);

// Ashoka Chakra on flag (accurate, 24 spokes)
const cx = 300;
const cy = 200;
const r = 45;

ctx.strokeStyle = "#1f4cff";
ctx.lineWidth = 4;

// Outer circle
ctx.beginPath();
ctx.arc(cx, cy, r, 0, Math.PI * 2);
ctx.stroke();

// Inner hub
ctx.beginPath();
ctx.arc(cx, cy, 4, 0, Math.PI * 2);
ctx.fillStyle = "#1f4cff";
ctx.fill();

// Spokes
for (let i = 0; i < 24; i++) {
  const a = (i / 24) * Math.PI * 2;
  ctx.beginPath();
  ctx.moveTo(cx, cy);
  ctx.lineTo(
    cx + Math.cos(a) * r,
    cy + Math.sin(a) * r
  );
  ctx.stroke();
}

const flagTexture = new THREE.CanvasTexture(flagCanvas);
flagTexture.anisotropy = renderer.capabilities.getMaxAnisotropy();

const flagMat = new THREE.MeshStandardMaterial({
  map: flagTexture,
  side: THREE.DoubleSide
});

const flag = new THREE.Mesh(flagGeo, flagMat);
flagGroup.add(flag);

// =================================================
//                   ANIMATION
// =================================================
const clock = new THREE.Clock();

function animate() {
  const t = clock.getElapsedTime();

  // Chakra rotation
  chakra.rotation.z = t * 0.3;

  // Cursor smoothing
  currentX += (targetX - currentX) * 0.035;
  currentY += (targetY - currentY) * 0.035;

  chakra.position.x = currentX * 0.4;
  chakra.position.y = currentY * 0.4;
  chakra.rotation.x = currentY * 0.3;
  chakra.rotation.y = currentX * 0.3;

  // Flag wave (vertex-level, realistic)
  const pos = flag.geometry.attributes.position;
  for (let i = 0; i < pos.count; i++) {
    const x = pos.getX(i);
    const wave =
      Math.sin(t * 3 + x * 2) * 0.15 +
      Math.sin(t * 1.5 + x * 4) * 0.08;
    pos.setZ(i, wave);
  }
  pos.needsUpdate = true;

  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}
animate();

// ---------------- RESIZE ----------------
window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});