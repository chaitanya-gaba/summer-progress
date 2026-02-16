import { store } from "./store.js";

document.getElementById("loginForm")
  ?.addEventListener("submit", (e) => {
    e.preventDefault();

    const user = { name: "Demo User" };
    store.user = user;

    localStorage.setItem("user", JSON.stringify(user));
    window.location.href = "index.html";
});

if (store.user) {
  document.querySelector(".login-btn")
    .textContent = store.user.name;
}