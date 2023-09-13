import header from './modules/header.js';
import modal from './modules/modal.js';
import construct from './modules/construct.js';
// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';

// import styles bundle
import 'swiper/css/bundle';

import mixitup from 'mixitup';


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

    try { // миксетап для услуг
        var mixerMainConstruct = mixitup('.tariff__items', {
            load: {
                filter: '.landscaping'
            },
            animation: {
                enable: false
            }
        });
    } catch (error) {}

    try { // миксетап для услуг
        var mixerServicesPage = mixitup('.services__items', {
            load: {
                filter: '.internet'
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