import { questionsList } from '../mock/questions.js';
import { secondIndividualText } from '../mock/text-2.js';
import { crollToBottom, minValue, maxValue, openLoader } from '../utils.js';

// Глобальные переменные
let step = 0; // счетчик: Номер вопроса
let isStart = false; // Флаг на первую загрузку вопросов
let myUserPoints = 0; // Кол-во очков, которое получил юзер после прохождения квиза
let isAnswered = false; // Флаг ответил на вопрос или нет
let userInfo = {}; // присваивает в значение пустой объект для дальнейшего переопределения

// Устанавливает начальный процент прохождения квиза
const scaleWidth = document.querySelector('.question__stage-line');
scaleWidth.style.width = `${(step + 1 / questionsList.length) * 100}%`;

// Выводит процент прохождения квиза
const percent = document.getElementById('percent');
percent.textContent = `${Math.round(
  ((step + 1) / questionsList.length) * 100,
)}%`;

// Контейнер для вопроса
const questionsItemNode = document.querySelector('.question__item');

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

      if (questionsList[step].fact) {
        factNode.classList.remove('question__item-fact--hidden');
        crollToBottom();
      }

      // Меняет флаг на не Ответил
      isAnswered = false;

      if (!isAnswered) {
        buttonNext.disabled = false;
        buttonNext.classList.remove('question__stage-button--disabled');
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
  if (questionsList[step].fact) {
    factText.textContent = questionsList[step].fact;
  }

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

  // Ставит слушатель на ответ на вопрос
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

  userInfo = JSON.parse(localStorage.getItem('userInfo'));

  let grade = 0;
  if (
    questionResults.myUserPoints > firstGroup &&
    questionResults.myUserPoints <= secondGroup
  ) {
    grade = 1;
  } else if (
    questionResults.myUserPoints > secondGroup &&
    questionResults.myUserPoints <= thirdGroup
  ) {
    grade = 2;
  } else if (questionResults.myUserPoints > thirdGroup) {
    grade = 3;
  }

  // Объект с результатом юзера
  const userResultMessage = secondIndividualText[grade];
  return userResultMessage;
}


// Кнопка дальше
const buttonNext = document.querySelector('.question__stage-button');

// Слушатель на кнопку дальше
buttonNext.addEventListener('click', () => {
  // Меняет флаг: первая отрисовка произошла
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
  buttonNext.classList.add('question__stage-button--disabled');

  // Проверка на наличие вопросов
  if (step >= questionsList.length) {
    // Баллы за тест: результат юзера, минимальный результат, максимальный результат
    const questionResults = {
      myUserPoints,
      minValue,
      maxValue,
    };

    // Индивидуальные сообщения по результатам прохождения квиза
    const individualMessageQuiz = document.getElementById(
      'individual__message-quiz',
    );

    // Вставляет индивидуальные сообщения по результатам прохождения квиза
    individualMessageQuiz.textContent =
      getIndividualUserMessage(questionResults);

    // Показывает лоадер после прохождения квиза
    openLoader();

    return;
  } else {
    // Изменяет длину шкалы
    const scaleWidth = document.querySelector('.question__stage-line');
    scaleWidth.style.width = `${((step + 1) / questionsList.length) * 100}%`;

    percent.textContent = `${Math.round(
      ((step + 1) / questionsList.length) * 100,
    )}%`;
  }

  // Удаляет отрисованный вопрос
  const questionContent = document.querySelector('.question__item-content');
  questionContent.remove();

  // Отрисовывает следующий вопрос
  createQuestionItem();
});
