document.addEventListener("DOMContentLoaded", () => {
  initTabs();
  initPasswordToggles();
  initPasswordStrength();
  initLoginForm();
  initSignupForm();
});

/* ── TABS ── */
function initTabs() {
  const tabs  = document.querySelectorAll(".auth-tab");
  const forms = document.querySelectorAll(".auth-form");

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      forms.forEach(f => f.classList.remove("active"));
      tab.classList.add("active");
      document.getElementById(`${tab.dataset.form}Form`).classList.add("active");
    });
  });
}

/* ── PASSWORD VISIBILITY TOGGLE ── */
function initPasswordToggles() {
  document.querySelectorAll(".toggle-password").forEach(btn => {
    btn.addEventListener("click", () => {
      const input = document.getElementById(btn.dataset.target);
      if (!input) return;
      input.type = input.type === "password" ? "text" : "password";
      btn.textContent = input.type === "password" ? "👁" : "🙈";
    });
  });
}

/* ── PASSWORD STRENGTH ── */
function initPasswordStrength() {
  const input  = document.getElementById("signupPassword");
  const fill   = document.getElementById("strengthFill");
  const label  = document.getElementById("strengthLabel");
  if (!input) return;

  input.addEventListener("input", () => {
    const val = input.value;
    let score = 0;
    if (val.length >= 8)            score++;
    if (/[A-Z]/.test(val))          score++;
    if (/[0-9]/.test(val))          score++;
    if (/[^A-Za-z0-9]/.test(val))   score++;

    const levels = [
      { w: "0%",   color: "#e5e7eb", text: "" },
      { w: "25%",  color: "#ef4444", text: "Weak" },
      { w: "50%",  color: "#f59e0b", text: "Fair" },
      { w: "75%",  color: "#3b82f6", text: "Good" },
      { w: "100%", color: "#10b981", text: "Strong" },
    ];

    fill.style.width      = levels[score].w;
    fill.style.background = levels[score].color;
    label.textContent     = levels[score].text;
    label.style.color     = levels[score].color;
  });
}

/* ── LOGIN FORM ── */
function initLoginForm() {
  document.getElementById("loginForm").addEventListener("submit", (e) => {
    e.preventDefault();
    let valid = true;

    const email    = document.getElementById("loginEmail");
    const password = document.getElementById("loginPassword");
    const emailErr = document.getElementById("loginEmailError");
    const passErr  = document.getElementById("loginPasswordError");

    emailErr.textContent = "";
    passErr.textContent  = "";
    email.classList.remove("error");
    password.classList.remove("error");

    if (!email.value.includes("@")) {
      emailErr.textContent = "Please enter a valid email.";
      email.classList.add("error");
      valid = false;
    }

    if (password.value.length < 6) {
      passErr.textContent = "Password must be at least 6 characters.";
      password.classList.add("error");
      valid = false;
    }

    if (valid) {
      if (typeof showToast === "function") showToast("Welcome back! 👋", "success");
      setTimeout(() => window.location.href = "profile.html", 1200);
    }
  });
}

/* ── SIGNUP FORM ── */
function initSignupForm() {
  document.getElementById("signupForm").addEventListener("submit", (e) => {
    e.preventDefault();
    let valid = true;

    const first     = document.getElementById("signupFirst");
    const email     = document.getElementById("signupEmail");
    const password  = document.getElementById("signupPassword");
    const agree     = document.getElementById("agreeTerms");
    const firstErr  = document.getElementById("signupFirstError");
    const emailErr  = document.getElementById("signupEmailError");
    const passErr   = document.getElementById("signupPasswordError");
    const agreeErr  = document.getElementById("agreeError");

    [firstErr, emailErr, passErr, agreeErr].forEach(el => el.textContent = "");
    [first, email, password].forEach(el => el.classList.remove("error"));

    if (!first.value.trim()) {
      firstErr.textContent = "First name is required.";
      first.classList.add("error");
      valid = false;
    }

    if (!email.value.includes("@")) {
      emailErr.textContent = "Please enter a valid email.";
      email.classList.add("error");
      valid = false;
    }

    if (password.value.length < 8) {
      passErr.textContent = "Password must be at least 8 characters.";
      password.classList.add("error");
      valid = false;
    }

    if (!agree.checked) {
      agreeErr.textContent = "You must agree to the terms.";
      valid = false;
    }

    if (valid) {
      if (typeof showToast === "function") showToast("Account created! 🎉", "success");
      setTimeout(() => window.location.href = "profile.html", 1200);
    }
  });
}