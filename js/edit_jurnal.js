// Fungsi untuk mengambil parameter query dari URL
function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

// Fungsi untuk memuat data jurnal yang akan diedit ke form
function loadJournalForEdit() {
  const journalId = getQueryParam("id"); // Ambil ID dari URL
  const journals = JSON.parse(localStorage.getItem("my_jurnal")) || [];

  // Temukan jurnal dengan ID yang sesuai
  const journal = journals.find((j) => j.id == journalId);

  if (journal) {
    // Muat data jurnal ke form
    document.getElementById("journalId").value = journal.id;
    document.getElementById("judul-jurnal").value = journal.title;
    document.getElementById("start-date").value = journal.start_date;
    document.getElementById("end-date").value = journal.end_date;
    document.getElementById("klasifikasikasus").value = journal.klasifikasi;
    document.getElementById("descKejadian").value = journal.desc;
  } else {
    alert("Jurnal tidak ditemukan.");
    window.location.href = "list_jurnal.html"; // Redirect jika jurnal tidak ditemukan
  }
}

// Panggil fungsi ini ketika halaman dimuat
window.onload = function () {
  loadJournalForEdit();
};

// Fungsi untuk menyimpan atau memperbarui jurnal
function update_jurnal() {
  const id = document.getElementById("journalId").value;
  const title = document.getElementById("judul-jurnal").value;
  const start_date = document.getElementById("start-date").value;
  const end_date = document.getElementById("end-date").value;
  const klasifikasi = document.getElementById("klasifikasikasus").value;
  const desc = document.getElementById("descKejadian").value;
  const fileInput = document.getElementById("bukti_file");
  const file = fileInput.files[0]; // Ambil file yang dipilih

  const currentDate = new Date().toLocaleDateString(); // Tanggal saat ini
  const active = 1; // Status aktif jurnal

  let journals = JSON.parse(localStorage.getItem("my_jurnal")) || [];

  // Jika jurnal dengan ID ini ada, edit jurnalnya
  const index = journals.findIndex((j) => j.id == id);
  if (index > -1) {
    journals[index] = {
      id,
      title,
      start_date,
      end_date,
      klasifikasi,
      desc,
      fileName: file ? file.name : journals[index].fileName, // Perbarui file jika ada, jika tidak biarkan
      currentDate,
      active,
    };

    localStorage.setItem("my_jurnal", JSON.stringify(journals));
    alert("Jurnal berhasil diperbarui!");
    window.location.href = "list_jurnal.html"; // Redirect ke halaman list jurnal
  } else {
    alert("Jurnal tidak ditemukan.");
  }
}
