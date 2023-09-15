import { categoryUser } from '../const.js';
import { secondIndividualText } from '../mock/text-2.js';

// Выводит данные расчета на страницу: Результат
function outputUserValue(calcUserInfo) {
  console.log(calcUserInfo);
  // Находит поля для заполнения
  const resultName = document.querySelectorAll('.username');
  console.log(resultName);
  const resultBmi = document.querySelector('#result__bmi');
  const quizIndividualMessage = document.getElementById(
    'individual__message-quiz',
  );
  const resultUserWeight = document.querySelector('#result__userWeight');
  const resultIdealWeight = document.querySelector('#result__idealWeight');
  const resultExcessWeight = document.querySelector('#result__excessWeight');
  const resultToBeWeight = document.querySelector('#result__toBeWeight');
  const programExcessWeight = document.querySelector('.excessWeight');

  // Вставляет данные о юзере на страницу
  resultBmi.textContent = calcUserInfo.bmi;
  resultUserWeight.textContent = calcUserInfo.userWeight;
  resultIdealWeight.textContent = calcUserInfo.idealWeight;
  resultExcessWeight.textContent = calcUserInfo.excessWeight;
  programExcessWeight.textContent = calcUserInfo.excessWeight;
  resultToBeWeight.textContent = calcUserInfo.idealWeight;
  resultName.forEach((element) => {
    console.log(element);
    element.textContent = calcUserInfo.name;
  });

  // Выводит заголовок: Призыв к действию
  const bmi = calcUserInfo.bmi;

  const bmiText = document.querySelector('#result__body-text');
  if (bmi < 18.5) {
    bmiText.textContent = categoryUser[0];
    quizIndividualMessage.textContent = secondIndividualText[0];
  } else if (bmi >= 18.5 && bmi < 25) {
    bmiText.textContent = categoryUser[1];
    quizIndividualMessage.textContent = secondIndividualText[1];
  } else if (bmi >= 25 && bmi < 30) {
    bmiText.textContent = categoryUser[2];
    quizIndividualMessage.textContent = secondIndividualText[2];
  } else {
    bmiText.textContent = categoryUser[3];
    quizIndividualMessage.textContent = secondIndividualText[3];
  }
}

export { outputUserValue };
