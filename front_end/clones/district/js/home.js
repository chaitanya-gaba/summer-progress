import { moviesData }      from "./data/movies-data.js";
import { restaurantsData } from "./data/restaurants-data.js";
import { eventsData }      from "./data/events-data.js";
import { artistsData }     from "./data/artists-data.js";

document.addEventListener("DOMContentLoaded", () => {

  // ── ARTISTS ─────────────────────────────────────────────────
  const artistsScroll = document.getElementById("homeArtistsScroll");
  if (artistsScroll) {
    artistsData.forEach(a => {
      const card = document.createElement("a");
      card.className = "artist-card";
      card.href = `artists.html?id=${a.id}`;
      card.innerHTML = `
        <img class="artist-avatar" src="${a.img}" alt="${a.name}" loading="lazy">
        <div class="artist-name">${a.name}</div>
        <div class="artist-genre">${a.genre}</div>
      `;
      artistsScroll.appendChild(card);
    });
  }

  // ── EVENTS ──────────────────────────────────────────
  const eventsGrid = document.getElementById("homeEventsGrid");
  if (eventsGrid) {
    eventsData.slice(0, 8).forEach(e => {
      const dateStr = new Date(e.date).toLocaleDateString("en-IN", {
        weekday: "short", day: "numeric", month: "short", hour: "2-digit", minute: "2-digit"
      });
      const card = document.createElement("a");
      card.className = "event-poster-card";
      card.href = `event-details.html?id=${e.id}`;
      card.innerHTML = `
        <img src="${e.img}" alt="${e.title}" loading="lazy">
        <div class="event-poster-body">
          <div class="event-poster-date">${dateStr}</div>
          <div class="event-poster-title">${e.title}</div>
          <div class="event-poster-venue">${e.venue}</div>
        </div>
      `;
      eventsGrid.appendChild(card);
    });
  }

  // ── MOVIES ──────────────────────────────────────────
  const movieScroll = document.getElementById("homeMovieScroll");
  if (movieScroll) {
    moviesData.forEach(movie => {
      const card = document.createElement("a");
      card.className = "movie-card";
      card.href = `movie-details.html?id=${movie.id}`;
      card.innerHTML = `
        <img src="${movie.img}" alt="${movie.title}" loading="lazy">
        <h4>${movie.title}</h4>
        <p>${movie.genre}</p>
      `;
      movieScroll.appendChild(card);
    });
  }

  // ── DINING ──────────────────────────────────────────
  const diningScroll = document.getElementById("homeDiningScroll");
  if (diningScroll) {
    restaurantsData.slice(0, 8).forEach(r => {
      const card = document.createElement("a");
      card.className = "restaurant-card";
      card.href = "dining.html";
      card.innerHTML = `
        <img src="${r.image}" alt="${r.name}" loading="lazy">
        <div class="restaurant-info">
          <h4>${r.name}</h4>
          <p>${r.cuisine} · ₹${r.price.toLocaleString()} · ★ ${r.rating}</p>
        </div>
      `;
      diningScroll.appendChild(card);
    });
  }

});