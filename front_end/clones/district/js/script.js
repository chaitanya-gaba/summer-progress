import { moviesData }      from "./data/movies-data.js";
import { restaurantsData } from "./data/restaurants-data.js";
import { eventsData }      from "./data/events-data.js";

/* =====================================================
   DOM READY
===================================================== */
document.addEventListener('DOMContentLoaded', () => {
  initLocationDropdown();
  initNavSearch();
  initHeroSlider();
  initMobileMenu();
});


/* =====================================================
   LOCATION DROPDOWN
===================================================== */
function initLocationDropdown() {
  const locationMenu = document.getElementById('locationMenu');
  if (!locationMenu) return;

  const locationDropdown = document.getElementById('locationDropdown');
  const locationLabel    = locationMenu.querySelector('.location-label');
  const caret            = locationLabel.querySelector('.location-caret');
  const cityEl           = document.getElementById('cityName');
  const stateEl          = document.getElementById('stateName');

  locationLabel.addEventListener('click', (e) => {
    e.stopPropagation();
    locationDropdown.classList.toggle('hidden');
    if (caret) caret.classList.toggle('rotate');
  });

  locationDropdown.querySelectorAll('li').forEach(item => {
    item.addEventListener('click', (e) => {
      e.stopPropagation();
      const city  = item.dataset.city  || item.textContent.split(',')[0].replace(/📍/,'').trim();
      const state = item.dataset.state || (item.textContent.split(',')[1] || '').trim();
      if (cityEl)  cityEl.textContent  = city;
      if (stateEl) stateEl.textContent = state;
      locationDropdown.classList.add('hidden');
      if (caret) caret.classList.remove('rotate');
    });
  });

  document.addEventListener('click', () => {
    locationDropdown.classList.add('hidden');
    if (caret) caret.classList.remove('rotate');
  });
}


/* =====================================================
   NAV SEARCH — live dropdown
===================================================== */
function initNavSearch() {
  const input  = document.getElementById("navSearchInput");
  
  if (!input) return;

  // Create dropdown
  const dropdown = document.createElement('div');
  dropdown.className = 'search-dropdown hidden';
  input.closest('.nav-search').appendChild(dropdown);

  function highlight(text, query) {
    const safe = query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    return text.replace(new RegExp(`(${safe})`, 'gi'), '<mark class="sd-hl">$1</mark>');
  }

  function showResults(query) {
    const q = query.trim().toLowerCase();
    if (!q) { dropdown.classList.add('hidden'); return; }

    const movies  = moviesData.filter(m =>
      m.title.toLowerCase().includes(q) || m.genre?.toLowerCase().includes(q)
    ).slice(0, 4);

    const restaurants = restaurantsData.filter(r =>
      r.name.toLowerCase().includes(q) || r.cuisine?.toLowerCase().includes(q)
    ).slice(0, 3);

    const events = eventsData.filter(e =>
      e.title.toLowerCase().includes(q) || e.category?.toLowerCase().includes(q)
    ).slice(0, 3);

    const total = movies.length + restaurants.length + events.length;
    if (total === 0) { dropdown.classList.add('hidden'); return; }

    let html = '';

    if (movies.length) {
      html += `<div class="sd-label">🎬 Movies</div>`;
      movies.forEach(m => {
        html += `<a class="sd-item" href="movie-details.html?id=${m.id}">
          <img src="${m.img}" class="sd-thumb" alt="">
          <div><div class="sd-title">${highlight(m.title, q)}</div><div class="sd-sub">${m.genre}</div></div>
        </a>`;
      });
    }

    if (restaurants.length) {
      html += `<div class="sd-label">🍽️ Dining</div>`;
      restaurants.forEach(r => {
        html += `<a class="sd-item" href="dining.html">
          <img src="${r.image}" class="sd-thumb" alt="">
          <div><div class="sd-title">${highlight(r.name, q)}</div><div class="sd-sub">${r.cuisine}</div></div>
        </a>`;
      });
    }

    if (events.length) {
      html += `<div class="sd-label">🎟️ Events</div>`;
      events.forEach(e => {
        html += `<a class="sd-item" href="event-details.html?id=${e.id}">
          <img src="${e.img}" class="sd-thumb" alt="">
          <div><div class="sd-title">${highlight(e.title, q)}</div><div class="sd-sub">${e.category}</div></div>
        </a>`;
      });
    }

    dropdown.innerHTML = html;
    dropdown.classList.remove('hidden');
  }

  input.addEventListener('input', () => showResults(input.value));
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.nav-search-bar')) dropdown.classList.add('hidden');
  });
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') { dropdown.classList.add('hidden'); input.blur(); }
  });
}


/* =====================================================
   HERO SLIDER
===================================================== */
function initHeroSlider() {
  const sliderTrack = document.getElementById("sliderTrack");
  if (!sliderTrack) return;
  const slides = sliderTrack.querySelectorAll(".slide");
  let current = 0;
  setInterval(() => {
    current = (current + 1) % slides.length;
    sliderTrack.style.transform = `translateX(-${current * 100}%)`;
  }, 7000);
}


/* =====================================================
   MOBILE MENU
===================================================== */
function initMobileMenu() {
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const mobileMenu   = document.getElementById('mobileMenu');
  if (!hamburgerBtn || !mobileMenu) return;

  hamburgerBtn.addEventListener('click', () => {
    hamburgerBtn.classList.toggle('open');
    mobileMenu.classList.toggle('open');
  });

  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburgerBtn.classList.remove('open');
      mobileMenu.classList.remove('open');
    });
  });
}


/* =====================================================
   TOAST
===================================================== */
window.showToast = function(message, type = "info") {
  const container = document.getElementById('toastContainer');
  if (!container) { alert(message); return; }
  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.textContent = message;
  container.appendChild(toast);
  setTimeout(() => toast.remove(), 3000);
};