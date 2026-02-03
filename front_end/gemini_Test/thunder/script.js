const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const flash = document.getElementById("flash");

function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
window.addEventListener("resize", resize);
resize();

/* Fractal lightning */
function drawBolt(x, y, length, angle, depth) {
    if (depth <= 0 || length < 8) return;

    const x2 = x + Math.cos(angle) * length;
    const y2 = y + Math.sin(angle) * length;

    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x2, y2);
    ctx.stroke();

    drawBolt(
        x2,
        y2,
        length * (0.6 + Math.random() * 0.15),
        angle + (Math.random() - 0.5) * 0.25,
        depth - 1
    );

    if (Math.random() < 0.6) {
        drawBolt(
            x2,
            y2,
            length * 0.45,
            angle + (Math.random() - 0.5) * 1.2,
            depth - 2
        );
    }
}

function strikeCluster() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.strokeStyle = "rgba(255,255,255,0.95)";
    ctx.lineWidth = 1.8;
    ctx.shadowBlur = 35;
    ctx.shadowColor = "rgba(170,210,255,0.9)";

    const bolts = 2 + Math.floor(Math.random() * 4); // multiple bolts

    for (let i = 0; i < bolts; i++) {
        const startX = canvas.width * (0.15 + Math.random() * 0.7);
        drawBolt(startX, -20, canvas.height * 0.9, Math.PI / 2, 7);
    }

    flash.style.opacity = 0.85;

    // secondary flicker
    setTimeout(() => {
        flash.style.opacity = 0.4;
    }, 80);

    setTimeout(() => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        flash.style.opacity = 0;
    }, 180);
}

function stormLoop() {
    strikeCluster();

    // occasional rapid follow-up strike
    if (Math.random() < 0.4) {
        setTimeout(strikeCluster, 300);
    }

    setTimeout(stormLoop, 2000 + Math.random() * 4000);
}

setTimeout(stormLoop, 1500);