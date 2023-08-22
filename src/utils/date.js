// Вывод даты в хедер
// Создаем массивы для хранения названий дней недели и месяцев на бахасе
const daysOfWeek = [
    "Minggu", // Воскресенье
    "Senin",  // Понедельник
    "Selasa", // Вторник
    "Rabu",   // Среда
    "Kamis",  // Четверг
    "Jumat",  // Пятница
    "Sabtu"   // Суббота
];

const months = [
    "Januari",   // Январь
    "Februari",  // Февраль
    "Maret",     // Март
    "April",     // Апрель
    "Mei",       // Май
    "Juni",      // Июнь
    "Juli",      // Июль
    "Agustus",   // Август
    "September", // Сентябрь
    "Oktober",   // Октябрь
    "November",  // Ноябрь
    "Desember"   // Декабрь
];


// Получаем текущую дату
const currentDate = new Date();

// Извлекаем день недели, месяц и день
const dayOfWeek = daysOfWeek[currentDate.getDay()];
const month = months[currentDate.getMonth()];
const day = currentDate.getDate();
const year = currentDate.getFullYear();

// Формируем строку в нужном формате
const formattedDate = `${dayOfWeek}, ${day} ${month} ${year}`;

// Выводит дату в хедер
const headerData = document.querySelector('.header__top-date');
headerData.textContent = formattedDate;