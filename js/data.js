import { getRandomPositiveInteger,getRandomNumber } from './util.js';

const descriptionCount = 25;

const ids = [];
const urls = [];
for(let i = 0; i < descriptionCount; i++) {
  ids[i] = urls[i] = i + 1;
}

const descriptions = [
  'природа',
  'закат',
  'пляж',
  'кот',
  'фото еды',
  'рассвет',
  'море',
  'собака',
  'птицы',
  'поле',
  'салют',
  'фото со свадьбы',
  'фото аварии',
];

const likes = Array.from(new Array(185), (x,i) => i+15);

// const NAMES = [
//   'Варвара',
//   'Майя',
//   'Александр',
//   'Ксения',
//   'Таисия',
//   'Маргарита',
//   'Екатерина',
//   'Ярослав',
//   'Алексей',
//   'Василиса',
//   'Агата',
// ];

const arrComments= [];

arrComments[0] = {
  id: 135,
  avatar: ('/img/avatar-1.svg'),
  message: 'Всё отлично!',
  name: 'Надя',
};
arrComments[1] = {
  id: 88,
  avatar: ('/img/avatar-2.svg'),
  message: 'В целом всё неплохо. Но не всё.',
  name: 'Юлия',
};
arrComments[2] = {
  id: 57,
  avatar: ('/img/avatar-3.svg'),
  message: 'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  name: 'Вова',
};
arrComments[3] = {
  id: 342,
  avatar: ('/img/avatar-4.svg'),
  message: 'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  name: 'Иван',
};
arrComments[4] = {
  id: 275,
  avatar: ('/img/avatar-5.svg'),
  message: 'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  name: 'Николай',
};
arrComments[5] = {
  id: 101,
  avatar: ('/img/avatar-6.svg'),
  message: 'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
  name: 'Павел',
};

const сomments = [arrComments[0],arrComments[1],arrComments[2],arrComments[3],arrComments[4],arrComments[5]];


function RandArray(array) {
  const rand = Math.random()*array.length | 0;
  const rValue = array[rand];
  return rValue;
}


// Функция для рандомного значения
function createUniqueNumberFromArray(numbers) {
  const indexNumber = getRandomNumber(0, numbers.length - 1);
  const result = numbers[indexNumber];
  numbers = numbers.splice(indexNumber, 1);
  return result;
}

const similarPostsCount = 25;


// Функция создания объекта
const createPost = (element,index) => ({
  id: index+1,
  url: `photos/${(index+1)}.jpg`,
  descriptions: descriptions[getRandomPositiveInteger(0, descriptions.length - 1)],
  likes: likes[getRandomPositiveInteger(14, likes.length - 1)],
  comments: RandArray(сomments),
});

const similarPosts = Array.from({length: similarPostsCount}, createPost);

const generatePosts = () => Array.from({length: similarPostsCount}, createPost);

// eslint-disable-next-line no-console
console.log(similarPosts);

export { createPost, similarPosts };


