let users = [
  {
    id: 1,
    email: "rnvitas697@gmail.com",
    password: "12345678",
    status: 1,
    active: 1,
  },
  {
    id: 2,
    email: "resaarfita@gmail.com",
    password: "1234567",
    status: 1,
    active: 1,
  },
  {
    id: 3,
    email: "resaarfita@gmail.com",
    password: "1234567",
    status: 1,
    active: 1,
  },
];

const api = "https://66dfecb22fb67ac16f279532.mockapi.io/Shesafe/users";


async function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    //kalo pake api
    let response = await fetch(api);
    let users = await response.json();

    const user = users.find(
      (user) =>
        user.email === email &&
        user.password === password &&
        user.status === 1 &&
        user.active === 1
    );
    if (user) {
      localStorage.setItem("LoggedIn", "true");
      localStorage.setItem("email", email);

      window.location.href = "home.html";
    } else {
      document.getElementById("error-message").innerHTML =
        "<p>Invalid Email or Password</p>";
    }
  } catch (error) {
    console.error("Error during login:", error);
  }
}
