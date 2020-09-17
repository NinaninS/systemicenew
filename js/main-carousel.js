document.addEventListener("DOMContentLoaded", function(){

    // Карусель главного экрана

    let nextPageLink = document.getElementsByClassName('next-page-show'),
        prevPageLink = document.getElementsByClassName('prev-page-show');

    if (nextPageLink.length == 0 || prevPageLink.length == 0) return false;

    let carouselImg = document.getElementsByClassName('sl-teammate'),
        content = document.getElementsByClassName('content-box'),
        dot = document.getElementsByClassName('tr-bottom');

    for (let i = 0; i < nextPageLink.length; i++) {
        nextPageLink[i].addEventListener('click', function(){
            changeActiveElement();
        });
    }

    for (let i = 0; i < prevPageLink.length; i++) {
        prevPageLink[i].addEventListener('click', function(){
            changeActiveElement();
        });
    }

    document.addEventListener('keydown', function(event) {
        if (event.code == 'ArrowLeft' || event.code == 'ArrowRight') {
            changeActiveElement();
        }
    });

    //прокрутка
    if ($(window).width() > 630) {

        // Промотка секций при скроллинге мышью

        // Не Mozilla
        window.addEventListener('mousewheel', function(e){
            changeActiveElement();
            

            console.log(wheelAction(e))
        })

        // Mozilla
        window.addEventListener('DOMMouseScroll', function(e){
            changeActiveElement();

            console.log(wheelAction(e))
        })

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

    }
    //конец

    function changeActiveElement() {
        for (let i = 0; i < content.length; i++) {
            
            if (content[i].classList.contains('hidden-screen')) {
                content[i].classList.remove('hidden-screen');
                content[i].classList.add('visible-screen');
            }
            else{
                content[i].classList.add('hidden-screen');
                content[i].classList.remove('visible-screen');
            }
            
            dot[i].classList.contains('tr-active') ? dot[i].classList.remove('tr-active') : dot[i].classList.add('tr-active');
            carouselImg[i].classList.contains('slide-user-active') ? carouselImg[i].classList.remove('slide-user-active') : carouselImg[i].classList.add('slide-user-active'); 
        }       
    }
});