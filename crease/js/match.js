// =======================
// UTILS
// =======================
function getQueryParam(key) {
  const params = new URLSearchParams(window.location.search);
  return params.get(key);
}

// =======================
// TAB LOGIC
// =======================
function setupTabs() {
  const tabs = document.querySelectorAll(".tab");
  const panels = document.querySelectorAll(".tab-panel");

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {

      tabs.forEach(t => {
        t.classList.remove("active");
        t.setAttribute("aria-selected", "false");
      });

      panels.forEach(p => p.classList.remove("active"));

      tab.classList.add("active");
      tab.setAttribute("aria-selected", "true");

      document.querySelector(`[data-panel="${tab.dataset.tab}"]`)
        .classList.add("active");
    });
  });
}

// =======================
// SCORECARD RENDER
// =======================
function renderScorecard(data) {
  const battingBody = document.getElementById("battingBody");
  const bowlingBody = document.getElementById("bowlingBody");

  battingBody.innerHTML = "";
  bowlingBody.innerHTML = "";

  data.innings[0].batsmen.forEach(b => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>
        <div class="batsman">
          <span class="batsman-name">${b.name}</span>
          <span class="dismissal">${b.dismissal}</span>
        </div>
      </td>
      <td>${b.R}</td>
      <td>${b.B}</td>
      <td>${b.fours}</td>
      <td>${b.sixes}</td>
      <td>${b.sr}</td>
    `;
    battingBody.appendChild(row);
  });

  data.bowling.forEach(b => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${b.name}</td>
      <td>${b.O}</td>
      <td>${b.M}</td>
      <td>${b.R}</td>
      <td>${b.W}</td>
      <td>${b.econ}</td>
    `;
    bowlingBody.appendChild(row);
  });

  // Update totals
  document.getElementById("inningsTitle").textContent = `${data.innings[0].team} Innings`;
  document.getElementById("inningsSub").textContent = `${data.innings[0].score} (${data.innings[0].overs} ov)`;
  document.getElementById("extras").textContent = data.innings[0].extras;
  document.getElementById("total").textContent = `${data.innings[0].total} (${data.innings[0].overs} ov)`;
}

// =======================
// TIMELINE RENDER
// =======================
function renderTimeline(data) {
  const grid = document.getElementById("timelineGrid");
  grid.innerHTML = "";

  data.forEach(item => {
    const el = document.createElement("div");
    el.className = "timeline-item";
    el.innerHTML = `
      <div class="timeline-top">
        <span class="timeline-over">Over ${item.over}</span>
        <span class="timeline-runs">${item.runs} runs</span>
      </div>
      <div class="timeline-event">${item.event}</div>
    `;
    grid.appendChild(el);
  });
}

// =======================
// STATS RENDER
// =======================
function renderStats(data) {
  const grid = document.getElementById("statsGrid");
  grid.innerHTML = "";

  data.forEach(player => {
    const card = document.createElement("div");
    card.className = "player-card";
    card.innerHTML = `
      <div class="player-name">${player.name}</div>
      <div class="player-role">${player.role}</div>
      <div class="player-stats">
        ${
          player.runs !== undefined
            ? `<div class="stat">
                 <div class="stat-label">Runs</div>
                 <div class="stat-bar"><div class="stat-bar-inner" style="width: ${player.bar}%"></div></div>
                 <div>${player.runs} (${player.balls})</div>
               </div>
               <div class="stat">
                 <div class="stat-label">SR</div>
                 <div class="stat-bar"><div class="stat-bar-inner" style="width: ${player.bar}%"></div></div>
                 <div>${player.sr}</div>
               </div>`
            : `<div class="stat">
                 <div class="stat-label">Wickets</div>
                 <div class="stat-bar"><div class="stat-bar-inner" style="width: ${player.bar}%"></div></div>
                 <div>${player.wickets}</div>
               </div>
               <div class="stat">
                 <div class="stat-label">Econ</div>
                 <div class="stat-bar"><div class="stat-bar-inner" style="width: ${player.bar}%"></div></div>
                 <div>${player.econ}</div>
               </div>`
        }
      </div>
    `;
    grid.appendChild(card);
  });
}