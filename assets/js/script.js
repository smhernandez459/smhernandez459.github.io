$(document).ready(function() {

	var carouselIndex = 0;

	/*Parallax and Sticky nav stuff below */

	function parallax() {
		var scrollPosition = $(window).scrollTop();
		var xCoordinate = $('#banner-container').css('background-position').split(' ')[0];
		$('#banner-container').css('background-position', xCoordinate + " " + (scrollPosition * 0.2) + 'px');
	}

	$(window).scroll(function() {
		parallax();
		var distance = $(document).scrollTop() - 425;

		if ($('#nav-bar').hasClass('sticky-nav') && (distance < 0)){
			$('#nav-bar').removeClass('sticky-nav');
		} else if (!($('#nav-bar').hasClass('sticky-nav')) && (distance >= 0)) {
			$('#nav-bar').addClass('sticky-nav');
		}
	});

	/* Gallery Functions */

	$(".gallery-item").hover(function() {
		$(this).children().last().css('opacity', '0.4');
		$(this).children().first().show();
	}, function(){
		$(this).children().last().css('opacity', '1');
		$(this).children().first().hide();
	});

	$(".plus").click(function() {
		if($(this).hasClass('upvote')){
			$(this).removeClass('upvote');
			var count = parseInt($(this).prev().text());
			count = count + 1;
			$(this).prev().text(count);
		}
	});

	/* Stuff for Adoption carousel below */

	$("#left-arrow").click(function() {
		if (carouselIndex > 0) {
			var currentIndex = 0;
			var current = $("#adopt-items").children().first();
			while (currentIndex < (carouselIndex -1)) {
				current = current.next();
				currentIndex = currentIndex + 1;
			}
			current.removeClass("hidden");
			current = current.next().next();
			current.addClass("adopt-center-item");
			current.children().first().addClass("center-img");
			current = current.next();
			current.removeClass("adopt-center-item");
			current.children().first().removeClass("center-img");
			current = current.next().next();
			current.addClass("hidden");
			carouselIndex = carouselIndex - 1;
		}
	});

	$("#right-arrow").click(function() {
		if (carouselIndex < 4) {
			var currentIndex = 0;
			var current = $("#adopt-items").children().first();
			while (currentIndex < carouselIndex) {
				current = current.next();
				currentIndex = currentIndex + 1;
			}
			current.addClass("hidden");
			current = current.next().next();
			current.removeClass("adopt-center-item");
			current.children().first().removeClass("center-img");
			current = current.next();
			current.addClass("adopt-center-item");
			current.children().first().addClass("center-img");
			current = current.next().next();
			current.removeClass("hidden");
			carouselIndex = carouselIndex + 1;
		}
	});


});
