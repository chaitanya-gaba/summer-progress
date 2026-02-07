const wrapper = document.getElementById("timeline");
wrapper.className = "timeline";

// ================= HELPERS =================
function createNode(leftPercent, topPx, item, isInfinity = false) {
  const node = document.createElement("div");
  node.className = `timeline-node${isInfinity ? " infinity" : ""}`;
  node.style.left = `${leftPercent}%`;
  node.style.top = `${topPx}px`;

  if (isInfinity) {
    node.innerHTML = `<div class="emoji">∞</div>`;
  } else {
    node.innerHTML = `
      <div class="emoji">${item.emoji}</div>
      <div class="date">${item.date}</div>
      <div class="text">${item.text}</div>
    `;
  }
  return node;
}

// Random inset for nodes inside edges
function randomInset(x, min = 120, max = 880) {
  const offset = Math.floor(Math.random() * 40) - 20; // ±20px
  return Math.max(min, Math.min(max, x + offset));
}

// ================= COLLAPSED TIMELINE =================
const collapsedTimeline = document.createElement("div");
collapsedTimeline.className = "timeline collapsed";

const collapsedRow = document.createElement("div");
collapsedRow.className = "timeline-row";

const collapsedSVG = document.createElementNS("http://www.w3.org/2000/svg", "svg");
collapsedSVG.setAttribute("viewBox", "0 0 1000 120");
collapsedSVG.setAttribute("preserveAspectRatio", "none");
collapsedSVG.classList.add("thread-svg");

const collapsedPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
collapsedPath.classList.add("thread-path");
collapsedPath.setAttribute("d", "M50 60 L950 60");
collapsedSVG.appendChild(collapsedPath);

collapsedRow.appendChild(collapsedSVG);
collapsedRow.appendChild(createNode(5, 36, TIMELINE_DATA[0]));
collapsedRow.appendChild(createNode(50, 36, TIMELINE_DATA[TIMELINE_DATA.length - 1]));
collapsedRow.appendChild(createNode(95, 36, null, true));

collapsedTimeline.appendChild(collapsedRow);
wrapper.appendChild(collapsedTimeline);

// ================= EXPANDED TIMELINE =================
const expandedTimeline = document.createElement("div");
expandedTimeline.className = "timeline expanded";
expandedTimeline.style.display = "none";
expandedTimeline.style.position = "relative";

const rowHeight = 120;
const nodeMarginTop = 36;

let pathD = "";
let coordinates = [];
let y = nodeMarginTop;
let i = 0;
let lastNodeX = null;

while (i < TIMELINE_DATA.length) {
  const rowCount = Math.random() < 0.5 ? 1 : 2; // 1 or 2 nodes per row
  const rowItems = TIMELINE_DATA.slice(i, i + rowCount);
  i += rowItems.length;

  // Compute X positions for row
  let xPositions = [];
  if (rowCount === 1) {
    xPositions = [randomInset(500)]; // center-ish
  } else {
    xPositions = [randomInset(200), randomInset(800)];
  }

  // Vertical connector from last node
  if (lastNodeX !== null) {
    const vX = xPositions[0];
    pathD += ` L${lastNodeX} ${y - rowHeight / 2} L${vX} ${y}`;
  }

  // Horizontal line across row
  if (rowCount === 1) {
    const x = xPositions[0];
    pathD += pathD === "" ? `M${x} ${y}` : ` L${x} ${y}`;
    coordinates.push({ x, y, item: rowItems[0] });
    lastNodeX = x;
  } else {
    const [x1, x2] = xPositions;
    pathD += pathD === "" ? `M${x1} ${y}` : ` L${x1} ${y}`;
    pathD += ` L${x2} ${y}`;
    coordinates.push({ x: x1, y, item: rowItems[0] });
    coordinates.push({ x: x2, y, item: rowItems[1] });
    lastNodeX = x2;
  }

  y += rowHeight;
}

// Infinity node
const infinityX = randomInset(500);
pathD += ` L${lastNodeX} ${y - rowHeight / 2} L${infinityX} ${y}`;
coordinates.push({ x: infinityX, y, item: null, infinity: true });

const totalHeight = y + 60;
expandedTimeline.style.height = `${totalHeight}px`;

// ================= SVG =================
const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
svg.setAttribute("viewBox", `0 0 1000 ${totalHeight}`);
svg.setAttribute("preserveAspectRatio", "none");
svg.classList.add("thread-svg");
svg.style.width = "100%";
svg.style.height = "100%";
svg.style.position = "absolute";
svg.style.top = "0";
svg.style.left = "0";

const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
path.classList.add("thread-path");
path.setAttribute("d", pathD);
svg.appendChild(path);
expandedTimeline.appendChild(svg);

// ================= NODES =================
coordinates.forEach(coord => {
  const leftPercent = (coord.x / 1000) * 100;
  const node = createNode(leftPercent, coord.y, coord.item, coord.infinity);
  expandedTimeline.appendChild(node);
});

wrapper.appendChild(expandedTimeline);

// ================= BUTTON =================
const btn = document.createElement("button");
btn.className = "expand-btn";
btn.textContent = "Expand journey";

let isExpanded = false;
btn.onclick = () => {
  isExpanded = !isExpanded;
  collapsedTimeline.style.display = isExpanded ? "none" : "block";
  expandedTimeline.style.display = isExpanded ? "block" : "none";
  btn.textContent = isExpanded ? "Collapse journey" : "Expand journey";
};
wrapper.after(btn);