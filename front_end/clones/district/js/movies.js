import { moviesData } from "./data/movies-data.js";

document.addEventListener("DOMContentLoaded", () => {
  const moviesContainer = document.getElementById("moviesContainer");
  const searchInput = document.getElementById("movieSearch");
  const searchBtn = document.getElementById("searchBtn");

  if (!moviesContainer) return;

  function renderMovies(data) {
    moviesContainer.innerHTML = "";

    if (data.length === 0) {
      moviesContainer.innerHTML = "<p>No movies found.</p>";
      return;
    }

    data.forEach(movie => {
      moviesContainer.appendChild(createMovieCard(movie));
    });
  }

  function handleSearch() {
    const query = searchInput.value.trim().toLowerCase();

    const filtered = moviesData.filter(movie =>
      movie.title.toLowerCase().includes(query)
    );

    renderMovies(filtered);
  }

  searchBtn.addEventListener("click", handleSearch);

  searchInput.addEventListener("input", handleSearch); // live search

  // Initial render (all movies)
  renderMovies(moviesData);
});

function createMovieCard(movie) {
  const card = document.createElement("a");
  card.classList.add("movie-card");
  card.href = `movie-details.html?id=${movie.id}`;

  card.innerHTML = `
    <img src="${movie.img}" alt="${movie.title}">
    <div class="movie-info">
      <h4>${movie.title}</h4>
      <p>${movie.genre}</p>
    </div>
  `;

  return card;
}

const params = new URLSearchParams(window.location.search);
const searchParam = params.get("search");

if (searchParam) {
  searchInput.value = searchParam;
  handleSearch();
}