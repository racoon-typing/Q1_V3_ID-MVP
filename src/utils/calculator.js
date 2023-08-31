// Объект с призывом к действию
const categoryUser = [
    'Kurang Berat Badan',
    'Sedikit Kelebihan Berat Badan',
    'Kelebihan Berat Badan',
    'TINDAKAN SEGERA',
];



// Ноды формы
const caculatorForm = document.querySelector('#calculator__form');
// Поля формы
const allFields = document.querySelectorAll('.calculator__input');
// Инпуты параметров юзера
const allInputs = document.querySelectorAll('.calculator__input');
// console.log(allInputs);

const heightInput = document.querySelector('#height');
const weightInput = document.querySelector('#weight');
const ageInput = document.querySelector('#age');
const genderSelector = document.querySelector('#form-select');
// Сообщение с ошибкой
const textError = document.querySelector('.calculator__input-text--error');
const textErrorHeight = document.querySelector('.calculator__input-text--error-height');
const textErrorWeight = document.querySelector('.calculator__input-text--error-weight');
const textErrorAge = document.querySelector('.calculator__input-text--error-age');


// Селект
const caculatorSelect = document.querySelector('.calculator__select-output');
const caculatorSelectList = document.querySelector('.calculator__select-list');

// Флаг на открытие меню
let isOpen = false;

// Функция добавления значение гендера в инпут
// function addSelectItem(evt) {
//     const item = evt.target;
//     caculatorSelect.value = item.textContent;

//     // Скрывает меню: селект
//     caculatorSelectList.classList.add('calculator__select-list--hidden');

//     // Убирает ошибку с поля селект
//     const isGenderEmpty = genderInputWrapper.classList.contains('is-invalid');
//     if (isGenderEmpty) {
//         genderInputWrapper.classList.remove('is-invalid');
//     }

//     // Меню закрыто
//     isOpen = false;
// }

// Слушатель на селект
// caculatorSelect.addEventListener(('click'), () => {
//     if (isOpen) {
//         // Скрывает меню: селект
//         caculatorSelectList.classList.add('calculator__select-list--hidden');

//         // Слушатель на нажатие на элемент меню
//         caculatorSelectList.removeEventListener('click', addSelectItem)

//         // Закрывает меню
//         isOpen = false;
//     } else {
//         // Показывает меню: селект
//         caculatorSelectList.classList.remove('calculator__select-list--hidden');

//         // Слушатель на нажатие на элемент меню
//         caculatorSelectList.addEventListener('click', addSelectItem)

//         // Открывает меню
//         isOpen = true;
//     }
// });

// Создает график с похудением пользователя
function getUserLine(excessWeight) {
    const gradeWeight = excessWeight / 3;

    // Массив с весом
    let arr = [];
    for (let index = 0; index < 4; index++) {
        arr.push(excessWeight - gradeWeight * index);
    }

    const CHART = document.getElementById("myChart");
    let lineChart = new Chart(CHART, {
        type: 'line',
        data: {
            labels: ['Minggu 1', 'Minggu 2', 'Minggu 3', 'Minggu 4'],
            datasets: [
                {
                    label: 'Jumlah kilogram',
                    data: arr,
                    backgroundColor: [
                        '#daf3dd'
                    ],
                    borderColor: [
                        '#009076cc'
                    ],
                    borderWidth: 2
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            animation: {
                duration: 1500,
                easing: 'easeInOutQuart'
            }
        }
    });
}

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
    const bmi = userInfo.weight / ((userInfo.height / 100) * (userInfo.height / 100));
    const bmiRounded = Math.round(bmi * 100) / 100;

    // Создает график лишнего веса
    getUserLine(excessWeightRounded);

    // Объект с данными для страницы Результат (calcUserInfo)
    return {
        bmi: bmiRounded, // BMI юзера
        userWeight: userInfo.weight, // Вес юзера
        idealWeight: idealWeightRounded, // Идеальный вес
        excessWeight: excessWeightRounded, // Лишний вес
    }
}

// Отрисовывает SVG иконка человека
function getUserIcon(bmi, gender) {
    const userIcon = document.querySelector('.result__body-icon');

    // SVG иконка человека
    let userImg;
    if (gender === 'Женщина') {
        if (bmi < 18.5) {
            userImg = 'img/svg/woman-4.svg';
        } else if (bmi >= 18.5 && bmi < 25) {
            userImg = 'img/svg/woman-3.svg';
        } else if (bmi >= 25 && bmi < 30) {
            userImg = 'img/svg/woman-2.svg';
        } else {
            userImg = 'img/svg/woman-1.svg';
        }
    } else {
        if (bmi < 18.5) {
            userImg = 'img/svg/man-4.svg';
        } else if (bmi >= 18.5 && bmi < 25) {
            userImg = 'img/svg/man-3.svg';
        } else if (bmi >= 25 && bmi < 30) {
            userImg = 'img/svg/man-2.svg';
        } else {
            userImg = 'img/svg/man-1.svg';
        }
    }

    userIcon.src = userImg;
}

// Выводит данные расчета на страницу: Результат
function outputUserValue(calcUserInfo) {
    // Находит поля для заполнения 
    const resultBmi = document.querySelector('#result__bmi');
    const resultUserWeight = document.querySelector('#result__userWeight');
    const resultIdealWeight = document.querySelector('#result__idealWeight');
    const resultExcessWeight = document.querySelector('#result__excessWeight');
    const resultToBeWeight = document.querySelector('#result__toBeWeight');

    // Вставляет данные о юзере на страницу
    resultBmi.textContent = calcUserInfo.bmi;
    resultUserWeight.textContent = calcUserInfo.userWeight;
    resultIdealWeight.textContent = calcUserInfo.idealWeight;
    resultExcessWeight.textContent = calcUserInfo.excessWeight;
    resultToBeWeight.textContent = calcUserInfo.idealWeight;

    // Выводит заголовок: Призыв к действию
    const bmi = calcUserInfo.bmi;

    const bmiText = document.querySelector('#result__body-text');
    if (bmi < 18.5) {
        bmiText.textContent = categoryUser[0];
    } else if (bmi >= 18.5 && bmi < 25) {
        bmiText.textContent = categoryUser[1];
    } else if (bmi >= 25 && bmi < 30) {
        bmiText.textContent = categoryUser[2];
    } else {
        bmiText.textContent = categoryUser[3];
    }
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
    const userHeight = Number(formData.get('height'));
    const userWeight = Number(formData.get('weight'));
    const userAge = Number(formData.get('age'));
    const userGender = formData.get('gender');

    // Условие соответсвия всех полей
    const isRightValue = userHeight > 100 && userHeight < 240 && userWeight > 30 && userWeight < 300 && userAge > 0 && userAge < 120 && userGender !== null;

    if (isRightValue) {
        // Данные юзера
        const userInfo = {
            height: userHeight,
            weight: userWeight,
            age: userAge,
            gender: userGender
        };

        // Рассчитываем BMI юзера
        const calcUserInfo = calcBmiIndex(userInfo);

        // Вставялет данные о юзере на страницу: Резлультат
        outputUserValue(calcUserInfo);

        // Отрисовывает SVG иконка человека
        getUserIcon(calcUserInfo.bmi, userInfo.gender);

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
allInputs.forEach(i => {
    i.addEventListener('input', (evt) => {
        const input = evt.target;

        // Находит обертку для инпута
        const parent = input.closest('.calculator__input-wrapper');
        input.classList.remove('is-invalid');

        // Убирает сообщение с ошибкой
        const errorMessageNode = parent.querySelector('.calculator__input-text--error');
        if (errorMessageNode) {
            errorMessageNode.classList.add('calculator__input-text--error-hidden');
        }
    });
});


