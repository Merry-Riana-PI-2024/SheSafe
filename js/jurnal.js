function displayJournalEntries() {
  const journals = JSON.parse(localStorage.getItem("my_jurnal")) || [];
  const content_myjurnal = document.getElementById("myjurnal-sections");

  // Cek jika ada elemen info-jurnal dan tambahkan pesan jika belum ada jurnal
  const info = document.getElementById("info-jurnal");
  if (journals.length === 0 && info) {
    info.innerHTML = "<h4>Belum Ada Jurnal</h4>";
  }
  content_myjurnal.innerHTML = "";

  journals.forEach((entry) => {
    content_myjurnal.innerHTML += `
          <div class="myjurnal-card mb-3">
              <div class="myjurnal-top-content">
                  <div class="myjurnal-label">
                      <div class="date">${entry.currentDate}</div>
                      <div class="info">${
                        entry.active ? "Draft" : "Published"
                      }</div>
                  </div>
                  <div class="myjurnal-desc" onclick="viewDetail(${entry.id})">
                      <h6>${entry.title}</h6>
                      <p>${entry.desc}</p>
                  </div>
              </div>
              <div class="myjurnal-bottom-content">
                  <div class="myjurnal-buttons d-flex justify-content-between">
                      <button onclick="editEntry(${entry.id})">Edit</button>
                      <button onclick="deleteEntry(${entry.id})">Hapus</button>
                  </div>
              </div>
          </div>
          `;
  });
}

document.addEventListener("DOMContentLoaded", displayJournalEntries);
