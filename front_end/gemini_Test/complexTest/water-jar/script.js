const statusText = document.querySelector('.loading-text');

let filling = false;

setInterval(() => {
  statusText.textContent = filling ? "Filling Up..." : "De-Filling...";
  filling = !filling;
}, 2000); // Matches your animation timing (half of 4s)