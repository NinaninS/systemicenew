document.addEventListener("DOMContentLoaded", function(){

    // Карусель сотрудников

    let getPrev = document.getElementsByClassName('arrow-left'),              // Влево
        getNext = document.getElementsByClassName('arrow-right'),             // Вправо
        mainManagerImg = document.getElementsByClassName('main-sotrud-img'),  // Большое фото менеджера
        itemsContainer = document.querySelector('.sl-wrapper'),               // Контейнер с фото сотрудников в карусели
        dotsContainer = document.querySelector('.dots-container'),            // Контейнер с нижними полосками
        items = document.getElementsByClassName('sl-teammate'),               // Менеджеры в превью-карусели
        dots = '',                                                            // Нижние полоски
        activeItemIndex = 1,                                                  // Активный подсвеченный менеджер в карусели
        lastItem = items.length - 2,                                          // Номер последнего элемента, после которого карусель не смещается
        itemsSlides = [],                                                     // Массив, в котором хранятся элементы и их ширина для дальнейшего смещения
        itemsDots = [];                                                       // Массив, в котором хранятся точки и их ширина для дальнейшего смещения


        for (let i = 0; i < items.length; i++) {
            // Добавление точек
            i == activeItemIndex ? dots += '<div class="tr-bottom tr-active"></div>' : dots += '<div class="tr-bottom"></div>';
        }

        if (dotsContainer) dotsContainer.innerHTML = dots;

    let itemDots = document.getElementsByClassName('tr-bottom');

        for (let i = 0; i < items.length; i++) {
            itemsSlides[i] = items[i].offsetWidth + parseInt(getComputedStyle(items[i], true).marginRight);   // Ширина фото в карусели + Margin
            itemsDots[i] = itemDots[i].offsetWidth + parseInt(getComputedStyle(itemDots[i], true).marginRight);     // Ширина фото в карусели + Margin
        }

    // Установить ширину контейнера с фото

    if (itemsContainer) itemsContainer.style.left = 0;  // Установка изначальной позиции    
    if (dotsContainer) dotsContainer.style.left = 0;  // Установка изначальной позиции  


    // Следующий менеджер в карусели

    if (getNext[0]) {
        getNext[0].addEventListener('click', function(){

            if (activeItemIndex > lastItem) return false;

            itemsContainer.style.left = parseInt(itemsContainer.style.left) - itemsSlides[activeItemIndex] + 'px';  // Сдвигаем контейнер
            dotsContainer.style.left = parseInt(dotsContainer.style.left) - itemsDots[activeItemIndex] + 'px';      // Сдвигаем контейнер с точками

            activeItemIndex++;                              //Прибавляем активный элемент

            defineActiveItem(items, itemDots, activeItemIndex);
        });
    }

    // Предыдущий менеджер в карусели

    if (getPrev[0]) {
        getPrev[0].addEventListener('click', function(){

            if (activeItemIndex == 0) return false;

            itemsContainer.style.left = parseInt(itemsContainer.style.left) + itemsSlides[activeItemIndex] + 'px';  // Сдвигаем контейнер
            dotsContainer.style.left = parseInt(dotsContainer.style.left) + itemsDots[activeItemIndex] + 'px';  // Сдвигаем контейнер с точками

            activeItemIndex--;                              //Прибавляем активный элемент

            defineActiveItem(items, itemDots, activeItemIndex);
        });
    }

    // Нажатие на клавиатуре

    document.addEventListener('keydown', function(event) {
        if (event.code == 'ArrowLeft') {

            if (activeItemIndex == 0) return false;
            itemsContainer.style.left = parseInt(itemsContainer.style.left) + itemsSlides[activeItemIndex] + 'px';  // Сдвигаем контейнер
            dotsContainer.style.left = parseInt(dotsContainer.style.left) + itemsDots[activeItemIndex] + 'px';  // Сдвигаем контейнер с точками
            activeItemIndex--;                              //Прибавляем активный элемент
            defineActiveItem(items, itemDots, activeItemIndex);
        }

        if (event.code == 'ArrowRight') {

            if (activeItemIndex > lastItem) return false;
            itemsContainer.style.left = parseInt(itemsContainer.style.left) - itemsSlides[activeItemIndex] + 'px';  // Сдвигаем контейнер
            dotsContainer.style.left = parseInt(dotsContainer.style.left) - itemsDots[activeItemIndex] + 'px';      // Сдвигаем контейнер с точками
            activeItemIndex++;                              //Прибавляем активный элемент
            defineActiveItem(items, itemDots, activeItemIndex);
        }
    });

    // Нажатие на менеджера

    for (let i = 0; i < items.length; i++){
        
        // Нажатие на портрет
        items[i].addEventListener('click', function(e){

            let index = getArrayIndex(items, e);
                activeItemIndex = index;
                defineActiveItem(items, itemDots, index);
                moveOnClick(index);
        });

        // Нажатие на красную точку
        itemDots[i].addEventListener('click', function(e){

            let index = getArrayIndex(itemDots, e);
                activeItemIndex = index;
                defineActiveItem(items, itemDots, index);
                moveOnClick(index);
        });
    }

    function moveOnClick(index) {

        let leftSlides = 0,
            leftDots = 0;
    
        for (let i = 0; i < index - 1; i++) {
            leftSlides += itemsSlides[i];
            leftDots += itemsDots[i];
        }
        if (index == 0) {
            leftSlides = -itemsSlides[1];   // Для первого слайда
            leftDots = -itemsDots[1];   // Для первого слайда
        }

        itemsContainer.style.left = -leftSlides + 'px';  // Сдвигаем контейнер
        dotsContainer.style.left = -leftDots + 'px';  // Сдвигаем контейнер
    }

    // Функция, которая получает индекс элемента
    function getArrayIndex(arr, event){
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] == event.target) return i;
        }
    }

    // Функция, которая делает активным элемент в массиве
    function defineActiveItem(slides, dots, index) {

        for (let i = 0; i < slides.length; i++) {
            slides[i].classList.remove('slide-user-active');
            dots[i].classList.remove('tr-active');
        }

        slides[index].classList.add('slide-user-active');
        document.getElementsByClassName('main-sotrud-img')[0].src = '../images/sotrud' + slides[index].src.slice(slides[index].src.lastIndexOf('/') + 1);
        dots[index].classList.add('tr-active');
    }
});