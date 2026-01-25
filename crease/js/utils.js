// ---------------------------
// THEME
// ---------------------------
export function setTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
}

export function initTheme(toggleBtn) {
  if (!toggleBtn) return;

  const savedTheme = localStorage.getItem("theme");

  // Prefer saved theme, otherwise system preference
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const theme = savedTheme || (prefersDark ? "dark" : "light");

  setTheme(theme);

  toggleBtn.textContent = theme === "dark" ? "☀️" : "🌙";

  toggleBtn.addEventListener("click", () => {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const nextTheme = currentTheme === "dark" ? "light" : "dark";

    setTheme(nextTheme);
    toggleBtn.textContent = nextTheme === "dark" ? "☀️" : "🌙";
  });
}

// ---------------------------
// URL PARAMS
// ---------------------------
export function getQueryParam(key) {
  const params = new URLSearchParams(window.location.search);
  return params.get(key);
}