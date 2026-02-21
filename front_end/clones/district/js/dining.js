import { restaurantsData } from "./data/restaurants-data.js";

document.addEventListener("DOMContentLoaded", () => {
  initDining();
  initFilterDrawer();
});

/* =====================================================
   ELEMENTS
===================================================== */
function getElements() {
  return {
    grid:        document.getElementById("restaurantGrid"),
    search:      document.getElementById("restaurantSearch"),
    cuisine:     document.getElementById("cuisineFilter"),
    price:       document.getElementById("priceFilter"),
    rating:      document.getElementById("diningRatingFilter"),
    ratingValue: document.getElementById("diningRatingValue"),
    sort:        document.getElementById("sortDining"),
    count:       document.getElementById("restaurantCount"),
    empty:       document.getElementById("diningEmptyState"),
    prev:        document.getElementById("prevDiningPage"),
    next:        document.getElementById("nextDiningPage"),
    clearBtn:    document.getElementById("clearDiningFilters"),
    modal:       document.getElementById("globalModal"),
    modalBody:   document.getElementById("modalBody"),
    modalClose:  document.getElementById("modalClose"),
  };
}

/* =====================================================
   MAIN INIT
===================================================== */
function initDining() {
  const el = getElements();
  if (!el.grid) return;

  const state = {
    all:      restaurantsData,
    filtered: restaurantsData,
    page:     1,
    perPage:  6,
  };

  bindEvents(el, state);
  render(state, el);
}

/* =====================================================
   BIND EVENTS
===================================================== */
function bindEvents(el, state) {
  el.search.addEventListener("input",   () => applyFilters(el, state));
  el.cuisine.addEventListener("change", () => applyFilters(el, state));
  el.price.addEventListener("change",   () => applyFilters(el, state));
  el.sort.addEventListener("change",    () => applyFilters(el, state));

  el.rating.addEventListener("input", () => {
    el.ratingValue.textContent = parseFloat(el.rating.value).toFixed(1);
    applyFilters(el, state);
  });

  el.prev.addEventListener("click", () => {
    if (state.page > 1) { state.page--; render(state, el); }
  });

  el.next.addEventListener("click", () => {
    const totalPages = Math.ceil(state.filtered.length / state.perPage);
    if (state.page < totalPages) { state.page++; render(state, el); }
  });

  el.clearBtn?.addEventListener("click", () => clearFilters(el, state));

  el.modalClose?.addEventListener("click", () => el.modal.style.display = "none");
  el.modal?.addEventListener("click", (e) => {
    if (e.target === el.modal) el.modal.style.display = "none";
  });
}

/* =====================================================
   FILTER DRAWER (mobile)
===================================================== */
function initFilterDrawer() {
  const overlay       = document.getElementById("filterDrawerOverlay");
  const drawer        = document.getElementById("filterDrawer");
  const toggleBtn     = document.getElementById("filterToggleBtn");
  const closeBtn      = document.getElementById("filterDrawerClose");
  const applyBtn      = document.getElementById("drawerApplyBtn");
  const clearBtn      = document.getElementById("drawerClearBtn");
  const drawerSearch  = document.getElementById("drawerSearch");
  const drawerCuisine = document.getElementById("drawerCuisine");
  const drawerPrice   = document.getElementById("drawerPrice");
  const drawerRating  = document.getElementById("drawerRating");
  const drawerRatingVal = document.getElementById("drawerRatingValue");

  if (!toggleBtn || !drawer) return;

  const openDrawer = () => {
    overlay.classList.add("open");
    drawer.classList.add("open");
    document.body.style.overflow = "hidden";
  };

  const closeDrawer = () => {
    overlay.classList.remove("open");
    drawer.classList.remove("open");
    document.body.style.overflow = "";
  };

  drawerRating?.addEventListener("input", () => {
    drawerRatingVal.textContent = parseFloat(drawerRating.value).toFixed(1);
  });

  toggleBtn.addEventListener("click", openDrawer);
  closeBtn?.addEventListener("click", closeDrawer);
  overlay?.addEventListener("click", closeDrawer);

  // Apply: sync drawer → sidebar, then fire existing filter logic
  applyBtn?.addEventListener("click", () => {
    document.getElementById("restaurantSearch").value  = drawerSearch.value;
    document.getElementById("cuisineFilter").value     = drawerCuisine.value;
    document.getElementById("priceFilter").value       = drawerPrice.value;
    document.getElementById("diningRatingFilter").value = drawerRating.value;
    document.getElementById("diningRatingValue").textContent = drawerRatingVal.textContent;

    // Trigger filter via the existing sidebar listener
    document.getElementById("restaurantSearch").dispatchEvent(new Event("input"));

    closeDrawer();
    if (typeof showToast === "function") showToast("Filters applied!", "success");
  });

  // Clear drawer inputs only (sidebar state unchanged until Apply)
  clearBtn?.addEventListener("click", () => {
    drawerSearch.value            = "";
    drawerCuisine.value           = "all";
    drawerPrice.value             = "all";
    drawerRating.value            = 0;
    drawerRatingVal.textContent   = "0";
  });
}

/* =====================================================
   FILTERS
===================================================== */
function applyFilters(el, state) {
  const query   = el.search.value.toLowerCase();
  const cuisine = el.cuisine.value;
  const price   = el.price.value;
  const rating  = parseFloat(el.rating.value);

  state.filtered = state.all.filter(r =>
    r.name.toLowerCase().includes(query) &&
    (cuisine === "all" || r.cuisine === cuisine) &&
    (price   === "all" || r.price === parseInt(price)) &&
    r.rating >= rating
  );

  const sort = el.sort.value;
  if (sort === "rating")    state.filtered.sort((a, b) => b.rating - a.rating);
  if (sort === "priceLow")  state.filtered.sort((a, b) => a.price - b.price);
  if (sort === "priceHigh") state.filtered.sort((a, b) => b.price - a.price);

  state.page = 1;
  render(state, el);
}

function clearFilters(el, state) {
  el.search.value            = "";
  el.cuisine.value           = "all";
  el.price.value             = "all";
  el.rating.value            = 0;
  el.ratingValue.textContent = "0";
  el.sort.value              = "popular";
  state.filtered             = state.all;
  state.page                 = 1;
  render(state, el);
}

/* =====================================================
   RENDER
===================================================== */
function render(state, el) {
  el.grid.innerHTML = "";

  const start    = (state.page - 1) * state.perPage;
  const pageData = state.filtered.slice(start, start + state.perPage);

  if (pageData.length === 0) {
    el.empty?.classList.remove("hidden");
  } else {
    el.empty?.classList.add("hidden");
    pageData.forEach(r => el.grid.appendChild(createCard(r, el)));
  }

  el.count.textContent = state.filtered.length;
  el.prev.disabled     = state.page === 1;
  el.next.disabled     = state.page >= Math.ceil(state.filtered.length / state.perPage);
}

/* =====================================================
   CARD
===================================================== */
function createCard(r, el) {
  const card = document.createElement("div");
  card.className = "restaurant-card";
  card.innerHTML = `
    <img src="${r.image}" alt="${r.name}" loading="lazy">
    <div class="restaurant-info">
      <h4>${r.name}</h4>
      <p>${r.cuisine}</p>
      <p>${"₹".repeat(r.price)}</p>
      <p>${r.rating} ⭐</p>
    </div>
  `;
  card.addEventListener("click", () => openModal(r, el));
  return card;
}

/* =====================================================
   MODAL
===================================================== */
function openModal(r, el) {
  el.modalBody.innerHTML = `
    <h2>${r.name}</h2>
    <p>${r.description}</p>
    <p><strong>Cuisine:</strong> ${r.cuisine}</p>
    <p><strong>Rating:</strong> ${r.rating} ⭐</p>
    <p><strong>Price:</strong> ${"₹".repeat(r.price)}</p>
    <button class="btn-primary" id="confirmBooking">Confirm Booking</button>
  `;
  el.modal.style.display = "flex";

  document.getElementById("confirmBooking").addEventListener("click", () => {
    el.modal.style.display = "none";
    if (typeof showToast === "function") showToast(`Table booked at ${r.name}! 🎉`, "success");
  });
}