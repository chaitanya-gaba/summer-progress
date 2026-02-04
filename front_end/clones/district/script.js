document.querySelector(".search-wrapper button")
  .addEventListener("click", () => {
    const value = document.querySelector(".search-wrapper input").value;
    if (!value) return;
    console.log("Searching:", value);
  });

  const input = document.querySelector(".search-wrapper input");

input.addEventListener("focus", () => {
  input.style.boxShadow = "0 0 0 3px rgba(109,40,217,0.15)";
});

input.addEventListener("blur", () => {
  input.style.boxShadow = "none";
});