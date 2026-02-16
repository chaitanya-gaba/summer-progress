console.log("Dining JS Loaded");

import { restaurantsData } from "./data/restaurants-data.js";

document.addEventListener("DOMContentLoaded", () => {
  initDining();
});

function initDining() {
  const elements = getElements();
  if (!elements.grid) return;

  const state = {
    all: restaurantsData,
    filtered: restaurantsData,
    page: 1,
    perPage: 6
  };

  bindEvents(elements, state);
  render(state, elements);
}

/* ================= ELEMENTS ================= */

function getElements() {
  return {
    grid: document.getElementById("restaurantGrid"),
    search: document.getElementById("restaurantSearch"),
    cuisine: document.getElementById("cuisineFilter"),
    price: document.getElementById("priceFilter"),
    rating: document.getElementById("diningRatingFilter"),
    ratingValue: document.getElementById("diningRatingValue"),
    sort: document.getElementById("sortDining"),
    count: document.getElementById("restaurantCount"),
    empty: document.getElementById("diningEmptyState"),
    prev: document.getElementById("prevDiningPage"),
    next: document.getElementById("nextDiningPage"),
    modal: document.getElementById("globalModal"),
    modalBody: document.getElementById("modalBody"),
    modalClose: document.getElementById("modalClose")
  };
}

/* ================= EVENTS ================= */

function bindEvents(el, state) {

  el.search.addEventListener("input", () => applyFilters(el, state));
  el.cuisine.addEventListener("change", () => applyFilters(el, state));
  el.price.addEventListener("change", () => applyFilters(el, state));

  el.rating.addEventListener("input", () => {
    el.ratingValue.textContent = el.rating.value;
    applyFilters(el, state);
  });

  el.sort.addEventListener("change", () => applyFilters(el, state));

  el.prev.addEventListener("click", () => {
    if (state.page > 1) {
      state.page--;
      render(state, el);
    }
  });

  el.next.addEventListener("click", () => {
    const totalPages = Math.ceil(state.filtered.length / state.perPage);
    if (state.page < totalPages) {
      state.page++;
      render(state, el);
    }
  });

  el.modalClose.addEventListener("click", () => {
    el.modal.style.display = "none";
  });
}

/* ================= FILTERS ================= */

function applyFilters(el, state) {
  const query = el.search.value.toLowerCase();
  const cuisine = el.cuisine.value;
  const price = el.price.value;
  const rating = parseFloat(el.rating.value);

  state.filtered = state.all.filter(r =>
    r.name.toLowerCase().includes(query) &&
    (cuisine === "all" || r.cuisine === cuisine) &&
    (price === "all" || r.price === parseInt(price)) &&
    r.rating >= rating
  );

  sortRestaurants(el.sort.value, state);

  state.page = 1;
  render(state, el);
}

function sortRestaurants(type, state) {
  if (type === "rating") {
    state.filtered.sort((a, b) => b.rating - a.rating);
  }
  if (type === "priceLow") {
    state.filtered.sort((a, b) => a.price - b.price);
  }
  if (type === "priceHigh") {
    state.filtered.sort((a, b) => b.price - a.price);
  }
}

/* ================= RENDER ================= */

function render(state, el) {
  el.grid.innerHTML = "";

  const start = (state.page - 1) * state.perPage;
  const end = start + state.perPage;

  const pageData = state.filtered.slice(start, end);

  if (pageData.length === 0) {
    el.empty.classList.remove("hidden");
  } else {
    el.empty.classList.add("hidden");
  }

  pageData.forEach(r => {
    el.grid.appendChild(createCard(r, el));
  });

  el.count.textContent = state.filtered.length;
}

/* ================= CARD ================= */

function createCard(r, el) {
  const card = document.createElement("div");
  card.className = "restaurant-card";

  card.innerHTML = `
    <img src="${r.image}" alt="${r.name}">
    <div class="restaurant-info">
      <h4>${r.name}</h4>
      <p>${r.cuisine}</p>
      <p>₹${"₹".repeat(r.price)}</p>
      <p>${r.rating} ⭐</p>
    </div>
  `;

  card.addEventListener("click", () => openModal(r, el));

  return card;
}

/* ================= MODAL ================= */

function openModal(r, el) {
  el.modalBody.innerHTML = `
    <h2>${r.name}</h2>
    <p>${r.description}</p>
    <p><strong>Cuisine:</strong> ${r.cuisine}</p>
    <p><strong>Rating:</strong> ${r.rating} ⭐</p>
    <button class="btn-primary" id="confirmBooking">Confirm Booking</button>
  `;

  el.modal.style.display = "flex";

  document.getElementById("confirmBooking").addEventListener("click", () => {
    el.modal.style.display = "none";
    showToast(`Table booked at ${r.name}`, "success");
  });
}

/* ================= TOAST ================= */

function showToast(message, type = "info") {
  const container = document.getElementById("toastContainer");

  const toast = document.createElement("div");
  toast.className = `toast toast-${type}`;
  toast.textContent = message;

  container.appendChild(toast);

  setTimeout(() => toast.remove(), 3000);
}