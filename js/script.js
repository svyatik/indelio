/**
 * @package IT-SOUL
 * @subpackage js
 * @copyright © 2015 by Kovtun Svyatoslav
 * @license The MIT License (MIT)
 */

// WEBSITE PRELOADER
/*$ (window).load (function () {

    $ ('.preloader').delay (500).animate ({
        height: 0,
        opacity: 0
    }, function () {
        $ (this).css ('display', 'none');
        $ ('body').css ('overflow-y', 'scroll');
    });

});*/

// Run when document will ready
$ (document).ready (function () {
    var $window = $ (window);

    // Init paralax effect
    $ ('.background').each (function () {
        var scroll_speed = 3;
        var $this = $ (this);
        $window.scroll (function () {
            // Only for non-mobile devices
            if ($window.width () > 770) {
                var bgScroll = -(($window.scrollTop () - $this.offset ().top) / scroll_speed);
                var bgPosition = 'center '+ bgScroll + 'px';
                $this.css ('background-position', bgPosition);
            }
        });
    });


    // -> Init smooth scroll animation
    var scrollTime = 0.4;
    var scrollDistance = 150;

    $window.on ("mousewheel DOMMouseScroll", function (event) {
        console.log ('scroll');
        event.preventDefault ();

        var delta = event.originalEvent.wheelDelta/120 || -event.originalEvent.detail / 3;
        var scrollTop = $window.scrollTop ();
        var finalScroll = scrollTop - parseInt (delta*scrollDistance);

        TweenMax.to ($window, scrollTime, {
            scrollTo : { y: finalScroll, autoKill:true },
                ease: Power1.easeOut,
                overwrite: 5
        });
    });


    // -> Init the portfolio filter & aimations
    $('#portfolio').mixItUp();

    // -> Hide navbar on mobile after clicking
    $('.navbar-collapse a').click(function (e) {
        $('.navbar-collapse').collapse('toggle');
    });

    // -> Init the animation plugin
    if($(document).width() > 770) {
        new WOW().init();
    }

    // .lnb buttons animation
    $('.lnb').on('mouseenter', function() {
        $(this).find('.lnb-line-left').stop().animate({
            opacity: 1,
            left: 0,
            width: '100%'
        });
        $(this).find('.lnb-line-top').stop().animate({
            opacity: 1,
            top: 0,
            height: '100%'
        });
        $(this).find('.lnb-line-right').stop().animate({
            opacity: 1,
            right: 0,
            width: '100%'
        });
        $(this).find('.lnb-line-bottom').stop().animate({
            opacity: 1,
            bottom: 0,
            height: '100%'
        });
    }).on('mouseleave', function() {
        $(this).find('.lnb-line-left').stop().animate({
            opacity: 0,
            left: '-100%',
            width: 0
        });
        $(this).find('.lnb-line-top').stop().animate({
            opacity: 0,
            top: '-100%',
            height: 0
        });
        $(this).find('.lnb-line-right').stop().animate({
            opacity: 0,
            right: '-100%',
            width: 0
        });
        $(this).find('.lnb-line-bottom').stop().animate({
            opacity: 0,
            bottom: '-100%',
            height: 0
        });
    });


    var start = true;
    $ (window).on ('scroll', function () {
        // Animated counter when scrolled to it
        if ($ ('.counter').offset().top - $ (window).height () <= $ (window).scrollTop ()) {
            $ ('.counter-numb').addClass ('count');
            if (start) {
                animateCounter ();
                start = false;
            }
        }

        // Init Item choser in navbar
        if ( $(window).scrollTop () > $ ('.website-header').position ().top) {
            $ ('.navbar-main').addClass ('navbar-show')
        } else {
            $ ('.navbar-main').removeClass ('navbar-show');
        }

        var scrollPos = $(document).scrollTop();
        $('#myNavbar li').each(function () {
            var currLink = $(this).find('a');
            var refElement = $(currLink.attr("href"));
            if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
                $('#myNavbar li').removeClass("active");
                currLink.parent().addClass("active");
            }
            else{
                currLink.parent().removeClass("active");
            }
        });
    });

    function animateCounter () {
        $ ('.count').each(function () {
            $ (this).prop ('Counter',0).animate ({
                Counter: $ (this).text ()
            }, {
                duration: 6500,
                easing: 'easeOutQuint',
                step: function (now) {
                    $ (this).text (Math.ceil (now));
                }
            });
        });
    }

    $('.mix').on('mouseenter', function() {
        $(this).addClass('active');
        $(this).find('.hover-background').addClass('active');
        $(this).find('.hover-background-title').addClass('active');
        $(this).find('.hover-image').addClass('active');
    }).on('mouseleave', function() {
        $(this).removeClass('active');
        $(this).find('.hover-background').removeClass('active');
        $(this).find('.hover-background-title').removeClass('active');
        $(this).find('.hover-image').removeClass('active');
    });


    // Animated scrolling to anchor
    $('a[href*=#]:not([href=#])').click (function () {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $ (this.hash);
            target = target.length ? target : $ ('[name=' + this.hash.slice (1) +']');
            if (target.length) {
                $ ('html,body').animate ({
                    scrollTop: target.offset ().top-60
                }, 1000);
                return false;
            }
        }
    });

    $('.price-button').on('click', function() {
        var $current_button = $(this);
        console.log($('.contact-form').find('.contact-form-title').text($current_button.attr('data-type')));
        $('.page-background').css('display', 'block').stop().animate({
            opacity: 1
        }, 500);
        $('.contact-form').animate({
            top: 150,
            opacity: 1
        }, 500);
    });

    $('.close-button').on('click', function() {
        closeAlert();
    });

    $('.contact-form-close').on('click', function() {
        closeAlert();
    });

    $(document).keydown(function(evt) {
        if(evt.keyCode === 27) {
            closeAlert();
        }
    });

    function closeAlert() {
        $('.page-background').stop().animate({
            opacity: 0
        }, 500, function() {
            $(this).css('display', 'none')
        });
        $('.contact-form').animate({
            top: '250px',
            opacity: 0
        }, 500);
    }

    // Init the testimonials
    $('#imageGallery').lightSlider({
        adaptiveHeight: true,
        item: 1,
        slideMargin: 0,
        speed: 1000,
        controls: false
    });

    // Submit Feedback
    $ ('#feedback').on ('click', function (e) { //on submit
        /*$.ajax ({
            type: "Post",
            url: "mail.php",
            data: {
               name: $ ('#feedName').val (),
               email: $ ('#feedEmail').val (),
               phone: $ ('#feedPhone').val (),
               msg: $ ('#feedMsg').val ()
            },
            async: true,
            cache: false,
            success: closeFeedback ()
        });
        e.preventDefault ();*/
        closeFeedback();
        e.preventDefault ()
    });

    function closeFeedback () {
        $ ('.feedback-submit').on ('click', function (e) {
            $('.form_elem').addClass('hidden_form');
            $ ('.thx').css ('display', 'block');
            $ ('.thx').animate ({
                height: '100%',
                opacity: 1
            });
            $ ('.thx-cont').animate ({
                top: '50%',
                opacity: 1
            }, 500, 'easeOutCirc');
        });
    }
});
