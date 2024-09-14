function logout() {
    localStorage.removeItem("LoggedIn"); //item LoggedIn akan dihapus
    alert("Anda akan Logout");
    window.location.href = "/index.html"; // Redirect ke Index page
}