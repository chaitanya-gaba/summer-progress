document.addEventListener("DOMContentLoaded", () => {
  const loginTab = document.getElementById("loginTab");
  const signupTab = document.getElementById("signupTab");
  const loginForm = document.getElementById("loginForm");
  const signupForm = document.getElementById("signupForm");

  // Switch tabs
  loginTab?.addEventListener("click", () => {
    loginTab.classList.add("active");
    signupTab.classList.remove("active");
    loginForm.classList.add("active");
    signupForm.classList.remove("active");
  });

  signupTab?.addEventListener("click", () => {
    signupTab.classList.add("active");
    loginTab.classList.remove("active");
    signupForm.classList.add("active");
    loginForm.classList.remove("active");
  });

  document.getElementById("switchToSignup")?.addEventListener("click", () => signupTab.click());
  document.getElementById("switchToLogin")?.addEventListener("click", () => loginTab.click());

  // Password strength indicator
  const signupPassword = document.getElementById("signupPassword");
  const strengthEl = document.getElementById("passwordStrength");

  signupPassword?.addEventListener("input", () => {
    const val = signupPassword.value;
    let strength = "Weak";

    if (val.length > 7 && /[A-Z]/.test(val) && /[0-9]/.test(val)) strength = "Strong";
    else if (val.length > 5) strength = "Medium";

    if (strengthEl) strengthEl.textContent = `Strength: ${strength}`;
  });

  // Login submit
  loginForm?.addEventListener("submit", e => {
    e.preventDefault();
    showToast("Login successful (simulated)", "success");
  });

  // Signup submit
  signupForm?.addEventListener("submit", e => {
    e.preventDefault();
    const pass = document.getElementById("signupPassword")?.value;
    const confirm = document.getElementById("signupConfirmPassword")?.value;

    if (pass !== confirm) {
      showToast("Passwords do not match", "error");
      return;
    }

    showToast("Signup successful (simulated)", "success");
    loginTab.click(); // Switch to login after signup
  });
});