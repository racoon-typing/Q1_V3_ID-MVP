import { questionsList } from './mock/questions.js';
import './js/calculator.js';
import './js/questions.js';

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

export { cutDownTimer, showMoreText, crollToBottom, minValue, maxValue };
