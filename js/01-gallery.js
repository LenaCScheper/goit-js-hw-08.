// Add imports above this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);
const galleryContainer = document.querySelector('.gallery');
const galleryMarkup = createGalleryMarkup(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);

function createGalleryMarkup(pictures) {
  return pictures
    .map(({ preview, original, description }) => {
      return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}"  />
</a>`;
    })
    .join('');
}

var lightbox = new SimpleLightbox('.gallery a');

galleryContainer.addEventListener('click', onPictureClick);
const pictures = document.querySelectorAll('.gallery__image');
lightbox.options.captionsData = 'alt';
lightbox.options.captionType = 'attr';
lightbox.options.captionDelay = 250;

function onPictureClick(evt) {
  evt.preventDefault();
}