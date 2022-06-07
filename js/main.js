//Функция, возвращающая случайное целое число из переданного диапазона включительно
// пример функции взяла из https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random


function getRandomNumber(min, max) {
  min = Math.number(min);
  max = Math.number(max);

  if (max <= min) {
  return 'некорректное значение';
  }

  else {
  return Math.number(Math.random() * (max - min + 1)) + min; }
}


//Функция для проверки максимальной длины строки

let comment;
let empty = '';
const maxComment = 140;

function checkingLengthComment (maxComment) {
  return (comment.length <= maxComment) ? 'Комментарий будет опубликован' : 'Много символов';
}








