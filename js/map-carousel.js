document.addEventListener("DOMContentLoaded", function(){
    
    var screenWidth = $(window).width();

    if (screenWidth < 640) {

    // Карусель

    let getPrev = document.getElementsByClassName('info-left'),              // Влево
        getNext = document.getElementsByClassName('info-right'),             // Вправо
        itemsContainer = document.querySelector('.bl-info-wrapper'),               // Контейнер с фото сотрудников в карусели
        items = document.getElementsByClassName('info-data-item'),               // Менеджеры в превью-карусели
        activeItemIndex = 1,                                                  // Активный подсвеченный менеджер в карусели
        lastItem = items.length - 2,                                          // Номер последнего элемента, после которого карусель не смещается
        itemsSlides = [];                                                     // Массив, в котором хранятся элементы и их ширина для дальнейшего смещения


    // Установить ширину контейнера с фото

        for (let i = 0; i < items.length; i++) {
            itemsSlides[i] = items[i].offsetWidth + parseInt(getComputedStyle(items[i], true).marginRight);   // Ширина фото в карусели + Margin
        }


    if (itemsContainer) itemsContainer.style.left = 0;  // Установка изначальной позиции 


    // Следующий менеджер в карусели

    if (getNext[0]) {
        getNext[0].addEventListener('click', function(){

            if (activeItemIndex > lastItem) return false;

            itemsContainer.style.left = parseInt(itemsContainer.style.left) - itemsSlides[activeItemIndex] + 'px';  // Сдвигаем контейнер

            activeItemIndex++;                              //Прибавляем активный элемент

            defineActiveItem(items, activeItemIndex);
        });
    }

    // Предыдущий менеджер в карусели

    if (getPrev[0]) {
        getPrev[0].addEventListener('click', function(){

            if (activeItemIndex == 0) return false;

            itemsContainer.style.left = parseInt(itemsContainer.style.left) + itemsSlides[activeItemIndex] + 'px';  // Сдвигаем контейнер

            activeItemIndex--;                              //Прибавляем активный элемент

            defineActiveItem(items, activeItemIndex);
        });
    }

    // Нажатие на менеджера

    for (let i = 0; i < items.length; i++){
         
        // Нажатие на портрет
        items[i].addEventListener('click', function(e){

            let index = getArrayIndex(items, e);
                activeItemIndex = index;
                defineActiveItem(items, index);
                moveOnClick(index);
        });

    }

    function moveOnClick(index) {

        let leftSlides = 0;
    
        for (let i = 0; i < index - 1; i++) {
            leftSlides += itemsSlides[i];
        }
        if (index == 0) {
            leftSlides = -itemsSlides[1];   // Для первого слайда
        }

        itemsContainer.style.left = -leftSlides + 'px';  // Сдвигаем контейнер
    }

    // Функция, которая получает индекс элемента
    function getArrayIndex(arr, event){
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] == event.target) return i;
        }
    }

    // Функция, которая делает активным элемент в массиве
    function defineActiveItem(slides, index) {

        for (let i = 0; i < slides.length; i++) {
            slides[i].classList.remove('info-active');
        }

        slides[index].classList.add('info-active');
    }
}
});