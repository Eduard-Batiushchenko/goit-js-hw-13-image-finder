import refs from './refs';
import galleryMarkup from '../tamplates/gallery-markup.hbs';

function createMarkup(searchQuery) {
  refs.gallery.insertAdjacentHTML('beforeend', galleryMarkup(searchQuery));
}

export { createMarkup };
