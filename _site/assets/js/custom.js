!(function($) {
    "use strict";
    $('a.page-scroll').on('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });

    $(".service").owlCarousel({
        loop: true,
        smartSpeed: 500,
        autoPlay: true,
        nav: false,
        navText: [
            "<i class='fa fa-angle-left'></i>",
            "<i class='fa fa-angle-right'></i>"
        ],
        dots: false,
        items: 5,
        itemsDesktop: [1199, 5],
        itemsDesktopSmall: [979, 6],
        pagination: false
    });

    $(".slider").owlCarousel({
        navigation: true,
        slideSpeed: 3000,
        paginationSpeed: 400,
        singleItem: true,
        pagination: true,
        autoPlay: true,
        navigationText: [
            "<i class='fa fa-angle-left'></i>",
            "<i class='fa fa-angle-right'></i>"
        ],
        addClassActive: true,
    });

    // browser window scroll (in pixels) after which the "back to top" link is shown
    var offset = 300,
        //browser window scroll (in pixels) after which the "back to top" link opacity is reduced
        offset_opacity = 1200,
        //duration of the top scrolling animation (in ms)
        scroll_top_duration = 700,
        //grab the "back to top" link
        $back_to_top = $('.cd-top');

    //hide or show the "back to top" link
    $(window).scroll(function() {
        ($(this).scrollTop() > offset) ? $back_to_top.addClass(
            'cd-is-visible'): $back_to_top.removeClass(
            'cd-is-visible cd-fade-out');
        if ($(this).scrollTop() > offset_opacity) {
            $back_to_top.addClass('cd-fade-out');
        }
    });

    //smooth scroll to top
    $back_to_top.on('click', function(event) {
        event.preventDefault();
        $('body,html').animate({
            scrollTop: 0,
        }, scroll_top_duration);
    });

    $(document).on('ready', function() {
        if ($(window).width() >= "768") {
            $(".header").sticky({ topSpacing: 0 });
        }
    });

    $(document).on('ready', function() {
        if ($(window).width() >= "768") {
            $("#sub-nav").sticky({ topSpacing: 100 });
        }
    });    
})(jQuery);