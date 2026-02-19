const hero = document.querySelector(".hero");

// window.addEventListener("mousemove", (e) => {
//   const x = (window.innerWidth / 2 - e.clientX) / 40;
//   const y = (window.innerHeight / 2 - e.clientY) / 40;

//   hero.style.backgroundPosition = `${50 + x}% ${50 + y}%`;
// });

window.addEventListener("mousemove", (e) => {
  const x = (window.innerWidth / 2 - e.clientX) / 50;
  const y = (window.innerHeight / 2 - e.clientY) / 50;

  hero.style.backgroundPosition = `${50 + x}% ${50 + y}%`;
});