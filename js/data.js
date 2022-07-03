import { getRandomPositiveInteger,getRandomNumber } from './utils.js';

const DESCRIPTIONS_COUNT = 25;


const IDS = [];
const URLS = [];
for(let i = 0; i < DESCRIPTIONS_COUNT; i++) {
  IDS[i] = URLS[i] = i + 1;
}

const DESCRIPTIONS = [
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

const LIKES = Array.from(new Array(185), (x,i) => i+15);

const NAMES = [
  'Варвара',
  'Майя',
  'Александр',
  'Ксения',
  'Таисия',
  'Маргарита',
  'Екатерина',
  'Ярослав',
  'Алексей',
  'Василиса',
  'Агата',
];


const arrComment= [];

arrComment[0] = {
  id: 135,
  avatar: ('/img/avatar-1.svg'),
  message: 'Всё отлично!',
  name: 'Надя',
};
arrComment[1] = {
  id: 88,
  avatar: ('/img/avatar-2.svg'),
  message: 'В целом всё неплохо. Но не всё.',
  name: 'Юлия',
};
arrComment[2] = {
  id: 57,
  avatar: ('/img/avatar-3.svg'),
  message: 'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  name: 'Вова',
};
arrComment[3] = {
  id: 342,
  avatar: ('/img/avatar-4.svg'),
  message: 'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  name: 'Иван',
};
arrComment[4] = {
  id: 275,
  avatar: ('/img/avatar-5.svg'),
  message: 'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  name: 'Николай',
};
arrComment[5] = {
  id: 101,
  avatar: ('/img/avatar-6.svg'),
  message: 'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
  name: 'Павел',
};

let comments = [arrComment[0],arrComment[1],arrComment[2],arrComment[3],arrComment[4],arrComment[5]];

for (let i=0; i,comments.length-1; i++) {
  comments = comments[i];
}


// Функция для рандомного значения
function createUniqueNumberFromArray(numbers) {
  const indexNumber = getRandomNumber(0, numbers.length - 1);
  const result = numbers[indexNumber];
  numbers = numbers.splice(indexNumber, 1);
  return result;
}

const SIMILAR_POSTS_COUNT = 25;


// Функция создания объекта
const createPost = () => ({
  id: createUniqueNumberFromArray(IDS),
  url: `photos/${createUniqueNumberFromArray(URLS)}.jpg`,
  DESCRIPTIONS: DESCRIPTIONS[getRandomPositiveInteger(0, DESCRIPTIONS.length - 1)],
  LIKES: LIKES[getRandomPositiveInteger(14, LIKES.length - 1)],
  NAME: NAMES[getRandomPositiveInteger(0, NAMES.length - 1)],
  comments,
});

const similarPosts = Array.from({length: SIMILAR_POSTS_COUNT}, createPost);


// eslint-disable-next-line no-console
console.log(similarPosts);

export { createPost};


