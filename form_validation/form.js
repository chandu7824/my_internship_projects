document.getElementById("registrationForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");

  const emailError = document.getElementById("emailError");
  const passwordError = document.getElementById("passwordError");

  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  let isValid = true;

  // Email Validation
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    emailError.textContent = "Please enter a valid email.";
    isValid = false;
  } else {
    emailError.textContent = "";
  }

  // Password Validation (min 8 chars, at least one letter and one number, allows special characters)
  const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/;
  if (!passwordPattern.test(password)) {
    passwordError.textContent =
      "Password must be at least 8 characters long and include at least one letter and one number.";
    isValid = false;
  } else {
    passwordError.textContent = "";
  }

  if (isValid) {
    alert("Form submitted successfully!");
    // Proceed with actual submission or AJAX call
  }
});
