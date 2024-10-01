const navbarNav = document.querySelector(".navbar-nav");
const menu = document.querySelector("#list-menu");

// Tambahkan event listener untuk menu agar tidak menutup saat diklik
menu.addEventListener("click", function (e) {
  e.stopPropagation(); // Mencegah event bubbling ke document
  navbarNav.classList.toggle("active"); // Toggle menu
});

// Tambahkan event listener untuk klik di seluruh dokumen
document.addEventListener("click", function (e) {
  // Cek jika klik terjadi di luar menu atau navbar
  if (!menu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active"); // Tutup list jika di luar
  }
});
