// Load saved data from localStorage
let punchInData = localStorage.getItem("punchIn");
let punchOutData = localStorage.getItem("punchOut");

const punchInTimeEl = document.getElementById("punchInTime");
const punchOutTimeEl = document.getElementById("punchOutTime");
const statusEl = document.getElementById("status");

// Show saved values on page load
if (punchInData) punchInTimeEl.textContent = punchInData;
if (punchOutData) punchOutTimeEl.textContent = punchOutData;

if (punchInData && !punchOutData) {
    statusEl.textContent = "Punched In";
    statusEl.style.color = "#4caf50";
} else if (punchOutData) {
    statusEl.textContent = "Completed";
    statusEl.style.color = "#f44336";
}

// Punch In
document.getElementById("punchInBtn").addEventListener("click", () => {
    if (localStorage.getItem("punchIn")) {
        alert("You have already punched in!");
        return;
    }

    let now = new Date();
    let timeString = now.toLocaleString();

    localStorage.setItem("punchIn", timeString);
    punchInTimeEl.textContent = timeString;

    statusEl.textContent = "Punched In";
    statusEl.style.color = "#4caf50";
});

// Punch Out
document.getElementById("punchOutBtn").addEventListener("click", () => {
    if (!localStorage.getItem("punchIn")) {
        alert("You must punch in first!");
        return;
    }

    if (localStorage.getItem("punchOut")) {
        alert("You have already punched out!");
        return;
    }

    let now = new Date();
    let timeString = now.toLocaleString();

    localStorage.setItem("punchOut", timeString);
    punchOutTimeEl.textContent = timeString;

    statusEl.textContent = "Completed";
    statusEl.style.color = "#f44336";
});