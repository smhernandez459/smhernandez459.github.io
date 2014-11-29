$(document).ready(function() {
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

	$(".gallery-img").click(function() {
		//overlay
	});
});
