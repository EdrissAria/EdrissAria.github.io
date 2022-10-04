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
        offset: '74px;'
    });

    /*--- Sticky Toggle Menu ---*/
    $('#about').waypoint(function (direction) {
        if (direction == "down") {
            $('.toggle_menu').addClass('sticky_toggle');
        } else {
            $('.toggle_menu').removeClass('sticky_toggle');
        }
    }, {
        offset: '74px;'
    });

    /*--- menu toggle ---*/
    let menuToggle = document.querySelector('.menu'); 
    let stickyToggle = document.querySelector('.toggle_menu');
    let nav = document.querySelector('nav');  
    menuToggle.onclick = function(){
        menuToggle.classList.toggle('active');
        stickyToggle.classList.toggle('active');
        nav.classList.toggle('active');  
    }

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
        $('.card').addClass('animated zoomIn'); 
    }, {
        offset: '60%'
    });

    // for skills frameworks
    $('#frameworks').waypoint(function (direction) {
        $('.progress').addClass('framework-progress'); 
    }, {
        offset: '60%'
    });

    // for skills others
    $('#others').waypoint(function (direction) {
        $('.progress').addClass('framework-progress'); 
    }, {
        offset: '60%'
    });

    // for projects
    $('#projects').waypoint(function (direction) {
        $('.box').addClass('animated pulse'); 
    }, {
        offset: '50%'
    });

    // for projects
    $('#contact').waypoint(function (direction) {
        $('.social').addClass('animated slideInUp'); 
    }, {
        offset: '65%'
    });

});



