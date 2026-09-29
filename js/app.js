// ======================================
// 1. querySelector()
// ======================================

const judul = document.querySelector("#judul");

judul.textContent = "Perpustakaan Sekolah";

// ======================================
// 2. querySelectorAll()
// ======================================

const semuaBuku = document.querySelectorAll(".buku");

console.log("Jumlah buku:", semuaBuku.length);


// ======================================
// 3. innerHTML
// ======================================

const jumlahBuku = document.querySelector("#jumlahBuku");

jumlahBuku.innerHTML = "<strong>Jumlah buku: 3</strong>";


// ======================================
// 4. textContent
// ======================================

const penulisPertama = document.querySelector(".penulis");

penulisPertama.textContent = "Andrea Hirata";


// ======================================
// 5. innerText
// ======================================

const statusPertama = document.querySelector(".status");

statusPertama.innerText = "Tersedia";


// ======================================
// 6. Manipulasi Style
// ======================================

judul.style.color = "darkblue";


// ======================================
// 7. Manipulasi Atribut
// ======================================

const tombolPertama = document.querySelector(".btnPinjam");

tombolPertama.setAttribute(
    "title",
    "Klik untuk meminjam buku"
);


// ======================================
// 8. Event + Manipulasi DOM
// ======================================

const semuaTombol = document.querySelectorAll(".btnPinjam");

semuaTombol.forEach(function(tombol) {

    tombol.addEventListener("click", function() {

        const buku = tombol.parentElement;
        const status = buku.querySelector(".status");

        status.textContent = "Dipinjam";

        status.style.color = "red";

        tombol.textContent = "Sudah Dipinjam";

        tombol.setAttribute("disabled", "true");

    });

});