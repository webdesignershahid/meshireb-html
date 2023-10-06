(function ($) {
    "use strict";

    var meshireb = {

        mobile_expand_menu: function(){
            //=============  Mobile Menu Integration  =============\\
            function mobile_menu(selector, actionSelector) {
                var mobile_menu = $(selector);
                mobile_menu.on("click", function() {
                    $(selector).toggleClass('sidemenu-open');
                });
                
                var hamburgerbtn = $(selector);
                hamburgerbtn.on("click", function() {
                    $(actionSelector).toggleClass('sidemenu-open');
                });

                $(document).on('click', function(e) {
                    var selectorType = $(actionSelector).add(mobile_menu);
                    if (selectorType.is(e.target) !== true && selectorType.has(e.target).length === 0) {
                        $(actionSelector).removeClass("sidemenu-open");
                        $(selector).removeClass("sidemenu-open");
                    }
                });
                // $(".menu_wrapper a").on('click', function() {
                //     $('.menu_wrapper, .menu-overlay').removeClass("sidemenu-open");
                // });
            
            };
            mobile_menu('.navbar-toggler, .close-menu', '.mobile-menu');  
        },
        
        /* ============================================================ */
        /* StickyHeader
        /* ============================================================ */
        sticky_header: function() {
            var header = $("header");
            // Add a scroll event listener to the window object
            window.addEventListener('scroll', () => {
                const scrollPosition = window.scrollY;
            
                if (scrollPosition > 60) {
                    header.addClass('sticky');
                } else {
                    header.removeClass('sticky');
                }
            });
        },


        /* ============================================================ */
        /* Swiper Slider Init
        /* ============================================================ */
        swiperCarousel: function () {

            ///============= Hero Slider =============\\\
            var EventsSlider = new Swiper ('.hero-slider', {
                slidesPerView: 1,
                spaceBetween: 20,
                freeMode: false,
                effect: 'fade',
                loop: 1,
                autoplay: {
                    delay: 5000,
                },
                speed: 1500,
            });
            ///============= Events Slider =============\\\
            var EventsSlider = new Swiper ('.events-slider', {
                slidesPerView: 1,
                spaceBetween: 20,
                freeMode: false,
                loop: 1,
                autoplay: {
                    delay: 5000,
                },
                speed: 1000,
                breakpoints: {
                    768: {
                        slidesPerView: 2,
                    },
                    992: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                    },
                    1200: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                },
                navigation: {
                    nextEl: '.events-slider .btn-next',
                    prevEl: '.events-slider .btn-prev',
                },
                // pagination: {
                //     el: '.testimonialCarousel .pagination',
                //     clickable: 'true',
                // }
            });
            ///============= Leasing Blocs Slider =============\\\
            var leasingBlockSlider = new Swiper ('.leasing_block_slider', {
                slidesPerView: 1,
                spaceBetween: 20,
                loop: 1,
                autoplay: {
                    delay: 5000,
                },
                speed: 1000,
                breakpoints: {
                    768: {
                        slidesPerView: 2,
                    },
                    1200: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                },
                // navigation: {
                //     nextEl: '.events-slider .btn-next',
                //     prevEl: '.events-slider .btn-prev',
                // },
                // pagination: {
                //     el: '.testimonialCarousel .pagination',
                //     clickable: 'true',
                // }
            });
            ///============= Leasing Blocs Slider =============\\\
            var galleryThumbs = new Swiper ('.step7Slider_content', {
                slidesPerView: 1,
                loop: 1,
                autoplay: false,
                allowTouchMove: false,
                loopedSlides: 7,
                // reverseDirection: true
                // effect: 'fade',
            });

            var sevenStepSlider = new Swiper ('.step7Slider_content_image', {
                slidesPerView: 1,
                loop: 1,
                spaceBetween: 20,
                allowTouchMove: false,
                autoplay: false,
                speed: 1000,
                loopedSlides: 7,
                breakpoints: {
                    768: {
                        slidesPerView: 2,
                    },
                    1200: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                },
                navigation: {
                    nextEl: '.step7Slider_content_image .btn-next',
                    prevEl: '.step7Slider_content_image .btn-prev',
                },
                
            });
            sevenStepSlider.controller.control = galleryThumbs;
            galleryThumbs.controller.control = sevenStepSlider;
        },

        /* ============================================================ */
        /* Scroll Top
        /* ============================================================ */
        scroll_to_top: function() {
            $('body').append("<a href='#' title='Scroll Top' id='scroll-top' class='topbutton btn-hide'><i class='fal fa-angle-double-up'></i></a>");
            var $scrolltop = $('#scroll-top');
            $(window).on('scroll', function () {
                if ($(this).scrollTop() > $(this).height()) {
                    $scrolltop.addClass('btn-show').removeClass('btn-hide');
                } else {
                    $scrolltop.addClass('btn-hide').removeClass('btn-show');
                }
            });
            $scrolltop.on('click', function () {
                $('html, body').animate({
                        scrollTop: 0,
                    },
                    50
                );
                return false;
            });
        },

        initialize: function() {0
			meshireb.mobile_expand_menu();
			meshireb.scroll_to_top();
			meshireb.sticky_header();
			meshireb.swiperCarousel();
		}
    };
    $(function() {
		meshireb.initialize();
	});

})(jQuery);
    

///============= Wow JS =============\\\
wow = new WOW({
    mobile: false,
});
wow.init();
 

/* ============================================================ */
/* PRELOADER
/* ============================================================ */
$(window).on('load', function() {
    $(".preloader").fadeOut();     
});
