const designs = [
  "front_end/gemini_Test/count-down",
  "front_end/gemini_Test/display-design",
  "front_end/gemini_Test/display-grid",
  "front_end/gemini_Test/accordian",
  "front_end/gemini_Test/graph",
  "front_end/gemini_Test/dynamic-graph",
  "front_end/gemini_Test/Clock",
  "front_end/gemini_Test/timeline",
  "front_end/gemini_Test/digital-clock",
  "front_end/gemini_Test/loaders",
  "front_end/gemini_Test/login-form",
  "front_end/gemini_Test/mario",
  "front_end/gemini_Test/movableGradient-shapes",
  "front_end/gemini_Test/multi-shapes",
  "front_end/gemini_Test/navigation",
  "front_end/gemini_Test/photo-gallery",
  "front_end/gemini_Test/pricing-table",
  "front_end/gemini_Test/robot",
  "front_end/gemini_Test/semantics",
  "front_end/gemini_Test/sign-up",
  "front_end/gemini_Test/snake-progressBar",
  "front_end/gemini_Test/test1_variableShapes",
  "front_end/gemini_Test/water-jar",
  "front_end/gemini_Test/welcome-user",
  "front_end/gemini_Test/solar-system"
  // ... add all design folder names here
];

const container = document.getElementById('designLinks');

designs.forEach(design => {
  const link = document.createElement('a');
  link.href = design + '/'; // GitHub Pages will load index.html automatically
  link.textContent = design.split('/').pop(); // show folder name
  link.target = "_blank"; // open in new tab
  link.style.display = "block";
  link.style.margin = "10px 0";
  container.appendChild(link);
  link.classList.add('design-link');
});