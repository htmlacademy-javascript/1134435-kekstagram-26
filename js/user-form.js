// import {renderPicture} from './post-big-photo.js';
import { closePictureModal } from './post-modal.js';
// import { isEscapeKey } from './util.js';

const body = document.body;
const DESCRIPTION_LENGTH = 140;
const HASHTAGS_COUNT = 5;

const imgUpload = document.querySelector('.img-upload');
const uploadFormElement = document.querySelector('.img-upload__form');
const popupImgUpload = imgUpload.querySelector('.img-upload__overlay');
const hashtagsInputElement = uploadFormElement.querySelector('.text__hashtags');
const descriptionInputElement = uploadFormElement.querySelector('.text__description');
const cancelButton = document.querySelector('#upload-cancel');


// const uploadFile = document.querySelector('#upload-file');
const resetForm = () => uploadFormElement.reset();


imgUpload.addEventListener('click', () => {
  popupImgUpload.classList.remove('hidden');
  body.classList.add('modal-open');
});


cancelButton.addEventListener('click', () => {
  closePictureModal();
  resetForm();
});

//валидация хэштегов и комментариев

const form = document.querySelector('.img-upload__text');
const re = /^#[A-Za-zА-ЯаяЁё0-9]{1,19}$/;


const pristine = new Pristine(uploadFormElement, {
  classTo: 'text__field-wrapper',
  errorClass: 'text__field-wrapper--invalid',
  successClass: 'text__field-wrapper-valid',
  errorTextParent: 'text__field-wrapper',
  errorTextTag: 'p',
  errorTextClass: 'text__error-message'
});


function validateHashtag (value) {
  return  value.length <= 20;
}

function checkUniquenessHashtags ()  {
  const newHashtag = hashtagsInputElement.value.toLowerCase();
  if (newHashtag !== hashtagsInputElement) {
    return true;
  }
}

function checkHashtagsCount ()  {
  if (hashtagsInputElement.value < HASHTAGS_COUNT)
  {return true;}
}


function checkDescriptionLength () {
  if (descriptionInputElement.length <= DESCRIPTION_LENGTH)
  {return true;}
}

pristine.addValidator(hashtagsInputElement, validateHashtag, 'хештег может содержать не более 20 символов', true);
pristine.addValidator(hashtagsInputElement, checkUniquenessHashtags, 'Хэш-теги не должны повторяться. Хэштеги нечувствительны к регистру.', true);
pristine.addValidator(hashtagsInputElement, checkHashtagsCount, `Можно указать не более ${HASHTAGS_COUNT} хэш-тегов.`, true);
pristine.addValidator(form, checkDescriptionLength, `Максимальная длина комментария ${DESCRIPTION_LENGTH} символов`, true);


uploadFormElement.addEventListener('submit', (evt) => {
  evt.preventDefault();
  pristine.validate();
});

