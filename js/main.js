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

getRandomNumber(4,12);

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

//функция для создания массива из 25 сгенерированных объектов. Каждый объект массива — описание фотографии, опубликованной пользователем.

const id = getRandomId(25);

const PHOTOS = [
  'photos/1.jpg',
  'photos/2.jpg',
  'photos/3.jpg',
  'photos/4.jpg',
  'photos/5.jpg',
  'photos/6.jpg',
  'photos/7.jpg',
  'photos/8.jpg',
  'photos/9.jpg',
  'photos/10.jpg',
  'photos/11.jpg',
  'photos/12.jpg',
  'photos/13.jpg',
  'photos/14.jpg',
  'photos/15.jpg',
  'photos/16.jpg',
  'photos/17.jpg',
  'photos/18.jpg',
  'photos/19.jpg',
  'photos/20.jpg',
  'photos/21.jpg',
  'photos/22.jpg',
  'photos/23.jpg',
  'photos/24.jpg',
  'photos/25.jpg'
];

const description = [
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
  'кринж',
  'горы',
  'звездное небо',
  'каток',
  'фото из интернета',
  'кекс',
  'париж',
  'кофе',
  'фото слона',
  'фото из спорт-зала',
  'площадь',
  'пейзаж',
];

const likes = Array.from(new Array(185), (x,i) => i+15);

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
  'Софья',
  'Гордей',
  'Виктория',
  'Роман',
  'Злата',
  'Михаил',
  'Денис',
  'Даниил',
  'Евангелина',
  'Даниэль',
  'Виктор',
  'Максим',
  'Артём',
  'Арина',
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


const getRandomPositiveInteger = (a, b) => {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const rand = Math.floor(Math.random() * arrComment.length);

function getRandomId(max) {
  return Math.floor(Math.random() * max);
}


const SIMILAR_POSTS_COUNT = 25;

const createPost = () => ({
  id,
  PHOTO: PHOTOS[getRandomPositiveInteger(0, PHOTOS.length - 1)],
  description: description[getRandomPositiveInteger(0, description.length - 1)],
  likes: likes[getRandomPositiveInteger(14, likes.length - 1)],
  NAME: NAMES[getRandomPositiveInteger(0, NAMES.length - 1)],
  arrComment: arrComment[rand],
});

const similarPosts = Array.from({length: SIMILAR_POSTS_COUNT}, createPost);


// eslint-disable-next-line no-console
console.log(similarPosts);
