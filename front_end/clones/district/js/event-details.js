import { eventsData } from "./data/events-data.js";

document.addEventListener("DOMContentLoaded", () => {
  const params  = new URLSearchParams(window.location.search);
  const eventId = parseInt(params.get("id"));
  const event   = eventsData.find(e => e.id === eventId);
  const main    = document.getElementById("eventDetailsMain");

  if (!event) {
    main.innerHTML = `<div class="container" style="padding:100px 20px;text-align:center"><h2>Event not found.</h2><a href="events.html" class="btn-primary">Back to Events</a></div>`;
    return;
  }

  // Update sticky bar
  document.getElementById("stickyTitle").textContent  = event.title;
  document.getElementById("stickyPrice").textContent  = `₹${event.price.toLocaleString()}`;
  document.title = `${event.title} | District Clone`;

  const eventDate = new Date(event.date).toLocaleDateString("en-IN", {
    weekday: "long", day: "numeric", month: "long", year: "numeric"
  });

  // Build gallery HTML
  const galleryImgs = [event.img, ...(event.gallery || [])].slice(0, 3);
  const galleryHTML = galleryImgs.map((src, i) =>
    `<img src="${src}" alt="Gallery ${i+1}" data-index="${i}" loading="lazy">`
  ).join("");

  // Build seat grid (6 rows × 10 seats)
  const takenSeats = new Set();
  const totalSeats = event.seats || 60;
  while (takenSeats.size < Math.floor(totalSeats * 0.35)) {
    takenSeats.add(Math.floor(Math.random() * 60));
  }

  let seatHTML = "";
  const rows = ["A","B","C","D","E","F"];
  rows.forEach((row, ri) => {
    seatHTML += `<div class="seat-row"><span class="seat-row-label">${row}</span>`;
    for (let s = 1; s <= 10; s++) {
      const seatNum = ri * 10 + s;
      const taken = takenSeats.has(seatNum);
      seatHTML += `<div class="seat ${taken ? "taken" : ""}" data-seat="${row}${s}" data-price="${event.price}">${taken ? "×" : s}</div>`;
    }
    seatHTML += `</div>`;
  });

  main.innerHTML = `
    <!-- HERO -->
    <section class="event-details-hero">
      <img src="${event.img}" alt="${event.title}">
      <div class="event-details-hero-content">
        <span class="event-badge">${event.category}</span>
        <h1>${event.title}</h1>
        <div class="event-meta">
          <span>📅 ${eventDate}</span>
          <span>📍 ${event.venue}</span>
          <span>💰 From ₹${event.price.toLocaleString()}</span>
        </div>
      </div>
    </section>

    <!-- STEPPER -->
    <div class="stepper" id="stepper">
      <div class="step active" data-step="1">
        <div class="step-circle">1</div>
        <div class="step-label">Select Seats</div>
      </div>
      <div class="step-line" id="line1"></div>
      <div class="step active" data-step="2" id="step2">
        <div class="step-circle">2</div>
        <div class="step-label">Review</div>
      </div>
      <div class="step-line" id="line2"></div>
      <div class="step" data-step="3" id="step3">
        <div class="step-circle">3</div>
        <div class="step-label">Confirm</div>
      </div>
    </div>

    <!-- MAIN LAYOUT -->
    <section class="container event-details-layout">

      <!-- LEFT COLUMN -->
      <div>

        <!-- STEP 1: Gallery + Seats -->
        <div class="step-panel active" id="panel1">
          <div class="gallery-title">📸 Gallery</div>
          <div class="gallery-grid" id="galleryGrid">${galleryHTML}</div>

          <div style="font-size:15px;line-height:1.7;color:#555;margin-bottom:32px">${event.description}</div>

          <div class="seat-picker-title">🎟 Select Your Seats</div>
          <div class="seat-picker-subtitle">Choose up to 6 seats. Grey = taken.</div>
          <div class="seat-stage">STAGE / SCREEN</div>

          <div class="seat-legend">
            <div class="legend-item"><div class="legend-dot available"></div> Available</div>
            <div class="legend-item"><div class="legend-dot selected"></div> Selected</div>
            <div class="legend-item"><div class="legend-dot taken"></div> Taken</div>
          </div>

          <div class="seat-grid">${seatHTML}</div>

          <div class="seat-selection-info">
            <span>Selected: <strong id="selectedSeatsList">None</strong></span>
            <span>Total: <strong id="seatTotal">₹0</strong></span>
          </div>

          <button class="btn-primary" id="proceedToReview" style="width:100%;padding:14px;font-size:15px;border:none;cursor:pointer" disabled>
            Proceed to Review →
          </button>
        </div>

        <!-- STEP 2: Review -->
        <div class="step-panel" id="panel2">
          <h2 style="margin-bottom:24px">Review Your Booking</h2>
          <div class="review-card">
            <div class="review-row"><span class="label">Event</span><span class="value">${event.title}</span></div>
            <div class="review-row"><span class="label">Date</span><span class="value">${eventDate}</span></div>
            <div class="review-row"><span class="label">Venue</span><span class="value">${event.venue}</span></div>
            <div class="review-row"><span class="label">Seats</span><span class="value" id="reviewSeats">—</span></div>
            <div class="review-row"><span class="label">Price/seat</span><span class="value">₹${event.price.toLocaleString()}</span></div>
            <div class="review-row review-total"><span class="label">Total</span><span class="value" id="reviewTotal">₹0</span></div>
          </div>

          <div style="display:flex;gap:12px;margin-top:8px">
            <button class="btn-outline" id="backToSeats" style="flex:1;padding:14px;cursor:pointer">← Back</button>
            <button class="btn-primary" id="proceedToConfirm" style="flex:2;padding:14px;border:none;cursor:pointer">Confirm Booking →</button>
          </div>
        </div>

        <!-- STEP 3: Confirmed -->
        <div class="step-panel" id="panel3">
          <div style="text-align:center;padding:60px 20px">
            <div style="font-size:64px;margin-bottom:16px">🎉</div>
            <h2 style="font-size:28px;margin-bottom:12px;color:#10b981">Booking Confirmed!</h2>
            <p style="color:#666;margin-bottom:8px">You're going to <strong>${event.title}</strong></p>
            <p style="color:#888;font-size:14px;margin-bottom:32px">${eventDate} · ${event.venue}</p>
            <div id="confirmedSeatsInfo" style="background:#f0fdf4;border-radius:12px;padding:16px;margin-bottom:32px;font-size:14px;color:#166534"></div>
            <a href="events.html" class="btn-primary" style="text-decoration:none;padding:14px 32px">Browse More Events</a>
          </div>
        </div>

      </div>

      <!-- BOOKING SIDEBAR (desktop) -->
      <aside class="booking-sidebar">
        <h3>Booking Summary</h3>
        <div class="booking-detail-row"><span class="label">Event</span><span class="value">${event.title}</span></div>
        <div class="booking-detail-row"><span class="label">Date</span><span class="value">${eventDate}</span></div>
        <div class="booking-detail-row"><span class="label">Venue</span><span class="value" style="font-size:12px">${event.venue}</span></div>
        <div class="booking-detail-row"><span class="label">Seats</span><span class="value" id="sidebarSeats">None selected</span></div>
        <div class="booking-total">
          <span>Total</span>
          <span class="amount" id="sidebarTotal">₹0</span>
        </div>
        <button class="btn-primary" id="sidebarBookBtn" disabled>Select Seats First</button>
      </aside>
    </section>
  `;

  // Init all interactions
  initGallery(galleryImgs);
  initSeatPicker(event);
  initStepper();
  initStickyBar();
});

/* ── GALLERY ── */
function initGallery(imgs) {
  let currentImg = 0;
  const lightbox     = document.getElementById("lightbox");
  const lightboxImg  = document.getElementById("lightboxImg");
  const closeBtn     = document.getElementById("lightboxClose");
  const prevBtn      = document.getElementById("lightboxPrev");
  const nextBtn      = document.getElementById("lightboxNext");

  document.querySelectorAll(".gallery-grid img").forEach((img, i) => {
    img.addEventListener("click", () => {
      currentImg = i;
      lightboxImg.src = imgs[i];
      lightbox.classList.add("open");
    });
  });

  closeBtn.addEventListener("click", () => lightbox.classList.remove("open"));
  lightbox.addEventListener("click", (e) => { if (e.target === lightbox) lightbox.classList.remove("open"); });

  prevBtn.addEventListener("click", () => {
    currentImg = (currentImg - 1 + imgs.length) % imgs.length;
    lightboxImg.src = imgs[currentImg];
  });

  nextBtn.addEventListener("click", () => {
    currentImg = (currentImg + 1) % imgs.length;
    lightboxImg.src = imgs[currentImg];
  });
}

/* ── SEAT PICKER ── */
function initSeatPicker(event) {
  const selectedSeats = new Set();
  const MAX_SEATS = 6;

  document.querySelectorAll(".seat:not(.taken)").forEach(seat => {
    seat.addEventListener("click", () => {
      const seatId = seat.dataset.seat;

      if (seat.classList.contains("selected")) {
        seat.classList.remove("selected");
        selectedSeats.delete(seatId);
      } else {
        if (selectedSeats.size >= MAX_SEATS) {
          if (typeof showToast === "function") showToast(`Max ${MAX_SEATS} seats allowed`, "info");
          return;
        }
        seat.classList.add("selected");
        selectedSeats.add(seatId);
      }

      updateSeatSummary(selectedSeats, event.price);
    });
  });
}

function updateSeatSummary(selectedSeats, pricePerSeat) {
  const total = selectedSeats.size * pricePerSeat;
  const listEl  = document.getElementById("selectedSeatsList");
  const totalEl = document.getElementById("seatTotal");
  const proceedBtn = document.getElementById("proceedToReview");
  const sidebarSeats = document.getElementById("sidebarSeats");
  const sidebarTotal = document.getElementById("sidebarTotal");
  const sidebarBtn   = document.getElementById("sidebarBookBtn");
  const stickyPrice  = document.getElementById("stickyPrice");

  const seatList = selectedSeats.size > 0 ? [...selectedSeats].join(", ") : "None";

  if (listEl)  listEl.textContent  = seatList;
  if (totalEl) totalEl.textContent = `₹${total.toLocaleString()}`;

  if (proceedBtn) {
    proceedBtn.disabled = selectedSeats.size === 0;
    proceedBtn.textContent = selectedSeats.size > 0
      ? `Proceed to Review (${selectedSeats.size} seat${selectedSeats.size > 1 ? "s" : ""}) →`
      : "Proceed to Review →";
  }

  if (sidebarSeats) sidebarSeats.textContent = seatList;
  if (sidebarTotal) sidebarTotal.textContent = `₹${total.toLocaleString()}`;
  if (sidebarBtn)   {
    sidebarBtn.disabled = selectedSeats.size === 0;
    sidebarBtn.textContent = selectedSeats.size > 0 ? "Confirm Booking" : "Select Seats First";
  }
  if (stickyPrice) stickyPrice.textContent = `₹${total > 0 ? total.toLocaleString() : document.getElementById("stickyPrice")?.dataset.base || "0"}`;

  // Store for review step
  window._selectedSeats = [...selectedSeats];
  window._totalPrice    = total;
}

/* ── STEPPER ── */
function initStepper() {
  const panel1 = document.getElementById("panel1");
  const panel2 = document.getElementById("panel2");
  const panel3 = document.getElementById("panel3");
  const step2  = document.getElementById("step2");
  const step3  = document.getElementById("step3");
  const line1  = document.getElementById("line1");
  const line2  = document.getElementById("line2");

  function goToStep(n) {
    [panel1, panel2, panel3].forEach((p, i) => {
      p.classList.toggle("active", i + 1 === n);
    });

    // Update stepper visuals
    if (n >= 2) { step2.classList.add("active"); line1.classList.add("done"); }
    else        { step2.classList.remove("active"); line1.classList.remove("done"); }

    if (n === 3) { step3.classList.add("active"); step2.classList.add("done"); line2.classList.add("done"); }
    else         { step3.classList.remove("active"); }

    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  document.getElementById("proceedToReview").addEventListener("click", () => {
    if (!window._selectedSeats?.length) return;
    document.getElementById("reviewSeats").textContent = window._selectedSeats.join(", ");
    document.getElementById("reviewTotal").textContent = `₹${window._totalPrice.toLocaleString()}`;
    goToStep(2);
  });

  document.getElementById("backToSeats").addEventListener("click", () => goToStep(1));

  document.getElementById("proceedToConfirm").addEventListener("click", () => {
    document.getElementById("confirmedSeatsInfo").innerHTML = `
      <strong>Seats:</strong> ${window._selectedSeats.join(", ")}<br>
      <strong>Amount Paid:</strong> ₹${window._totalPrice.toLocaleString()}
    `;
    goToStep(3);
    if (typeof showToast === "function") showToast("Booking confirmed! 🎉", "success");
  });

  // Sidebar book button
  const sidebarBtn = document.getElementById("sidebarBookBtn");
  if (sidebarBtn) {
    sidebarBtn.addEventListener("click", () => {
      if (window._selectedSeats?.length) {
        document.getElementById("reviewSeats").textContent = window._selectedSeats.join(", ");
        document.getElementById("reviewTotal").textContent = `₹${window._totalPrice.toLocaleString()}`;
        goToStep(2);
      }
    });
  }
}

/* ── STICKY BAR ── */
function initStickyBar() {
  document.getElementById("stickyBookBtn")?.addEventListener("click", () => {
    if (window._selectedSeats?.length) {
      document.getElementById("reviewSeats").textContent = window._selectedSeats.join(", ");
      document.getElementById("reviewTotal").textContent = `₹${window._totalPrice.toLocaleString()}`;
      document.getElementById("proceedToReview")?.click();
    } else {
      if (typeof showToast === "function") showToast("Please select seats first", "info");
      window.scrollTo({ top: 400, behavior: "smooth" });
    }
  });
}