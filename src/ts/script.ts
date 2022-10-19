const navButton: HTMLButtonElement = document.querySelector('.nav__burger-btn');
const navMenu: HTMLElement = document.querySelector('.nav__menu');
const nav: HTMLElement = document.querySelector('.nav');
const headerArrowBtn: HTMLButtonElement = document.querySelector('.header__arrow-btn');

const showNavMenu = () => {
    navMenu.classList.toggle('active');
    headerArrowBtn.classList.toggle('active');
}

const addShadowOnNav = () => {
    if(scrollY > 0) {
        nav.classList.add('active');
    } else {
        nav.classList.remove('active');
    }
}

navButton.addEventListener('click', showNavMenu);
document.addEventListener('scroll', addShadowOnNav);