const cutdownTimer = document.querySelector('#cutdownTimer');

// Запускает обратный отсчет
function cutDownTimer(minutes, seconds) {
  var totalSeconds = minutes * 60 + seconds;
  var interval = setInterval(function () {
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

export { cutDownTimer };
