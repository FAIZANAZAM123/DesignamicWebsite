(function($) {
	
	"use strict";
	
	
	//Hide Loading Box (Preloader)
	function handlePreloader() {
		if(jQuery('.preloader').length){
			jQuery('.preloader').delay(200).fadeOut(500);
		}
	}
	
	
	//Update Header Style and Scroll to Top
	function headerStyle() {
		if(jQuery('.main-header').length){
			var windowpos = jQuery(window).scrollTop();
			var siteHeader = jQuery('.main-header');
			var scrollLink = jQuery('.scroll-to-top');
			
			var HeaderHight = jQuery('.main-header').height();
			if (windowpos >= HeaderHight) {
				siteHeader.addClass('fixed-header');
				scrollLink.fadeIn(300);
			} else {
				siteHeader.removeClass('fixed-header');
				scrollLink.fadeOut(300);
			}
			
		}
	}
	
	headerStyle();
	
	
	
	//Submenu Dropdown Toggle
	if(jQuery('.main-header li.dropdown ul').length){
		jQuery('.main-header li.dropdown').append('<div class="dropdown-btn"><span class="fa fa-angle-down"></span></div>');
		
		//Dropdown Button
		jQuery('.main-header li.dropdown .dropdown-btn').on('click', function() {
			jQuery(this).prev('ul').slideToggle(500);
		});
		
		//Dropdown Menu / Fullscreen Nav
		jQuery('.fullscreen-menu .navigation li.dropdown > a').on('click', function() {
			jQuery(this).next('ul').slideToggle(500);
		});
		
		//Disable dropdown parent link
		jQuery('.navigation li.dropdown > a').on('click', function(e) {
			e.preventDefault();
		});
		
		//Disable dropdown parent link
		jQuery('.main-header .navigation li.dropdown > a,.hidden-bar .side-menu li.dropdown > a').on('click', function(e) {
			e.preventDefault();
		});
		
	}
	
	
	//Mobile Nav Hide Show
	if(jQuery('.mobile-menu').length){
		
		jQuery('.mobile-menu .menu-box').mCustomScrollbar();
		
		var mobileMenuContent = jQuery('.main-header .nav-outer .main-menu').html();
		jQuery('.mobile-menu .menu-box .menu-outer').append(mobileMenuContent);
		jQuery('.sticky-header .main-menu').append(mobileMenuContent);
		
		//Dropdown Button
		jQuery('.mobile-menu li.dropdown .dropdown-btn').on('click', function() {
			jQuery(this).toggleClass('open');
			jQuery(this).prev('ul').slideToggle(500);
		});
		
		
		//Dropdown Button
		jQuery('.mobile-menu li.dropdown .dropdown-btn').on('click', function() {
			jQuery(this).toggleClass('open');
			jQuery(this).prev('.mega-menu').slideToggle(500);
		});
		
		//Menu Toggle Btn
		jQuery('.mobile-nav-toggler').on('click', function() {
			jQuery('body').addClass('mobile-menu-visible');
		});

		//Menu Toggle Btn
		jQuery('.mobile-menu .menu-backdrop,.mobile-menu .close-btn').on('click', function() {
			jQuery('body').removeClass('mobile-menu-visible');
		});
		
	}
	
	
	//Header Search
	if(jQuery('.search-box-outer').length) {
		jQuery('.search-box-outer').on('click', function() {
			jQuery('body').addClass('search-active');
		});
		jQuery('.close-search').on('click', function() {
			jQuery('body').removeClass('search-active');
		});
	}
	
	
	
	//Single Image Vertical Carousel
	if(jQuery('.single-verticle-carousel').length){
		jQuery('.single-verticle-carousel').slick({
        dots: false,
		autoplay: true,
		loop:true,
		autoplaySpeed: 5000,
        infinite: true,
		responsive: true,
        slidesToShow: 1,
		vertical:true,
        slidesToScroll: 1
      });
	}
	
	
	
	//Hidden Sidebar
	if (jQuery('.hidden-bar,.fullscreen-menu').length) {
		var hiddenBar = jQuery('.hidden-bar');
		var hiddenBarOpener = jQuery('.nav-toggler');
		var hiddenBarCloser = jQuery('.hidden-bar-closer,.close-menu');
		jQuery('.hidden-bar-wrapper').mCustomScrollbar();
		
		//Show Sidebar
		hiddenBarOpener.on('click', function () {
			jQuery('body').addClass('visible-menu-bar');
			hiddenBar.addClass('visible-sidebar');
		});
		
		//Hide Sidebar
		hiddenBarCloser.on('click', function () {
			jQuery('body').removeClass('visible-menu-bar');
			hiddenBar.removeClass('visible-sidebar');
		});
	}
	
	
	
	//Hidden Sidebar
	if (jQuery('.hidden-bar').length) {
		var hiddenBar = jQuery('.hidden-bar');
		var hiddenBarOpener = jQuery('.nav-toggler');
		var hiddenBarCloser = jQuery('.hidden-bar-closer');
		jQuery('.hidden-bar-wrapper').mCustomScrollbar();
		
		//Show Sidebar
		hiddenBarOpener.on('click', function () {
			hiddenBar.addClass('visible-sidebar');
		});
		
		//Hide Sidebar
		hiddenBarCloser.on('click', function () {
			hiddenBar.removeClass('visible-sidebar');
		});
	}
	
	
	
	//Hidden Bar Menu Config
	function hiddenBarMenuConfig() {
		var menuWrap = jQuery('.hidden-bar .side-menu');
		// appending expander button
		menuWrap.find('.dropdown').children('a').append(function () {
			return '<button type="button" class="btn expander"><i class="icon fa fa-angle-right"></i></button>';
		});
		// hidding submenu
		menuWrap.find('.dropdown').children('ul').hide();
		// toggling child ul
		menuWrap.find('.btn.expander').each(function () {
			jQuery(this).on('click', function () {
				jQuery(this).parent() // return parent of .btn.expander (a)
					.parent() // return parent of a (li)
						.children('ul').slideToggle();

				// adding class to expander container
				jQuery(this).parent().toggleClass('current');
				// toggling arrow of expander
				jQuery(this).find('i').toggleClass('fa-angle-right fa-angle-down');

				return false;

			});
		});
	}

	hiddenBarMenuConfig();
	
	
	
	
	
	// Product Carousel Slider
	if (jQuery('.shop-page .image-carousel').length && jQuery('.shop-page .thumbs-carousel').length) {

		var $sync1 = jQuery(".shop-page .image-carousel"),
			$sync2 = jQuery(".shop-page .thumbs-carousel"),
			flag = false,
			duration = 500;

			$sync1
				.owlCarousel({
					loop:true,
					items: 1,
					margin: 0,
					nav: false,
					navText: [ '<span class="icon fa fa-angle-left"></span>', '<span class="icon fa fa-angle-right"></span>' ],
					dots: false,
					autoplay: true,
					autoplayTimeout: 5000
				})
				.on('changed.owl.carousel', function (e) {
					if (!flag) {
						flag = false;
						$sync2.trigger('to.owl.carousel', [e.item.index, duration, true]);
						flag = false;
					}
				});

			$sync2
				.owlCarousel({
					loop:true,
					margin: 20,
					items: 1,
					nav: true,
					navText: [ '<span class="icon fa fa-angle-left"></span>', '<span class="icon fa fa-angle-right"></span>' ],
					dots: false,
					center: false,
					autoplay: true,
					autoplayTimeout: 5000,
					responsive: {
						0:{
				            items:2,
				            autoWidth: false
				        },
				        400:{
				            items:3,
				            autoWidth: false
				        },
				        600:{
				            items:3,
				            autoWidth: false
				        },
				        900:{
				            items:3,
				            autoWidth: false
				        },
				        1000:{
				            items:3,
				            autoWidth: false
				        }
				    },
				})
				
		.on('click', '.owl-item', function () {
			$sync1.trigger('to.owl.carousel', [jQuery(this).index(), duration, true]);
		})
		.on('changed.owl.carousel', function (e) {
			if (!flag) {
				flag = true;		
				$sync1.trigger('to.owl.carousel', [e.item.index, duration, true]);
				flag = false;
			}
		});

	}
	
	
	
	
	//Jquery Spinner / Quantity Spinner
	if(jQuery('.quantity-spinner').length){
		 jQuery('.quantity-spinner .plus').on('click', function() {
			var val = jQuery(this).prev('.prod_qty').val();
			jQuery(this).prev('.prod_qty').val((val*1)+1);
		});
		jQuery('.quantity-spinner .minus').on('click', function(){
			var val = jQuery(this).next('.prod_qty').val();
			if (val != 1 ){
			jQuery(this).next('.prod_qty').val((val*1)-1);
			}
		});
	}
	
	
	
	
	// Tabs Box
	if(jQuery('.tabs-box').length){
		jQuery('.tabs-box .tab-buttons .tab-btn').on('click', function(e) {
			e.preventDefault();
			var target = jQuery(jQuery(this).attr('data-tab'));
			
			if (jQuery(target).is(':visible')){
				return false;
			}else{
				target.parents('.tabs-box').find('.tab-buttons').find('.tab-btn').removeClass('active-btn');
				jQuery(this).addClass('active-btn');
				target.parents('.tabs-box').find('.tabs-content').find('.tab').fadeOut(0);
				target.parents('.tabs-box').find('.tabs-content').find('.tab').removeClass('active-tab');
				jQuery(target).fadeIn(300);
				jQuery(target).addClass('active-tab');
			}
		});
	}
	
	
	
	
	//Custom Seclect Box
	if(jQuery('.custom-select-box').length){
		jQuery('.custom-select-box').selectmenu().selectmenu('menuWidget').addClass('overflow');
	}

	
	
	//Parallax Scene for Icons
	if(jQuery('.parallax-scene-1').length){
		var scene = jQuery('.parallax-scene-1').get(0);
		var parallaxInstance = new Parallax(scene);
	}
	if(jQuery('.parallax-scene-2').length){
		var scene = jQuery('.parallax-scene-2').get(0);
		var parallaxInstance = new Parallax(scene);
	}
	if(jQuery('.parallax-scene-3').length){
		var scene = jQuery('.parallax-scene-3').get(0);
		var parallaxInstance = new Parallax(scene);
	}
	if(jQuery('.parallax-scene-4').length){
		var scene = jQuery('.parallax-scene-4').get(0);
		var parallaxInstance = new Parallax(scene);
	}
	
	
	
	if(jQuery('.paroller').length){
		jQuery('.paroller').paroller({
			  factor: 0.2,            // multiplier for scrolling speed and offset, +- values for direction control  
			  factorLg: 0.4,          // multiplier for scrolling speed and offset if window width is less than 1200px, +- values for direction control  
			  type: 'foreground',     // background, foreground  
			  direction: 'horizontal' // vertical, horizontal  
		});
	}
	
	
	
	//Gallery Filters
	if(jQuery('.filter-list').length){
		jQuery('.filter-list').mixItUp({});
	}
	
	
	
	//Fact Counter + Text Count
	if(jQuery('.count-box').length){
		jQuery('.count-box').appear(function(){
	
			var $t = jQuery(this),
				n = $t.find(".count-text").attr("data-stop"),
				r = parseInt($t.find(".count-text").attr("data-speed"), 10);
				
			if (!$t.hasClass("counted")) {
				$t.addClass("counted");
				jQuery({
					countNum: $t.find(".count-text").text()
				}).animate({
					countNum: n
				}, {
					duration: r,
					easing: "linear",
					step: function() {
						$t.find(".count-text").text(Math.floor(this.countNum));
					},
					complete: function() {
						$t.find(".count-text").text(this.countNum);
					}
				});
			}
			
		},{accY: 0});
	}
	
	
	//Main Slider Carousel
	if (jQuery('.main-slider-carousel').length) {
		jQuery('.main-slider-carousel').owlCarousel({
			animateOut: 'fadeOut',
    		animateIn: 'fadeIn',
			loop:true,
			margin:0,
			nav:true,
			autoHeight: true,
			smartSpeed: 500,
			autoplay: 6000,
			navText: [ '<span class="flaticon-back"></span>', '<span class="flaticon-next-1"></span>' ],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:1
				},
				800:{
					items:1
				},
				1024:{
					items:1
				},
				1200:{
					items:1
				}
			}
		});    		
	}
	
	
	
	//Banner Carousel
	if (jQuery('.banner-carousel').length) {
		jQuery('.banner-carousel').owlCarousel({
			animateOut: 'fadeOut',
		    animateIn: 'fadeIn',
			loop:true,
			margin:0,
			nav:true,
			smartSpeed: 700,
			autoHeight: true,
			autoplay: true,
			autoplayTimeout:10000,
			navText: [ '<span class="fa fa-long-arrow-left"></span> prev', 'next<span class="fa fa-long-arrow-right"></span>' ],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:1
				},
				1024:{
					items:1
				},
			}
		});    		
	}
	
	
	// Single Item Carousel
	if (jQuery('.single-item-carousel').length) {
		jQuery('.single-item-carousel').owlCarousel({
			loop:true,
			margin:0,
			nav:true,
			smartSpeed: 500,
			autoplay: 4000,
			navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
			responsive:{
				0:{
					items:1
				},
				480:{
					items:1
				},
				600:{
					items:1
				},
				800:{
					items:1
				},
				1024:{
					items:1
				}
			}
		});    		
	}
	
	
	
	
	
	// Testimonial Carousel
	if (jQuery('.testimonial-carousel').length) {
		jQuery('.testimonial-carousel').owlCarousel({
			loop:true,
			margin:30,
			nav:true,
			smartSpeed: 500,
			autoplay: 4000,
			navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
			responsive:{
				0:{
					items:1
				},
				480:{
					items:1
				},
				600:{
					items:1
				},
				800:{
					items:2
				},
				1024:{
					items:2
				}
			}
		});    		
	}
	
	
	
	
	
	if(jQuery('.clock-wrapper').length){  
		(function(){
            //generate clock animations
            var now       = new Date(),
                hourDeg   = now.getHours() / 12 * 360 + now.getMinutes() / 60 * 30,
                minuteDeg = now.getMinutes() / 60 * 360 + now.getSeconds() / 60 * 6,
                secondDeg = now.getSeconds() / 60 * 360,
                stylesDeg = [
                    "@-webkit-keyframes rotate-hour{from{transform:rotate(" + hourDeg + "deg);}to{transform:rotate(" + (hourDeg + 360) + "deg);}}",
                    "@-webkit-keyframes rotate-minute{from{transform:rotate(" + minuteDeg + "deg);}to{transform:rotate(" + (minuteDeg + 360) + "deg);}}",
                    "@-webkit-keyframes rotate-second{from{transform:rotate(" + secondDeg + "deg);}to{transform:rotate(" + (secondDeg + 360) + "deg);}}",
                    "@-moz-keyframes rotate-hour{from{transform:rotate(" + hourDeg + "deg);}to{transform:rotate(" + (hourDeg + 360) + "deg);}}",
                    "@-moz-keyframes rotate-minute{from{transform:rotate(" + minuteDeg + "deg);}to{transform:rotate(" + (minuteDeg + 360) + "deg);}}",
                    "@-moz-keyframes rotate-second{from{transform:rotate(" + secondDeg + "deg);}to{transform:rotate(" + (secondDeg + 360) + "deg);}}"
                ].join("");
            document.getElementById("clock-animations").innerHTML = stylesDeg;
        })();
    }
	
	
	
	
	//Progress Bar
	if(jQuery('.progress-line').length){
		jQuery('.progress-line').appear(function(){
			var el = jQuery(this);
			var percent = el.data('width');
			jQuery(el).css('width',percent+'%');
		},{accY: 0});
	}
	
	
	
	
	//Jquery Spinner / Quantity Spinner
	if(jQuery('.quantity-spinner').length){
		jQuery("input.quantity-spinner").TouchSpin({
		  verticalbuttons: true
		});
	}
	
	
	
	
	// Sponsors Item Carousel
	if (jQuery('.sponsors-carousel').length) {
		jQuery('.sponsors-carousel').owlCarousel({
			loop:true,
			margin:30,
			nav:true,
			smartSpeed: 500,
			autoplay: 4000,
			navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
			responsive:{
				0:{
					items:1
				},
				480:{
					items:2
				},
				600:{
					items:3
				},
				800:{
					items:4
				},
				1024:{
					items:5
				}
			}
		});    		
	}
	
	
	
	// Case Carousel
	if (jQuery('.case-carousel').length) {
		jQuery('.case-carousel').owlCarousel({
			loop:true,
			margin:30,
			nav:true,
			smartSpeed: 500,
			autoplay: 4000,
			navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
			responsive:{
				0:{
					items:1
				},
				480:{
					items:1
				},
				600:{
					items:2
				},
				800:{
					items:3
				},
				1024:{
					items:3
				}
			}
		});    		
	}
		
	
	
	//Event Countdown Timer
	if(jQuery('.time-countdown').length){  
		jQuery('.time-countdown').each(function() {
		var $this = jQuery(this), finalDate = jQuery(this).data('countdown');
		$this.countdown(finalDate, function(event) {
			var $this = jQuery(this).html(event.strftime('' + '<div class="counter-column"><span class="count">%D</span>Days</div> ' + '<div class="counter-column"><span class="count">%H</span>Hours</div>  ' + '<div class="counter-column"><span class="count">%M</span>Minutes</div>  ' + '<div class="counter-column"><span class="count">%S</span>Seconds</div>'));
		});
	 });
	}

	
	if(jQuery('.clock-wrapper').length){  
		(function(){
            //generate clock animations
            var now       = new Date(),
                hourDeg   = now.getHours() / 12 * 360 + now.getMinutes() / 60 * 30,
                minuteDeg = now.getMinutes() / 60 * 360 + now.getSeconds() / 60 * 6,
                secondDeg = now.getSeconds() / 60 * 360,
                stylesDeg = [
                    "@-webkit-keyframes rotate-hour{from{transform:rotate(" + hourDeg + "deg);}to{transform:rotate(" + (hourDeg + 360) + "deg);}}",
                    "@-webkit-keyframes rotate-minute{from{transform:rotate(" + minuteDeg + "deg);}to{transform:rotate(" + (minuteDeg + 360) + "deg);}}",
                    "@-webkit-keyframes rotate-second{from{transform:rotate(" + secondDeg + "deg);}to{transform:rotate(" + (secondDeg + 360) + "deg);}}",
                    "@-moz-keyframes rotate-hour{from{transform:rotate(" + hourDeg + "deg);}to{transform:rotate(" + (hourDeg + 360) + "deg);}}",
                    "@-moz-keyframes rotate-minute{from{transform:rotate(" + minuteDeg + "deg);}to{transform:rotate(" + (minuteDeg + 360) + "deg);}}",
                    "@-moz-keyframes rotate-second{from{transform:rotate(" + secondDeg + "deg);}to{transform:rotate(" + (secondDeg + 360) + "deg);}}"
                ].join("");
            document.getElementById("clock-animations").innerHTML = stylesDeg;
        })();
    }
	
	
	
	//Price Range Slider
	if(jQuery('.price-range-slider').length){
		jQuery( ".price-range-slider" ).slider({
			range: true,
			min: 0,
			max: 90,
			values: [ 8, 85 ],
			slide: function( event, ui ) {
			jQuery( "input.property-amount" ).val( ui.values[ 0 ] + " - " + ui.values[ 1 ] );
			}
		});
		
		jQuery( "input.property-amount" ).val( jQuery( ".price-range-slider" ).slider( "values", 0 ) + " - $" + jQuery( ".price-range-slider" ).slider( "values", 1 ) );	
	}

	
	
	
	// Product Carousel Slider
	if (jQuery('.project-carousel-boxed .image-carousel').length && jQuery('.project-carousel-boxed .thumbs-carousel').length) {

		var $sync1 = jQuery(".project-carousel-boxed .image-carousel"),
			$sync2 = jQuery(".project-carousel-boxed .thumbs-carousel"),
			flag = false,
			duration = 500;

			$sync1
				.owlCarousel({
					loop:true,
					items: 1,
					margin: 0,
					nav: false,
					navText: [ '<span class="icon fa fa-angle-left"></span>', '<span class="icon fa fa-angle-right"></span>' ],
					dots: false,
					autoplay: true,
					autoplayTimeout: 5000
				})
				.on('changed.owl.carousel', function (e) {
					if (!flag) {
						flag = false;
						$sync2.trigger('to.owl.carousel', [e.item.index, duration, true]);
						flag = false;
					}
				});

			$sync2
				.owlCarousel({
					loop:true,
					margin: 20,
					items: 1,
					nav: true,
					navText: [ '<span class="icon fa fa-angle-left"></span>', '<span class="icon fa fa-angle-right"></span>' ],
					dots: false,
					center: false,
					autoplay: true,
					autoplayTimeout: 5000,
					responsive: {
						0:{
				            items:2,
				            autoWidth: false
				        },
				        400:{
				            items:3,
				            autoWidth: false
				        },
				        600:{
				            items:4,
				            autoWidth: false
				        },
				        900:{
				            items:5,
				            autoWidth: false
				        },
				        1000:{
				            items:4,
				            autoWidth: false
				        }
				    },
				})
				
		.on('click', '.owl-item', function () {
			$sync1.trigger('to.owl.carousel', [jQuery(this).index(), duration, true]);
		})
		.on('changed.owl.carousel', function (e) {
			if (!flag) {
				flag = true;		
				$sync1.trigger('to.owl.carousel', [e.item.index, duration, true]);
				flag = false;
			}
		});

	}
	
	
	
	
	
	//Jquery Spinner / Quantity Spinner
	if(jQuery('.quantity-spinner').length){
		jQuery("input.quantity-spinner").TouchSpin({
		  verticalbuttons: true
		});
	}
	
	
	//Tabs Box
	if(jQuery('.tabs-box').length){
		jQuery('.tabs-box .tab-buttons .tab-btn').on('click', function(e) {
			e.preventDefault();
			var target = jQuery(jQuery(this).attr('data-tab'));
			
			if (jQuery(target).is(':visible')){
				return false;
			}else{
				target.parents('.tabs-box').find('.tab-buttons').find('.tab-btn').removeClass('active-btn');
				jQuery(this).addClass('active-btn');
				target.parents('.tabs-box').find('.tabs-content').find('.tab').fadeOut(0);
				target.parents('.tabs-box').find('.tabs-content').find('.tab').removeClass('active-tab');
				jQuery(target).fadeIn(300);
				jQuery(target).addClass('active-tab');
			}
		});
	}
	
	
	
	//Accordion Box
	if(jQuery('.accordion-box, .accordion-box-two').length){
		jQuery(".accordion-box, .accordion-box-two").on('click', '.acc-btn', function() {
			
			var outerBox = jQuery(this).parents('.accordion-box, .accordion-box-two');
			var target = jQuery(this).parents('.accordion');
			
			if(jQuery(this).hasClass('active')!==true){
				jQuery(outerBox).find('.accordion .acc-btn').removeClass('active');
			}
			
			if (jQuery(this).next('.acc-content').is(':visible')){
				return false;
			}else{
				jQuery(this).addClass('active');
				jQuery(outerBox).children('.accordion').removeClass('active-block');
				jQuery(outerBox).find('.accordion').children('.acc-content').slideUp(300);
				target.addClass('active-block');
				jQuery(this).next('.acc-content').slideDown(300);	
			}
		});	
	}
	
	
	
	//LightBox / Fancybox
	if(jQuery('.lightbox-image').length) {
		jQuery('.lightbox-image').fancybox({
			openEffect  : 'fade',
			closeEffect : 'fade',
			helpers : {
				media : {}
			}
		});
	}
	
	
	// //Contact Form Validation
	// if($('#contact-form').length){
	// 	$('#contact-form').validate({
	// 		rules: {
	// 			username: {
	// 				required: true
	// 			},
	// 			lastname: {
	// 				required: true
	// 			},
	// 			email: {
	// 				required: true,
	// 				email: true
	// 			},
	// 			address: {
	// 				required: true
	// 			},
	// 			message: {
	// 				required: true
	// 			}
	// 		}
	// 	});
	// }
	
	
	
	// Scroll to a Specific Div
	if(jQuery('.scroll-to-target').length){
		jQuery(".scroll-to-target").on('click', function() {
			var target = jQuery(this).attr('data-target');
		   // animate
		   jQuery('html, body').animate({
			   scrollTop: jQuery(target).offset().top
			 }, 1500);
	
		});
	}
	
	
	
	// Elements Animation
	if(jQuery('.wow').length){
		var wow = new WOW(
		  {
			boxClass:     'wow',      // animated element css class (default is wow)
			animateClass: 'animated', // animation css class (default is animated)
			offset:       0,          // distance to the element when triggering the animation (default is 0)
			mobile:       true,       // trigger animations on mobile devices (default is true)
			live:         true       // act on asynchronously loaded content (default is true)
		  }
		);
		wow.init();
	}
	


/* ==========================================================================
   When document is Scrollig, do
   ========================================================================== */
	
	jQuery(window).on('scroll', function() {
		headerStyle();
	});
	
/* ==========================================================================
   When document is loading, do
   ========================================================================== */
	
	jQuery(window).on('load', function() {
		handlePreloader();
	});	

})(window.jQuery);