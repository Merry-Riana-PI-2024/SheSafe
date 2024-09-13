window.onload = function () {
  const isLoggedIn = localStorage.getItem("LoggedIn");

  // Jika pengguna belum login, redirect ke halaman login
  if (!isLoggedIn) {
    window.location.href = "login.html";
  } else {
  }
};

function getNextId() {
  let currentId = localStorage.getItem("nextJournalId");
  if (!currentId) {
    currentId = 1;
  } else {
    currentId = parseInt(currentId) + 1;
  }
  localStorage.setItem("nextJournalId", currentId);
  return currentId;
}

function save_jurnal(
  id,
  title,
  start_date,
  end_date,
  klasifikasi,
  desc,
  file,
  currentDate,
  active
) {
  let journals = JSON.parse(localStorage.getItem("my_jurnal")) || [];

  const fileName = file ? file.name : "No file";
  const newEntry = {
    id,
    title,
    start_date,
    end_date,
    klasifikasi,
    desc,
    fileName, // Simpan nama file, bukan objek file
    currentDate,
    active,
  };

  if (id) {
    // Edit existing entry
    const index = journals.findIndex((entry) => entry.id === parseInt(id));
    if (index > -1) {
      journals[index] = newEntry;
    }
  } else {
    // Add new entry
    id = getNextId();
    newEntry.id = id;
    journals.push(newEntry);
  }

  localStorage.setItem("my_jurnal", JSON.stringify(journals));
  return id;
}

function add_jurnal() {
  console.log("add_jurnal function called");

  // Daftar nama bulan dalam bahasa Indonesia
  const bulanIndo = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];

  // Mendapatkan tanggal saat ini
  const tanggal = new Date();

  // Mengambil bagian tanggal, bulan, dan tahun
  const hari = tanggal.getDate();
  const bulan = tanggal.getMonth(); // Bulan dimulai dari 0
  const tahun = tanggal.getFullYear();

  // Format tanggal
  const currentDate = `${hari} ${bulanIndo[bulan]} ${tahun}`;
  const active = 1;
  const title = document.getElementById("judul-jurnal").value;
  const start_date = document.getElementById("start-date").value;
  const end_date = document.getElementById("end-date").value;
  const klasifikasi = document.getElementById("klasifikasikasus").value;
  const desc = document.getElementById("descKejadian").value;
  const fileInput = document.getElementById("bukti_file");
  const file = fileInput ? fileInput.files[0] : null; // Pastikan fileInput ada
  const id = document.getElementById("journalId")
    ? document.getElementById("journalId").value
    : ""; // Pastikan journalId ada

  if (!title) {
    alert("Judul Jurnal tidak boleh kosong");
    return;
  }

  if (!start_date && !end_date) {
    alert("Tanggal Kejadian tidak boleh kosong");
    return;
  }

  if (!klasifikasi) {
    alert("Klasifikasi Kasus tidak boleh kosong");
    return;
  }

  if (!desc) {
    alert("Ringkasan Kejadian tidak boleh kosong");
    return;
  }

  const newId = save_jurnal(
    id,
    title,
    start_date,
    end_date,
    klasifikasi,
    desc,
    file,
    currentDate,
    active
  );

  if (newId) {
    window.location.href = "/views/jurnal/list_jurnal.html";
  } else {
    // alert("Gagal menyimpan");
    console.log("gagal");
  }
}
