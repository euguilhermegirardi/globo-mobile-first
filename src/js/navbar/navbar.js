var icon = document.querySelector('.navbar-mobile__menu--open');
var menu = document.querySelector('.navbar-mobile__menu');
var close = document.querySelector('.navbar-mobile__menu--close');

if(icon) {
  icon.addEventListener('click', (e) => {
    e.preventDefault();
    menu.style.width = '25rem';
  });
}

if(close) {
  close.addEventListener('click', (e) => {
    e.preventDefault();
    menu.style.width = '0'
  });
}
