function updateClock() {
    const now = new Date();

    // Extract hours, minutes, and seconds
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    // Pad with zeros if needed (e.g., 7 → 07)
    hours = hours.toString().padStart(2, '0');
    minutes = minutes.toString().padStart(2, '0');
    seconds = seconds.toString().padStart(2, '0');

    // Update the DOM
    document.querySelector('.hour').textContent = hours;
    document.querySelector('.minute').textContent = minutes;
    document.querySelector('.second').textContent = seconds;
}

// Initial call
updateClock();

// Update every second
setInterval(updateClock, 1000);