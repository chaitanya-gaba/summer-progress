document.addEventListener('mousemove', (e) => {
  const eyes = document.querySelectorAll('.left-eye, .right-eye');

  eyes.forEach(eye => {
    const pupil = eye.querySelector('.pupil');
    const rect = eye.getBoundingClientRect();

    const eyeCenterX = rect.left + rect.width / 2;
    const eyeCenterY = rect.top + rect.height / 2;

    const angle = Math.atan2(e.clientY - eyeCenterY, e.clientX - eyeCenterX);

    const radius = 20; // max movement range inside eye
    const pupilX = radius * Math.cos(angle);
    const pupilY = radius * Math.sin(angle);

    // Combine the existing centering translate with the movement
    pupil.style.transform = `translate(calc(-50% + ${pupilX}px), calc(-50% + ${pupilY}px))`;
  });
});