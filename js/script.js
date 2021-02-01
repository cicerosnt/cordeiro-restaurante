window.addEventListener('scroll', function () {
  const header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 0);
});

function toogleMenu() {
  const menuToggle = document.querySelector('.menu_toggle');
  const menuNavigation = document.querySelector('.navigation');
  menuToggle.classList.toggle('active');
  menuNavigation.classList.toggle('active');
}
