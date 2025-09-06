/* document.getElementById("demo").innerHTML = "<h3>Hola</h3>"

// document.write(5 + 8)

// window.alert(19 + 10)

// alert(9 + 12)

console.log(5 + 6)

document.getElementById('time').addEventListener('click', function() {
    document.getElementById('showTime').innerHTML = new Date().toLocaleTimeString()
})

document.getElementById('date').addEventListener('mouseenter', function() {
    document.getElementById('showTime').innerHTML = new Date().toLocaleDateString()
})

document.getElementById('resetBtn').addEventListener('click', function() {
    document.getElementById('showTime').innerHTML = ""
});

function myFun() {
    document.getElementById('change').innerHTML = "Content Changed"
} */


const header = document.getElementById('header');
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section');

// Shrink header on scroll
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.classList.add('shrink');
  } else {
    header.classList.remove('shrink');
  }

  // Highlight active link
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + current) {
      link.classList.add('active');
    }
  });
});