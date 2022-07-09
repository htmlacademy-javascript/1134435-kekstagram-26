import { similarPosts } from './data.js';
// import { closePictureModal } from './post-modal';

//Контейнер для изображений от других пользователей
const picturesContainer = document.querySelector('.pictures');

//Поиск шаблона, получение его содержимого
const picturesTemplate = document.querySelector('#picture').content;
const picturesFragment = document.createDocumentFragment();


const newPost = similarPosts;

newPost.forEach(({comment, likes, url}) => {
  const postElement = picturesTemplate.cloneNode(true);
  postElement.querySelector('.picture__comments').textContent = comment;
  postElement.querySelector('.picture__likes').textContent = likes;
  postElement.querySelector('.picture__img').src = url;
  picturesFragment.appendChild(postElement);
});

picturesContainer.appendChild(picturesFragment);


export {picturesContainer, newPost};
