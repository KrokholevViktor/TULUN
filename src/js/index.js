import header from './modules/header.js';
// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';

// import styles bundle
import 'swiper/css/bundle';



document.addEventListener('DOMContentLoaded', function () {
    header();
    // init Swiper:
    const swiper = new Swiper( '.main-slider', {

         // Optional parameters
        direction: 'horizontal',
        spaceBetween: 250,
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
});