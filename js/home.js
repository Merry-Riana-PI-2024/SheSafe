$(document).ready(function () {

  $(".cases-content").slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: false,
    arrows: false,
  });

  $(".emergency-content").slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: false,
    arrows: false,
  });

  $(".tips-content").slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: false,
    arrows: false,
  });
});

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

