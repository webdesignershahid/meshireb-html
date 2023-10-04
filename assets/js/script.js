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
            var whychoose = $('.why-choose-us').length;
            if(whychoose) {
                const slider = document.querySelector('.image-slider');
                const slides = document.querySelectorAll('.why-choose-us  .swiper-slide');
                const navPoints = document.querySelectorAll('.nav-point');            
                var whyChooseSlider = new Swiper(slider, {
                    slidesPerView: 1,
                    freeMode: false,
                    effect: 'fade',
                    loop: !1,
                    autoplay: {
                        delay: 5000,
                    },
                    speed: 1000,
                });
                
                // update navigation elements on slide change
                whyChooseSlider.on('slideChange', () => {
                    navPoints.forEach((item, index) => {
                        if (index === whyChooseSlider.activeIndex) {
                            item.classList.add('active');
                        } else {
                            item.classList.remove('active');
                        }
                    });
                });
    
                //Slide to index according to 'data-index'
                let activeSlide = 0;
    
                // set the initial state of the slider
                slides[activeSlide].classList.add('active');
                navPoints[activeSlide].classList.add('active');
    
                // add click event listeners to the navigation elements
                navPoints.forEach((navPoint, index) => {
                    navPoint.addEventListener('click', () => {
                        slides[activeSlide].classList.remove('active');
                        navPoints[activeSlide].classList.remove('active');
    
                        activeSlide = index;
                        slides[activeSlide].classList.add('active');
                        navPoints[activeSlide].classList.add('active');
                        whyChooseSlider.slideTo(index);
                    });
                });
            }
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
