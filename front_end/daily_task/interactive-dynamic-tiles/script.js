const tiles = document.querySelectorAll('.tile');
let tiltEnabled = true;

const toggleButton = document.querySelector('.toggle-button');
toggleButton.addEventListener('click', () => {
tiltEnabled = !tiltEnabled;
toggleButton.textContent = tiltEnabled ? 'Disable Tilt Effect' : 'Enable Tilt Effect';

// Reset all tiles when disabling
if(!tiltEnabled){
    tiles.forEach(tile => {
    tile.style.transform = 'rotateX(0deg) rotateY(0deg)';
    tile.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
    });
}
});

tiles.forEach(tile => {
tile.addEventListener('mousemove', e => {
    if(!tiltEnabled) return; // Exit if effect disabled

    const rect = tile.getBoundingClientRect();
    const x = e.clientX - rect.left; // cursor x inside tile
    const y = e.clientY - rect.top;  // cursor y inside tile
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / rect.height) * -15; // max 15deg tilt
    const rotateY = ((x - centerX) / rect.width) * 15;

    // Shadow moves opposite to cursor for depth
    const shadowX = ((x - centerX) / rect.width) * 30;
    const shadowY = ((y - centerY) / rect.height) * 30;

    tile.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    tile.style.boxShadow = `${-shadowX}px ${-shadowY}px 40px rgba(0,0,0,0.2)`;
});

tile.addEventListener('mouseleave', () => {
    tile.style.transform = 'rotateX(0deg) rotateY(0deg)';
    tile.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
});
});