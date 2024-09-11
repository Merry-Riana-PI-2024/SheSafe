document.addEventListener("DOMContentLoaded", function () {
  // Fetch and load the navigation content
  fetch("/parts/navigation.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("navigation").innerHTML = data;

      const burgerMenu = document.getElementById("burger-menu");
      const navLinks = document.getElementById("nav-links");

      if (burgerMenu && navLinks) {
        burgerMenu.addEventListener("click", function () {
          navLinks.classList.toggle("active");
          if (
            navLinks.style.display === "none" ||
            navLinks.style.display === ""
          ) {
            navLinks.style.display = "block"; // Show menu when clicked
          } else {
            navLinks.style.display = "none"; // Hide menu if it's already visible
          }
        });
      }
    });

  // Fetch and load the bottom navigation content
  fetch("/parts/nav-bottom.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("nav-bottom").innerHTML = data;
    });

  // Add event listener to close popup when clicking outside
});

let isPopupOpen = false;

function showAdd(event) {
  const popupMenu = document.getElementById("popup-menu");
  if (popupMenu) {
    popupMenu.classList.add("show");
    isPopupOpen = true;

    // Tambahkan event listener untuk menutup popup saat klik di luar area popup
    setTimeout(() => {
      document.addEventListener("click", closePopupOnClickOutside);
    }, 0); // Timeout 0 memastikan klik pertama tidak langsung menutup popup
  }
}

function closePopupOnClickOutside(event) {
  const popupMenu = document.getElementById("popup-menu");

  // Jika popup terbuka dan pengguna mengklik di luar popup, tutup popup
  if (popupMenu && isPopupOpen && !popupMenu.contains(event.target)) {
    popupMenu.classList.remove("show");
    isPopupOpen = false;

    // Hapus event listener setelah popup tertutup
    document.removeEventListener("click", closePopupOnClickOutside);
  }
}
