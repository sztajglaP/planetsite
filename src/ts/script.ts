const navButton: HTMLButtonElement = document.querySelector('.nav__burger-btn');
const navMenu: HTMLElement = document.querySelector('.nav__menu');
const nav: HTMLElement = document.querySelector('.nav');

const showNavMenu = () => {
    navMenu.classList.toggle('active');
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