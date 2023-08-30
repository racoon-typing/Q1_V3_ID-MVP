// Список вопросов
const questionsList = [
  {
    id: 2,
    title: 'Bagaimana Anda menggambarkan gaya hidup Anda?',
    answers: [
      { id: 0, title: 'Tak banyak bergerak, pekerjaan di tempat', point: 3 },
      { id: 1, title: 'Aktif, kaki banyak bekerja', point: 1 },
      { id: 2, title: 'Di antara keduanya', point: 2 },
    ],
  },
  {
    id: 3,
    title: 'Seberapa sering Anda berolahraga?',
    answers: [
      { id: 0, title: 'Berolahraga setiap hari', point: 1 },
      { id: 1, title: 'Berolahraga 3 kali seminggu', point: 2 },
      { id: 2, title: 'Jalan kaki setiap hari selama 20-30 menit', point: 3 },
      { id: 3, title: 'Tidak ada aktivitas fisik secara teratur', point: 4 },
    ],
  },
  {
    id: 4,
    title:
      'Apakah Anda pernah mencoba diet? Apakah Anda mendapat hasil yang diharapkan?',
    answers: [
      {
        id: 0,
        title:
          'Ya, saya berhasil menurunkan berat badan, berat badan tidak kembali',
        point: 1,
      },
      { id: 1, title: 'Ya, tapi bobotnya naik kembali', point: 2 },
      { id: 2, title: 'Ya, tapi tidak bisa menurunkan berat badan', point: 3 },
      { id: 3, title: 'Tidak, tapi saya ingin mencoba', point: 4 },
      { id: 4, title: 'Tidak, saya tidak ingin mencoba', point: 5 },
    ],
  },
  {
    id: 8,
    title: 'Bagaimana Anda menilai berat badan Anda selama setahun terakhir?',
    answers: [
      { id: 0, title: 'Naik 3 kg atau lebih', point: 3 },
      { id: 1, title: 'Berat badan tidak berubah', point: 2 },
      { id: 2, title: 'Turun 3 kg atau lebih', point: 1 },
    ],
  },
  {
    id: 6,
    title: 'Berapa banyak air yang Anda minum tiap hari?',
    answers: [
      {
        id: 0,
        title: 'Saya jarang minum, hanya teh, kopi, soda, dll',
        point: 4,
      },
      { id: 1, title: '1-2 liter', point: 1 },
      { id: 2, title: 'Sekitar 0,5 l - 1 l', point: 3 },
      { id: 3, title: 'Tidak tahu', point: 2 },
    ],
  },
  {
    id: 10,
    title:
      'Telah terbukti bahwa menurunkan berat badan, hanya mengandalkan kemungkinan olahraga dan diet, tidak sepenuhnya efektif. Bagaimana perasaan Anda tentang berbagai suplemen yang membantu Anda mendapatkan bentuk tubuh impian Anda?',
    answers: [
      { id: 0, title: 'Tidak pernah mencoba', point: 3, isUsed: 'false' },
      {
        id: 1,
        title: 'Mencoba (a) beberapa, tidak membantu (atau bobot naik kembali)',
        point: 2,
        isUsed: 'true',
      },
      {
        id: 2,
        title: 'Pernah mencoba, berhasil membantu',
        point: 1,
        isUsed: 'true',
      },
    ],
  },
];

// Факты id вопроса [id-4: 3 шаг, id-6: 5]
const questionsFact = [
  {
    id: 1,
    text: 'Catatan: 46% pengguna memilih opsi "Ya, tetapi bobotnya naik kembali". Ini berarti bahwa di dunia modern, diet telah kehilangan relevansinya karena faktanya adalah setelah diet berat badan sangat sering naik kembali.',
  },
  {
    id: 2,
    text: 'Fakta: Kebutuhan untuk minum 2 liter air sehari adalah mitos yang menguntungkan pengecer minuman. Kita mendapatkan sebagian cairan yang kita butuhkan dari makanan. Perhitungan: 20-40 ml air per kilogram berat badan. Sebagai contoh, jika berat badan Anda 70kg, disarankan untuk minum 1700-2000ml air per hari.',
  },
];

// Индивидуальный текст
const individualText = [
  {
    id: 1,
    individualMessage:
      'Terima kasih telah meminta bantuan dalam menyusun rencana penurunan berat badan yang individual. Saya senang melihat bahwa Anda sudah aktif berolahraga dan tertarik pada pola makan yang sehat. Untuk mendukung proses penurunan berat badan Anda dan mencapai hasil yang diinginkan, saya telah menyusun rencana individual yang mencakup penggunaan suplemen tambahan biologis untuk menjaga proses penurunan berat badan dan stabilisasi berat badan.',
    items: [
      'Membantu penurunan berat badan dengan cepat dan efektif.',
      'Mereka mengurangi nafsu makan',
      'Mereka meningkatkan metabolisme',
    ],
    message:
      'Selain itu, formula ini mengandung kompleks bahan-bahan yang membantu meningkatkan proses metabolisme dalam tubuh dan meningkatkan tingkat energi. Anda akan merasa lebih segar dan berenergi sepanjang hari.',
  },
  {
    id: 2,
    individualMessage:
      'Terima kasih telah meminta bantuan dalam menyusun rencana penurunan berat badan yang individual. Mengingat pengalaman Anda dengan efek yo-yo, latihan fisik yang periodik, dan keinginan untuk menerapkan pola makan yang sehat, saya telah menyusun rencana yang mencakup penggunaan suplemen tambahan biologis untuk mendukung proses penurunan berat badan dan stabilisasi berat badan.',
    items: [
      'Membantu penurunan berat badan dengan cepat dan efektif',
      'Mereka mengurangi nafsu makan',
      'Mereka meningkatkan metabolisme',
    ],
    message:
      'Selain itu, formula ini mengandung kompleks bahan-bahan yang membantu meningkatkan proses metabolisme dalam tubuh dan meningkatkan tingkat energi. Anda akan merasa lebih segar dan berenergi sepanjang hari.',
  },
  {
    id: 3,
    individualMessage:
      'Terima kasih telah meminta bantuan dalam menyusun rencana penurunan berat badan yang individual. Mengingat pengalaman Anda dengan diet, tantangan dalam mengendalikan diri, dan keinginan untuk memulai aktivitas olahraga, saya telah menyusun rencana yang mencakup penggunaan suplemen tambahan biologis untuk mendukung proses penurunan berat badan.',
    items: [
      'Membantu penurunan berat badan dengan cepat dan efektif',
      'Mereka mengurangi nafsu makan',
      'Mereka meningkatkan metabolisme',
    ],
    message:
      'Selain itu, formula ini mengandung kompleks bahan-bahan yang membantu meningkatkan proses metabolisme dalam tubuh dan meningkatkan tingkat energi. Anda akan merasa lebih segar dan berenergi sepanjang hari.',
  },
  {
    id: 4,
    individualMessage:
      'Dengan mempertimbangkan preferensi dan keinginan Anda untuk menurunkan berat badan tanpa mengubah gaya hidup utama, saya telah menyusun rencana yang mencakup penggunaan suplemen tambahan biologis untuk membantu Anda mencapai tujuan yang ditetapkan tanpa mengubah gaya hidup.',
    items: [
      'Memberi Anda energi untuk menjalani hari',
      'Mereka mengurangi nafsu makan',
      'Mereka meningkatkan metabolisme',
      'Membantu penurunan berat badan dengan cepat dan efektif.',
    ],
    message:
      'SlimMax ini cocok untuk mereka yang memiliki gaya hidup yang kurang aktif dan tidak memiliki kesempatan untuk makan dengan benar.',
  },
];

// Глобальные переменные
let step = 0; // счетчик: Шаг
let isStart = false; // флаг на первую загрузку вопросов
let myUserPoints = 0;

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
const maxValue = questionListMin
  .map((el) => el[0].point)
  .reduce((accumulator, currentValue) => accumulator + currentValue);

// Устанавливает начальную длину шкалы
const scaleWidth = document.querySelector('.question__list-stage-line');
scaleWidth.style.width = `${(step + 1 / questionsList.length) * 100}%`;

// Контейнер для вопроса
const questionsItemNode = document.querySelector('.question__item');

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

// Флаг нажатия на ответ
let isAnswered = false;

// Делает элемент списка ответов активным / неактивным
function clickByAnswer() {
  const answerList = document.querySelector('.question__sub-list');
  const factNode = document.querySelector('.question__item-fact');

  // Слушатель на обертку над ответами
  answerList.addEventListener('click', (evt) => {
    const target = evt.target;

    if (!target.classList.contains('question__sub-list')) {
      // Список ответов
      const subItem = document.querySelectorAll('.question__sub-item');

      // Убирает активный класс со всех элементов
      subItem.forEach((el) => {
        const isContains = el.classList.contains('question__sub-item--checked');
        if (isContains) {
          el.classList.remove('question__sub-item--checked');
        }
      });

      // Нажатый ответ на вопрос
      const nearestItem = target.closest('.question__sub-item');

      // Добаляет активный класс нажатому элементу
      nearestItem.classList.toggle('question__sub-item--checked');

      // Показывает факт на выбранный шаг 3, 5, 8
      // [id-4: 3 шаг, id-6: 5]
      if (step === 2) {
        factNode.classList.remove('question__item-fact--hidden');
        crollToBottom();
      } else if (step === 4) {
        factNode.classList.remove('question__item-fact--hidden');
        crollToBottom();
      }
      // else if (step === 8) {
      //     factNode.classList.remove('question__item-fact--hidden');
      //     crollToBottom();
      // }

      // Меняет флаг на не Ответил
      isAnswered = false;

      if (!isAnswered) {
        buttonNext.disabled = false;
        buttonNext.classList.remove('question__button-next--disabled');
      }
    }
  });
}

// Первая отрисовка без нажатия кнопки
if (!isStart) {
  createQuestionItem();
}

// Заполняет шаблон данными и отрисовывает вопрос
function createQuestionItem() {
  // Объект с вопросом
  const stepQuestion = questionsList[step];

  // Находит Шаблон вопросов
  const tempalteQuestionContent = document.querySelector(
    '#question__item-content',
  );

  // Дубликат узла
  let questionContent = tempalteQuestionContent.content.cloneNode(true);

  // Находим нужные поля
  const title = questionContent.querySelector('.question__item-title');
  const list = questionContent.querySelector('.question__sub-list');
  const factNode = questionContent.querySelector('.question__item-fact');
  const factText = questionContent.querySelector('.question__item-fact-text');

  // Скрывает совет
  factNode.classList.add('question__item-fact--hidden');

  // Запоняет совет текстом: номер зависит от вопросов (step - 1 от порядкового номера)
  let factNum = null;
  if (step === 2) {
    factNum = 0;
    factText.textContent = questionsFact[factNum].text;
  } else if (step === 4) {
    factNum = 1;
    factText.textContent = questionsFact[factNum].text;
  }
  // else if (step === 8) {
  //     factNum = 2;
  //     factText.textContent = questionsFact[factNum].text;
  // }

  // Запоняет шаблон данными
  title.textContent = stepQuestion.title;

  // Вставляет шаблон на страницу
  questionsItemNode.append(questionContent);

  // Находит ШАБЛОН ответа на вопрос
  const tempalteQuestionItem = document.querySelector('#question__sub-item');

  // Объект со списоком ответов
  const answersQuestion = stepQuestion.answers;

  // Создает n-ое кол-во ответов
  answersQuestion.forEach((el) => {
    const questionItem = tempalteQuestionItem.content.cloneNode(true);

    // Находит поля в ОТВЕТЕ
    const itemNode = questionItem.querySelector('.question__sub-item');
    const itemText = questionItem.querySelector('.question__sub-item-text');

    // Вставляет характеристики ответов
    itemNode.id = el.id;
    itemNode.dataset.point = el.point;
    itemText.textContent = el.title;

    // Вставляет ответ в конец списка
    list.append(questionItem);
  });

  // Ставит слушатель на нажатие на ОТВЕТ
  clickByAnswer();
}

// Получает баллы у выбранного ответа
function getAnswerPoints() {
  const activeAnswer = document.querySelector('.question__sub-item--checked');
  // Сохраняет в переменную баллы за выбранный ответ
  const points = activeAnswer.dataset.point;
  return points;
}

// Возвращает объект с индивидуальным посланием в зависимости от баллов
function getIndividualUserMessage(questionResults) {
  // Пороговые значения для групп
  const gradePoit = (questionResults.maxValue - questionResults.minValue) / 4;
  const firstGroup = questionResults.minValue + gradePoit; // 10 + 6.25 = до 16,25 Небольшой лишний вес
  const secondGroup = firstGroup + gradePoit; // 16,25 + 6.25 = до 22,5
  const thirdGroup = secondGroup + gradePoit; // 22,5 + 6.25 = до 28,75

  let grade;
  if (questionResults.myUserPoints <= firstGroup) {
    grade = 0;
  } else if (
    questionResults.myUserPoints > firstGroup &&
    questionResults.myUserPoints <= secondGroup
  ) {
    grade = 1;
  } else if (
    questionResults.myUserPoints > secondGroup &&
    questionResults.myUserPoints <= thirdGroup
  ) {
    grade = 2;
  } else {
    grade = 3;
  }

  // Объект с результатом юзера
  const userResultMessage = individualText[grade];
  return userResultMessage;
}

// Кнопка дальше
const buttonNext = document.querySelector('.question__button-next');

// Слушатель на кнопку дальше
buttonNext.addEventListener('click', () => {
  // Меняет флаг: вопросы будут менять по клике на кнопку
  isStart = true;

  // Получает баллы за ответ на вопрос
  const userPoints = getAnswerPoints();
  myUserPoints += Number(userPoints);

  // Переходит на слеюдущий шаг
  step += 1;

  // Меняет флаг на Ответил
  isAnswered = true;

  // Блокирует кнопку
  buttonNext.disabled = true;
  buttonNext.classList.add('question__button-next--disabled');

  // Проверка на наличие вопросов
  if (step >= questionsList.length) {
    // console.log('закончиись')

    // Баллы за тест: результат юзера, минимальный результат, максимальный результат
    const questionResults = {
      myUserPoints,
      minValue,
      maxValue,
    };

    // Получает объект с индивидуальным ответом
    const userMessage = getIndividualUserMessage(questionResults);

    // Дубликат узла
    const individualCheckListNode = document.querySelector(
      '.result__check-list',
    );
    const checkItemTemplate = document.querySelector('#result__check-item');

    // Создает элементы списка Чек-лист
    userMessage.items.map((el) => {
      // Получает шаблон элемента Чек-листа
      const checkItem = checkItemTemplate.content.cloneNode(true);

      // Вставляет характеристики
      const checkItemText = checkItem.querySelector('.result__check-item-text');
      checkItemText.textContent = el;

      // Добавляет на старницу
      individualCheckListNode.append(checkItem);
    });

    // Добавляет индивидуальное послание
    const individualMessageNode = document.querySelector(
      '#individual__message',
    );
    individualMessageNode.textContent = userMessage.individualMessage;

    // Добавляет текст после элементов списка
    const individualText = document.querySelector(
      '#individual__checkList-text',
    );
    individualText.textContent = userMessage.message;

    // Показывает следующий блок
    const questionContainer = document.querySelector('.question__wrapper');
    const resultContainer = document.querySelector('.result');

    questionContainer.classList.add('hidden');
    resultContainer.classList.remove('hidden');

    return;
  } else {
    // Изменяет длину шкалы
    const scaleWidth = document.querySelector('.question__list-stage-line');
    scaleWidth.style.width = `${((step + 1) / questionsList.length) * 100}%`;
  }

  // Удаляет отрисованный вопрос
  const questionContent = document.querySelector('.question__item-content');
  questionContent.remove();

  // Отрисовывает следующий вопрос
  createQuestionItem();
});
