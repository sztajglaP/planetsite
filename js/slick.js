$(document).ready(function () {
    $('.planets__box').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        arrows: true,
        prevArrow: '<button type="button" class="slick-prev slick-arrow"><</button>',
        nextArrow: '<button type="button" class="slick-next slick-arrow">></button>',
        mobileFirst: true,
        responsive: 
        [
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            }
        ],
    });
})