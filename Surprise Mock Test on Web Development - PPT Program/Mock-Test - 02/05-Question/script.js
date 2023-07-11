const form = document.getElementById("myForm");

form.addEventListener("submit", function(event) {
  event.preventDefault();
  if (validateForm()) {
    alert("Form submitted successfully!");
    form.reset();
  }
});

function validateForm() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const password = document.getElementById("password").value;
  const age = document.getElementById("age").value;
  const gender = document.getElementById("gender").value;
  const date = document.getElementById("date").value;
  const color = document.getElementById("color").value;

  let isValid = true;

  if (!name || name.trim() === "") {
    showError("name", "Name is required");
    isValid = false;
  }

  if (!email || !validateEmail(email)) {
    showError("email", "Valid email is required");
    isValid = false;
  }

  if (!phone || !validatePhone(phone)) {
    showError("phone", "Valid phone number is required");
    isValid = false;
  }

  if (!password || password.length < 6) {
    showError("password", "Password should be at least 6 characters");
    isValid = false;
  }

  if (!age || age < 1 || age > 150) {
    showError("age", "Age should be between 1 and 150");
    isValid = false;
  }

  if (!gender) {
    showError("gender", "Gender is required");
    isValid = false;
  }

  if (!date) {
    showError("date", "Date is required");
    isValid = false;
  }

  if (!color) {
    showError("color", "Color is required");
    isValid = false;
  }

  return isValid;
}

function validateEmail(email) {
  const emailRegex = /\S+@\S+\.\S+/;
  return emailRegex.test(email);
}

function validatePhone(phone) {
  const phoneRegex = /^\d{10}$/;
  return phoneRegex.test(phone);
}

function showError(field, message) {
  const errorElement = document.getElementById(field + "-error");
  errorElement.textContent = message;
}
