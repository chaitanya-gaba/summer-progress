// Toggle light/dark mode
function toggleTheme() {
    document.body.classList.toggle('dark-mode');
}

// Modal functionality
function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

// Open modal when clicking on portfolio item
document.querySelectorAll('.portfolio-item').forEach(item => {
    item.addEventListener('click', function() {
    const modalId = item.getAttribute('data-modal');
    document.getElementById(modalId).style.display = 'block';
    });
});