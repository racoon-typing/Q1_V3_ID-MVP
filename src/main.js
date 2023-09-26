// Стили
import './scss/main.scss';

// Скрипты
import './utils.js';
import './js/index.js';

// bootstrap
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// LazyLoadImg
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';


// Убирает лоадер на загрузку страницы
const preloaderScreen = document.querySelector('.preloader');
const firstScreen = document.querySelector('.first-screen__container');

document.addEventListener('DOMContentLoaded', () => {
    preloaderScreen.classList.add('hidden');
    firstScreen.classList.remove('hidden');
});