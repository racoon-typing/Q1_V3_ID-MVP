import { getUserIcon } from './user-icon.js';
import { outputUserValue } from './user-result-bmi.js';
import { populateProfile } from './profile.js';

// Ноды
const caculatorForm = document.querySelector('#calculator__form'); // Форма калькулятора
const allInputs = document.querySelectorAll('.calculator__input'); // Поля формы
const heightInput = document.querySelector('#height'); // инпут рост
const weightInput = document.querySelector('#weight'); // инпут вес
const ageInput = document.querySelector('#age'); // инпут возраст
const genderSelector = document.querySelector('#form-select'); // инпут гендер
const textErrorHeight = document.querySelector(
  '.calculator__input-text--error-height',
); // Текст ошибки для неправильного рост
const textErrorWeight = document.querySelector(
  '.calculator__input-text--error-weight',
); // Текст ошибки для неправильного веса
const textErrorAge = document.querySelector(
  '.calculator__input-text--error-age',
); // Текст ошибки для неправильного возраста

// Рассчитывает BMI юзера
function calcBmiIndex(userInfo) {
  let idealWeight;
  if (userInfo.gender === 'Женщина') {
    idealWeight = (userInfo.height - 100 + userInfo.age / 10) * 0.9;
  } else {
    idealWeight = (userInfo.height - 100 + userInfo.age / 10) * 0.8;
  }

  // Идеальный вес
  const idealWeightRounded = Math.round(idealWeight);

  // Лишний вес
  const excessWeight = userInfo.weight - idealWeightRounded;
  const excessWeightRounded = Math.round(excessWeight * 100) / 100;

  // BMI юзера
  const bmi =
    userInfo.weight / ((userInfo.height / 100) * (userInfo.height / 100));
  const bmiRounded = Math.round(bmi * 100) / 100;

  // Объект с данными для страницы Результат (calcUserInfo)
  return {
    name: userInfo.name,
    bmi: bmiRounded, // BMI юзера
    userWeight: userInfo.weight, // Вес юзера
    idealWeight: idealWeightRounded, // Идеальный вес
    excessWeight: excessWeightRounded, // Лишний вес
    userHeight: userInfo.height,
    age: userInfo.age,
    gender: userInfo.gender,
  };
}

// Функция проверки полей, заполенных Пользователем
function checkUserInfo(userHeight, userWeight, userAge, userGender) {
  // Проверка полей
  const rightHeightValue = userHeight > 100 && userHeight < 260;
  const rightWeightValue = userWeight > 30 && userWeight < 500;
  const rightAgeValue = userAge > 0 && userAge < 120;
  const rightGenderValue = userGender !== null;

  // Подсвечивает неверные поля
  if (!rightHeightValue) {
    // console.log(`Неверное значение рост: ${rightHeightValue}`)
    heightInput.classList.add('is-invalid');
    textErrorHeight.classList.remove('calculator__input-text--error-hidden');
  }

  if (!rightWeightValue) {
    // console.log(`Неверное значение вес: ${rightWeightValue}`)
    weightInput.classList.add('is-invalid');
    textErrorWeight.classList.remove('calculator__input-text--error-hidden');
  }

  if (!rightAgeValue) {
    // console.log(`Неверное значение возраст: ${rightAgeValue}`)
    ageInput.classList.add('is-invalid');
    textErrorAge.classList.remove('calculator__input-text--error-hidden');
  }

  if (!rightGenderValue) {
    // console.log(`Неверное значение гендер: ${rightGenderValue}`)
    genderSelector.classList.add('is-invalid');
  }
}

// Слушатель на отправку формы расчета
caculatorForm.addEventListener('submit', (evt) => {
  evt.preventDefault();

  // Объект с данными из формы
  const formData = new FormData(caculatorForm);

  // Значения полей
  const userName = formData.get('name');
  const userHeight = Number(formData.get('height'));
  const userWeight = Number(formData.get('weight'));
  const userAge = Number(formData.get('age'));
  const userGender = formData.get('gender');

  // Условие соответсвия всех полей
  const isRightValue =
    userHeight > 100 &&
    userHeight < 240 &&
    userWeight > 30 &&
    userWeight < 300 &&
    userAge > 0 &&
    userAge < 120 &&
    userGender !== null;

  if (isRightValue) {
    // Данные юзера
    const userInfo = {
      name: userName,
      height: userHeight,
      weight: userWeight,
      age: userAge,
      gender: userGender,
    };

    // Рассчитываем BMI юзера
    const calcUserInfo = calcBmiIndex(userInfo);
    console.log(calcUserInfo);
    localStorage.setItem('userInfo', JSON.stringify(calcUserInfo));

    // Вставялет данные о юзере на страницу: Резлультат
    outputUserValue(calcUserInfo);

    // Отрисовывает SVG иконка человека
    getUserIcon(calcUserInfo.bmi, userInfo.gender);

    // Вставляет данные в профиль
    populateProfile();

    // Показывает следующий блок
    const calculatorContainer = document.querySelector('.calculator__content');
    const questionContainer = document.querySelector('.question__wrapper');

    // Скрывает блок Калькулятор и показывает блок Вопросы
    calculatorContainer.classList.add('hidden');
    questionContainer.classList.remove('hidden');
    return;
  } else {
    checkUserInfo(userHeight, userWeight, userAge, userGender);
  }
});

// Скрывает сообщение с ошибкой при вводе данных
allInputs.forEach((i) => {
  i.addEventListener('input', (evt) => {
    const input = evt.target;

    // Находит обертку для инпута
    const parent = input.closest('.calculator__input-wrapper');
    input.classList.remove('is-invalid');

    // Убирает сообщение с ошибкой
    const errorMessageNode = parent.querySelector(
      '.calculator__input-text--error',
    );
    if (errorMessageNode) {
      errorMessageNode.classList.add('calculator__input-text--error-hidden');
    }
  });
});
