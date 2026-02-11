export function initCategoryMenu() {
  const chips = document.querySelectorAll('.category-chip');
  const sections = document.querySelectorAll('.menu-section');
  const container = document.querySelector('.menu-items');

  if (!chips.length || !sections.length || !container) return;

  // Use data-id instead of text content for reliability
  chips.forEach(chip => {
    chip.addEventListener('click', () => {
      chips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');

      const targetId = chip.dataset.id;
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  const updateActiveChip = () => {
    let closestSection = null;
    let minDistance = Infinity;

    sections.forEach(section => {
      const rect = section.getBoundingClientRect();
      const distance = Math.abs(rect.top - container.getBoundingClientRect().top);
      if (distance < minDistance) {
        minDistance = distance;
        closestSection = section;
      }
    });

    if (closestSection) {
      chips.forEach(chip => chip.classList.remove('active'));
      const activeChip = Array.from(chips).find(c => c.dataset.id === closestSection.id);
      if (activeChip) activeChip.classList.add('active');
    }
  };

  container.addEventListener('scroll', throttle(updateActiveChip, 50));
}