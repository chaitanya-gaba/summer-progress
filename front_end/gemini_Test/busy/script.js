// Wait 30 seconds before playing
const button = document.getElementById("startBtn");
  const music = document.getElementById("bgmusic");

  button.addEventListener("click", () => {
    button.innerText = "✨ Scene loading...";
    button.disabled = true;

    // Now the browser knows user interacted, so we can play later
    setTimeout(() => {
      music.play().catch(err => console.log("Autoplay blocked:", err));
    }, 0);
  });