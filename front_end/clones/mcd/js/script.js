// Sample menu data
const menuItems = [
  {id:1,name:"Big Burger",category:"burger",price:5.99,calories:550,img:"assets/images/burger1.jpg"},
  {id:2,name:"Cheese Burger",category:"burger",price:4.99,calories:450,img:"assets/images/burger2.jpg"},
  {id:3,name:"Bacon Burger",category:"burger",price:6.49,calories:600,img:"assets/images/burger3.jpg"},
  {id:4,name:"Veggie Burger",category:"burger",price:5.49,calories:400,img:"assets/images/burger4.jpg"},
  {id:5,name:"Chicken Sandwich",category:"burger",price:5.99,calories:520,img:"assets/images/burger5.jpg"},
  {id:6,name:"Spicy Chicken",category:"burger",price:6.29,calories:550,img:"assets/images/burger6.jpg"},
  {id:7,name:"Fries Small",category:"dessert",price:1.99,calories:220,img:"assets/images/fries1.jpg"},
  {id:8,name:"Fries Large",category:"dessert",price:2.99,calories:330,img:"assets/images/fries2.jpg"},
  {id:9,name:"Coke",category:"drink",price:1.99,calories:150,img:"assets/images/coke.jpg"},
  {id:10,name:"Pepsi",category:"drink",price:1.99,calories:150,img:"assets/images/pepsi.jpg"},
  {id:11,name:"Vanilla Shake",category:"drink",price:3.49,calories:350,img:"assets/images/shake1.jpg"},
  {id:12,name:"Chocolate Shake",category:"drink",price:3.49,calories:400,img:"assets/images/shake2.jpg"},
  {id:13,name:"Strawberry Shake",category:"drink",price:3.49,calories:360,img:"assets/images/shake3.jpg"},
  {id:14,name:"Apple Pie",category:"dessert",price:2.49,calories:250,img:"assets/images/pie1.jpg"},
  {id:15,name:"Chocolate Muffin",category:"dessert",price:2.99,calories:320,img:"assets/images/muffin1.jpg"},
  {id:16,name:"Chicken Nuggets",category:"burger",price:4.99,calories:400,img:"assets/images/nuggets1.jpg"},
  {id:17,name:"Fish Sandwich",category:"burger",price:5.99,calories:450,img:"assets/images/fish1.jpg"},
  {id:18,name:"Grilled Chicken",category:"burger",price:6.49,calories:500,img:"assets/images/grilled1.jpg"},
  {id:19,name:"Salad Bowl",category:"dessert",price:3.99,calories:150,img:"assets/images/salad1.jpg"},
  {id:20,name:"Onion Rings",category:"dessert",price:2.99,calories:280,img:"assets/images/onion1.jpg"},
  {id:21,name:"Iced Tea",category:"drink",price:1.99,calories:120,img:"assets/images/icedtea.jpg"},
  {id:22,name:"Lemonade",category:"drink",price:2.49,calories:140,img:"assets/images/lemonade.jpg"},
  {id:23,name:"Milkshake Coffee",category:"drink",price:3.49,calories:370,img:"assets/images/coffee.jpg"},
  {id:24,name:"Double Cheeseburger",category:"burger",price:6.99,calories:650,img:"assets/images/burger7.jpg"},
  {id:25,name:"Triple Burger",category:"burger",price:7.99,calories:750,img:"assets/images/burger8.jpg"},
  {id:26,name:"BBQ Chicken Burger",category:"burger",price:6.79,calories:600,img:"assets/images/burger9.jpg"},
  {id:27,name:"Mozzarella Sticks",category:"dessert",price:3.49,calories:300,img:"assets/images/mozzarella.jpg"},
  {id:28,name:"Brownie",category:"dessert",price:2.99,calories:330,img:"assets/images/brownie.jpg"},
  {id:29,name:"Soft Serve Ice Cream",category:"dessert",price:1.99,calories:200,img:"assets/images/icecream1.jpg"},
  {id:30,name:"Fruit Cup",category:"dessert",price:3.49,calories:120,img:"assets/images/fruitcup.jpg"},
  {id:31,name:"Orange Juice",category:"drink",price:2.99,calories:110,img:"assets/images/oj.jpg"},
  {id:32,name:"Water Bottle",category:"drink",price:1.49,calories:0,img:"assets/images/water.jpg"},
  {id:33,name:"Smoothie Berry",category:"drink",price:3.99,calories:250,img:"assets/images/smoothie1.jpg"},
  {id:34,name:"Smoothie Mango",category:"drink",price:3.99,calories:260,img:"assets/images/smoothie2.jpg"},
  {id:35,name:"Spicy Nuggets",category:"burger",price:5.49,calories:420,img:"assets/images/nuggets2.jpg"},
  {id:36,name:"Chicken Wrap",category:"burger",price:5.99,calories:480,img:"assets/images/wrap1.jpg"},
  {id:37,name:"Beef Wrap",category:"burger",price:6.49,calories:500,img:"assets/images/wrap2.jpg"},
  {id:38,name:"Cheese Fries",category:"dessert",price:3.49,calories:350,img:"assets/images/cheesefries.jpg"},
  {id:39,name:"Cinnamon Roll",category:"dessert",price:2.99,calories:300,img:"assets/images/cinnamon.jpg"},
  {id:40,name:"Mac & Cheese",category:"dessert",price:3.99,calories:400,img:"assets/images/macncheese.jpg"},
  {id:41,name:"Hot Chocolate",category:"drink",price:2.99,calories:250,img:"assets/images/hotchocolate.jpg"},
  {id:42,name:"Vanilla Latte",category:"drink",price:3.49,calories:300,img:"assets/images/latte.jpg"},
  {id:43,name:"Espresso",category:"drink",price:2.49,calories:5,img:"assets/images/espresso.jpg"},
  {id:44,name:"Mini Burger",category:"burger",price:3.99,calories:320,img:"assets/images/burger10.jpg"},
  {id:45,name:"Cheddar Burger",category:"burger",price:6.29,calories:580,img:"assets/images/burger11.jpg"},
  {id:46,name:"Fish Fillet",category:"burger",price:5.99,calories:470,img:"assets/images/fish2.jpg"},
  {id:47,name:"Potato Wedges",category:"dessert",price:2.99,calories:300,img:"assets/images/potatowedges.jpg"},
  {id:48,name:"Chocolate Cookie",category:"dessert",price:1.99,calories:220,img:"assets/images/cookie.jpg"},
  {id:49,name:"Iced Coffee",category:"drink",price:2.99,calories:180,img:"assets/images/icedcoffee.jpg"},
  {id:50,name:"Strawberry Smoothie",category:"drink",price:3.99,calories:250,img:"assets/images/smoothie3.jpg"}
];

for(let i=11;i<=55;i++){
    menuItems.push({
        id:i,
        name:`Menu Item ${i}`,
        category: i%3===0?"burger":i%3===1?"drink":"dessert",
        price:(Math.random()*5+1).toFixed(2),
        calories: Math.floor(Math.random()*500+100),
        img:"assets/images/burger1.jpg" // Placeholder for simplicity
    });
}

let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Render Menu
function renderMenu(filter="all"){
    const grid = document.getElementById('menu-grid');
    if(!grid) return;
    grid.innerHTML = "";
    let items = filter === "all" ? menuItems : menuItems.filter(i=>i.category===filter);
    items.forEach(item=>{
        const div = document.createElement('div');
        div.classList.add('menu-item');
        div.innerHTML = `
            <img src="${item.img}" alt="${item.name}">
            <h4>${item.name}</h4>
            <p>${item.calories} cal</p>
            <p>$${item.price.toFixed(2)}</p>
            <button onclick="addToCart(${item.id})">Add to Cart</button>
        `;
        grid.appendChild(div);
    });
}

// Filter Buttons
document.querySelectorAll('.menu-filter button').forEach(btn=>{
    btn.addEventListener('click',()=>{
        document.querySelectorAll('.menu-filter button').forEach(b=>b.classList.remove('active'));
        btn.classList.add('active');
        renderMenu(btn.dataset.category);
    });
});

// Cart Functions
function addToCart(id){
    const item = menuItems.find(i=>i.id===id);
    cart.push(item);
    localStorage.setItem('cart',JSON.stringify(cart));
    renderCart();
}

function renderCart(){
    const cartList = document.getElementById('cart-items');
    const totalEl = document.getElementById('cart-total');
    if(!cartList || !totalEl) return;
    cartList.innerHTML = "";
    let total = 0;
    cart.forEach((item,index)=>{
        total += item.price;
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartList.appendChild(li);
    });
    totalEl.textContent = total.toFixed(2);
}

// Order Page
function renderOrder(){
    const orderList = document.getElementById('order-items');
    const orderTotal = document.getElementById('order-total');
    if(!orderList || !orderTotal) return;
    orderList.innerHTML = "";
    let total = 0;
    cart.forEach(item=>{
        total += item.price;
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        orderList.appendChild(li);
    });
    orderTotal.textContent = total.toFixed(2);
}

// Handle Order Form
const orderForm = document.getElementById('order-form');
if(orderForm){
    orderForm.addEventListener('submit',e=>{
        e.preventDefault();
        alert("Order Submitted! Thank you.");
        cart = [];
        localStorage.setItem('cart',JSON.stringify(cart));
        renderOrder();
    });
}

// Locations
const locations = [
    {name:"McD Downtown",city:"New York",zip:"10001",lat:40.7128,lng:-74.0060},
    {name:"McD Uptown",city:"New York",zip:"10025",lat:40.7931,lng:-73.9712},
    {name:"McD LA",city:"Los Angeles",zip:"90001",lat:34.0522,lng:-118.2437}
];

function initMap(){
    const map = new google.maps.Map(document.getElementById("map"),{zoom:4,center:{lat:39.8283,lng:-98.5795}});
    let markers = locations.map(loc=>new google.maps.Marker({position:{lat:loc.lat,lng:loc.lng},map:map,title:loc.name}));
    const list = document.getElementById('location-list');
    const search = document.getElementById('location-search');
    if(list && search){
        function renderLocations(filter=""){
            list.innerHTML = "";
            locations.filter(loc=>loc.city.toLowerCase().includes(filter.toLowerCase()) || loc.zip.includes(filter))
            .forEach(loc=>{
                const div = document.createElement('div');
                div.textContent = `${loc.name} - ${loc.city}, ${loc.zip}`;
                list.appendChild(div);
            });
        }
        renderLocations();
        search.addEventListener('input',()=>renderLocations(search.value));
    }
}

// Initialize on page load
window.onload = ()=>{
    renderMenu();
    renderCart();
    renderOrder();
};

// Featured Carousel for Home Page
let carouselIndex = 0;

function renderCarousel(){
    const track = document.getElementById('carousel-track');
    if(!track) return;
    track.innerHTML = "";
    menuItems.slice(0,5).forEach(item=>{
        const div = document.createElement('div');
        div.classList.add('carousel-item');
        div.innerHTML = `
            <img src="${item.img}" alt="${item.name}">
            <h4>${item.name}</h4>
            <p>${item.calories} cal</p>
            <p>$${item.price.toFixed(2)}</p>
        `;
        track.appendChild(div);
    });
    updateCarousel();
}

function updateCarousel(){
    const track = document.getElementById('carousel-track');
    if(!track) return;
    const itemWidth = track.querySelector('.carousel-item').offsetWidth + 16; // gap
    track.style.transform = `translateX(-${carouselIndex * itemWidth}px)`;
}

function nextSlide(){
    const track = document.getElementById('carousel-track');
    if(!track) return;
    const totalItems = track.children.length;
    const visibleItems = Math.floor(track.parentElement.offsetWidth / (track.children[0].offsetWidth + 16));
    if(carouselIndex < totalItems - visibleItems) carouselIndex++;
    updateCarousel();
}

function prevSlide(){
    if(carouselIndex > 0) carouselIndex--;
    updateCarousel();
}

// Auto-play carousel every 5 seconds
setInterval(()=>{
    const track = document.getElementById('carousel-track');
    if(!track) return;
    const totalItems = track.children.length;
    const visibleItems = Math.floor(track.parentElement.offsetWidth / (track.children[0].offsetWidth + 16));
    if(carouselIndex < totalItems - visibleItems) carouselIndex++;
    else carouselIndex = 0;
    updateCarousel();
},5000);

// Initialize on page load
window.onload = ()=>{
    renderMenu();
    renderCart();
    renderOrder();
    renderCarousel();
};

// Touch/Swipe Support for Carousel
let isDragging = false;
let startX = 0;
let currentTranslate = 0;
let prevTranslate = 0;

const carousel = document.getElementById('carousel-track');
if(carousel){
    carousel.addEventListener('touchstart', touchStart);
    carousel.addEventListener('touchmove', touchMove);
    carousel.addEventListener('touchend', touchEnd);

    carousel.addEventListener('mousedown', touchStart);
    carousel.addEventListener('mousemove', touchMove);
    carousel.addEventListener('mouseup', touchEnd);
    carousel.addEventListener('mouseleave', touchEnd);
}

function touchStart(event){
    isDragging = true;
    startX = event.type.includes('mouse') ? event.pageX : event.touches[0].clientX;
    carousel.style.transition = 'none';
}

function touchMove(event){
    if(!isDragging) return;
    const currentX = event.type.includes('mouse') ? event.pageX : event.touches[0].clientX;
    const deltaX = currentX - startX;
    carousel.style.transform = `translateX(${prevTranslate + deltaX}px)`;
}

function touchEnd(event){
    if(!isDragging) return;
    isDragging = false;
    const trackWidth = carousel.scrollWidth - carousel.parentElement.offsetWidth;
    const style = window.getComputedStyle(carousel);
    const matrix = new WebKitCSSMatrix(style.transform);
    currentTranslate = matrix.m41;

    // Snap to nearest item
    const itemWidth = carousel.querySelector('.carousel-item').offsetWidth + 16;
    carouselIndex = Math.round(-currentTranslate / itemWidth);
    const maxIndex = carousel.children.length - Math.floor(carousel.parentElement.offsetWidth / itemWidth);
    if(carouselIndex < 0) carouselIndex = 0;
    if(carouselIndex > maxIndex) carouselIndex = maxIndex;

    carousel.style.transition = 'transform 0.5s ease-in-out';
    updateCarousel();
    prevTranslate = -carouselIndex * itemWidth;
}