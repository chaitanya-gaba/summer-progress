/* ===============================
   MOTION RULEBOOK
================================ */

const MOTION = {
  baseMass: 0.12,
  friction: 0.82,
  returnForce: 0.1,
  proximityRadius: 180,
  maxForce: 120,
  scrollInfluence: 0.002
}

/* ===============================
   CURSOR TRACKING
================================ */

const cursor = { x: 0, y: 0 }

window.addEventListener("mousemove", e => {
  cursor.x = e.clientX
  cursor.y = e.clientY
})

/* ===============================
   SCROLL INERTIA
================================ */

let currentScroll = window.scrollY
let targetScroll = window.scrollY
let scrollVelocity = 0

window.addEventListener("scroll", () => {
  targetScroll = window.scrollY
})

function updateScroll() {
  const diff = targetScroll - currentScroll
  currentScroll += diff * 0.08
  scrollVelocity = diff
}

/* ===============================
   EASTER EGG — STILLNESS
================================ */

let lastCursor = { x: 0, y: 0 }
let stillness = 0
let revealMode = false

function trackStillness() {
  const dx = cursor.x - lastCursor.x
  const dy = cursor.y - lastCursor.y
  const movement = Math.hypot(dx, dy)

  if (movement < 0.5) {
    stillness++
  } else {
    stillness = 0
    revealMode = false
    document.body.classList.remove("reveal")
  }

  if (stillness > 120 && !revealMode) {
    revealMode = true
    document.body.classList.add("reveal")
  }

  lastCursor.x = cursor.x
  lastCursor.y = cursor.y
}

/* ===============================
   MAGNETIC SYSTEM
================================ */

class MagneticItem {
  constructor(el, weight = 1) {
    this.el = el
    const rect = el.getBoundingClientRect()

    this.restX = rect.left + rect.width / 2
    this.restY = rect.top + rect.height / 2

    this.x = 0
    this.y = 0
    this.vx = 0
    this.vy = 0

    this.mass = MOTION.baseMass * weight
  }

  update() {
    const dx = cursor.x - this.restX
    const dy = cursor.y - this.restY
    const distance = Math.hypot(dx, dy)

    if (distance < MOTION.proximityRadius) {
      const force =
        (1 - distance / MOTION.proximityRadius) * MOTION.maxForce
      const angle = Math.atan2(dy, dx)

      this.vx -= Math.cos(angle) * force * this.mass
      this.vy -= Math.sin(angle) * force * this.mass
    }

    this.vx += -this.x * MOTION.returnForce
    this.vy += -this.y * MOTION.returnForce
    this.vy += scrollVelocity * MOTION.scrollInfluence

    this.vx *= MOTION.friction
    this.vy *= MOTION.friction

    const timeScale = revealMode ? 0.4 : 1
    this.x += this.vx * timeScale
    this.y += this.vy * timeScale

    this.el.style.transform = `translate(${this.x}px, ${this.y}px)`
  }
}

/* ===============================
   INIT
================================ */

const items = []

document.querySelectorAll(".hero-name")
  .forEach(el => items.push(new MagneticItem(el, 1.4)))

document.querySelectorAll(".work-item")
  .forEach(el => items.push(new MagneticItem(el, 0.9)))

document.querySelectorAll(".about, .hero-role")
  .forEach(el => items.push(new MagneticItem(el, 0.6)))

function animate() {
  updateScroll()
  trackStillness()
  items.forEach(item => item.update())
  requestAnimationFrame(animate)
}

animate()