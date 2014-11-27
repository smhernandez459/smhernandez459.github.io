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
});
