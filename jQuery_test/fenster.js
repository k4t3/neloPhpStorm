$(document).ready(function() {
	$(window).scroll(function() {
		if($(document).scrollTop() >= (($(document).height() *0.8 ) - $(window).height()))
		{
			$('#fenster').fadeIn();

		}else {
			$('#fenster').fadeout();
		}

	});
});