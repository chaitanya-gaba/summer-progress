const cars = [
  { brand: "Toyota", model: "Innova Crysta", price: 2100000, location: "Delhi", fuel: "Petrol", image: "https://images.unsplash.com/photo-1617531653520-4893f56a1c9a" },
  { brand: "Honda", model: "City", price: 1200000, location: "Mumbai", fuel: "Petrol", image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8" },
  { brand: "BMW", model: "X5", price: 7500000, location: "Bangalore", fuel: "Diesel", image: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2" }
];

const carList = document.getElementById("carList");
const brandFilter = document.getElementById("brandFilter");
const priceFilter = document.getElementById("priceFilter");
const locationFilter = document.getElementById("locationFilter");
const fuelFilter = document.getElementById("fuelFilter");

function renderCars() {
  carList.innerHTML = "";
  const brand = brandFilter.value;
  const price = priceFilter.value;
  const location = locationFilter.value;
  const fuel = fuelFilter.value;

  cars
    .filter(car => {
      if (brand !== "all" && car.brand !== brand) return false;
      if (price === "low" && car.price > 1000000) return false;
      if (price === "high" && car.price <= 1000000) return false;
      if (location !== "all" && car.location !== location) return false;
      if (fuel !== "all" && car.fuel !== fuel) return false;
      return true;
    })
    .forEach(car => {
      const card = document.createElement("div");
      card.className = "car-card";
      card.innerHTML = `
        <img src="${car.image}" alt="${car.model}">
        <div class="car-info">
          <h3>${car.brand} ${car.model}</h3>
          <p>${car.fuel} · ${car.location}</p>
          <div class="price">₹${(car.price / 100000).toFixed(2)} Lakh</div>
        </div>
      `;
      carList.appendChild(card);
    });
}

brandFilter.addEventListener("change", renderCars);
priceFilter.addEventListener("change", renderCars);
locationFilter.addEventListener("change", renderCars);
fuelFilter.addEventListener("change", renderCars);

renderCars();

/* Dropdown hover logic */
document.querySelectorAll(".nav-item").forEach(item => {
  item.addEventListener("mouseenter", () => item.classList.add("open"));
  item.addEventListener("mouseleave", () => item.classList.remove("open"));
});