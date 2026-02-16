/* =====================================================
   DOM READY
===================================================== */
document.addEventListener('DOMContentLoaded', () => {
  initLocationDropdown();
  initHeroSearch();
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

  locationLabel.addEventListener('click', (e) => {
    e.stopPropagation();
    locationDropdown.classList.toggle('hidden');
    svg.classList.toggle('rotate');
  });

  document.addEventListener('click', () => {
    locationDropdown.classList.add('hidden');
    svg.classList.remove('rotate');
  });
}


/* =====================================================
   HERO SEARCH
===================================================== */
/* ========================================
   INDEX HERO AUTO SLIDER
======================================== */

const sliderTrack = document.getElementById("sliderTrack");

if (sliderTrack) {
  const slides = sliderTrack.querySelectorAll(".slide");
  let currentIndex = 0;

  function moveSlide() {
    currentIndex++;

    if (currentIndex >= slides.length) {
      currentIndex = 0;
    }

    sliderTrack.style.transform = `translateX(-${currentIndex * 100}%)`;
  }

  setInterval(moveSlide, 7000);
}


/* =====================================================
   MOBILE MENU
===================================================== */
function initMobileMenu() {
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const navLinks = document.querySelector('.nav-links');

  if (!mobileMenuBtn || !navLinks) return;

  mobileMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('hidden');
  });
}


/* =====================================================
   SIMPLE TOAST FUNCTION
===================================================== */
function showToast(message, type = "info") {
  const container = document.getElementById('toastContainer');
  if (!container) {
    alert(message); // fallback
    return;
  }

  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.textContent = message;

  container.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 3000);
}

const navSearchBtn = document.getElementById("navSearchBtn");
const navSearchInput = document.getElementById("navSearchInput");

if (navSearchBtn && navSearchInput) {

  navSearchBtn.addEventListener("click", () => {
    const query = navSearchInput.value.trim();

    if (!query) {
      alert("Enter something to search");
      return;
    }

    // Redirect to movies page with query
    window.location.href = `movies.html?search=${encodeURIComponent(query)}`;
  });

  navSearchInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") navSearchBtn.click();
  });

}