
$(document).ready(function () {

    $('ul.menu > li').click(function () {
        $(this).children('a').addClass('active-link');
        $(this).siblings('li').children('a').removeClass('active-link');
    });// for adding color to nav-items on click

    $('.mobile-btn').click(function () {
        $('.mobile-nav').addClass('show');
        $('body').addClass('disable-scroll');

    });// show mobile menu

    $('.close-btn').click(function () {
        $('.mobile-nav').removeClass('show');
        $('body').removeClass('disable-scroll');
    });// show mobile menu

    $('.owl-carousel').owlCarousel({
        margin: 10,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                dots: true
            },

            1024: {
                items: 2,
                dots: true
            }

        }
    })


    $('.testimonial-slider').owlCarousel({
        margin: 20,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                dots: true,

            },
        }
    })






});


