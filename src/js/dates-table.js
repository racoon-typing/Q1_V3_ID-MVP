// Получаем ссылку на элемент таблицы
const table = document.querySelector('.table');
const options = { day: 'numeric', month: 'numeric', year: 'numeric' };

// Функция для получения текущей даты в формате "ДД-ММ-ГГГГ" для Индонезии
const getCurrentDate = () => {
  const today = new Date();

  return today;
};

// Получаем все ячейки с классом "date-table"
const dateCells = document.querySelectorAll('.date-table');

// Получаем текущую дату
let currentDate = getCurrentDate();

// Заполняем ячейки текущей датой и последующими датами
dateCells.forEach((cell) => {
  cell.textContent = currentDate.toLocaleDateString('id-ID', options);
  // Увеличиваем текущую дату на один день для следующей ячейки
  const nextDate = new Date(currentDate);
  nextDate.setDate(nextDate.getDate() + 1);
  currentDate = nextDate;
});
