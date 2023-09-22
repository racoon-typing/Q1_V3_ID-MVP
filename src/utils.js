import { questionsList } from './mock/questions.js';
import './js/calculator.js';
import './js/questions.js';
import './js/dates-table.js';

// Запускает обратный отсчет
function cutDownTimer(minutes, seconds) {
  const cutdownTimer = document.querySelector('#cutdownTimer');

  // Время для отсчета
  let totalSeconds = minutes * 60 + seconds;
  const interval = setInterval(function () {
    if (totalSeconds <= 0) {
      clearInterval(interval);
    } else {
      var minutesLeft = Math.floor(totalSeconds / 60);
      var secondsLeft = totalSeconds % 60;

      if (secondsLeft < 10) {
        cutdownTimer.textContent = minutesLeft + ':' + '0' + secondsLeft;
        totalSeconds--;
        return;
      }

      cutdownTimer.textContent = minutesLeft + ':' + secondsLeft;
      totalSeconds--;
    }
  }, 1000);
}

// Показывает текст программы похудения
function showMoreText() {
  const textHidden = document.getElementById('textHidden');
  const textShown = document.getElementById('textShown');
  textShown.classList.add('hidden');
  textHidden.classList.remove('hidden');
  textHidden.scrollIntoView({
    behavior: 'smooth',
  });
}

// Скролл к совету врача
function crollToBottom() {
  const messageHeight = document.querySelector(
    '.question__item-fact',
  ).offsetHeight;

  window.scrollBy({
    top: messageHeight,
    behavior: 'smooth',
  });
}

// Минимальное значение баллов при прохождении теста
const questionListMin = questionsList.map((el) =>
  el.answers.sort((a, b) => a.point - b.point),
);
const minValue = questionListMin
  .map((el) => el[0].point)
  .reduce((accumulator, currentValue) => accumulator + currentValue);

// Максимальное значение баллов при прохождении теста
const questionListMax = questionsList.map((el) =>
  el.answers.sort((a, b) => b.point - a.point),
);
const maxValue = questionListMax
  .map((el) => el[0].point)
  .reduce((accumulator, currentValue) => accumulator + currentValue);

// Показывает блок загрузки
const loaderContainer = document.querySelector('.loader');
let resultTime = 0; // Задержка отображения текста

function openLoader() {
  const questionContainer = document.querySelector('.question__wrapper');
  questionContainer.classList.add('hidden');
  loaderContainer.classList.remove('hidden');

  const textLoaders = document.querySelectorAll('.text-loader');
  textLoaders.forEach((loader, index) => {
    const wordsCount = loader.textContent.split(' ').length;
    const delay = wordsCount * 100; // Интервал в миллисекундах, зависящий от количества слов
    resultTime += delay;
    setTimeout(() => {
      if (index < 1) {
        // loader.classList.toggle('o-0'); // Переключение класса для скрытия/показа
      } else {
        textLoaders[index - 1].classList.toggle('o-0');
        loader.classList.toggle('o-0'); // Переключение класса для скрытия/показа
      }
    }, resultTime);
  });

  // Показывает следующий блок
  const resultContainer = document.querySelector('.result');

  setTimeout(() => {
    loaderContainer.classList.add('hidden');
    resultContainer.classList.remove('hidden');
  }, resultTime + 4000);
}

export {
  cutDownTimer,
  showMoreText,
  crollToBottom,
  minValue,
  maxValue,
  openLoader,
};
