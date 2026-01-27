/* ==============================
   CANVAS SETUP
============================== */
const canvas = document.getElementById("c");
const ctx = canvas.getContext("2d");

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener("resize", resize);
resize();

const cx = () => canvas.width / 2;
const cy = () => canvas.height / 2;

/* ==============================
   CONFIG
============================== */
const DOT_COUNT = 2400;
const DOTS = [];

/* rotation state */
let rotX = 0;
let rotY = 0;
let velX = 0;
let velY = 0;

/* mouse state */
let dragging = false;
let lastX = 0;
let lastY = 0;

/* ==============================
   COLOR GRADIENT
============================== */
function colorAt(x, y) {
  const t = (x + y) / (canvas.width + canvas.height);
  const r = 26 + (142 - 26) * t;
  const g = 115 + (45 - 115) * t;
  const b = 232 + (226 - 232) * t;
  return `rgb(${r|0},${g|0},${b|0})`;
}

/* ==============================
   MICRO NOISE
============================== */
function noise(t, seed) {
  return Math.sin(t * 1.7 + seed) * 0.6 +
         Math.sin(t * 3.1 + seed * 2.3) * 0.4;
}

/* ==============================
   GEMINI BODY SHAPE
============================== */
function insideGemini(x, y) {
  const core = Math.hypot(x, y) < 85;

  const vert =
    Math.abs(x) < 48 &&
    Math.abs(y) < 190 &&
    Math.abs(x) < 48 - Math.abs(y) * 0.15;

  const horiz =
    Math.abs(y) < 48 &&
    Math.abs(x) < 190 &&
    Math.abs(y) < 48 - Math.abs(x) * 0.15;

  const top =
    y < -120 &&
    Math.abs(x) < 32 - Math.abs(y + 180) * 0.25;

  return core || vert || horiz || top;
}

/* ==============================
   CREATE DOTS
============================== */
while (DOTS.length < DOT_COUNT) {
  const x = (Math.random() - 0.5) * 420;
  const y = (Math.random() - 0.5) * 420;
  const z = (Math.random() - 0.5) * 120;

  if (insideGemini(x, y)) {
    DOTS.push({
      x, y, z,
      ox: x, oy: y, oz: z,
      r: Math.random() * 1.1 + 0.8,
      phase: Math.random() * Math.PI * 2,
      wobble: Math.random() * 2 + 0.5
    });
  }
}

/* ==============================
   3D MATH
============================== */
function rotateX(p, a) {
  const s = Math.sin(a), c = Math.cos(a);
  const y = p.y * c - p.z * s;
  const z = p.y * s + p.z * c;
  p.y = y; p.z = z;
}

function rotateY(p, a) {
  const s = Math.sin(a), c = Math.cos(a);
  const x = p.x * c + p.z * s;
  const z = -p.x * s + p.z * c;
  p.x = x; p.z = z;
}

function project(p) {
  const depth = 700;
  const scale = depth / (depth + p.z);
  return {
    x: cx() + p.x * scale,
    y: cy() + p.y * scale,
    r: p.r * scale
  };
}

/* ==============================
   INTERACTION
============================== */
canvas.addEventListener("mousedown", e => {
  dragging = true;
  lastX = e.clientX;
  lastY = e.clientY;
});

window.addEventListener("mouseup", () => dragging = false);

window.addEventListener("mousemove", e => {
  if (!dragging) return;

  const dx = e.clientX - lastX;
  const dy = e.clientY - lastY;

  velY = dx * 0.002;
  velX = dy * 0.002;

  rotY += velY;
  rotX += velX;

  lastX = e.clientX;
  lastY = e.clientY;
});

/* ==============================
   ANIMATION LOOP
============================== */
let time = 0;

function animate() {
  time += 0.01;
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  velX *= 0.95;
  velY *= 0.95;

  rotY += velY + 0.0012;
  rotX += velX + 0.0009;

  for (const p of DOTS) {
    const breathe = Math.sin(time + p.phase) * 3;

    const dist = Math.hypot(p.ox, p.oy);
    const surfaceFactor = Math.min(dist / 180, 1);

    const wobbleX = noise(time, p.phase) * p.wobble * surfaceFactor;
    const wobbleY = noise(time + 10, p.phase) * p.wobble * surfaceFactor;
    const wobbleZ = noise(time + 20, p.phase) * p.wobble * surfaceFactor;

    p.x = p.ox * (1 + breathe * 0.002) + wobbleX;
    p.y = p.oy * (1 + breathe * 0.002) + wobbleY;
    p.z = p.oz + breathe + wobbleZ;

    rotateY(p, rotY);
    rotateX(p, rotX);

    const s = project(p);
    ctx.beginPath();
    ctx.fillStyle = colorAt(s.x, s.y);
    ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
    ctx.fill();
  }

  requestAnimationFrame(animate);
}

animate();