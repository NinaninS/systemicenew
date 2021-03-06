document.addEventListener("DOMContentLoaded", function(){

    // Карусель сотрудников

    let getPrev = document.getElementsByClassName('arrow-left'),              // Влево
        getNext = document.getElementsByClassName('arrow-right'),             // Вправо
        slides = document.getElementsByClassName('content-slide'),              // Слайды
        activeItemIndex = 0,                                                  // Номер активного элемента
        dots = '',                                                            // Точки
        dotsContainer = document.querySelector('.item-dots');            // Контейнер с нижними полосками

        if (getPrev.length == 0 || getNext.length == 0) return false;

        for (let i = 0; i < slides.length; i++) {
            // Добавление точек
            i == activeItemIndex ? dots += '<div class="tr-bottom tr-active"></div>' : dots += '<div class="tr-bottom"></div>';
        }

        if (dotsContainer) dotsContainer.innerHTML = dots;

    let itemDots = document.getElementsByClassName('tr-bottom');
    
    let itemTitels = document.getElementsByClassName('event-title'); //заголовок страницы конструктор мероприятий

    let itemHeader = document.getElementsByClassName('step'); //заголовок страницы конструктор мероприятий

    if (getPrev[0]) {
        getPrev[0].addEventListener('click', function(e){
            activeItemIndex--;
            activeItemIndex < 0 ? activeItemIndex = slides.length - 1 : ''
            defineActiveSlide(slides, itemDots, itemTitels, itemHeader);
            for (let i = 0; i < itemDots.length; i++) {
                itemDots[i].classList.remove('tr-active');
            }
            for (let i = 0; i < itemTitels.length; i++) {
                itemTitels[i].classList.remove('active');
            }
            for (let i = 0; i < itemHeader.length; i++) {
                itemHeader[i].classList.remove('next-step');
            }
            itemDots[activeItemIndex].classList.add('tr-active');
            itemTitels[activeItemIndex].classList.add('active');
            itemHeader[activeItemIndex].classList.add('next-step');
        });
    }

    if (getNext[0]) {
        getNext[0].addEventListener('click', function(e){
            activeItemIndex++;
            activeItemIndex >= slides.length ? activeItemIndex = 0 : ''
            defineActiveSlide(slides, itemDots, itemTitels);
            for (let i = 0; i < itemDots.length; i++) {
                itemDots[i].classList.remove('tr-active');
            }
            for (let i = 0; i < itemTitels.length; i++) {
                itemTitels[i].classList.remove('active');
            }
            for (let i = 0; i < itemHeader.length; i++) {
                itemHeader[i].classList.remove('next-step');
            }
            itemDots[activeItemIndex].classList.add('tr-active');
            itemTitels[activeItemIndex].classList.add('active');
            itemHeader[activeItemIndex].classList.add('next-step');
        });
    }

    // Нажатие на клавиатуре

    document.addEventListener('keydown', function(event) {
        if (event.code == 'ArrowLeft') {
            activeItemIndex--;
            activeItemIndex < 0 ? activeItemIndex = slides.length - 1 : ''
            defineActiveSlide(slides, itemDots, itemTitels);
            for (let i = 0; i < itemDots.length; i++) {
                itemDots[i].classList.remove('tr-active');
            }
            for (let i = 0; i < itemTitels.length; i++) {
                itemTitels[i].classList.remove('active');
            }
            itemDots[activeItemIndex].classList.add('tr-active');
            itemTitels[activeItemIndex].classList.add('active');
        }

        if (event.code == 'ArrowRight') {
            activeItemIndex++;
            activeItemIndex >= slides.length ? activeItemIndex = 0 : ''
            defineActiveSlide(slides, itemDots, itemTitels);
            for (let i = 0; i < itemDots.length; i++) {
                itemDots[i].classList.remove('tr-active');
            }
            for (let i = 0; i < itemTitels.length; i++) {
                itemTitels[i].classList.remove('active');
            }
            itemDots[activeItemIndex].classList.add('tr-active');
            itemTitels[activeItemIndex].classList.add('active');
        }
    });

    //прокрутка
    if ($(window).width() > 630) {
        document.onwheel = function(event) {
            if (event.deltaY > 0) {
                var speed = event.deltaY;
                speed = Math.abs(speed);
                if (speed<10) {
                     activeItemIndex--;
                    activeItemIndex < 0 ? activeItemIndex = slides.length - 1 : ''
                    defineActiveSlide(slides, itemDots);
                    for (let i = 0; i < itemDots.length; i++) {
                        itemDots[i].classList.remove('tr-active');
                    }
                    itemDots[activeItemIndex].classList.add('tr-active');
                }
            }
            else {
                var speed = event.deltaY;
                    speed = Math.abs(speed);
                    if (speed<10) {
                        activeItemIndex++;
                    activeItemIndex >= slides.length ? activeItemIndex = 0 : ''
                    defineActiveSlide(slides, itemDots);
                    for (let i = 0; i < itemDots.length; i++) {
                        itemDots[i].classList.remove('tr-active');
                    }
                    itemDots[activeItemIndex].classList.add('tr-active');
                    } 
            }
        }
    }
    //конец

        // Нажатие на красную точку
        for (let i = 0; i < itemDots.length; i++) {
            itemDots[i].addEventListener('click', function(e){
                let index = getArrayIndex(itemDots, e);
                activeItemIndex = index;
                defineActiveItem(itemDots, index);
                defineActiveSlide(slides, itemDots);
            });
        }

    // Функция, которая делает активным красную точку
    function defineActiveItem(arr, index) {
        for (let i = 0; i < arr.length; i++) {
            arr[i].classList.remove('tr-active');
        }
        arr[index].classList.add('tr-active');
    }

    function defineActiveSlide (arr1) {
        for (let i = 0; i < arr1.length; i++) {
            arr1[i].classList.remove('hidden-screen');
            arr1[i].classList.remove('visible-screen');
            i == activeItemIndex ? arr1[i].classList.add('visible-screen') :  arr1[i].classList.add('hidden-screen');
        }
    }

    // Вертикальная карусель

    let getTop = document.getElementsByClassName('arrow-top'),                  // Влево
        getBottom = document.getElementsByClassName('arrow-bottom'),            // Вправо
        verticalSlides = document.getElementsByClassName('slider-min'),         // Слайды
        verticalSlider = document.querySelector('.news-min'),                   // Слайдер
        verticalSliderWrapper = document.querySelector('.news-slider-wrapper'), // Прокручиваемая часть Слайдера
        activeItemIndexVertical = 0;                                            // Номер активного элемента

        if (getTop[0]) {
            getTop[0].addEventListener('click', function(e){

                if (activeItemIndexVertical >= verticalSlides.length - 1) {
                    $('.arrow-top').css('border-color','#d8d8d8');
                    return false
                }

                $('.arrow-top').css('border-color','#ff0000');
                activeItemIndexVertical++;
                verticalSliderAction()
            });
        }
    
        if (getBottom[0]) {
            getBottom[0].addEventListener('click', function(e){

                if (activeItemIndexVertical <= 0) {
                    $('.arrow-bottom').css('border-color','#d8d8d8');
                    return false
                }

                $('.arrow-bottom').css('border-color','#ff0000');
                activeItemIndexVertical--;
                verticalSliderAction()
            });
        }

        function verticalSliderAction() {

            for (let i = 0; i < verticalSlides.length; i++) {
                document.getElementsByClassName('slider-min')[i].classList.remove('slide-active');
            }

            let height = 0;

            //for (let i = 0; i < activeItemIndexVertical; i++) {
            //    height += verticalSlides[i].clientHeight;
           // }

            document.getElementsByClassName('slider-min')[activeItemIndexVertical].classList.add('slide-active')
            //verticalSliderWrapper.style.marginTop = -height + 'px'
        }

        // Нажатие на отдельный элемент

        for (let i = 0; i < verticalSlides.length; i++) {
            (function(index){

                verticalSlides[i].addEventListener('click', function(e){

                    activeItemIndex = index;
    
                    for (let k = 0; k < verticalSlides.length; k++) {
                        document.getElementsByClassName('slider-min')[k].classList.remove('slide-active');
                    }
                    verticalSlides[activeItemIndex].classList.add('slide-active');
                });
            })(i);
        }

        // Функция, которая получает индекс элемента
        function getArrayIndex(arr, event){
            for (let i = 0; i < arr.length; i++) {
                console.log(event.target);
                if (arr[i] == event.target) return i;
            }
        }

    // Нажатие на клавиатуре

    /*document.addEventListener('keydown', function(event) {
        if (event.code == 'ArrowUp') {

            console.log('ArrowTop');

            activeItemIndexVertical++;
            verticalSliderAction()
        }

        if (event.code == 'ArrowDown') {

            console.log('ArrowBottom');

            activeItemIndexVertical--;
            verticalSliderAction()
        }
    });*/

});