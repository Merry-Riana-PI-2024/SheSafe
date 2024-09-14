// document.addEventListener("DOMContentLoaded", function() {
//     const journalData = {
//         date: "15 Agustus 2024",
//         judul: "Hidup dalam Bayang-Bayang : Kekerasan yang Saya Hadapi",
//         deskripsi: "Dalam jurnal ini, saya menceritakan pengalaman saya menghadapi kekerasan dalam rumah tangga yang semakin tak tertahankan. Setiap harinya, rasa takut dan kecemasan menguasai hidup saya, namun saya masih mencari cara untuk bisa bertahan.",
//         tanggalKejadian: {
//             mulai: "10 Juli 2024",
//             akhir: "5 Agustus 2024"
//         },
//         kronologi: [
//             {
//                 tanggal: "10 Juli 2024",
//                 deskripsi: "Malam itu, pasangan saya marah besar karena hal kecil. Dia mulai memukul dan menghina saya secara verbal. Saya tidak bisa melawan karena takut akan dampak yang lebih buruk."
//             },
//             {
//                 tanggal: "15 Juli 2024",
//                 deskripsi: "Hari itu, saya merasa tertekan karena suasana yang tegang. Pasangan saya terus memaki dan mengancam saya."
//             },
//             {
//                 tanggal: "20 Juli 2024",
//                 deskripsi: "Malam itu, saya tidak dapat tidur karena pasangan saya terus mengancam saya dan menghancurkan barang-barang di rumah."
//             }
//         ],
//         lampiran: [
//             {
//                 namaFile: "Bukti_kejadian_1.jpg",
//                 filePath: "/path/to/file1"
//             },
//             {
//                 namaFile: "Bukti_kejadian_2.jpg",
//                 filePath: "/path/to/file2"
//             }
//         ]
//     };

//     document.getElementById("date-label").textContent = journalData.date;
//     document.getElementById("judul-artikel").textContent = journalData.judul;
//     document.getElementById("deskripsi-artikel").textContent = journalData.deskripsi;
//     document.getElementById("tanggal-mulai").textContent = journalData.tanggalKejadian.mulai;
//     document.getElementById("tanggal-akhir").textContent = journalData.tanggalKejadian.akhir;
//     document.getElementById("kronologi-date-1").textContent = journalData.kronologi[0].tanggal;
//     document.getElementById("desc-kejadian-1").textContent = journalData.kronologi[0].deskripsi;
//     document.getElementById("kronologi-date-2").textContent = journalData.kronologi[1].tanggal;
//     document.getElementById("desc-kejadian-2").textContent = journalData.kronologi[1].deskripsi;
//     document.getElementById("kronologi-date-3").textContent = journalData.kronologi[2].tanggal;
//     document.getElementById("desc-kejadian-3").textContent = journalData.kronologi[2].deskripsi;

//     const fileTableBody = document.getElementById("fileTableBody");
//     journalData.lampiran.forEach(lampiran => {
//         const row = document.createElement("tr");
//         row.innerHTML = `
//             <td>${lampiran.namaFile}</td>
//             <td><a href="${lampiran.filePath}">Download</a></td>
//         `;
//         fileTableBody.appendChild(row);
//     });
// });

// Fungsi untuk mendapatkan parameter dari URL
function getUrlParameter(name) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(name);
}

// Fungsi untuk menampilkan detail jurnal
function displayJournalDetail() {
  const id = getUrlParameter("id"); // Ambil ID jurnal dari URL
  const journals = JSON.parse(localStorage.getItem("my_jurnal")) || [];

  const journal = journals.find((entry) => entry.id == id); // Temukan jurnal berdasarkan ID

  if (journal) {
    const journalDetail = document.getElementById("detail_jurnal");
    journalDetail.innerHTML = `
       <div class="action-container">
          <span id="date-label" class="date-label">${journal.currentDate}</span>
          <div class="button-action-detail d-flex gap-2">
            <button class="btn-delete" onclick="hapusJurnal(${journal.id})">
              <img src="/foto/hapus.png" alt="Hapus" class="icon-img" />
            </button>
            <button class="btn-edit" onclick="editJurnal(${journal.id})">
              <img src="/foto/edit.png" alt="Edit" class="icon-img" />
            </button>
          </div>
        </div>
                     <div class="my-3">
            <h3 id="judul-artikel" class="fw-bold">${journal.title}</h3>
            <p id="deskripsi-artikel">${journal.desc}</p>
          </div>

          <div class="my-4">
            <label for="tkejadian" class="form-label">Tanggal Kejadian</label>
            <div class="d-flex align-items-center">
              <span
                id="tanggal-mulai"
                class="date-label-tanggal-kejadian">${journal.start_date}</span>
              <span class="mx-2"> - </span>
              <span
                id="tanggal-akhir"
                class="date-label-tanggal-kejadian">${journal.end_date}</span>
            </div>
          </div>

          <div class="my-4">
            <h5>Klasifikasi Kejadian</h5>
            <p class="date-label-kronologi-kejadian d-inline">${journal.klasifikasi}</p>
          </div>

          <div class="my-4">
            <h5>Kronologi Kejadian</h5>

            <div>
              <div class="mb-2">
                <span
                  id="kronologi-date-1"
                  class="date-label-kronologi-kejadian"></span>
              </div>
              <div class="deskripsi-kejadian">
                <label class="form-label-dekripsi-kejadian"
                  ><strong>Deskripsi Kejadian:</strong></label
                >
                <span id="desc-kejadian-1" class="text-muted"></span>
              </div>
            </div>

            <div>
           

          <div class="mb-3 mt-3">
            <label for="file-upload" class="form-label">Lampiran Bukti</label>
            <table class="table table-bordered">
              <thead>
                <tr>
                  <th>Nama File</th>
                  <th>File</th>
                </tr>
              </thead>
              <tbody id="fileTableBody"></tbody>
            </table>
          </div>
        `;
  } else {
    document.getElementById("detail_jurnal").innerHTML =
      "<p>Jurnal tidak ditemukan!</p>";
  }
}

// Panggil fungsi untuk menampilkan detail jurnal setelah halaman dimuat
window.onload = function () {
  displayJournalDetail();
};
