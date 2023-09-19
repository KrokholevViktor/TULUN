import header from './modules/header.js';
import modal from './modules/modal.js';
import construct from './modules/construct.js';
// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';

// import styles bundle
import 'swiper/css/bundle';

import mixitup from 'mixitup';
import mixitupSettings from './modules/mixitupSettings.js';



document.addEventListener('DOMContentLoaded', function () {
    header();
    modal();
    

    try {
        construct();
    } catch (error) {console.log('конструктор не работет на данной странице', error);}


    // init Swiper:
    const swiper = new Swiper( '.main-slider', {

         // Optional parameters
        direction: 'horizontal',
        spaceBetween: 36,
        parallax: true,
        loop: true,
        speed: 1000,
        // mousewheel: true,
        keyboard: {
            enabled: true,
        },

        // If we need pagination
        pagination: {
        el: '.main-slider__dots',
        },

    });

    

        // init Swiper:
        var swiper1 = new Swiper(".mySwiper", {
            loop: true,
            spaceBetween: 15,
            slidesPerView: 4,
            freeMode: true,
            watchSlidesProgress: true,
          });
        var swiper2 = new Swiper(".mySwiper2", {
            loop: true,
            spaceBetween: 15,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev"
            },
            thumbs: {
                swiper: swiper1
            }
        });

        mixitupSettings();

        // Проверяем, находимся ли мы на нужной странице по URL
        if (window.location.href.indexOf('/constructor/') > -1) {
            // Ваш JavaScript код здесь
            // Этот код будет выполняться только на странице, удовлетворяющей условию
            // Получаем текущий URL страницы
            var currentURL = window.location.href;
            // Разбиваем URL по символу "?", чтобы получить часть с параметрами
            var paramsPart = currentURL.split('?')[1];

            // Разбиваем часть с параметрами по символу "&" для получения отдельных параметров и их значений
            var paramsArray = paramsPart.split('&');

            // Создаем объект для хранения параметров и их значений
            var params = {};

            // Перебираем массив параметров
            for (var i = 0; i < paramsArray.length; i++) {
                var param = paramsArray[i].split('=');
                var paramName = decodeURIComponent(param[0]);
                var paramValue = decodeURIComponent(param[1]);
                params[paramName] = paramValue;
            }

            // Теперь объект params содержит все параметры и их значения
            console.log(params);

            // Пример использования параметров
            var clientSlug = params['client_slug'];
            var categorySlug = params['category_slug'];
            var postId = params['post_id'];

            // Далее вы можете использовать эти значения по вашим потребностям
            // console.log('Client Slug:', clientSlug);
            // console.log('Category Slug:', categorySlug);
            // console.log('Post ID:', postId);

            const mixerMainConstructorFilter = '.' + clientSlug;

            var mixerMainConstructor = mixitup('.tariff__items--constructor', {
                load: {
                    filter: mixerMainConstructorFilter
                },
                animation: {
                    enable: false
                }
            });

            const wrapperName = clientSlug + '-' + categorySlug;

            const switchElement = document.querySelector('[data-switch="' + wrapperName + '"]');
            const cardCheckBox = document.querySelector('[data-cardid="' + postId + '"]').querySelector('.tariff-card__custom-checkbox');
            setTimeout(() => {
                switchElement.click();
                cardCheckBox.click()
            }, 1);

            
            
        }

        
    
        const tariffFirstButton = document.querySelector('.tariff__btn');
        const filterBtn = tariffFirstButton.getAttribute('data-filter');

        try { // миксетап для услуг
            var mixerMain = mixitup('.tariff__items--homepage', {
                load: {
                    filter: filterBtn
                },
                animation: {
                    enable: false
                }
            });
        } catch (error) {}

        //Реализация свитчей карточек
        const cardsSwitchInputs = document.querySelectorAll('.tariff__switch-input');
        const cards = document.querySelectorAll('.tariff__cards-wrapper');
    
        cardsSwitchInputs.forEach((input) => {
            input.addEventListener('click', () => {
                if(input.checked) {
                    let inputData = input.dataset.switch;
                    cards.forEach((cardSet) => {
                        if(cardSet.dataset.cards == inputData) {
                            cardSet.classList.add('tariff__cards-wrapper--active');
                        }
                    })
                } else {
                    let inputData = input.dataset.switch;
                    cards.forEach((cardSet) => {
                        
                        if(cardSet.dataset.cards == inputData) {
                            cardSet.classList.remove('tariff__cards-wrapper--active')
                        }
                    })
                }
            })
        })
   


});