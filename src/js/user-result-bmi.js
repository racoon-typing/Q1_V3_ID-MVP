import { categoryUser } from '../const.js';
import { individualText } from '../mock/text.js';

// Индивидуальные сообщения по BMI
const individualMessageBmi = document.getElementById('individual__message-bmi');
const headerMessageBmi = document.querySelector('.headerText');

// Обращение селебы по BMI
const appeelSelebaBmi = document.getElementById(
  'individual__message-bmi-appeal',
);

const imageSelebaBmi = appeelSelebaBmi.querySelector('.head-img');
const nameSelebaBmi = appeelSelebaBmi.querySelector('.h4');
const appealTextIndividual = appeelSelebaBmi.querySelector('.appeal__text');
// const bodyImgIndividual = appeelSelebaBmi.querySelector('.body-img');

// Выводит индивидуальные сообщения по BMI
function outputUserMessageBmi(message, bmi) {
  individualMessageBmi.textContent = message.individualMessage.replace(
    '{BMI}',
    bmi,
  );
  imageSelebaBmi.src = message.appeal.src;
  headerMessageBmi.textContent = message.appeal.headerText;
  nameSelebaBmi.textContent = message.appeal.name;
  appealTextIndividual.textContent = message.appeal.text;
  //   bodyImgIndividual.textContent = message.appeal.srcWide;
}

// Выводит время для достижения цели: снижение веса
function outputUserMessageTimeToResult(excessWeight) {
  let timeToResult = '';
  if (excessWeight <= 12) {
    timeToResult = 'dua minggu';
  } else if (excessWeight > 12 && excessWeight <= 21) {
    timeToResult = 'satu bulan';
  } else if (excessWeight > 21 && excessWeight <= 35) {
    timeToResult = 'satu setengah bulan';
  } else if (excessWeight > 35 && excessWeight <= 45) {
    timeToResult = 'dua bulan';
  } else if (excessWeight > 45) {
    timeToResult = 'tiga bulan';
  }
  return timeToResult;
}

// Выводит данные расчета на страницу: Результат
function outputUserValue(calcUserInfo) {
  // Находит поля для заполнения на странице Результат
  const resultName = document.querySelectorAll('.username');
  const resultBmi = document.querySelector('#result__bmi');
  const resultUserWeight = document.querySelector('#result__userWeight');
  const resultIdealWeight = document.querySelector('#result__idealWeight');
  const resultExcessWeight = document.querySelector('#result__excessWeight');
  const programExcessWeight = document.querySelector('.excessWeight');
  const programExcessWeightTime = document.querySelector('#excessWeight-time');

  // Вставляет данные о юзере на страницу
  resultBmi.textContent = calcUserInfo.bmi;
  resultUserWeight.textContent = calcUserInfo.userWeight;
  resultIdealWeight.textContent = calcUserInfo.idealWeight;
  resultExcessWeight.textContent = calcUserInfo.excessWeight;
  programExcessWeight.textContent = calcUserInfo.excessWeight;
  resultName.forEach((element) => {
    element.textContent = calcUserInfo.name;
  });
  programExcessWeightTime.textContent = outputUserMessageTimeToResult(
    calcUserInfo.excessWeight
  );

  // Объект с инфой о селебе на основе BMI
  let userResultMessageBmi;

  // Выводит заголовок: Призыв к действию
  const bmi = calcUserInfo.bmi;
  const bmiText = document.querySelector('#result__body-text');

  if (bmi < 18.5) {
    bmiText.textContent = categoryUser[0];
    userResultMessageBmi = individualText[0];
  } else if (bmi >= 18.5 && bmi < 25) {
    bmiText.textContent = categoryUser[1];
    userResultMessageBmi = individualText[1];
  } else if (bmi >= 25 && bmi < 30) {
    bmiText.textContent = categoryUser[2];
    userResultMessageBmi = individualText[2];
  } else {
    bmiText.textContent = categoryUser[3];
    userResultMessageBmi = individualText[3];
  }

  // Выводит индивидуальные сообщения по BMI
  outputUserMessageBmi(userResultMessageBmi, bmi);
}

export { outputUserValue };
