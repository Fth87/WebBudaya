// Navbar

window.onscroll = () => {
  const header = document.querySelector('header');
  const navText = document.querySelectorAll('.nav-text');
  const line = document.querySelectorAll('.line');
  const fixed = header.offsetTop;

  if (window.pageYOffset > fixed) {
    header.classList.add('navbar-fixed');
    navText.forEach((element) => {
      element.classList.add('text-black');
    });
    line.forEach((element) => {
      element.classList.remove('white');
      element.classList.add('black');
    });
  } else {
    header.classList.remove('navbar-fixed');
    navText.forEach((element) => {
      element.classList.remove('text-black');
    });
    line.forEach((element) => {
      element.classList.add('white');
      element.classList.remove('black');
    });
  }
};

const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('hamburger-active');
  navMenu.classList.toggle('hidden');
});

