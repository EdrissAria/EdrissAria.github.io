/* jquery */
$(document).ready(function () {

    /*--- Sticky navigation ---*/
    $('#about').waypoint(function (direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
        offset: '60px;'
    });

    /*--- navigation scroll ---*/
    $(function () {
        $('a[href*=#]:not([href=#])').click(function () {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top - 60
                    }, 1000);
                    return false;
                }
            }
        });
    });

     /*--- animation on scroll ---*/
     $('#about').waypoint(function (direction) {
        $('#image').addClass('animated fadeInLeft'); 
        $('#text').addClass('animated fadeInRight'); 
    }, {
        offset: '50%'
    });

    // for skills progress
     $('#skills').waypoint(function (direction) {
        $('#progress').addClass('.progress-animation'); 
    });

});



