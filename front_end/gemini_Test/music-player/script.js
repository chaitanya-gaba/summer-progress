// Element references
const audio = document.getElementById('audio');
const playBtn = document.getElementById('play');
const pauseBtn = document.getElementById('pause');
const progress = document.getElementById('progress');
const progressContainer = document.getElementById('progress-container');
const timer = document.getElementById('timer');

// Format seconds to mm:ss
function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

// Update progress bar and timer while audio plays
audio.addEventListener('timeupdate', () => {
    if (audio.duration) {
        const percent = (audio.currentTime / audio.duration) * 100;
        progress.style.width = `${percent}%`;

        timer.textContent = `${formatTime(audio.currentTime)} / ${formatTime(audio.duration)}`;
    }
});

// Seek when user clicks on progress bar
progressContainer.addEventListener('click', (e) => {
    const width = progressContainer.clientWidth;
    const clickX = e.offsetX;
    const duration = audio.duration;

    if (duration) {
        audio.currentTime = (clickX / width) * duration;
    }
});

// Play button
playBtn.addEventListener('click', () => {
    audio.play();
});

// Pause button
pauseBtn.addEventListener('click', () => {
    audio.pause();
});