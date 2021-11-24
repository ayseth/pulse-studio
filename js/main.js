(function ($, sr) {
    // debouncing function from John Hann
    // http://unscriptable.com/index.php/2009/03/20/debouncing-javascript-methods/
    var debounce = function (func, threshold, execAsap) {
        var timeout;
        return function debounced() {
            var obj = this,
                args = arguments;

            function delayed() {
                if (!execAsap)
                    func.apply(obj, args);
                timeout = null;
            };
            if (timeout)
                clearTimeout(timeout);
            else if (execAsap)
                func.apply(obj, args);
            timeout = setTimeout(delayed, threshold || 100);
        };
    }
    // smartresize 
    jQuery.fn[sr] = function (fn) {
        return fn ? this.bind('resize', debounce(fn)) : this.trigger(sr);
    };
})(jQuery, 'smartresize');


$(document).ready(function () {
    ///////////////////////////////
    // Set Home Slideshow Height
    ///////////////////////////////
    function setHomeBannerHeight() {
        var windowHeight = jQuery(window).height();
        jQuery('#header').height(windowHeight);
    }
    ///////////////////////////////
    // Center Home Slideshow Text
    ///////////////////////////////
    function centerHomeBannerText() {
        var bannerText = jQuery('#header > .center');
        var bannerTextTop = ((jQuery('#header').actual('height') - jQuery('#header .bottom').actual('height')) / 2) - (jQuery('#header > .center').actual('height') / 2) + +jQuery('#menu').actual('height');
        bannerText.css('padding-top', bannerTextTop + 'px');
        bannerText.show();
    }
    setHomeBannerHeight();
    centerHomeBannerText();
    //Resize events
    jQuery(window).smartresize(function () {
        setHomeBannerHeight();
        centerHomeBannerText();
    });

    function scroll() {
        if ($(window).scrollTop() == 0) {
            //$('.nav > li').removeClass('active');
            console.log($(window).scrollTop());
        } else {

        }
    }
    document.onscroll = scroll;
    var $scrollDownArrow = $('#scrollDownArrow');
    var animateScrollDownArrow = function () {
        $scrollDownArrow.animate({
            top: 5,
        }, 400, "linear", function () {
            $scrollDownArrow.animate({
                top: -5,
            }, 400, "linear", function () {
                animateScrollDownArrow();
            });
        });
    }
    animateScrollDownArrow();
    //Set Down Arrow Button
    // jQuery('#scrollDownArrow').click(function(e) {
    // 	e.preventDefault();
    // 	jQuery.scrollTo("#video", 1000, {
    // 		offset:-(jQuery('#header #menu').height()), axis:'y'
    // 	}
    // 	);
    // });
    // jQuery('.nav > li > a, #logo a').click(function(e) {
    // 	e.preventDefault();

    // 	jQuery.scrollTo(jQuery(this).attr('href'), 400, {
    // 		offset:-(jQuery('#header #menu').height()), axis:'y'
    // 	}
    // 	);
    // });



    //jQuery('.giant-heading, .condensed').fitText();


});



/*---------------   Social Button tooltip ---------------*/


// $(document).ready(function() {
//     $(function() {
//         $('[data-toggle="tooltip"]').tooltip()
//     })
// });


// $(document).ready(function() {
//     $(function() {
//         $('[data-toggle="tooltip-custom"]').tooltip()
//     })
// });



/*------------------------------------------
 Subscribe form ajax
 ------------------------------------------*/


// $('#subscription-form').submit(function(e) {

//     e.preventDefault();
//     var $form           = $('#subscription-form');
//     var submit          = $('#subscribe-button');
//     var ajaxResponse    = $('#subscription-response');
//     var email           = $('#subscriber-email').val();

//     $.ajax({
//         type: 'POST',
//         url: 'php/subscribe.php',
//         dataType: 'json',
//         data: {
//             email: email
//         },
//         cache: false,
//         beforeSend: function(result) {
//             submit.val("Joining...");
//         },
//         success: function(result) {
//             if(result.sendstatus == 1) {
//                 ajaxResponse.html(result.message);
//                 $form.fadeOut(500);
//             } else {
//                 ajaxResponse.html(result.message);
//                 submit.val("Get it!");
//             }
//         }
//     });

// });





function navScroll() {

    var navbar = $('.navbar');
    var navbar_r = $('.navbar-right');
    var navbar_i = $('.navbar-img');

    if ($(window).scrollTop() <= 40) {
        navbar.removeClass('navbar-scroll');
        navbar_r.removeClass('nav-active');
        navbar_i.removeClass('active');
    } else {
        navbar.addClass('navbar-scroll');
        navbar_r.addClass('nav-active');
        navbar_i.addClass('active');

    };



}

window.onorientationchange = function () {
    var orientation = window.orientation;
    switch (orientation) {
        case 0:
        case 90:
        case -90:
            window.location.reload();
            break;
    }
};




$(window).scroll(function () {
    navScroll();
});


// var switchdiv = 'shown';

// 		function switchDiv(switchdiv){

// 			if(switchdiv == 'shown'){

// 			    document.getElementById('remake').setAttribute('style','display:none;');
//           document.getElementById('oprindelig').removeAttribute('style');   
// 					switchdiv = 'hidden';
// 			}

// 			else {
// 				 document.getElementById('oprindelig').setAttribute('style','display:none;');
//          document.getElementById('remake').removeAttribute('style'); 
// 				 switchdiv = 'shown';
// 			}
// 		};

// 		var switchButton            = document.querySelector('.switch-button');
// 		var switchBtnRight          = document.querySelector('.switch-button-case.right');
// 		var switchBtnLeft           = document.querySelector('.switch-button-case.left');
// 		var activeSwitch            = document.querySelector('.active');

// 		function switchLeft(){
// 			switchBtnRight.classList.remove('active-case');
// 			switchBtnLeft.classList.add('active-case');
// 			activeSwitch.style.left                         = '0%';
// 		}

// 		function switchRight(){
// 			switchBtnRight.classList.add('active-case');
// 			switchBtnLeft.classList.remove('active-case');
// 			activeSwitch.style.left                         = '50%';
// 		}

// 		switchBtnLeft.addEventListener('click', function(){
// 			switchLeft();
// 		}, false);

// 		switchBtnRight.addEventListener('click', function(){
// 			switchRight();
// 		}, false);
$(document).ready(function () {
    navScroll();
});

$(window).on('load', function () {

    // Animate loader off screen
    $(".cover-loader").fadeOut("slow");;
});

// $(window).load(function() {
//     $("body").removeClass("preload");
// });

$(window).on('load', function () {
    AOS.refresh();
});



// $(document).ready(function() {

//     $(".player").mb_YTPlayer();

// });

$(document).ready(function () {
    $("#owl-testimonials").owlCarousel();
});

$(document).ready(function () {
    $("#owl-partners").owlCarousel();
});



$(window).on('load', function () {
    $(".se-pre-con").fadeOut("slow");
});


/*=================================================
                Testimonials
=================================================*/
$('#owl-testimonials').owlCarousel({
    nav: false,
    items: 1,
    loop: true,
    margin: 10,
    autoplay: true,
    smartSpeed: 700,

    autoplayHoverPause: true,


});

$('#owl-testimonials-rtl').owlCarousel({
    rtl: true,
    nav: false,
    items: 1,

    loop: true,
    margin: 10,
    autoplay: true,
    smartSpeed: 700,

    autoplayHoverPause: true,


});

$('#owl-partners').owlCarousel({
    nav: false,
    items: 7,
    loop: true,
    margin: 10,
    autoplay: true,
    smartSpeed: 700,

    autoplayHoverPause: true,
    responsiveClass: true,
    responsive: {
        0: {
            items: 3,
            nav: false
        },
        600: {
            items: 4,
            nav: false
        },
        1000: {
            items: 7,
            nav: false,
            loop: false
        }
    }


});

$('#owl-partners-rtl').owlCarousel({
    rtl: true,
    nav: false,
    items: 7,
    loop: true,
    margin: 10,
    autoplay: true,
    smartSpeed: 700,

    autoplayHoverPause: true,
    responsiveClass: true,
    responsive: {
        0: {
            items: 3,
            nav: false
        },
        600: {
            items: 4,
            nav: false
        },
        1000: {
            items: 7,
            nav: false,
            loop: false
        }
    }


});



/*filter schedule*/

$(document).ready(function () {
    "use strict";


    function initIsotope() {
        var sortingButtons = $('.item_sorting_btn');
        if ($('.grid').length) {
            var grid = $('.grid').isotope({
                itemSelector: '.grid-item',
                percentPosition: true,
                masonry: {
                    horizontalOrder: true
                },
                getSortData: {
                    price: function (itemElement) {
                        var priceEle = $(itemElement).find('.product_price').text().replace('$', '');
                        return parseFloat(priceEle);
                    },
                    name: '.tt_class_title'
                }
            });
            $('.item_filter_btn').on('click', function () {
                var buttons = $('.item_filter_btn');
                buttons.removeClass('active');
                $(this).addClass('active');
                var filterValue = $(this).attr('data-filter');
                grid.isotope({
                    filter: filterValue
                });
            });
        }
    }







});
