var $siteUri = $('meta[name="site-uri"]').attr('content');

$(document).ready(function () {

	function checkScroll() {
		if ($(window).scrollTop() > 100) {
			$('.left-logo, .right-menu').addClass('scrolling-down');
		} else {
			$('.left-logo, .right-menu').removeClass('scrolling-down');
		}
	}

	function pageInsider() {
		var pageInside = ($(window).width() - $('.container').width()) / 2 + $('.container').width();
		$('.page-inside .after, .virtual-tour-page').css('width', pageInside + 100);
	}

	pageInsider();
	$(window).on('resize', function () {
		var win = $(this);
		if (win.width() >= 1200) {
			window.onscroll = function () {
				checkScroll();
			};
			checkScroll();
		} else {
			$('.left-logo, .right-menu').removeClass('scrolling-down');
		}
		pageInsider();
	});
	var win = $(this);
	if (win.width() >= 1200) {
		window.onscroll = function () {
			checkScroll();
		};
		checkScroll();
	} else {
		$('.left-logo, .right-menu').removeClass('scrolling-down');
	}

	// responsive menu
	$('.burger-bar').on('click', function () {
		$('.responsive-menu, .close-div').addClass('active');
	});
	$('.close-btn, .close-div').on('click', function () {
		$('.responsive-menu, .close-div').removeClass('active');
	});

	// materialize default select, datepicker, timepicker styles
	$('select').material_select();
	$('.datepicker').pickadate();
	$('.timepicker').pickatime();

	$('.main-cover .owl-carousel').owlCarousel({
		loop: false,
		margin: 0,
		nav: true,
		navText: ['<img src="assets/img/arr.svg" alt="" style="transform: rotate(90deg)">', '<img src="assets/img/arr.svg" alt="" style="transform: rotate(-90deg)">'],
		dots: false,
		items: 1
	});

	$('.main-news .owl-carousel').owlCarousel({
		loop: false,
		margin: 0,
		nav: true,
		navText: ['<img src="assets/img/arr.svg" alt="" style="transform: rotate(90deg)">', '<img src="assets/img/arr.svg" alt="" style="transform: rotate(-90deg)">'],
		dots: false,
		responsive: {
			0: {
				items: 1.4,
				center: true,
				loop: true
			},
			450: {
				items: 1.8,
				center: true,
				loop: true
			},
			600: {
				items: 2
			},
			850: {
				items: 3
			},
			1200: {
				items: 4
			}
		}
	});

	$('.similar-books .owl-carousel').owlCarousel({
		loop: false,
		margin: 10,
		nav: true,
		navText: ['<img src="assets/img/arr.svg" alt="" style="transform: rotate(90deg)">', '<img src="assets/img/arr.svg" alt="" style="transform: rotate(-90deg)">'],
		dots: false,
		responsive: {
			0: {
				items: 1.4,
				center: true,
				loop: true
			},
			450: {
				items: 1.8,
				center: true,
				loop: true
			},
			600: {
				items: 2
			},
			850: {
				items: 3
			},
			1200: {
				items: 4
			}
		}
	});
	$('.graduated .owl-carousel').owlCarousel({
		loop: false,
		margin: 12,
		nav: true,
		navText: ['<img src="assets/img/arr.svg" alt="" style="transform: rotate(90deg)">', '<img src="assets/img/arr.svg" alt="" style="transform: rotate(-90deg)">'],
		dots: false,
		items: 1
	});
	$('.events-slider').slick({
		dots: false,
		prevArrow: $('.events-prev'),
		nextArrow: $('.events-next'),
		vertical: true,
		slidesToShow: 3,
		// slidesToScroll: 1,
		verticalSwiping: true,
	});
	$('.filter-list-carousel .owl-carousel').owlCarousel({
		loop: false,
		margin: 10,
		nav: true,
		navText: ['<img src="assets/img/arr.svg" alt="" style="transform: rotate(90deg)">', '<img src="assets/img/arr.svg" alt="" style="transform: rotate(-90deg)">'],
		dots: false,
		responsive: {
			0: {
				items: 1.8,
				center: true,
				loop: true
			},
			450: {
				items: 1.8,
				center: true,
				loop: true
			},
			600: {
				items: 3
			},
			1200: {
				items: 3
			}
		}
	});
	$('.useful-links-block .owl-carousel').owlCarousel({
		loop: false,
		margin: 10,
		nav: true,
		navText: ['<img src="assets/img/arr.svg" alt="" style="transform: rotate(90deg)">', '<img src="assets/img/arr.svg" alt="" style="transform: rotate(-90deg)">'],
		dots: false,
		responsive: {
			0: {
				items: 1.8,
				center: true,
				loop: true
			},
			450: {
				items: 1.8,
				center: true,
				loop: true
			},
			600: {
				items: 3
			},
			1200: {
				items: 6
			}
		}
	});

	$('.event-inside .owl-carousel').owlCarousel({
		loop: false,
		margin: 10,
		nav: true,
		navText: ['<img src="assets/img/arr.svg" alt="" style="transform: rotate(90deg)">', '<img src="assets/img/arr.svg" alt="" style="transform: rotate(-90deg)">'],
		dots: false,
		responsive: {
			0: {
				items: 1.8,
				center: true,
				loop: true
			},
			450: {
				items: 1.8,
				center: true,
				loop: true
			},
			600: {
				items: 2
			},
			992: {
				items: 3
			}
		}
	});

	AOS.init({
		once: true
	});


	function searchResultLine(i) {
		var $el, topPos, newHeight,
			$mainNavSearch = $(".search-results-" + i + "");
		$mainNavSearch.append("<li id='slidingLineSearch" + i + "' class='slidingLine'></li>");
		var $slidingLine = $("#slidingLineSearch" + i + "");
		$(".search-results-" + i + " li").hover(function () {
			$el = $(this);
			topPos = $el.position().top;
			newHeight = $el.outerHeight();
			$slidingLine.stop().animate({
				top: topPos,
				height: newHeight
			});
		}, function () {
			$slidingLine.stop().animate({
				// top: $(".search-results-" + i + " li:first-child").position().top,
				// height: $(".search-results-" + i + " li:first-child").outerHeight()
				height: 0
			});
		});
	}

	for (var k = 0; k < $(".search-results").length; k++) {
		searchResultLine(k);
	}




	function slidingLine(i) {
		var $el, topPos, newHeight,
			$mainNav = $(".second-level-" + i + "");
		$mainNav.append("<li id='slidingLine-" + i + "' class='slidingLine'></li>");
		var $slidingLine = $("#slidingLine-" + i + "");
		$slidingLine
			// .height($(".second-level-"+ i +" li:first-child").outerHeight())
			.css("top", $(".second-level-" + i + " li:first-child").position().top)
			.data("origTop", $slidingLine.position().top)
			.data("origHeight", $slidingLine.height());
		$(".second-level-" + i + " li").hover(function () {
			$el = $(this);
			topPos = $el.position().top;
			newHeight = $el.outerHeight();
			$slidingLine.stop().animate({
				top: topPos,
				height: newHeight
			});
		}, function () {
			$slidingLine.stop().animate({
				// top: $(".second-level-"+ i +" li:first-child").position().top,
				height: 0
			});
		});
	}
	for (var k = 1; k <= $(".second-level").length; k++) {
		slidingLine(k);
	}



	$('.first-level').on('click', function () {
		if ($(this).parents("").hasClass('active-dropdown')) {
			$(this).parents("").removeClass('active-dropdown');
			$(this).siblings('.second-level').slideUp();
		} else {
			$(this).siblings('.second-level').slideDown();
			$(this).siblings('.second-level').parents("li").addClass('active-dropdown');
		}
		for (var k = 1; k <= $(".second-level").length; k++) {
			slidingLine(k);
		}
	});

	var aLength = $('.left-levels').length;
	for (var i = 1; i <= aLength; i++) {
		$('.left-levels:nth-child(' + i + ')').css("transition-delay", '' + (i * 0.05) + 's');
	}

	$('.burger-bar-fixed').on('click', function () {
		$('.menu-fixed').toggleClass('active');
		$('.menu-fixed').toggleClass('inactive');
		$('.left-content').toggleClass('inactive');
		$('.burger-bar-fixed').toggleClass('active');
		$('.left-logo').toggleClass('on-clicked-hidden');
		$('.right-menu').toggleClass('on-clicked-visible');
	});

	$('.burger-bar, .search-fixed, header .search-btn').on('click', function () {
		$('.menu-fixed').addClass('active');
		$('.menu-fixed').removeClass('inactive');
		$('.left-content').addClass('inactive');
		$('.left-logo').addClass('on-clicked-hidden');
		$('.burger-bar-fixed').addClass('active');
		$('.right-menu').addClass('on-clicked-visible');
	});

	$('.filter-list button').on('click', function () {
		$('.filter-list .list').slideToggle();
		$('.filter-list .icon').toggleClass("active");
	});

	var $gallery = $('.gallery-image').simpleLightbox({
		animationSpeed: 150,
		// animationSlide: false,
		swipeTolerance: 20,
		disableScroll: false,
		widthRatio: 1.0,
		navText: ['<img src="assets/img/arr.svg" alt="" style="transform: rotate(90deg)">', '<img src="assets/img/arr.svg" alt="" style="transform: rotate(-90deg)">'],
	});

	$('.search-input').keydown(function () {
		if ($(this).val().length < 3) {
			$(this).addClass('invalid');
		} else {
			$(this).removeClass('invalid');
		}
	});
	$('.search-input').keyup(function () {
		if ($(this).val().length < 3) {
			$(this).addClass('invalid');
		} else {
			$(this).removeClass('invalid');
		}
	});

	$('.submit-btn').on('click', function () {
		var form = $(this).parents('form');
		console.log(form);
		if (form.find('input').hasClass('invalid')) {
			event.preventDefault();
		}
	});


	// jQuery.scrollSpeed(100, 700);
	$('.each-link-block:first-child .each-link').addClass("active");

	$('.each-link-block .each-link').on('click', function () {
		$('.each-link-block .each-link').removeClass('active');
		$(this).toggleClass('active');
		$(this).siblings('.description').slideToggle();
		var thisAttr = $(this).attr('data-description');
		$('.learning-text').html(thisAttr);
	});



});


