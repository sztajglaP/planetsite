const navButton = document.querySelector('.nav__burger-btn');
const navMenu = document.querySelector('.nav__menu');
const nav = document.querySelector('.nav');
const headerArrowBtn = document.querySelector('.header__arrow-btn');

const showNavMenu = () => {
    navMenu.classList.toggle('active');
    headerArrowBtn.classList.toggle('active');
    document.body.classList.toggle('active');
};

const addShadowOnNav = () => {
    if (scrollY > 0) {
        nav.classList.add('active');
    }
    else {
        nav.classList.remove('active');
    }
};

const skipToMainContent = () => {
    const section = document.querySelector('.first-section');
    const position = section.getBoundingClientRect().top + window.pageYOffset - 120;
    window.scrollTo({ top: position, behavior: 'smooth' });
};

navButton.addEventListener('click', showNavMenu);
document.addEventListener('scroll', addShadowOnNav);
headerArrowBtn.addEventListener('click', skipToMainContent);