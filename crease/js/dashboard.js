const liveGrid = document.querySelector(".matches-grid");
const upcomingList = document.querySelector(".upcoming-list");
const completedList = document.querySelector(".completed-list");

const filters = {
  status: "ALL",
  format: "ALL"
};

function renderDashboard(matches) {
  clearUI();

  matches.forEach(match => {
    if (match.status === "LIVE") renderLiveMatch(match);
    if (match.status === "UPCOMING") renderUpcomingMatch(match);
    if (match.status === "COMPLETED") renderCompletedMatch(match);
  });

  // Ensure at least 3 cards show in LIVE section
  if (liveGrid.children.length < 3) {
    const needed = 3 - liveGrid.children.length;
    const fallback = matches
      .filter(m => m.status !== "LIVE")
      .slice(0, needed);

    fallback.forEach(m => renderLiveMatch(m));
  }
}

function clearUI() {
  liveGrid.innerHTML = "";
  upcomingList.innerHTML = "";
  completedList.innerHTML = "";
}

function renderLiveMatch(match) {
  const card = document.createElement("article");
  card.classList.add("match-card", "live", "visible");

  card.innerHTML = `
    <header class="card-header">
      <span class="format">${match.format}</span>
      <span class="status">${match.status}</span>
    </header>

    <div class="teams">
      <div class="team">
        <span class="team-code">${match.teams.home.code}</span>
        <strong class="score">${match.teams.home.score ?? "-"}</strong>
        <span class="overs">(${match.teams.home.overs ?? "-"})</span>
      </div>

      <div class="team muted">
        <span class="team-code">${match.teams.away.code}</span>
        <span class="yet">${match.teams.away.score ? match.teams.away.score : "Yet to bat"}</span>
      </div>
    </div>

    <footer class="card-footer">
      <span>RR ${match.runRate ?? "-"}</span>
      <a href="${match.link ?? "#"}" class="link">View match →</a>
    </footer>
  `;

  liveGrid.appendChild(card);
}

function renderUpcomingMatch(match) {
  const item = document.createElement("li");
  item.className = "upcoming-item";

  item.innerHTML = `
    <span class="match">${match.teams.home.code} vs ${match.teams.away.code}</span>
    <span class="time">${match.startTime}</span>
  `;

  upcomingList.appendChild(item);
}

function renderCompletedMatch(match) {
  const item = document.createElement("li");
  item.className = "completed-item";

  item.innerHTML = `
    <span>${match.result}</span>
    <span class="meta">${match.format} · ${match.time}</span>
  `;

  completedList.appendChild(item);
}

function applyFilters(data) {
  return data.filter(match => {
    const statusMatch =
      filters.status === "ALL" || match.status === filters.status;

    const formatMatch =
      filters.format === "ALL" || match.format === filters.format;

    return statusMatch && formatMatch;
  });
}

function rerenderWithFade() {
  document.querySelectorAll(".matches-section").forEach(section => {
    section.classList.add("fade");
  });

  setTimeout(() => {
    renderDashboard(applyFilters(matches));

    document.querySelectorAll(".matches-section").forEach(section => {
      section.classList.remove("fade");
    });
  }, 200);
}

/* ---------------------------------
   Theme Toggle
--------------------------------- */
const themeToggle = document.getElementById("themeToggle");

function setTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);

  if (themeToggle) {
    themeToggle.textContent = theme === "dark" ? "☀️" : "🌙";
  }
}

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    setTheme(currentTheme === "dark" ? "light" : "dark");
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderDashboard(matches);

  document.querySelectorAll(".nav-link").forEach(btn => {
    btn.addEventListener("click", () => {
      document
        .querySelectorAll(".nav-link")
        .forEach(b => b.classList.remove("active"));

      btn.classList.add("active");
      filters.status = btn.dataset.status;

      rerenderWithFade();
    });
  });

  document.querySelectorAll(".pill").forEach(btn => {
    btn.addEventListener("click", () => {
      document
        .querySelectorAll(".pill")
        .forEach(b => b.classList.remove("active"));

      btn.classList.add("active");
      filters.format = btn.dataset.format;

      rerenderWithFade();
    });
  });

  const savedTheme = localStorage.getItem("theme") || "light";
  setTheme(savedTheme);
});