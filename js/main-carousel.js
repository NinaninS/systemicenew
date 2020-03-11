document.addEventListener("DOMContentLoaded", function(){

    // Карусель главного экрана

    let nextPageLink = document.getElementsByClassName('next-page-show'),
        prevPageLink = document.getElementsByClassName('prev-page-show');

    if (!nextPageLink || !prevPageLink) return false;

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