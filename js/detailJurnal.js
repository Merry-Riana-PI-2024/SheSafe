document.addEventListener("DOMContentLoaded", function() {
    const journalData = {
        date: "15 Agustus 2024",
        judul: "Hidup dalam Bayang-Bayang : Kekerasan yang Saya Hadapi",
        deskripsi: "Dalam jurnal ini, saya menceritakan pengalaman saya menghadapi kekerasan dalam rumah tangga yang semakin tak tertahankan. Setiap harinya, rasa takut dan kecemasan menguasai hidup saya, namun saya masih mencari cara untuk bisa bertahan.",
        tanggalKejadian: {
            mulai: "10 Juli 2024",
            akhir: "5 Agustus 2024"
        },
        kronologi: [
            {
                tanggal: "10 Juli 2024",
                deskripsi: "Malam itu, pasangan saya marah besar karena hal kecil. Dia mulai memukul dan menghina saya secara verbal. Saya tidak bisa melawan karena takut akan dampak yang lebih buruk."
            },
            {
                tanggal: "15 Juli 2024",
                deskripsi: "Hari itu, saya merasa tertekan karena suasana yang tegang. Pasangan saya terus memaki dan mengancam saya."
            },
            {
                tanggal: "20 Juli 2024",
                deskripsi: "Malam itu, saya tidak dapat tidur karena pasangan saya terus mengancam saya dan menghancurkan barang-barang di rumah."
            }
        ],
        lampiran: [
            {
                namaFile: "Bukti_kejadian_1.jpg",
                filePath: "/path/to/file1"
            },
            {
                namaFile: "Bukti_kejadian_2.jpg",
                filePath: "/path/to/file2"
            }
        ]
    };

    document.getElementById("date-label").textContent = journalData.date;
    document.getElementById("judul-artikel").textContent = journalData.judul;
    document.getElementById("deskripsi-artikel").textContent = journalData.deskripsi;
    document.getElementById("tanggal-mulai").textContent = journalData.tanggalKejadian.mulai;
    document.getElementById("tanggal-akhir").textContent = journalData.tanggalKejadian.akhir;
    document.getElementById("kronologi-date-1").textContent = journalData.kronologi[0].tanggal;
    document.getElementById("desc-kejadian-1").textContent = journalData.kronologi[0].deskripsi;
    document.getElementById("kronologi-date-2").textContent = journalData.kronologi[1].tanggal;
    document.getElementById("desc-kejadian-2").textContent = journalData.kronologi[1].deskripsi;
    document.getElementById("kronologi-date-3").textContent = journalData.kronologi[2].tanggal;
    document.getElementById("desc-kejadian-3").textContent = journalData.kronologi[2].deskripsi;


    const fileTableBody = document.getElementById("fileTableBody");
    journalData.lampiran.forEach(lampiran => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${lampiran.namaFile}</td>
            <td><a href="${lampiran.filePath}">Download</a></td>
        `;
        fileTableBody.appendChild(row);
    });
});
