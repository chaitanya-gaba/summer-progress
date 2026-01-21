const screens = {
  lock: lockScreen,
  puzzle: puzzleScreen,
  passcode: passcodeScreen,
  crypto: cryptoScreen
};

function show(screen) {
  Object.values(screens).forEach(s => s.classList.add("hidden"));
  screens[screen].classList.remove("hidden");
}

function startPuzzle() {
  show("puzzle");
}

function checkPuzzle() {
  if (puzzleAnswer.value == 30) show("passcode");
  else alert("Wrong answer");
}

async function unlock() {
  const hash = await crypto.subtle.digest(
    "SHA-256",
    new TextEncoder().encode(passcode.value)
  );
  const hex = [...new Uint8Array(hash)].map(b=>b.toString(16).padStart(2,"0")).join("");
  if (hex === "5e884898da28047151d0e56f8dc6292773603d0d6aabbdd62a11ef721d1542d8")
    show("crypto");
  else alert("Incorrect passcode");
}

// ---- Encryption ----

async function getKey(password) {
  const enc = new TextEncoder();
  const baseKey = await crypto.subtle.importKey(
    "raw", enc.encode(password), "PBKDF2", false, ["deriveKey"]
  );
  return crypto.subtle.deriveKey(
    {name:"PBKDF2",salt:enc.encode("ciphergate"),iterations:100000,hash:"SHA-256"},
    baseKey,
    {name:"AES-GCM",length:256},
    false,
    ["encrypt","decrypt"]
  );
}

async function encrypt() {
  const iv = crypto.getRandomValues(new Uint8Array(12));
  const key = await getKey(cryptoKey.value);
  const cipher = await crypto.subtle.encrypt(
    {name:"AES-GCM",iv},
    key,
    new TextEncoder().encode(plainText.value)
  );
  result.value = btoa(String.fromCharCode(...iv,...new Uint8Array(cipher)));
}

async function decrypt() {
  const data = Uint8Array.from(atob(plainText.value),c=>c.charCodeAt(0));
  const iv = data.slice(0,12);
  const cipher = data.slice(12);
  const key = await getKey(cryptoKey.value);
  const text = await crypto.subtle.decrypt(
    {name:"AES-GCM",iv},
    key,
    cipher
  );
  result.value = new TextDecoder().decode(text);
}