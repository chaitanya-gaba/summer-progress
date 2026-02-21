import { eventsData } from "./data/events-data.js";
import { moviesData }  from "./data/movies-data.js";
import { restaurantsData } from "./data/restaurants-data.js";

// Mock booking history
const bookingsData = [
  { id: 1, type: "movie",  title: "Interstellar",      subtitle: "Row D · Seat 4, 5",    amount: 580,  img: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba", date: "12 Jan 2026" },
  { id: 2, type: "dining", title: "Olive Garden",       subtitle: "Table for 2 · 8:00 PM", amount: 2400, img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836", date: "18 Jan 2026" },
  { id: 3, type: "event",  title: "Arijit Singh Live",  subtitle: "Seat B3, B4",           amount: 2998, img: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f", date: "24 Jan 2026" },
  { id: 4, type: "movie",  title: "Dune",               subtitle: "Row A · Seat 7",        amount: 290,  img: "https://images.unsplash.com/photo-1517602302552-471fe67acf66", date: "2 Feb 2026" },
  { id: 5, type: "dining", title: "Spice Hub",          subtitle: "Table for 4 · 7:30 PM", amount: 3600, img: "https://images.unsplash.com/photo-1543779503-7dba8b6b3e82", date: "8 Feb 2026" },
  { id: 6, type: "event",  title: "Zakir Khan Comedy",  subtitle: "Seat F1",               amount: 799,  img: "https://images.unsplash.com/photo-1527224857830-43a7acc85260", date: "14 Feb 2026" },
];

document.addEventListener("DOMContentLoaded", () => {
  initTabs();
  initBookings();
  initSaved();
  initEditForm();
  updateStats();
});

/* ── TABS ── */
function initTabs() {
  const btns   = document.querySelectorAll(".profile-nav-btn");
  const panels = document.querySelectorAll(".tab-panel");

  btns.forEach(btn => {
    btn.addEventListener("click", () => {
      btns.forEach(b => b.classList.remove("active"));
      panels.forEach(p => p.classList.remove("active"));
      btn.classList.add("active");
      document.getElementById(`tab-${btn.dataset.tab}`)?.classList.add("active");
    });
  });
}

/* ── BOOKINGS ── */
function initBookings() {
  const list    = document.getElementById("bookingsList");
  const filters = document.querySelectorAll(".booking-filter-btn");
  let activeType = "all";

  function renderBookings() {
    const filtered = activeType === "all"
      ? bookingsData
      : bookingsData.filter(b => b.type === activeType);

    list.innerHTML = "";
    filtered.forEach(b => list.appendChild(createBookingCard(b)));
  }

  filters.forEach(btn => {
    btn.addEventListener("click", () => {
      filters.forEach(f => f.classList.remove("active"));
      btn.classList.add("active");
      activeType = btn.dataset.type;
      renderBookings();
    });
  });

  renderBookings();
}

function createBookingCard(b) {
  const card = document.createElement("div");
  card.className = "booking-card";
  const badgeClass = `badge-${b.type}`;
  card.innerHTML = `
    <img class="booking-card-img" src="${b.img}" alt="${b.title}">
    <div class="booking-card-info">
      <h4>${b.title}</h4>
      <p>${b.subtitle}</p>
      <p style="font-size:12px;color:#bbb">${b.date}</p>
      <span class="booking-type-badge ${badgeClass}">${b.type}</span>
    </div>
    <div class="booking-card-amount">₹${b.amount.toLocaleString()}</div>
  `;
  return card;
}

/* ── SAVED ── */
function initSaved() {
  const savedIds = JSON.parse(localStorage.getItem("savedEvents") || "[]");
  const grid     = document.getElementById("savedGrid");
  const empty    = document.getElementById("savedEmpty");

  document.getElementById("statSaved").textContent = savedIds.length;

  if (savedIds.length === 0) {
    empty.classList.remove("hidden");
    return;
  }

  const savedEventObjects = eventsData.filter(e => savedIds.includes(e.id));
  savedEventObjects.forEach(e => {
    const card = document.createElement("a");
    card.className = "saved-card";
    card.href = `event-details.html?id=${e.id}`;
    card.innerHTML = `
      <img src="${e.img}" alt="${e.title}">
      <div class="saved-card-info">
        <h4>${e.title}</h4>
        <p>${e.category} · ₹${e.price.toLocaleString()}</p>
      </div>
    `;
    grid.appendChild(card);
  });
}

/* ── EDIT FORM ── */
function initEditForm() {
  const form = document.getElementById("editProfileForm");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const first = document.getElementById("firstName").value.trim();
    const last  = document.getElementById("lastName").value.trim();
    const email = document.getElementById("editEmail").value.trim();

    document.getElementById("displayName").textContent  = `${first} ${last}`;
    document.getElementById("displayEmail").textContent = email;
    document.getElementById("avatarDisplay").textContent =
      `${first[0] || ""}${last[0] || ""}`.toUpperCase();

    if (typeof showToast === "function") showToast("Profile updated! ✅", "success");
  });

  document.getElementById("cancelEdit")?.addEventListener("click", () => {
    document.querySelector('.profile-nav-btn[data-tab="bookings"]')?.click();
  });
}

/* ── STATS ── */
function updateStats() {
  document.getElementById("statMovies").textContent = bookingsData.filter(b => b.type === "movie").length;
  document.getElementById("statDining").textContent = bookingsData.filter(b => b.type === "dining").length;
  document.getElementById("statEvents").textContent = bookingsData.filter(b => b.type === "event").length;
}