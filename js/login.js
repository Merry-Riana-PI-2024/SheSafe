function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  let users = JSON.parse(localStorage.getItem("users")) || [];

  if (!email || !password) {
    document.getElementById("error-message").innerHTML =
      "Email and password cannot be empty.";
    return;
  }

  try {
    const user = users.find(
      (user) =>
        user.email === email &&
        user.password === password &&
        user.status === 1 &&
        user.active === 1
    );
    if (user) {
      localStorage.setItem("LoggedIn", "true");

      window.location.href = "home.html";
    } else {
      document.getElementById("error-message").innerHTML =
        "<p>Invalid Email or Password</p>";
    }
  } catch (error) {
    console.error("Error during login:", error);
  }
}
