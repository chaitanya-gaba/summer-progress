import { eventsData } from "./data/events-data.js";

/* =====================================================
   SAVED EVENTS — persisted to localStorage
===================================================== */
const savedEvents = new Set(
  JSON.parse(localStorage.getItem("savedEvents") || "[]")
);

/* =====================================================
   COUNTDOWN — single interval, never duplicated
===================================================== */
let countdownInterval = null;

function startCountdowns() {
  // Clear any existing interval before starting a new one
  if (countdownInterval) clearInterval(countdownInterval);

  function tick() {
    document.querySelectorAll(".event-countdown[data-date]").forEach(el => {
      const diff = new Date(el.dataset.date).getTime() - Date.now();

      if (diff <= 0) {
        el.innerHTML = `<span class="countdown-live">Live Now!</span>`;
        return;
      }

      const days  = Math.floor(diff / 86400000);
      const hours = Math.floor((diff % 86400000) / 3600000);
      const mins  = Math.floor((diff % 3600000) / 60000);
      const secs  = Math.floor((diff % 60000) / 1000);

      const d = el.querySelector(".cd-days");
      const h = el.querySelector(".cd-hours");
      const m = el.querySelector(".cd-mins");
      const s = el.querySelector(".cd-secs");

      if (d) d.textContent = String(days).padStart(2, "0");
      if (h) h.textContent = String(hours).padStart(2, "0");
      if (m) m.textContent = String(mins).padStart(2, "0");
      if (s) s.textContent = String(secs).padStart(2, "0");
    });
  }

  tick();
  countdownInterval = setInterval(tick, 1000);
}

/* =====================================================
   BOOKMARK
===================================================== */
function toggleBookmark(id, btn) {
  if (savedEvents.has(id)) {
    savedEvents.delete(id);
    btn.classList.remove("saved");
    btn.querySelector("svg").setAttribute("fill", "none");
    if (typeof showToast === "function") showToast("Removed from saved", "info");
  } else {
    savedEvents.add(id);
    btn.classList.add("saved");
    btn.querySelector("svg").setAttribute("fill", "currentColor");
    if (typeof showToast === "function") showToast("Event saved! ⭐", "success");
  }
  localStorage.setItem("savedEvents", JSON.stringify([...savedEvents]));
}

/* =====================================================
   CARD
===================================================== */
function createEventCard(event) {
  const isSaved = savedEvents.has(event.id);
  const card = document.createElement("div");
  card.className = "event-card";

  const dateStr = new Date(event.date).toLocaleDateString("en-IN", {
    day: "numeric", month: "short", year: "numeric"
  });

  card.innerHTML = `
    <div class="event-card-img">
      <img src="${event.img}" alt="${event.title}" loading="lazy">
      <span class="event-badge">${event.category}</span>
      <button class="bookmark-btn ${isSaved ? "saved" : ""}" data-id="${event.id}" aria-label="Save event">
        <svg width="16" height="16" viewBox="0 0 24 24"
             fill="${isSaved ? "currentColor" : "none"}"
             stroke="currentColor" stroke-width="2">
          <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/>
        </svg>
      </button>
    </div>
    <div class="event-card-body">
      <div class="event-card-title">${event.title}</div>
      <div class="event-card-venue">📍 ${event.venue}</div>
      <div class="event-card-venue">📅 ${dateStr}</div>
      <div class="event-countdown" data-date="${event.date}">
        <div class="countdown-unit"><span class="cd-days">--</span><small>Days</small></div>
        <div class="countdown-unit"><span class="cd-hours">--</span><small>Hrs</small></div>
        <div class="countdown-unit"><span class="cd-mins">--</span><small>Min</small></div>
        <div class="countdown-unit"><span class="cd-secs">--</span><small>Sec</small></div>
      </div>
      <div class="event-card-footer">
        <span class="event-price">₹${event.price.toLocaleString()}</span>
        <a href="event-details.html?id=${event.id}"
           class="btn-primary"
           style="font-size:13px;padding:7px 16px"
           onclick="event.stopPropagation()">Book Now</a>
      </div>
    </div>
  `;

  card.querySelector(".bookmark-btn").addEventListener("click", (e) => {
    e.stopPropagation();
    toggleBookmark(event.id, card.querySelector(".bookmark-btn"));
  });

  card.addEventListener("click", () => {
    window.location.href = `event-details.html?id=${event.id}`;
  });

  return card;
}

/* =====================================================
   FILTERS & SORT
===================================================== */
function applyFilters(el, state) {
  const query    = el.search.value.toLowerCase();
  const maxPrice = parseInt(el.priceMax.value);

  state.filtered = state.all.filter(e =>
    (state.activeCategory === "all" || e.category === state.activeCategory) &&
    e.title.toLowerCase().includes(query) &&
    e.price <= maxPrice
  );

  const sort = el.sort.value;
  if (sort === "date")      state.filtered.sort((a, b) => new Date(a.date) - new Date(b.date));
  if (sort === "priceLow")  state.filtered.sort((a, b) => a.price - b.price);
  if (sort === "priceHigh") state.filtered.sort((a, b) => b.price - a.price);

  render(state, el);
}

function clearFilters(el, state) {
  el.search.value        = "";
  el.priceMax.value      = 5000;
  el.priceLabel.textContent = "₹5000";
  el.sort.value          = "date";
  state.activeCategory   = "all";
  document.querySelectorAll(".tab-btn").forEach(t => t.classList.remove("active"));
  document.querySelector('.tab-btn[data-category="all"]')?.classList.add("active");
  applyFilters(el, state);
}

/* =====================================================
   RENDER
===================================================== */
function render(state, el) {
  el.grid.innerHTML = "";

  if (state.filtered.length === 0) {
    el.empty.classList.remove("hidden");
    el.count.textContent = 0;
    return;
  }

  el.empty.classList.add("hidden");
  el.count.textContent = state.filtered.length;
  state.filtered.forEach(event => el.grid.appendChild(createEventCard(event)));

  // Start countdown ONCE after render — single interval managed above
  startCountdowns();
}

/* =====================================================
   DRAWER HELPERS
===================================================== */
function openDrawer(el) {
  el.overlay.classList.add("open");
  el.drawer.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeDrawer(el) {
  el.overlay.classList.remove("open");
  el.drawer.classList.remove("open");
  document.body.style.overflow = "";
}

/* =====================================================
   INIT
===================================================== */
document.addEventListener("DOMContentLoaded", () => {
  const state = {
    all: eventsData,
    filtered: [...eventsData],
    activeCategory: "all"
  };

  const el = {
    grid:             document.getElementById("eventsGrid"),
    empty:            document.getElementById("eventsEmpty"),
    count:            document.getElementById("eventCount"),
    search:           document.getElementById("eventSearch"),
    priceMax:         document.getElementById("priceMaxFilter"),
    priceLabel:       document.getElementById("priceMaxLabel"),
    sort:             document.getElementById("sortEvents"),
    clearBtn:         document.getElementById("clearEventFilters"),
    tabs:             document.querySelectorAll(".tab-btn"),
    toggleBtn:        document.getElementById("eventFilterToggle"),
    overlay:          document.getElementById("eventDrawerOverlay"),
    drawer:           document.getElementById("eventFilterDrawer"),
    drawerClose:      document.getElementById("eventDrawerClose"),
    drawerSearch:     document.getElementById("drawerEventSearch"),
    drawerPrice:      document.getElementById("drawerPriceMax"),
    drawerPriceLabel: document.getElementById("drawerPriceLabel"),
    drawerSort:       document.getElementById("drawerSortEvents"),
    drawerClear:      document.getElementById("drawerEventClear"),
    drawerApply:      document.getElementById("drawerEventApply"),
  };

  if (!el.grid) return;

  // Category tabs
  el.tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      el.tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      state.activeCategory = tab.dataset.category;
      applyFilters(el, state);
    });
  });

  // Sidebar filters
  el.search.addEventListener("input",  () => applyFilters(el, state));
  el.sort.addEventListener("change",   () => applyFilters(el, state));
  el.priceMax.addEventListener("input", () => {
    el.priceLabel.textContent = `₹${el.priceMax.value}`;
    applyFilters(el, state);
  });
  el.clearBtn?.addEventListener("click", () => clearFilters(el, state));

  // Drawer
  el.toggleBtn?.addEventListener("click", () => openDrawer(el));
  el.drawerClose?.addEventListener("click", () => closeDrawer(el));
  el.overlay?.addEventListener("click", () => closeDrawer(el));

  el.drawerPrice?.addEventListener("input", () => {
    el.drawerPriceLabel.textContent = `₹${el.drawerPrice.value}`;
  });

  el.drawerApply?.addEventListener("click", () => {
    // Sync drawer values → sidebar inputs, then trigger filter
    el.search.value   = el.drawerSearch.value;
    el.priceMax.value = el.drawerPrice.value;
    el.priceLabel.textContent = `₹${el.drawerPrice.value}`;
    el.sort.value     = el.drawerSort.value;
    applyFilters(el, state);
    closeDrawer(el);
    if (typeof showToast === "function") showToast("Filters applied!", "success");
  });

  el.drawerClear?.addEventListener("click", () => {
    el.drawerSearch.value         = "";
    el.drawerPrice.value          = 5000;
    el.drawerPriceLabel.textContent = "₹5000";
    el.drawerSort.value           = "date";
  });

  // Initial render
  applyFilters(el, state);
});