import './utils/calculator.js';
import './utils/questions.js';

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

export { cutDownTimer, showMoreText };
