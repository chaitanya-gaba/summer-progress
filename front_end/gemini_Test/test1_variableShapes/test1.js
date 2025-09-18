document.addEventListener('DOMContentLoaded', () => {

    // Get all the necessary elements from the page
    const shapeControlsContainer = document.querySelector('.shape_controller');
    const allShapes = document.querySelectorAll('.shape');
    const sizeSlider = document.getElementById('size-slider');

    // Function to handle resizing the active shape
    function resizeActiveShape() {
        const activeShape = document.querySelector('.shape.active');
        if (!activeShape) return; // If no shape is active, do nothing

        const scale = sizeSlider.value / 100;
        
        let baseTransform = 'translate(-50%, -50%)'; // Centering transform
        
        // The base shape transforms (rotate/skew) need to be preserved
        if (activeShape.id === 'rhombus') {
            baseTransform += ' rotate(45deg)';
        } else if (activeShape.id === 'parallelogram') {
            baseTransform += ' skewX(-20deg)';
        }

        // Apply the base transform, centering, AND the new scale
        activeShape.style.transform = `${baseTransform} scale(${scale})`;
    }

    // Listen for clicks on ANY button inside the controls container
    shapeControlsContainer.addEventListener('click', (event) => {
        
        if (event.target.tagName !== 'BUTTON') {
            return;
        }

        // Reset the slider to default when a new shape is chosen or reset is clicked
        sizeSlider.value = 100;

        // Hide any shape that is currently visible
        allShapes.forEach(shape => {
            shape.classList.remove('active');
            // Remove any inline transform styles to reset it
            shape.style.transform = ''; 
        });

        const shapeNameToShow = event.target.dataset.shape;
        
        if (shapeNameToShow) {
            const shapeToShow = document.getElementById(shapeNameToShow);
            if (shapeToShow) {
                shapeToShow.classList.add('active');
                // Apply the initial size when a shape is first shown
                resizeActiveShape(); 
            }
        }
    });

    // Add a real-time event listener for the slider
    sizeSlider.addEventListener('input', resizeActiveShape);
});