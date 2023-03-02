(() => {
  const toggles = document.querySelectorAll("*[data-action='toggle-menu']");

  toggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
      const menu = document.querySelector('.menu-mobile');
      menu.classList.toggle('menu--open');
    });
  });
})();