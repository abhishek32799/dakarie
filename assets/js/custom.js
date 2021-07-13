
$(document).ready(function () {

    $('ul.menu > li').click(function () {
        $(this).children('a').addClass('active-link');
        $(this).siblings('li').children('a').removeClass('active-link');
    });// for adding color to nav-items on click

    $('.mobile-btn').click(function () {
        $('.mobile-nav').addClass('show');
    });// show mobile menu

    $('.close-btn').click(function () {
        $('.mobile-nav').removeClass('show');
    });// show mobile menu

    $('.owl-carousel').owlCarousel({
        margin: 80,
        nav: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },

            1024: {
                items: 2,
                nav: true
            }

        }
    })




});


