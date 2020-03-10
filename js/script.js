$(document).ready(function(){

	$('.video-preview').on('click', function(){

		$('.video').css('display','flex');
		$('.map').css('display','none');
		$('.bg-btn').removeClass('gray-bg');
		$('.map-mini').addClass('gray-bg');
	});

	$('.map-pass').on('click', function(){

		$('.map').css('display','flex');
		$('.video').css('display','none');
		$('.bg-btn').addClass('gray-bg');
		$('.map-mini').removeClass('gray-bg');
	});

	$('.mob-menu').on('click', function(){

		$('.mob-menu').toggleClass('open');
		$('.menu-wrapper').toggleClass('open-active');
		$('body').toggleClass('overlay');
	});


});