
Anda bilang:
const api = "https://66dfecb22fb67ac16f279532.mockapi.io/Shesafe/users";

async function regist() {
  const password = document.getElementById("password").value;
  const konfirmasi_password = document.getElementById("password_confirm").value;
  const nama_lengkap = document.getElementById("full_name").value;
  const gender = document.getElementById("gender").value;
  const birth_date = document.getElementById("ttl").value;
  const file = document.getElementById("identitas").files[0];
  const email = document.getElementById("email").value;

  // Validasi input
  if (!nama_lengkap) {
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

  // Mengambil nama file, bukan mengunggah file
  const fileName = file.name;

  // Membuat data JSON sebagai array
  const userData = [
    {
      createdAt: new Date().toISOString(),
      full_name: nama_lengkap,
      gender: gender,
      birth_date: birth_date,
      file: fileName, // Kirim hanya nama file
      password: password,
      active: 1,
      status: 1,
      email: email,
    },
  ];

  try {
    let response = await fetch(api, {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // Menentukan bahwa ini adalah JSON
      },
      body: JSON.stringify(userData), // Kirim data sebagai array
    });

    if (!response.ok) {
      throw new Error("Error during registration");
    }

    let result = await response.json();
    console.log("User registered successfully:", result);
  } catch (error) {
    console.error("Error during registration:", error);
  }
}