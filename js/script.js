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

	if ($("#EventPage").val() == 1) {

		$('.btn').text('Общий прогресс сборки мероприятия');
		$('.btn').append('<span class="bta-hover"></span>');
	}

	$('.step-btn').on('click', function(){

		$('.step-1').css('display','none');
		$('.step-2').css('display','flex');

		$('.active-loader').css('width','50%');
		


	})


});