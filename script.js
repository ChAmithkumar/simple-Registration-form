document.getElementById("registrationForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent form from submitting

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  // Name check
  if (name.length < 5) {
    alert("Name must be at least 5 characters long.");
    return;
  }

  // Email check
  if (!email.includes("@")) {
    alert("Enter a valid email with '@'.");
    return;
  }

  // Phone number check
  const phoneRegex = /^\d{10}$/;
  if (!phoneRegex.test(phone) || phone === "1234567890") {
    alert("Enter a valid 10-digit phone number (not 1234567890).");
    return;
  }

  // Password check
  const lowerPassword = password.toLowerCase();
  const lowerName = name.toLowerCase();
  if (
    password.length < 8 ||
    lowerPassword === "password" ||
    lowerPassword === lowerName
  ) {
    alert("Password is not strong. It must be at least 8 characters and not 'password' or your name.");
    return;
  }

  // Confirm password check
  if (password !== confirmPassword) {
    alert("Password and confirm password do not match.");
    return;
  }

  // If all validations pass
  alert("Registration successful!");
});


