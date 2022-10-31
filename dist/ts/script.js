var navButton = document.querySelector('.nav__burger-btn');
var navMenu = document.querySelector('.nav__menu');
var nav = document.querySelector('.nav');
var headerArrowBtn = document.querySelector('.header__arrow-btn');
var showNavMenu = function () {
    navMenu.classList.toggle('active');
    headerArrowBtn.classList.toggle('active');
    document.body.classList.toggle('active');
};
var addShadowOnNav = function () {
    if (scrollY > 0) {
        nav.classList.add('active');
    }
    else {
        nav.classList.remove('active');
    }
};
var skipToMainContent = function () {
    var section = document.querySelector('.info');
    var position = section.getBoundingClientRect().top + window.pageYOffset - 120;
    window.scrollTo({ top: position, behavior: 'smooth' });
};
navButton.addEventListener('click', showNavMenu);
document.addEventListener('scroll', addShadowOnNav);
headerArrowBtn.addEventListener('click', skipToMainContent);
