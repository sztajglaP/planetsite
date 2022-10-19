var navButton = document.querySelector('.nav__burger-btn');
var navMenu = document.querySelector('.nav__menu');
var nav = document.querySelector('.nav');
var showNavMenu = function () {
    navMenu.classList.toggle('active');
};
var addShadowOnNav = function () {
    if (scrollY > 0) {
        nav.classList.add('active');
    }
    else {
        nav.classList.remove('active');
    }
};
navButton.addEventListener('click', showNavMenu);
document.addEventListener('scroll', addShadowOnNav);
