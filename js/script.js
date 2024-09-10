document.addEventListener("DOMContentLoaded", function () {
  fetch("../parts/navigation.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("navigation").innerHTML = data;

      const burgerMenu = document.getElementById("burger-menu");
      const navLinks = document.getElementById("nav-links");

      burgerMenu.addEventListener("click", function () {
        navLinks.classList.toggle("active");
        if (
          navLinks.style.display === "none" ||
          navLinks.style.display === ""
        ) {
          navLinks.style.display = "block"; // Atur tampilan ketika diklik
        } else {
          navLinks.style.display = "none"; // Sembunyikan lagi jika sudah tampil
        }
      });
    });

  fetch("../parts/nav-bottom.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("nav-bottom").innerHTML = data;
    });
});
