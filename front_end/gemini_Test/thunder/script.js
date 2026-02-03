const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const flash = document.getElementById("flash");

function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
window.addEventListener("resize", resize);
resize();

/* Draw a single zig-zag lightning bolt */
function drawZigZagBolt(startX, startY, endY) {
    let x = startX;
    let y = startY;

    ctx.beginPath();
    ctx.moveTo(x, y);

    const segments = 20 + Math.floor(Math.random() * 10);
    for (let i = 0; i < segments; i++) {
        const segmentHeight = (endY - startY) / segments;
        const dx = (Math.random() - 0.5) * 40; // zig-zag amplitude
        const dy = segmentHeight;

        x += dx;
        y += dy;

        ctx.lineTo(x, y);
    }

    ctx.stroke();
}

/* Strike cluster with multiple bolts */
function strikeCluster() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.strokeStyle = "rgba(255,255,255,0.95)";
    ctx.lineWidth = 1.6;
    ctx.shadowBlur = 35;
    ctx.shadowColor = "rgba(180,220,255,0.9)";

    // Generate 5–10 random bolts across the sky
    const bolts = 5 + Math.floor(Math.random() * 6);
    for (let i = 0; i < bolts; i++) {
        const startX = canvas.width * Math.random();
        drawZigZagBolt(startX, -20, canvas.height * 0.7); // hits ground
    }

    // Flash effect
    flash.style.opacity = 0.9;
    setTimeout(() => flash.style.opacity = 0.4, 80);
    setTimeout(() => flash.style.opacity = 0, 180);
}

/* Storm loop */
function stormLoop() {
    strikeCluster();

    // occasional rapid follow-up strike
    if (Math.random() < 0.5) setTimeout(strikeCluster, 250);

    setTimeout(stormLoop, 2000 + Math.random() * 3000);
}

setTimeout(stormLoop, 1200);