document.getElementById("login-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  if (username === "admin" && password === "admin") {
    window.location.href = "index.html";
  } else {
    alert("Invalid username or password.");
  }
});
