function getNextId() {
  let currentId = localStorage.getItem("users_id");
  if (!currentId) {
    currentId = 1;
  } else {
    currentId = parseInt(currentId) + 1;
  }
  localStorage.setItem("users_id", currentId);
  return currentId;
}

function save_regist(
  id,
  password,
  full_name,
  gender,
  full_name,
  file,
  email,
  birth_date,
  active,
  status
) {
  let users = JSON.parse(localStorage.getItem("users")) || [];
  const fileName = file ? file.name : "No file";

  const newUser = {
    id,
    password,
    full_name,
    gender,
    full_name,
    file,
    email,
    fileName,
    birth_date,
    active,
    status,
  };

  if (id) {
    // Edit existing entry
    const index = users.findIndex((entry) => entry.id === parseInt(id));
    if (index > -1) {
      users[index] = newUser;
    }
  } else {
    // Add new entry
    id = getNextId();
    newUser.id = id;
    users.push(newUser);
  }

  localStorage.setItem("users", JSON.stringify(users));
  return id;
}

function regist() {
  console.log("add_jurnal function called");
  const password = document.getElementById("password").value;
  const konfirmasi_password = document.getElementById("password_confirm").value;
  const full_name = document.getElementById("full_name").value;
  const gender = document.getElementById("gender").value;
  const birth_date = document.getElementById("ttl").value;
  const fileInput = document.getElementById("identitas");
  const email = document.getElementById("email").value;
  const active = 1;
  const status = 1;
  const file = fileInput ? fileInput.files[0] : null;
  const id = document.getElementById("regist_id")
    ? document.getElementById("regist_id").value
    : ""; // Pastikan journalId ada

  // Validasi input
  if (!full_name) {
    alert("Nama lengkap tidak boleh kosong");
    return;
  }
  if (!email) {
    alert("Email tidak boleh kosong");
    return;
  }
  if (!gender) {
    alert("Jenis kelamin tidak boleh kosong");
    return;
  }
  if (!birth_date) {
    alert("Tanggal Lahir tidak boleh kosong");
    return;
  }
  if (!file) {
    alert("Bukti Identitas tidak boleh kosong");
    return;
  }
  if (!password) {
    alert("Password tidak boleh kosong");
    return;
  }

  // Tambahkan logika ini untuk memastikan proses berhenti jika password tidak cocok
  if (password !== konfirmasi_password) {
    alert("Konfirmasi Password anda belum sama");
    return; // Menghentikan eksekusi jika password tidak cocok
  }

  const newId = save_regist(
    id,
    password,
    full_name,
    gender,
    full_name,
    file,
    email,
    file,
    birth_date,
    active,
    status
  );

  if (newId) {
    alert("Berhasil Registrasi");
    window.location.href = "/views/login.html";
  } else {
    // alert("Gagal menyimpan");
    console.log("gagal");
  }
}
