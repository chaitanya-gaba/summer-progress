const cursor = document.querySelector(".cursor-glow");

window.addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
  cursor.style.opacity = "1";
});

window.addEventListener("mouseleave", () => {
  cursor.style.opacity = "0";
});