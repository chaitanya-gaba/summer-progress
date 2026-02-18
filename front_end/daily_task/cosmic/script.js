const canvas = document.getElementById("universe");
const ctx = canvas.getContext("2d");

let w, h;
function resize() {
  w = canvas.width = window.innerWidth;
  h = canvas.height = window.innerHeight;
}
resize();
window.addEventListener("resize", resize);

let mouse = { x: w/2, y: h/2 };
window.addEventListener("mousemove", e => {
  mouse.x = e.clientX;
  mouse.y = e.clientY;
});

class Star {
  constructor() {
    this.reset();
  }
  reset() {
    this.x = Math.random() * w;
    this.y = Math.random() * h;
    this.z = Math.random() * w;
    this.size = Math.random() * 2;
  }
  update() {
    this.z -= 2;
    if (this.z <= 0) this.reset();
  }
  draw() {
    let px = (this.x - w/2) * (w / this.z) + w/2;
    let py = (this.y - h/2) * (w / this.z) + h/2;

    let dx = px - mouse.x;
    let dy = py - mouse.y;
    let dist = Math.sqrt(dx*dx + dy*dy);
    let glow = Math.max(0, 150 - dist) / 150;

    ctx.beginPath();
    ctx.arc(px, py, this.size + glow*3, 0, Math.PI*2);
    ctx.fillStyle = `rgba(255,255,255,${1 - this.z/w + glow})`;
    ctx.fill();
  }
}

let stars = [];
for (let i = 0; i < 1200; i++) {
  stars.push(new Star());
}

/* Shooting stars */
let shootingStars = [];
function createShootingStar() {
  shootingStars.push({
    x: Math.random()*w,
    y: 0,
    len: Math.random()*80+10,
    speed: Math.random()*10+6,
    size: Math.random()*2+1
  });
}
setInterval(createShootingStar, 2000);

function drawShootingStars() {
  shootingStars.forEach((s, i) => {
    ctx.beginPath();
    ctx.moveTo(s.x, s.y);
    ctx.lineTo(s.x - s.len, s.y + s.len);
    ctx.strokeStyle = "white";
    ctx.lineWidth = s.size;
    ctx.stroke();
    s.x += s.speed;
    s.y += s.speed;
    if (s.y > h) shootingStars.splice(i,1);
  });
}

/* Nebula */
function drawNebula() {
  let gradient = ctx.createRadialGradient(
    mouse.x, mouse.y, 0,
    mouse.x, mouse.y, 600
  );
  gradient.addColorStop(0, "rgba(0,200,255,0.15)");
  gradient.addColorStop(0.5, "rgba(255,0,200,0.08)");
  gradient.addColorStop(1, "transparent");
  ctx.fillStyle = gradient;
  ctx.fillRect(0,0,w,h);
}

function animate() {
  ctx.fillStyle = "rgba(0,0,20,0.4)";
  ctx.fillRect(0,0,w,h);

  drawNebula();

  stars.forEach(star => {
    star.update();
    star.draw();
  });

  drawShootingStars();

  requestAnimationFrame(animate);
}

animate();