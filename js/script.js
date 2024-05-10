// Mendapatkan elemen menu mobile dan tombol menu
const menu = document.getElementById("mobile-menu");
const button = document.getElementById("mobile-menu-button");
const closeButton = document.getElementById("menu-button-x");
const mainContent = document.getElementById("main-content");

// Fungsi untuk menutup menu
function closeMenu() {
  menu.classList.remove("right-0");
  menu.classList.add("-right-96");
  mainContent.classList.remove("brightness-50");
}

// Menggunakan event listener untuk tombol menu
button.addEventListener("click", () => {
  menu.classList.remove("-right-96");
  menu.classList.add("right-0");
  mainContent.classList.add("brightness-50");
});

// Menggunakan event listener untuk tombol tutup
closeButton.addEventListener("click", closeMenu);

// Menggunakan event listener pada dokumen untuk menutup menu saat klik di luar area menu
document.addEventListener("click", (event) => {
  const isClickInsideMenu = menu.contains(event.target);
  const isClickInsideButton = button.contains(event.target);

  if (!isClickInsideMenu && !isClickInsideButton) {
    closeMenu();
  }
});

// Fungsi untuk menangani klik pada tautan navbar
function smoothScroll(target) {
  document.querySelector(target).scrollIntoView({
    behavior: "smooth",
  });
}

// Menangani klik pada tautan navbar
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      smoothScroll(this.getAttribute("href"));
    });
  });
});
