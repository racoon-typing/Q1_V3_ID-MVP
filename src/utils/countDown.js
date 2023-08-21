const cutdownTimer = document.querySelector('#cutdownTimer');

function countDown(minutes, seconds) {
    const totalSeconds = minutes * 60 + seconds;
    const interval = setInterval(function () {
        if (totalSeconds <= 0) {
            clearInterval(interval);
        } else {
            const minutesLeft = Math.floor(totalSeconds / 60);
            const secondsLeft = totalSeconds % 60;

            if (secondsLeft < 10) {
                cutdownTimer.textContent = minutesLeft + ":" + "0" + secondsLeft;
                totalSeconds--;
                return;
            }

            cutdownTimer.textContent = minutesLeft + ":" + secondsLeft;
            totalSeconds--;
        }
    }, 1000);
}

countDown(15, 0);
