const searchWrapper = document.querySelector(".search-wrapper");
const searchToggle = document.querySelector(".search-toggle");
const searchInput = document.querySelector("#menu-search");

searchToggle.addEventListener("click", () => {
  searchWrapper.classList.toggle("active");
  if (searchWrapper.classList.contains("active")) {
    searchInput.focus();
  }
});

document.addEventListener("click", (e) => {
  if (!searchWrapper.contains(e.target)) {
    searchWrapper.classList.remove("active");
  }
});