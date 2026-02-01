const canvas = document.getElementById("heart");
const ctx = canvas.getContext("2d");

const dpr = window.devicePixelRatio || 1;
const w = canvas.parentElement.clientWidth;
const h = canvas.parentElement.clientHeight;
canvas.width = w * dpr;
canvas.height = h * dpr;
ctx.scale(dpr, dpr);

ctx.strokeStyle = "rgba(220,220,220,0.15)";
ctx.lineWidth = 1;

let lines = [];

function createLine() {
  const points = [];
  let x = w / 2 + (Math.random() - 0.5) * 40;
  let y = h / 2 + (Math.random() - 0.5) * 40;

  for (let i = 0; i < 120; i++) {
    x += (Math.random() - 0.5) * 6;
    y += (Math.random() - 0.5) * 6;

    // keep it trapped
    x = Math.max(20, Math.min(w - 20, x));
    y = Math.max(20, Math.min(h - 20, y));

    points.push({ x, y });
  }

  return points;
}

for (let i = 0; i < 18; i++) {
  lines.push(createLine());
}

function draw() {
  ctx.fillStyle = "rgba(0,0,0,0.08)";
  ctx.fillRect(0, 0, w, h);

  lines.forEach((line, idx) => {
    ctx.beginPath();
    line.forEach((p, i) => {
      if (i === 0) ctx.moveTo(p.x, p.y);
      else ctx.lineTo(p.x, p.y);
    });
    ctx.stroke();

    // slowly decay and redraw
    if (Math.random() < 0.01) {
      lines[idx] = createLine();
    }
  });

  requestAnimationFrame(draw);
}

draw();