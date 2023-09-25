function calculateWaterIntake(weight) {
  // Расчет нормы потребления воды (в литрах)
  const waterIntake = weight * 0.03; // Обычно рекомендуется 30 мл воды на 1 кг массы тела

  return waterIntake;
}

// Функция для расчета нормы калорий на основе роста и веса
function calculateCalorieIntake(weight, height, age, gender) {
  let bmr;

  if (gender === 'Wanita') {
    // Для мужчин
    bmr = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
  } else {
    // Для женщин
    bmr = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
  }

  // Расчет нормы калорий (все в калориях)
  const calorieIntake = bmr * 1.2; // Умножение на коэффициент активности, 1.2 для низкой активности

  return calorieIntake * 0.9;
}

// Функция для вставки данных из localStorage в блок профиля
export function populateProfile() {
  // Получаем данные из localStorage
  const userInfo = JSON.parse(localStorage.getItem('userInfo'));

  if (userInfo) {
    // Находим соответствующие элементы в DOM
    // const usernameElement = document.querySelector('.username');
    const cmElement = document.querySelector('.cm');
    const kgElement = document.querySelector('.kg');
    const yearsElement = document.querySelector('.years');
    const genderElement = document.querySelector('.gender');
    const excessWeightElement = document.querySelector('.excessWeightProfile');
    const bmiElement = document.querySelector('.bmi');
    const waterElement = document.querySelector('.water');
    const caloriesElement = document.querySelector('.calories');

    // Вставляем данные из userInfo в элементы DOM
    // usernameElement.textContent = userInfo.username;
    cmElement.textContent = userInfo.userHeight;
    kgElement.textContent = userInfo.userWeight;
    yearsElement.textContent = userInfo.age;
    genderElement.textContent = userInfo.gender;
    excessWeightElement.textContent = `${userInfo.idealWeight}`;
    bmiElement.textContent = userInfo.bmi;
    waterElement.textContent = calculateWaterIntake(
      userInfo.userWeight,
    ).toFixed(1);
    caloriesElement.textContent = calculateCalorieIntake(userInfo.userWeight, userInfo.userHeight, userInfo.age, userInfo.gender).toFixed(0);
  }
}
