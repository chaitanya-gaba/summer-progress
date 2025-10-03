// Example data array
const products = [
{ name: "Product A", value: 90, color: "red" },
{ name: "Product B", value: 70, color: "blue" },
{ name: "Product C", value: 30, color: "orange" },
{ name: "Product D", value: 55, color: "green" },
{ name: "Product E", value: 88, color: "rgb(60, 187, 212)" },
{ name: "Product F", value: 18, color: "purple" },
];

// Select containers
const barsContainer = document.querySelector('.bars-container');
const productNamesContainer = document.querySelector('.product-names');

// Clear containers (if any content)
barsContainer.innerHTML = '';
productNamesContainer.innerHTML = '';

// Create bars and labels dynamically
products.forEach(product => {
// Create bar div
const bar = document.createElement('div');
bar.classList.add('bar');
bar.style.height = product.value + '%';
bar.style.backgroundColor = product.color;

barsContainer.appendChild(bar);

// Create label div
const label = document.createElement('div');
label.textContent = product.name;
productNamesContainer.appendChild(label);
});