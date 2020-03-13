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

	$('.bl-search').on('click', function(){

		$('.login-block').toggle();
		$('.btn-exit').toggleClass('active');
	})

    var location = window.location.href;
    var cur_url = '/' + location.split('/').pop();
 
    $('.bl-r li').each(function () {
        var link = $(this).find('a').attr('href');
 
        if (cur_url == link) {
            $(this).addClass('menu-active');
        }
    });
});

$(function(){

	if ($('#copy-text').length != 0) {
		let clipboard = new ClipboardJS('#copy-text');

		clipboard.on('success', function(e) {
			document.getElementById('copy-text').innerText = 'Скопировано';
			setTimeout(function(){
				document.getElementById('copy-text').innerText = 'Скопировать координаты для навигатора копия';
			}, 1000)
		});
	}

	// Форма на странице Контакты

	if (!document.getElementById("contact-phone")) return false

	let  im = new Inputmask("+7 (999) 999-99-99");
	let y = im.mask(document.getElementById("contact-phone"));

	document.getElementById('send-button').addEventListener('click', function(){

		let form = document.getElementById('contact-form'),
			name = document.getElementById('contact-name'),
			phone = document.getElementById('contact-phone'),
			agreeChecked = form.querySelector('.input-check').checked,
			validPhone = $('#contact-phone').inputmask("isComplete");

			if (!agreeChecked || !validPhone) {

				if (!agreeChecked) {
					form.querySelector('.i-agree').style = "color: red;"
				}
				if (!validPhone) {
					phone.parentNode.classList.add('input-box-wrong');
				}
				return false;
			}
	});

	document.getElementById('contact-phone').addEventListener('keyup', function(){
		this.parentNode.classList.remove('input-box-wrong');
	});
	document.getElementById('contact-phone').addEventListener('focus', function(){
		this.parentNode.classList.remove('input-box-wrong');
	})

	let label = document.getElementsByClassName('checkbox-block');
	for (let i = 0; i < label.length; i++) {
		label[i].addEventListener('click', function(){
			label[i].querySelector('.i-agree').style = "color: white;"
		});
	}
});