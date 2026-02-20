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
  const locationLabel = locationMenu.querySelector('.location-label');
  const svg = locationLabel.querySelector('svg');

  // Toggle open/close
  locationLabel.addEventListener('click', (e) => {
    e.stopPropagation();
    locationDropdown.classList.toggle('hidden');
    svg.classList.toggle('rotate');
  });

  // ✅ Update label on city click — works on both desktop & mobile
  locationDropdown.querySelectorAll('li').forEach(item => {
    item.addEventListener('click', (e) => {
      e.stopPropagation();

      const selected = item.textContent.trim();        // "Mumbai, Maharashtra"
      const parts    = selected.split(',');
      const city     = parts[0].trim();                // "Mumbai"
      const region   = parts[1] ? parts[1].trim() : ''; // "Maharashtra"

      // Rewrite label with updated city, keep svg arrow intact
      locationLabel.innerHTML = `
        ${city}
        <span class="sub-location">${region}</span>
        <svg width="12" height="12" viewBox="0 0 24 24">
          <path d="M7 10l5 5 5-5" fill="none" stroke="currentColor" stroke-width="2"/>
        </svg>
      `;

      // Close dropdown
      locationDropdown.classList.add('hidden');
    });
  });

  // Close on outside click
  document.addEventListener('click', () => {
    locationDropdown.classList.add('hidden');
  });
}


/* =====================================================
   NAV SEARCH
===================================================== */
function initNavSearch() {
  const navSearchBtn   = document.getElementById("navSearchBtn");
  const navSearchInput = document.getElementById("navSearchInput");

  if (!navSearchBtn || !navSearchInput) return;

  navSearchBtn.addEventListener("click", () => {
    const query = navSearchInput.value.trim();
    if (!query) return;
    window.location.href = `movies.html?search=${encodeURIComponent(query)}`;
  });

  navSearchInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") navSearchBtn.click();
  });
}


/* =====================================================
   HERO SLIDER (auto-advance)
===================================================== */
function initHeroSlider() {
  const sliderTrack = document.getElementById("sliderTrack");
  if (!sliderTrack) return;

  const slides = sliderTrack.querySelectorAll(".slide");
  let currentIndex = 0;

  function moveSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    sliderTrack.style.transform = `translateX(-${currentIndex * 100}%)`;
  }

  setInterval(moveSlide, 7000);
}


/* =====================================================
   MOBILE MENU (hamburger)
===================================================== */
function initMobileMenu() {
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const mobileMenu   = document.getElementById('mobileMenu');

  if (!hamburgerBtn || !mobileMenu) return;

  hamburgerBtn.addEventListener('click', () => {
    hamburgerBtn.classList.toggle('open');
    mobileMenu.classList.toggle('open');
  });

  // Close when any link is tapped
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
function showToast(message, type = "info") {
  const container = document.getElementById('toastContainer');
  if (!container) { alert(message); return; }

  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.textContent = message;

  container.appendChild(toast);
  setTimeout(() => toast.remove(), 3000);
}