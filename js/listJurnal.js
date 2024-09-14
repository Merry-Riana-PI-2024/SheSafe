function updateButtonText() {
    var tanggal = document.getElementById('tanggal-pilih').value;
    var buttonText = document.getElementById('button-text');
    
    if (tanggal) {
        var formattedDate = new Date(tanggal).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' });
        buttonText.textContent = formattedDate;
    } else {
        buttonText.textContent = "Pilih Tanggal";
    }
}

updateButtonText();

document.querySelector('.btn-edit').addEventListener('click', function() {
    alert('Anda yakin akan edit pengajuan kasus ini');
});

document.querySelector('.btn-delete').addEventListener('click', function() {
    alert('Anda yakin akan hapus pengajuan kasus ini');
});


function generateCard(cardData) {
    const card = document.createElement('div');
    card.className = 'card';

    const cardHeader = document.createElement('div');
    cardHeader.className = 'card-header';

    const dateLabel = document.createElement('span');
    dateLabel.className = 'date-label';
    dateLabel.textContent = cardData.tanggal;

    const statusLabel = document.createElement('span');
    statusLabel.className = 'status-label';
    statusLabel.textContent = cardData.status;

    cardHeader.appendChild(dateLabel);
    cardHeader.appendChild(statusLabel);

    if (cardData.draft) {
        const draftLabel = document.createElement('span');
        draftLabel.className = 'draft-label';
        draftLabel.textContent = 'Draft';
        cardHeader.appendChild(draftLabel);
    }

    const cardBody = document.createElement('div');
    cardBody.className = 'card-body';

    const cardTitle = document.createElement('h4');
    cardTitle.textContent = cardData.judul;

    const cardDescription = document.createElement('p');
    cardDescription.textContent = cardData.deskripsi;

    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardDescription);

    const cardFooter = document.createElement('div');
    cardFooter.className = 'card-footer';

    const btnEdit = document.createElement('button');
    btnEdit.className = 'btn-edit';
    btnEdit.innerHTML = `<img src="/foto/icon-edit.png" alt="Edit" class="icon-img"><a>Edit</a>`;

    const btnDelete = document.createElement('button');
    btnDelete.className = 'btn-delete';
    btnDelete.innerHTML = `<img src="/foto/icon-hapus.png" alt="Hapus" class="icon-img"><a>Hapus</a>`;

    cardFooter.appendChild(btnEdit);
    cardFooter.appendChild(btnDelete);

    card.appendChild(cardHeader);
    card.appendChild(cardBody);
    card.appendChild(cardFooter);

    document.getElementById('card-container').appendChild(card);
}

const mockData = [
    {
        id: 1,
        tanggal: '15 Agustus 2024',
        status: 'Menunggu Persetujuan',
        judul: 'Bertahan dari Pelecehan di Tempat Kerja',
        deskripsi: 'Saya mengalami pelecehan dari atasan di tempat kerja, dan ini sangat memengaruhi kesehatan mental saya. Saya ingin berbagi cerita dan mencari dukungan untuk menghadapi situasi ini.',
        draft: false
    },
    {
        id: 2,
        tanggal: '15 Agustus 2024',
        status: 'Menunggu Persetujuan',
        judul: 'Perjuangan Melawan Pernikahan Paksa',
        deskripsi: 'Saya sudah bertahun-tahun mengalami kekerasan fisik dan verbal dari pasangan saya, dan saya merasa tidak ada jalan keluar. Butuh dukungan dan saran dari komunitas.',
        draft: false
    }
];

mockData.forEach(cardData => generateCard(cardData));

document.addEventListener("DOMContentLoaded", function () {
    fetch("/parts/nav-bottom.html")
        .then((response) => response.text())
        .then((data) => {
            document.getElementById("nav-bottom").innerHTML = data;
        });
});
