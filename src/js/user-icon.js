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

export { getUserIcon };
