let currentSlide = 0;

const track = document.querySelector('.banner-track');
const slides = Array.from(track.children);

// Apply CSS transition for smooth sliding
track.style.transition = 'transform 0.6s ease-in-out';

// Auto-slide interval
let interval = setInterval(nextSlide, 4500);

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  const slideWidth = slides[0].getBoundingClientRect().width;
  track.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
}

// Pause on hover
const bannerContainer = document.querySelector('.hero-banner');

bannerContainer.addEventListener('mouseenter', () => clearInterval(interval));
bannerContainer.addEventListener('mouseleave', () => {
  interval = setInterval(nextSlide, 4500);
});