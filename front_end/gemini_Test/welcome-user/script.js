// Get DOM elements
const loginForm = document.getElementById("login-form");
const signupForm = document.getElementById("sign-up");
const showSignup = document.getElementById("show-signup");
const showLogin = document.getElementById("show-login");
const authContainer = document.getElementById("auth-container");
const welcomeMessage = document.getElementById("welcome-message");
const welcomeText = document.getElementById("welcome-text");

const loginError = document.getElementById("login-error");

// Switch to Signup
showSignup.addEventListener("click", (e) => {
  e.preventDefault();
  loginForm.style.display = "none";
  signupForm.style.display = "flex";
  loginError.textContent = "";
});

// Switch to Login
showLogin.addEventListener("click", (e) => {
  e.preventDefault();
  signupForm.style.display = "none";
  loginForm.style.display = "flex";
  loginError.textContent = "";
});

// Handle Sign Up
signupForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("signup-email").value.trim();
  const password = document.getElementById("signup-password").value;

  if (!name || !email || !password) {
    alert("Please fill all fields.");
    return;
  }

  const user = { name, email, password };

  // Save to localStorage
  localStorage.setItem("user", JSON.stringify(user));

  alert("Account created successfully. Please log in.");

  signupForm.reset();
  signupForm.style.display = "none";
  loginForm.style.display = "flex";
});

// Handle Login
loginForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("login-email").value.trim();
  const password = document.getElementById("login-password").value;

  const storedUser = JSON.parse(localStorage.getItem("user"));

  if (
    storedUser &&
    storedUser.email === email &&
    storedUser.password === password
  ) {
    authContainer.style.display = "none";
    welcomeMessage.style.display = "block";
    welcomeText.textContent = `Welcome, ${storedUser.name}!`;
  } else {
    loginError.textContent = "Invalid email or password.";
  }

  loginForm.reset();
});