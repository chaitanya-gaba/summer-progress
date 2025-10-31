document.getElementById('mobileForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting

    const mobile = document.getElementById('mobile').value;

    // Check if exactly 10 digits
    if (/^\d{10}$/.test(mobile)) {
    alert("✅ Valid mobile number: " + mobile);
    } else {
    alert("❌ Please enter a valid 10-digit mobile number.");
    }
});