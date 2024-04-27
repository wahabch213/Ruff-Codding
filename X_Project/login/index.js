document.getElementById("btn_google").addEventListener("click", function () {
  window.open("https://accounts.google.com/signin");
});

document.getElementById("btn_apple").addEventListener("click", function () {
  window.open("https://appleid.apple.com/auth/signin");
});
3;
document.getElementById("acc").addEventListener("click", function () {
  // Open a form or process account creation
});

document.getElementById("sign_in").addEventListener("click", function () {
  window.open("https://yourwebsite.com/signin");
});

document.getElementById("acc").addEventListener("click", function () {
  // Get the form elements
  var email = document.getElementById("email");
  var password = document.getElementById("password");

  // Validate the email and password
  if (!validateEmail(email.value)) {
    alert("Please enter a valid email address.");
    email.focus();
    return false;
  }

  if (password.value.length < 8) {
    alert("Password must be at least 8 characters long.");
    password.focus();
    return false;
  }

  // If validation passes, process the account creation
});

function validateEmail(email) {
  var re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
