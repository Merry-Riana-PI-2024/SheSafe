function loadPage(page, element) {
  let pageUrl = `${page}.html`; // Menentukan halaman yang akan dimuat

  fetch(pageUrl) // Mengambil file konten HTML
    .then((response) => {
      return response.text(); // Mendapatkan konten sebagai teks karena html
    })

    .then((data) => {
      // document.getElementById("content-jurnal").innerHTML = data;
      const contentElement = document.getElementById("content-jurnal");
      if (contentElement) {
        contentElement.innerHTML = data;

        // Memanggil fungsi yang sesuai untuk menampilkan data
        if (page === "my_jurnal") {
          displayJournalEntries(); // Menampilkan data jurnal
        } else if (page === "pengajuan_kasus") {
          // Panggil fungsi lain untuk halaman lain jika perlu
        }
      }
    })
    .catch((error) => {
      document.getElementById("content-jurnal").innerHTML =
        "<h1>Page Not Found</h1>";
      console.error("There was a problem with the fetch operation:", error);
    });

  // Menghapus kelas 'active' dari semua link
  const links = document.querySelectorAll(".myjurnal-button");
  links.forEach((link) => link.classList.remove("active"));

  // Menambahkan kelas 'active' ke elemen yang diklik
  element.classList.add("active");
}

document.addEventListener("DOMContentLoaded", function () {
  const defaultPage = document.getElementById("my_jurnal_nav");
  loadPage("my_jurnal", defaultPage);
});

// const observer = new MutationObserver((mutations) => {
//   mutations.forEach((mutation) => {
//     if (mutation.type === "childList") {
//       const content_myjurnal = document.getElementById("myjurnal-sections");
//       if (content_myjurnal) {
//         displayJournalEntries();
//         observer.disconnect();
//       }
//     }
//   });
// });

// observer.observe(document.body, { childList: true, subtree: true });
