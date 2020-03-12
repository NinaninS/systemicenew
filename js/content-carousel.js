document.addEventListener("DOMContentLoaded", function(){

    // Карусель сотрудников

    let getPrev = document.getElementsByClassName('arrow-left'),              // Влево
        getNext = document.getElementsByClassName('arrow-right'),             // Вправо
        slides = document.getElementsByClassName('content-slide'),              // Слайды
        activeItemIndex = 0,                                                  // Номер активного элемента
        dots = '',                                                            // Точки
        dotsContainer = document.querySelector('.item-dots');            // Контейнер с нижними полосками


        for (let i = 0; i < slides.length; i++) {
            // Добавление точек
            i == activeItemIndex ? dots += '<div class="tr-bottom tr-active"></div>' : dots += '<div class="tr-bottom"></div>';
        }

        if (dotsContainer) dotsContainer.innerHTML = dots;


    let itemDots = document.getElementsByClassName('tr-bottom');

    getPrev[0].addEventListener('click', function(e){

        activeItemIndex--;

        activeItemIndex < 0 ? activeItemIndex = slides.length - 1 : ''

        defineActiveSlide(slides, itemDots);

        for (let i = 0; i < itemDots.length; i++) {
            itemDots[i].classList.remove('tr-active');
        }
        itemDots[activeItemIndex].classList.add('tr-active');
    })

    getNext[0].addEventListener('click', function(e){

        activeItemIndex++;

        activeItemIndex >= slides.length ? activeItemIndex = 0 : ''

        defineActiveSlide(slides, itemDots);

        for (let i = 0; i < itemDots.length; i++) {
            itemDots[i].classList.remove('tr-active');
        }
        itemDots[activeItemIndex].classList.add('tr-active');
    })


    // Нажатие на клавиатуре

    document.addEventListener('keydown', function(event) {
        if (event.code == 'ArrowLeft') {

            activeItemIndex--;

            activeItemIndex < 0 ? activeItemIndex = slides.length - 1 : ''

            defineActiveSlide(slides, itemDots);

            for (let i = 0; i < itemDots.length; i++) {
                itemDots[i].classList.remove('tr-active');
            }
            itemDots[activeItemIndex].classList.add('tr-active');
        }

        if (event.code == 'ArrowRight') {

            activeItemIndex++;

            activeItemIndex >= slides.length ? activeItemIndex = 0 : ''

            defineActiveSlide(slides, itemDots);

            for (let i = 0; i < itemDots.length; i++) {
                itemDots[i].classList.remove('tr-active');
            }
            itemDots[activeItemIndex].classList.add('tr-active');
        }
    });


        // Нажатие на красную точку
        for (let i = 0; i < itemDots.length; i++) {
            itemDots[i].addEventListener('click', function(e){
                let index = getArrayIndex(itemDots, e);
                activeItemIndex = index;
                    defineActiveItem(itemDots, index);
                    defineActiveSlide(slides, itemDots);
            });
        }

    // Функция, которая получает индекс элемента
    function getArrayIndex(arr, event){
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] == event.target) return i;
        }
    }

    // Функция, которая делает активным красную точку
    function defineActiveItem(arr, index) {

        for (let i = 0; i < arr.length; i++) {
            arr[i].classList.remove('tr-active');
        }
        console.log(index + ' ** ');
        arr[index].classList.add('tr-active');
    }

    function defineActiveSlide (arr1) {

        for (let i = 0; i < arr1.length; i++) {
            arr1[i].classList.remove('hidden-screen');
            arr1[i].classList.remove('visible-screen');
            i == activeItemIndex ? arr1[i].classList.add('visible-screen') :  arr1[i].classList.add('hidden-screen');
        }
    }

});