import { showMoreText } from '../utils.js';

// Форма заявки
const formSubmit = document.getElementById('form');

// Функция для отслеживания пикселя
function trackPixel() {
  var qParams = new URLSearchParams(window.location.search);
  !(function (f, b, e, v, n, t, s) {
    if (f.fbq) return;
    n = f.fbq = function () {
      n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
    };
    if (!f._fbq) f._fbq = n;
    n.push = n;
    n.loaded = !0;
    n.version = '2.0';
    n.queue = [];
    t = b.createElement(e);
    t.async = !0;
    t.src = v;
    s = b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t, s);
  })(
    window,
    document,
    'script',
    'https://connect.facebook.net/en_US/fbevents.js',
  );
  fbq('init', qParams.get('p'));
  fbq('track', 'Purchase');
  fbq('track', 'Lead');
  fbq('track', 'PageView');
}

// Слушатель на форму отправки заявки
formSubmit.addEventListener('submit', function (e) {
  e.preventDefault();

  // Получает данные из формы
  const formData = new FormData(formSubmit);

  // Fetch запрос
  fetch('server.php', {
    method: 'POST',
    body: formData,
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Terjadi kesalahan saat mengirim permintaan. Muat ulang halaman dan coba lagi');
      }

      // Показывает скрытую программу
      showMoreText();

      // Отслеживает отбивается пиксель или нет
      trackPixel();
    })
    .catch((error) => {
      alert(error);

      // Показывает скрытую программу
    //   showMoreText();
    });
});
