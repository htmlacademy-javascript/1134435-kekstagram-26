//Функция, возвращающая случайное целое число из переданного диапазона включительно
function getRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);

  if (max <= min) {
    return 'некорректное значение';
  }

  else {
    return Math.floor(Math.random() * (max - min + 1)) + min; }
}


//Функция для проверки максимальной длины строки
function checkLengthComment (line, length) {

  if (line.length > 0 && line.length <= length) {
    return true;
  }

  else {
    return false;
  }
}
checkLengthComment ('Hello');

//Функция для рандомного позитивного числа из диапозона
const getRandomPositiveInteger = (a, b) => {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};


const isEscapeKey = (evt) => evt.key === 'Escape';

export { getRandomPositiveInteger,getRandomNumber,isEscapeKey };
