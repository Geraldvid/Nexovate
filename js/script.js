// Animación al hacer scroll
const sections = document.querySelectorAll('.section');

const revealOnScroll = () => {
  const triggerBottom = window.innerHeight * 0.85;

  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;

    if (sectionTop < triggerBottom) {
      section.classList.add('show');
    }
  });
};

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll); // para que se active al cargar también

// Resaltar el link del navbar según la sección visible
const navLinks = document.querySelectorAll('.nav-links a');

const highlightMenu = () => {
  let current = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;

    if (scrollY >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
};

window.addEventListener('scroll', highlightMenu);

// Opcional: estilo para la clase 'show' y 'active' lo puedes poner en tu CSS
// Menú hamburguesa
const hamburger = document.getElementById('hamburger');
const navMenu = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

// Toggle Dark/Light Mode
const toggleBtn = document.getElementById('toggle-theme');
const root = document.documentElement;
const body = document.body;
const logo = document.getElementById("logo");

toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('light-mode');

  const isLight = document.body.classList.contains('light-mode');

  toggleBtn.textContent = isLight ? '☀️' : '🌙';

  // Cambiar logo según modo
  const logoPath = isLight ? 'css/Logol.png' : 'css/Logon.png';
  logo.setAttribute('src', logoPath);
});
