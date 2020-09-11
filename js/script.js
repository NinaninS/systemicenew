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

		let slides = document.getElementsByClassName('event-checked'),
			progressWidth = parseInt(document.getElementsByClassName('event-progress-stripe')[0].clientWidth),
			progressWidthLine = parseInt(document.getElementsByClassName('loader-line')[0].clientWidth),//линия загрузки
			slideWidth = Math.ceil(progressWidth / slides.length);
			slideWidthLine = Math.ceil(progressWidthLine / slides.length);

		let stopProgress = 0;

		document.getElementsByClassName('arrow-right')[0].addEventListener('click', function(){

			if (stopProgress != 0) return false;

			let widthBefore = parseInt(document.getElementsByClassName('event-progress')[0].clientWidth);

			let widthBeforeLine = parseInt(document.getElementsByClassName('active-loader')[0].clientWidth);

				document.getElementsByClassName('event-progress')[0].style.width = widthBefore + slideWidth + 'px';

				document.getElementsByClassName('active-loader')[0].style.width = widthBeforeLine + slideWidthLine + 'px';//линия загрузки
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





 /* Делаю заново плагин для прокрутки секций. Потом перенести и удалить */

	// Общий блок, в котором содержатся элементы, к которым применяется анимация

	const animationBlock = document.querySelector('.scrolling-box')
	const animationNavigation = document.querySelector('.item-dots')

	console.log(document.querySelector('.scrolling-box').scrollHeight)

	// Определить высоту блоков и вместить их по высоте в контейнер (пока не делать)

	//console.log(document.querySelector('.scrolling-wrapper').scrollHeight)

	// Сколько всего блоков на странице, которые будут анимироваться и появляться

	let slides = document.querySelectorAll('.service-block'),
		dots = '',
		activeItems = [],         // Массив, в котором хранятся индексы видимых слайдов
		dotsContainer = document.querySelector('.item-dots');


	// Определить количество страниц и скрыть лишние слайды

	for (let i = 0; i < 4; i++) {
		slides[i].classList.add('scrolling-item')
		activeItems.push(i)
	}

	// Добавление точек страниц
	// Если Элементов мало то удалить навигацию, если более 4 то вывести количество страниц

	if (slides.length < 4) {
		document.querySelector('.bl-preview').remove()
	}
	else {
		for (let i = 0; i < Math.ceil(slides.length / 4); i++) {
			i == 0 ? dots += '<div class="tr-bottom tr-active"></div>' : dots += '<div class="tr-bottom"></div>';
		}
		if (dotsContainer) dotsContainer.innerHTML = dots;
	}

	// Функция, которая меняет видимые слайды в зависимости от свайпов, кликов, скроллов и прочих изменений

	function changePageSlides(direction) {

		let slides = animationBlock.querySelectorAll('.service-block')

		// Скрыть все элементы

		for (let i = 0; i < slides.length; i++) {
			slides[i].classList.remove('scrolling-item')
		}

		// Определить куда листать

		// Если пролистывается вправо или влево (или вверх или вниз в случае со скроллингом)
		// Карусель берет все элементы на экране (в данном случае 4) и показывает другие 4
		// Индексы видимых элементов хранятся в массиве activeItems

		if (direction == 'right') {
			for (let i = 0; i < activeItems.length; i++) {
				let a = activeItems[i]
					a += activeItems.length
					if (a == slides.length) a = 0
					if (a > slides.length) a -= slides.length
					slides[a].classList.add('scrolling-item')
				activeItems[i] = a
			}
		}
		else if (direction == 'left') {
			for (let i = activeItems.length - 1; i >= 0; i--) {
				let a = activeItems[i]
					a -= activeItems.length
					if (a < 0) a = slides.length + a
					slides[a].classList.add('scrolling-item')

				activeItems[i] = a
			}
		}
		else {
			return false
		}
	}

	function changeNavigationActiveItem(array) {

		activeItems[0] / slides.length
	}


	document.querySelector('.arrow-right').addEventListener('click', function(e){

		

		changePageSlides('right')
	})

	document.querySelector('.arrow-left').addEventListener('click', function(e){

		changePageSlides('left')
	})

	// Промотка секций при скроллинге мышью

	// Не Mozilla
	window.addEventListener('mousewheel', function(e){
		console.log(wheelAction(e))
	})
	// Mozilla
	window.addEventListener('DOMMouseScroll', function(e){
		console.log(wheelAction(e))
	})

	wheelAction()

	// Функция для вычисления направления скролла мышью, если вверх то возвращает 1, если вниз то -1

	function wheelAction (e) {
		let delta;
		event = e || window.event;
		if (event.wheelDelta) {
			delta = event.wheelDelta / 120;
			if (window.opera) delta = -delta;
		}
		else if (event.detail) {
			delta = -event.detail / 3;
		}
		return delta
	}



	/* Делаю заново плагин для прокрутки секций, конец */



});