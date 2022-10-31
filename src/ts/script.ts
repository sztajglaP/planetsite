const navButton: HTMLButtonElement = document.querySelector('.nav__burger-btn');
const navMenu: HTMLElement = document.querySelector('.nav__menu');
const nav: HTMLElement = document.querySelector('.nav');
const headerArrowBtn: HTMLButtonElement = document.querySelector('.header__arrow-btn');

const showNavMenu = () => {
    navMenu.classList.toggle('active');
    headerArrowBtn.classList.toggle('active');
    document.body.classList.toggle('active');
}

const addShadowOnNav = () => {
    if(scrollY > 0) {
        nav.classList.add('active');
    } else {
        nav.classList.remove('active');
    }
}

const skipToMainContent = () => {
    const section: HTMLElement = document.querySelector('.info')
    const position: number = section.getBoundingClientRect().top + window.pageYOffset - 120;

    window.scrollTo({top: position, behavior: 'smooth'});
}

navButton.addEventListener('click', showNavMenu);
document.addEventListener('scroll', addShadowOnNav);
headerArrowBtn.addEventListener('click', skipToMainContent);