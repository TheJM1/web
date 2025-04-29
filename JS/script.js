// Carrusel de banners
let currentBanner = 0;
const banners = document.querySelectorAll('.carousel img');

function showBanner(index) {
  banners.forEach(banner => banner.classList.remove('active'));
  banners[index].classList.add('active');
}

function showNextBanner() {
  currentBanner = (currentBanner + 1) % banners.length;
  showBanner(currentBanner);
}

function showPreviousBanner() {
  currentBanner = (currentBanner - 1 + banners.length) % banners.length;
  showBanner(currentBanner);
}

document.getElementById('next-banner').addEventListener('click', showNextBanner);
document.getElementById('prev-banner').addEventListener('click', showPreviousBanner);

// Carrusel automático
setInterval(showNextBanner, 5000);

// Menú desplegable
const toggleButton = document.getElementById('menu-toggle');
const menuOptions = document.getElementById('menu-options');

toggleButton.addEventListener('click', (e) => {
  e.stopPropagation();
  menuOptions.classList.toggle('visible');
});

// Cerrar menú al hacer clic fuera
document.addEventListener('click', () => {
  menuOptions.classList.remove('visible');
});

console.log('JM TECH cargado correctamente');