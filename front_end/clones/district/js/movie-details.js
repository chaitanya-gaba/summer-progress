import { moviesData } from "./data/movies-data.js";

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("movieDetailsContainer");

  const params = new URLSearchParams(window.location.search);
  const movieId = parseInt(params.get("id"));

  const movie = moviesData.find(m => m.id === movieId);

  if (!movie) {
    container.innerHTML = "<h2>Movie not found.</h2>";
    return;
  }

  container.innerHTML = `
    <div class="grid-2">
      <div>
        <img src="${movie.img}" 
             alt="${movie.title}" 
             style="width:100%; border-radius:16px;">
      </div>
      <div>
        <h1>${movie.title}</h1>
        <p>${movie.genre}</p>
        <p>${movie.description}</p>
        <button class="btn-primary">Book Now</button>
      </div>
    </div>
  `;
});