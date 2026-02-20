import { moviesData } from "./data/movies-data.js";
import { restaurantsData } from "./data/restaurants-data.js";

document.addEventListener("DOMContentLoaded", () => {

  // ── MOVIES ──────────────────────────────────────────
  const movieScroll = document.getElementById("homeMovieScroll");

  if (movieScroll) {
    moviesData.forEach(movie => {
      const card = document.createElement("a");
      card.className = "movie-card";
      card.href = `movie-details.html?id=${movie.id}`;
      card.innerHTML = `
        <img src="${movie.img}" alt="${movie.title}" loading="lazy">
        <div class="movie-info">
          <h4>${movie.title}</h4>
          <p>${movie.genre}</p>
        </div>
      `;
      movieScroll.appendChild(card);
    });
  }

  // ── DINING ──────────────────────────────────────────
  const diningScroll = document.getElementById("homeDiningScroll");

  if (diningScroll) {
    // Show first 6 restaurants as a teaser
    restaurantsData.slice(0, 6).forEach(restaurant => {
      const card = document.createElement("a");
      card.className = "restaurant-card";
      card.href = `dining.html`;
      card.innerHTML = `
        <img src="${restaurant.image}" alt="${restaurant.name}" loading="lazy">
        <div class="restaurant-info">
          <h4>${restaurant.name}</h4>
          <p>${restaurant.cuisine}</p>
          <p>${"₹".repeat(restaurant.price)}</p>
        </div>
      `;
      diningScroll.appendChild(card);
    });
  }

});