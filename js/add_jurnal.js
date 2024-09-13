window.onload = function () {
  const isLoggedIn = localStorage.getItem("LoggedIn");
  const email = localStorage.getItem("email");

  // Jika pengguna belum login, redirect ke halaman login
  if (!isLoggedIn) {
    window.location.href = "login.html";
  } else {
    // document.getElementById('welcome-message').innerText = `Welcome, ${username}!`;
  }
};

const apiUrl = "https://66dfecb22fb67ac16f279532.mockapi.io/Shesafe/jurnal";

async function add_jurnal() {
  const judul = document.getElementById("judul-jurnal").value;
  const deskripsi = document.getElementById("descKejadian").value;

  const data = { judul, deskripsi };

  const response = await fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const result = await response.json();
  console.log("Created:", result);
  document.getElementById("form_addjurnal").reset();
}
