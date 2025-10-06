const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");
const labelEl = document.getElementById("match-label");
const countdownContainer = document.getElementById("countdown");

// 🗓 Match schedule
const matchSchedule = [
  {
    label: "1st ODI vs Australia",
    date: new Date(Date.UTC(2025, 9, 19, 3, 30)), // 19 Oct 2025, 09:00 IST
  },
  {
    label: "2nd ODI vs Australia",
    date: new Date(Date.UTC(2025, 9, 22, 3, 30)),
  },
  {
    label: "3rd ODI vs Australia",
    date: new Date(Date.UTC(2025, 9, 25, 3, 30)),
  }
];

function updateCountdown() {
  const now = new Date().getTime();
  const nextMatch = matchSchedule.find(match => match.date.getTime() > now);

  if (!nextMatch) {
    countdownContainer.innerHTML = "<h2>That's a wrap! The tour is over.</h2>";
    labelEl.textContent = "";
    return;
  }

  const timeLeft = nextMatch.date.getTime() - now;

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
  const seconds = Math.floor((timeLeft / 1000) % 60);

  labelEl.textContent = `▶ ${nextMatch.label}`;
  daysEl.textContent = String(days).padStart(2, "0");
  hoursEl.textContent = String(hours).padStart(2, "0");
  minutesEl.textContent = String(minutes).padStart(2, "0");
  secondsEl.textContent = String(seconds).padStart(2, "0");
}

updateCountdown();
setInterval(updateCountdown, 1000);