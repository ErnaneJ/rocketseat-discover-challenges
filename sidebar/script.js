const toggleMenu = document.getElementById('toggle-menu');

toggleMenu.addEventListener('click', () => {
  const aside = document.querySelector('aside');
  aside.classList.toggle('short');
});