const tiles = document.querySelectorAll('.tile');
const toggle = document.getElementById('toggle');
let enabled = true;

toggle.onclick = () => {
enabled = !enabled;
toggle.textContent = enabled ? "Disable Effect" : "Enable Effect";
tiles.forEach(reset);
};

function reset(tile) {
tile.style.transform = 'rotateX(0) rotateY(0) scale(1)';
tile.style.boxShadow = '0 30px 60px rgba(0,0,0,0.35)';
tile.classList.remove('active');
}

tiles.forEach(tile => {
let rx = 0, ry = 0;

tile.addEventListener('mousemove', e => {
    if (!enabled) return;

    const r = tile.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;

    const targetX = (py - 0.5) * -20;
    const targetY = (px - 0.5) * 20;

    // Inertia
    rx += (targetX - rx) * 0.15;
    ry += (targetY - ry) * 0.15;

    tile.style.transform =
    `rotateX(${rx}deg) rotateY(${ry}deg) scale(1.04)`;

    tile.style.boxShadow =
    `${-ry * 2}px ${rx * 2}px 80px rgba(0,0,0,0.45)`;

    tile.style.setProperty('--x', `${px * 100}%`);
    tile.style.setProperty('--y', `${py * 100}%`);

    tile.classList.add('active');
});

tile.addEventListener('mouseleave', () => reset(tile));
});