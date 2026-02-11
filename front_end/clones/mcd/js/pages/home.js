document.addEventListener('DOMContentLoaded', () => {
  let currentSlide = 0;
  const track = document.querySelector('.banner-track');
  if (!track) return; // safety check
  const slides = track.children;

  let interval = setInterval(nextSlide, 1500);

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    track.style.transform = `translateX(-${currentSlide * 100}vw)`;
  }

  track.addEventListener('mouseenter', () => clearInterval(interval));
  track.addEventListener('mouseleave', () => {
    interval = setInterval(nextSlide, 1500);
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const track = document.querySelector('.category-track');
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');
  const cards = document.querySelectorAll('.category-card');

  let index = 0;
  const cardWidth = cards[0].offsetWidth + 20; // include gap

  nextBtn.addEventListener('click', () => {
    const maxIndex = cards.length - Math.floor(document.querySelector('.category-row').offsetWidth / cardWidth);
    if (index < maxIndex) {
      index++;
      track.style.transform = `translateX(-${index * cardWidth}px)`;
    }
  });

  prevBtn.addEventListener('click', () => {
    if (index > 0) {
      index--;
      track.style.transform = `translateX(-${index * cardWidth}px)`;
    }
  });
});