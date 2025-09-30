// Get the clock element and hand elements
const clock = document.querySelector('.clock');
const hourHand = document.querySelector('.hour-hand');
const minuteHand = document.querySelector('.minute-hand');
const secondHand = document.querySelector('.second-hand');

// ---- JOB 1: Create the sticks ----
for (let i = 0; i < 60; i++) {
    // Only create a stick if it is NOT a multiple of 5 (the hour marks)
    if (i % 5 !== 0) {
        let stick = document.createElement('div');
        stick.className = 'stick'; 
        stick.style.transform = `rotate(${6 * i}deg)`;
        clock.appendChild(stick);
    }
}

// ---- JOB 2: Move the hands ----
function setClock() {
    const now = new Date();

    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();

    const secondsDegrees = seconds * 6;
    const minutesDegrees = (minutes * 6) + (seconds / 10);
    const hoursDegrees = (hours * 30) + (minutes / 2);

    // --- The Fix for the "Backward Leap" ---
    // If the second hand is at the 0-second mark, temporarily disable its transition
    if (secondsDegrees === 0) {
        secondHand.style.transition = 'none';
    } else {
        secondHand.style.transition = 'transform 0.5s cubic-bezier(0.4, 2.5, 0.6, 1)';
    }

    // Do the same for the minute hand
    if (minutesDegrees === 0) {
        minuteHand.style.transition = 'none';
    } else {
        minuteHand.style.transition = 'transform 0.5s cubic-bezier(0.4, 2.5, 0.6, 1)';
    }
    // ------------------------------------

    secondHand.style.transform = `translateX(-50%) rotate(${secondsDegrees}deg)`;
    minuteHand.style.transform = `translateX(-50%) rotate(${minutesDegrees}deg)`;
    hourHand.style.transform = `translateX(-50%) rotate(${hoursDegrees}deg)`;
}

// Run the clock
setInterval(setClock, 1000);
setClock();

// ---- Dark Mode Toggle ----
document.body.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});