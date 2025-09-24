let currentIndex = 0;
const marioRunRun = document.getElementById('marioRun');
const blockWidth = 4;     // in rem
const gap = 0.4;          // in rem
const remToPx = parseFloat(getComputedStyle(document.documentElement).fontSize);
const maxBlocks = document.querySelectorAll('.block').length;

function movemarioToBlock(index) {
  const leftPx = index * (blockWidth + gap) * remToPx;
  marioRun.style.left = `${leftPx}px`;
  // Optional: Add jump effect
  marioRun.style.transition = 'bottom 0.2s ease, left 0.2s ease';
  marioRun.style.bottom = '105%'; // jump up
  setTimeout(() => marioRun.style.bottom = '80%', 210); // fall back
}

document.addEventListener('keydown', (e) => {
  if (e.code === 'Space') {
    e.preventDefault(); // prevent page scroll
    if (currentIndex < maxBlocks - 1) {
      currentIndex++;
      movemarioToBlock(currentIndex);
    }
  }
});