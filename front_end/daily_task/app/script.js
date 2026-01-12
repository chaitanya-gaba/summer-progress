let resendInterval = null;
let resendSeconds = 0;

/**
 * Starts the resend OTP countdown timer
 */
function startResendTimer(seconds) {
  resendSeconds = seconds;
  const container = document.getElementById("resend-container");

  container.innerText = `Resend OTP in ${resendSeconds}s`;

  resendInterval = setInterval(() => {
    resendSeconds--;

    if (resendSeconds <= 0) {
      clearInterval(resendInterval);
      container.innerHTML = `<a href="#" onclick="resendOTP()">Resend OTP</a>`;
    } else {
      container.innerText = `Resend OTP in ${resendSeconds}s`;
    }
  }, 1000);
}

async function sendOTP() {
  const email = document.getElementById("email").value.trim();
  const msg = document.getElementById("msg");

  if (!email) {
    msg.innerText = "Please enter your registered email.";
    return;
  }

  msg.innerText = "Sending verification code…";

  const res = await fetch("/send-otp", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email })
  });

  const data = await res.json();
  msg.innerText = data.message;

  if (data.success) {
    document.getElementById("step-email").classList.remove("active");
    document.getElementById("step-otp").classList.add("active");

    // Start resend timer after first OTP
    startResendTimer(data.cooldown);
  }
}

if (data.flow === "signup") {
  msg.innerText = "We’re creating your account. Check your email for OTP.";
}

async function resendOTP() {
  const email = document.getElementById("email").value.trim();
  const msg = document.getElementById("msg");

  msg.innerText = "Resending verification code…";

  const res = await fetch("/send-otp", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email })
  });

  const data = await res.json();
  msg.innerText = data.message;

  if (data.success) {
    // backend decides next cooldown
    startResendTimer(data.cooldown || 30);
  } else if (data.cooldown) {
    // still cooling down
    startResendTimer(data.cooldown);
  }
}

async function verifyOTP() {
  const email = document.getElementById("email").value.trim();
  const otp = document.getElementById("otp").value.trim();
  const msg = document.getElementById("msg");

  if (!otp) {
    msg.innerText = "Please enter the verification code.";
    return;
  }

  msg.innerText = "Verifying…";

  const res = await fetch("/verify-otp", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, otp })
  });

  const data = await res.json();
  msg.innerText = data.message;

  if (data.success && data.redirectUrl) {
    window.location.href = data.redirectUrl;
  }
}

if (data.flow === "signup") {
  console.log("New user signed up");
} else {
  console.log("Existing user logged in");
}