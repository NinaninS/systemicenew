document.addEventListener("DOMContentLoaded", function(){

    if (window.screen.width < 850) return false

    if (!document.getElementById('portfolio-box')) return false

    // Общий блок, в котором содержатся элементы, к которым применяется анимация

    const animationBlock = document.querySelector('.scrolling-box')
    const animationNavigation = document.querySelector('.item-dots')
    animationAction = 0

    // Сколько всего блоков на странице, которые будут анимироваться и появляться

    let slides = document.querySelectorAll('.sl-card'),
        dots = '',
        activePage = 0,
        visibleSlides = 6,
        pages = 0,
        dotsContainer = document.querySelector('.item-dots')

    // Показать контент первой страницы

    for (let i = 0; i < 5; i++) {
        slides[i].classList.add('scrolling-portfolio-item')
    }

    // Подсчет количества страниц
    // Добавление точек страниц
    // Если Элементов мало то удалить навигацию, если более 5 то вывести количество страниц

    if (slides.length < 5) {
        document.querySelector('.bl-preview').remove()
    }
    else {
        pages = Math.ceil((slides.length - 5) / visibleSlides + 1);
        for (let i = 0; i < pages; i++) {
            i == 0 ? dots += '<div class="tr-bottom tr-active"></div>' : dots += '<div class="tr-bottom"></div>';
        }
        if (dotsContainer) dotsContainer.innerHTML = dots;
    }

    // Функция, которая меняет видимые слайды в зависимости от свайпов, кликов, скроллов и прочих изменений

    function changePageSlides(direction) {

        // Скрыть все элементы и определить где видимые

        for (let i = 0; i < slides.length; i++) {
            slides[i].classList.remove('scrolling-portfolio-item')
        }

        // Определить куда листать

        // Если пролистывается вправо или влево (или вверх или вниз в случае со скроллингом)
        // Карусель берет все элементы на экране (в данном случае 4) и показывает другие 4
        // Индексы видимых элементов хранятся в массиве activeItems

        if (direction == 'right') {
            let show = 5
            // На последней странице
            if (activePage == pages - 1) {
                activePage = 0
                for (let i = 0; i < 5; i++) {
                    slides[i] ? slides[i].classList.add('scrolling-portfolio-item') : ''
                }
            }
            // На первой странице
            else if (activePage == 0) {
                activePage++
                for (let i = 5; i < 11; i++) {
                    slides[i] ? slides[i].classList.add('scrolling-portfolio-item') : ''
                }
            }
            // На остальных страницах
            else {
                activePage++
                show += (activePage - 1) * visibleSlides
                for (let i = show; i < show + visibleSlides; i++) {
                    slides[i] ? slides[i].classList.add('scrolling-portfolio-item') : ''
                }
            }
        }
        else if (direction == 'left') {
            // На первой странице
            if (activePage == 0) {
                activePage = pages - 1
                let slidesToShow = slides.length - (activePage * visibleSlides - 1)
                for (let i = slides.length - slidesToShow; i < slides.length; i++) {
                    slides[i] ? slides[i].classList.add('scrolling-portfolio-item') : ''
                }
            }
            // На остальных страницах
            else {
                activePage--
                let startShow = (activePage) * visibleSlides - 1
                for (let i = startShow; i < startShow + visibleSlides; i++) {
                    slides[i] ? slides[i].classList.add('scrolling-portfolio-item') : ''
                }
            }
        }
        else {
            return false
        }
    }

    function changeNavigationActiveItem(a) {
        document.querySelector('.item-dots').querySelector('.tr-active').classList.remove('tr-active')
        document.querySelector('.item-dots').querySelectorAll('.tr-bottom')[activePage].classList.add('tr-active')
    }

    // Вправо

    document.querySelector('.arrow-right').addEventListener('click', function(e){

        if (animationAction > 0) return false
        animationStatus()

        changePageSlides('right')
        changeNavigationActiveItem()
    })

    // Влево

    document.querySelector('.arrow-left').addEventListener('click', function(e){

        if (animationAction > 0) return false
        animationStatus()

        changePageSlides('left')
        changeNavigationActiveItem()
    })

    // Промотка секций при скроллинге мышью

    // Не Mozilla
    window.addEventListener('mousewheel', function(e){

        if (animationAction > 0) return false
        animationStatus()

        let direction = ''
        wheelAction(e) > 0 ? direction = 'right' : direction = 'left'

        changePageSlides(direction)
        changeNavigationActiveItem(activePage)
    })
    // Mozilla
    window.addEventListener('DOMMouseScroll', function(e){

        if (animationAction > 0) return false
        animationStatus()

        let direction = ''
        wheelAction(e) > 0 ? direction = 'right' : direction = 'left'

        changePageSlides(direction)
        changeNavigationActiveItem(activePage)
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

    function animationStatus(){
        animationAction++
        setTimeout(() => {
            animationAction = 0
        }, 1300)
    }
});