$(function() {

    'use strict';

    // smooth scroll
    $("a").on("click", function(event) {

        if (this.hash !== "") {
            event.preventDefault();

            var hash = this.hash;

            $("html, body").animate({

                scrollTop: $(hash).offset().top - 50

            }, 850);

        }

    });

    // hide navbar on mobile after click
    $('.navbar-nav a').on('click', function() {
        $('.navbar-collapse').collapse('hide');
    });

    // navbar on scroll
    $(window).on("scroll", function() {

        var onScroll = $(this).scrollTop();

        if( onScroll > 50) {
            $(".navbar").addClass("navbar-fixed");

            $(".navbar-ng .navbar-collapse .current a").css({
                "color": "blue"
            });
        }
        else {
            $(".navbar").removeClass("navbar-fixed");
            $(".navbar-ng .navbar-collapse .current a").css({
                "background-color": "#ffc107"
            });

        }

    });


  

  

    // portfolio magnific popup
   

});