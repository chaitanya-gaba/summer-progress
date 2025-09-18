// Wait for the HTML document to be fully loaded before running the script
document.addEventListener('DOMContentLoaded', () => {

    // 1. Get all the necessary elements from the page
    const shapeControlsContainer = document.querySelector('.shape_controller');
    const allShapes = document.querySelectorAll('.shape');
    const resetButton = document.querySelector('button[type="reset"]');

    // 2. Listen for clicks on ANY button inside the controls container
    shapeControlsContainer.addEventListener('click', (event) => {
        
        // Check if the clicked item is actually a button
        if (event.target.tagName !== 'BUTTON') {
            return; // If not, do nothing
        }

        // First, hide any shape that is currently visible
        allShapes.forEach(shape => {
            shape.classList.remove('active');
        });

        // Get the data-shape attribute from the clicked button
        const shapeNameToShow = event.target.dataset.shape;
        
        // If the button has a data-shape attribute...
        if (shapeNameToShow) {
            // ...find the corresponding shape div by its ID
            const shapeToShow = document.getElementById(shapeNameToShow);
            // ...and add the 'active' class to show it
            if (shapeToShow) {
                shapeToShow.classList.add('active');
            }
        }
        // If the reset button was clicked, it has no data-shape.
        // The code above has already hidden all shapes, so our job is done!
    });
});

/* Resizer */
// Wait for the HTML document to be fully loaded before running the script
document.addEventListener('DOMContentLoaded', () => {

    // 1. Get all the necessary elements from the page
    const shapeControlsContainer = document.querySelector('.shape_controller');
    const allShapes = document.querySelectorAll('.shape');
    // Add the new slider element
    const sizeSlider = document.getElementById('size-slider');

    // NEW FUNCTION to handle resizing
    function resizeActiveShape() {
        const activeShape = document.querySelector('.shape.active');
        if (!activeShape) return; // If no shape is active, do nothing

        // Get the scale value (e.g., 100 becomes 1, 50 becomes 0.5)
        const scale = sizeSlider.value / 100;
        
        // Get the base transform for shapes that are already rotated or skewed
        let baseTransform = '';
        if (activeShape.id === 'rhombus') {
            baseTransform = 'rotate(45deg)';
        } else if (activeShape.id === 'parallelogram') {
            baseTransform = 'skewX(-20deg)';
        }

        // Apply the base transform AND the new scale
        activeShape.style.transform = `${baseTransform} scale(${scale})`;
    }

    // 2. Listen for clicks on ANY button inside the controls container
    shapeControlsContainer.addEventListener('click', (event) => {
        
        if (event.target.tagName !== 'BUTTON') {
            return;
        }

        // Reset the slider to default when a new shape is chosen or reset is clicked
        sizeSlider.value = 100;

        allShapes.forEach(shape => {
            shape.classList.remove('active');
            // Remove any inline transform styles
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

    // 3. Add a NEW event listener for the slider
    sizeSlider.addEventListener('input', resizeActiveShape);
});