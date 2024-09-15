window.onload = function () {
  const isLoggedIn = localStorage.getItem("LoggedIn");
  const email = localStorage.getItem("email");
  const users = JSON.parse(localStorage.getItem("users")) || [];
  const user = users.find((user) => user);

  // Jika pengguna belum login, redirect ke halaman login
  if (!isLoggedIn) {
    window.location.href = "login.html";
  } else {
    document.getElementById("akun_profile").innerHTML = `
    <h4 class="fw-bold text-center">Profile</h4>
    <p class="fw-bold ">Nama Lengkap</p>
    <p>${user.full_name}</p>
     <p class="fw-bold">Email</p>
    <p>${user.email}</p>
    
    `;
  }
};

function logout() {
  localStorage.removeItem("LoggedIn"); //item LoggedIn akan dihapus
  alert("Anda akan Logout");
  window.location.href = "/index.html"; // Redirect ke Index page
}
