import { cutDownTimer } from './cutDownTimer';

/**
 * Функция переключения на следующий экра
 * @param {HTMLElement} button - Кнопка для слушателя на клик
 * @param {HTMLElement} prevElement - Предыдущий элемент
 * @param {HTMLElement} nextElement - Следующий элемент
 * @param {string} className - Класс для скрытия элемента
 */

export function changeStepHandler(button, prevElement, nextElement, className) {
  button.addEventListener('click', () => {
    prevElement.classList.add(className);
    nextElement.classList.remove(className);
    // Прокрутка страницы наверх
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });

    if (button.classList.contains('result__button')) {
      cutDownTimer(15, 0);
    }

    
  });
}


// Блок: Главный экран
const mainButton = document.querySelector('.first-screen__start-link');
const mainContainer = document.querySelector('.first-screen__container');
const calculatorContainer = document.querySelector('.calculator__content');
// const startQuiz = document.querySelector('.start-quiz');

changeStepHandler(mainButton, mainContainer, calculatorContainer, 'hidden');

// Блок: Старт
// const startQuizButton = document.querySelector('.start-quiz__button');

// changeStepHandler(startQuizButton, startQuiz, calculatorContainer, 'hidden');

// Блок: Результат
const resultButton = document.querySelector('.result__button');
const resultContainer = document.querySelector('.result');
const productContainer = document.querySelector('.product');

changeStepHandler(resultButton, resultContainer, productContainer, 'hidden');

