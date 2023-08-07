const navbar = document.querySelector('.navbar');
const barBtn = document.querySelector('.fa-bars-staggered');

barBtn.addEventListener('click', toggleNav);
function toggleNav() {
  navbar.classList.toggle('active-nav')
}