//Функция, возвращающая случайное целое число из переданного диапазона включительно
// пример функции взяла из https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random


function getRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);

  if (max <= min) {
    return 'некорректное значение';
  }

  else {
    return Math.floor(Math.random() * (max - min + 1)) + min; }
}

getRandomNumber (3,8);


//Функция для проверки максимальной длины строки

function checkLengthComment (line, length) {

  if (line.length > 0 || line.length > length) {
    return true;
  }

  else {
    return false;
  }
}

checkLengthComment ('hello');

