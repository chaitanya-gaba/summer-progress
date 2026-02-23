import { moviesData } from "./data/movies-data.js";

document.addEventListener("DOMContentLoaded", () => {
  const moviesContainer = document.getElementById("moviesContainer");
  const searchInput     = document.getElementById("movieSearch");
  const searchBtn       = document.getElementById("searchBtn");

  if (!moviesContainer) return;

  function renderMovies(data) {
    moviesContainer.innerHTML = "";

    if (data.length === 0) {
      moviesContainer.innerHTML = `<p class="text-muted" style="padding:40px 0">No movies found for your search.</p>`;
      return;
    }

    data.forEach(movie => moviesContainer.appendChild(createMovieCard(movie)));
  }

  function createMovieCard(movie) {
    const card = document.createElement("a");
    card.classList.add("movie-card");
    card.href = `movie-details.html?id=${movie.id}`;
    card.innerHTML = `
      <img src="${movie.img}" alt="${movie.title}" loading="lazy">
      <div class="movie-info">
        <h4>${movie.title}</h4>
        <p>${movie.genre}</p>
      </div>
    `;
    return card;
  }

  function handleSearch() {
    const query = searchInput.value.trim().toLowerCase();
    const filtered = moviesData.filter(movie =>
      movie.title.toLowerCase().includes(query)
    );
    renderMovies(filtered);
  }

  searchBtn.addEventListener("click", handleSearch);
  searchInput.addEventListener("input", handleSearch);

  // Check URL param FIRST — before any render — so there's no flash
  const params      = new URLSearchParams(window.location.search);
  const searchParam = params.get("search");

  if (searchParam) {
    // Pre-fill the input and filter immediately — never renders all movies first
    searchInput.value = searchParam;
    handleSearch();
  } else {
    renderMovies(moviesData);
  }
});