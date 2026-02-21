const designs = [
  "front_end/gemini_Test/start-new",
  "front_end/clones/district",
  "front_end/gemini_Test/punch-in_and_punch-out",
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
  "front_end/gemini_Test/solar-system",
  "front_end/gemini_Test/404-notFound",
  "front_end/gemini_Test/shadow-box",
  "front_end/gemini_Test/input-box",
  "front_end/gemini_Test/music-player",
  "front_end/gemini_Test/menu",
  "front_end/gemini_Test/indian-post",
  "front_end/gemini_Test/cheer-up",
  "front_end/gemini_Test/landing-page",
  "front_end/gemini_Test/profile-card",
  "front_end/gemini_Test/diwali-greetings",
  "front_end/gemini_Test/letter-L",
  "front_end/gemini_Test/sorry",
  "front_end/gemini_Test/Journal",
  "front_end/gemini_Test/to-do list",
  "front_end/gemini_Test/3d-object",
  "front_end/gemini_Test/mobile-number",
  "front_end/gemini_Test/busy",
  "front_end/gemini_Test/diary",
  "front_end/gemini_Test/focus",
  "front_end/gemini_Test/miss",
  "front_end/gemini_Test/1stday",
  "front_end/gemini_Test/missing",
  "front_end/gemini_Test/LD",
  "front_end/gemini_Test/consistency",
  "front_end/gemini_Test/glassmorphism",
  "front_end/gemini_Test/apple-glass",
  "front_end/daily_task/dashboard",
  "front_end/daily_task/advanced_dashboard",
  "front_end/daily_task/portfolio-ui",
  "front_end/daily_task/gradient-dashboard",
  "front_end/daily_task/interactive-dynamic-tiles",
  "front_end/daily_task/advanced-dynamic-tile",
  "front_end/daily_task/envelop",
  "front_end/daily_task/typewriter",
  "front_end/daily_task/getwell-soon",
  "front_end/clones/district",
  "front_end/clones/sell-car",
  "front_end/clones/nova-ai",
  "front_end/daily_task/chaos",
  "front_end/daily_task/calm-chaos",
  "front_end/daily_task/gravity",
  "front_end/daily_task/dev-timeline",
  "front_end/clones/mcd",
  "front_end/clones/scenario"
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