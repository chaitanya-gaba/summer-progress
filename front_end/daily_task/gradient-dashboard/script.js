// Animate progress bars on load
window.addEventListener('DOMContentLoaded', () => {
document.querySelectorAll('.card').forEach(card => {
    card.classList.add('loaded');
});
});