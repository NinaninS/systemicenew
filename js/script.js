
$(function(){

	
	var windWidth = $(window).width();


    if (windWidth > 992) {

        $('.lightcase-pic').lightcase({

            maxWidth: 1000,
            maxHeight: 1000,
            swipe: true
        });     
    }

    else if (windWidth < 992 && windWidth > 480) {

        $('.lightcase-pic').lightcase({

            maxWidth: '80%',
            maxHeight: '80%',
            swipe: true
        });
    }

    else {

        $('.lightcase-pic').lightcase({

            maxWidth: 300,
            maxHeight: 300,
            swipe: true
        });     
    }


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

	$('.bl-search').on('click', function(){

		$('.login-block').toggle();
		$('.btn-exit').toggleClass('active');
	})

    var location = window.location.href;
    var cur_url = '/' + location.split('/').pop();
 
    $('.bl-r li').each(function () {
        var link = $(this).find('a').attr('href');
 
        if (cur_url == link) {
            $(this).find('a').addClass('menu-active');
        }
    });

    $('.menu-wrapper li').each(function () {
        var link = $(this).find('a').attr('href');
 
        if (cur_url == link) {
            $(this).find('a').addClass('menu-active');
        }
    });

	$('.bl-other').on('click', function(){

		$('.other-event').toggle();
		$('.more-portfolio').toggleClass('active');
	});


	// JS страницы Собрать свое мероприятие

	if ($("#EventPage").val() == 1) {


		document.getElementsByClassName('btn')[0].style.display = "none";
		document.getElementsByClassName('event-progress-stripe')[0].style.display = "block";

		let slides = document.getElementsByClassName('progress-box'),
			progressWidth = parseInt(document.getElementsByClassName('event-progress-stripe')[0].clientWidth),
			progressWidthLine = parseInt(document.getElementsByClassName('loader-line')[0].clientWidth),
			slideWidth = Math.ceil(progressWidth / slides.length);
			slideWidthLine = Math.ceil(progressWidthLine / slides.length);

		let stopProgress = 0;

		document.getElementsByClassName('arrow-right')[0].addEventListener('click', function(){
			
			if (stopProgress != 0) return false;

			let widthBefore = parseInt(document.getElementsByClassName('event-progress')[0].clientWidth);

			let widthBeforeLine = parseInt(document.getElementsByClassName('active-loader')[0].clientWidth);

				document.getElementsByClassName('event-progress')[0].style.width = widthBefore + slideWidth + 'px';

				document.getElementsByClassName('active-loader')[0].style.width = widthBeforeLine + slideWidthLine + 'px';
				stopProgress = 500;
				setTimeout(function() {stopProgress = 0}, 500);
		});
	}
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

	let im = new Inputmask("+7 (999) 999-99-99");
	let phones = document.getElementsByClassName("contact-phone");

	for (let i = 0; i < phones.length; i++) {
		im.mask(phones[i]);
	}

	for (let i = 0; i < document.getElementsByClassName('send-button').length; i++) {

		document.getElementsByClassName('send-button')[i].addEventListener('click', function(e){

			e.preventDefault();

			let form = this.parentNode.parentNode,
				name = form.querySelector('.contact-name'),
				phone = form.querySelector('.contact-phone'),
				agreeChecked = form.querySelector('.input-check').checked,
				validPhone = phone.inputmask.isComplete();

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
	}



	for (let i = 0; i < phones.length; i++) {
		phones[i].addEventListener('keyup', function(){
			this.parentNode.classList.remove('input-box-wrong');
		});
		phones[i].addEventListener('focus', function(){
			this.parentNode.classList.remove('input-box-wrong');
		})
	}


	let label = document.getElementsByClassName('checkbox-block');
	for (let i = 0; i < label.length; i++) {
		label[i].addEventListener('click', function(){
			label[i].querySelector('.i-agree').style = "color: white;"
		});
	}


    $(document).mouseup(function (e){

        var div = $('.login-block');

        if (!div.is(e.target) 
            && div.has(e.target).length === 0) {
        	div.css('display','none');
			$('.btn-exit').removeClass('active');
        }
    });


    $(document).mouseup(function (e){

        var div = $('.other-event');

        if (!div.is(e.target) 
            && div.has(e.target).length === 0) {
        	div.css('display','none');
			$('.more-portfolio').removeClass('active');
        }
    });


});