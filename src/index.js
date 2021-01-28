import './styles.css';
import '../node_modules/material-design-icons/iconfont/material-icons.css';
import refs from './js/refs.js';
import { fetchGallery, loadMoreInfo } from './js/apiService.js';
import { createMarkup } from './js/create-markup.js';

refs.submitBtn.addEventListener('click', createGallery);
refs.loadMoreBtn.addEventListener('click', loadMore);
let inputText = '';

function createGallery(event) {
  event.preventDefault();
  inputText = refs.input.value;
  refs.gallery.innerHTML = '';

  if (!refs.input.value.length) {
    refs.gallery.innerHTML = '';
    refs.loadMoreBtn.classList.add('is-hidden');
    return;
  }

  fetchGallery(inputText).then(data => {
    if (data.hits.length) {
      refs.loadMoreBtn.classList.remove('is-hidden');
      createMarkup(data.hits);
    }
  });
}

function loadMore() {
  loadMoreInfo(inputText).then(data => {
    createMarkup(data.hits);
    window.scrollTo({
      top: document.documentElement.offsetHeight,
      behavior: 'smooth',
    });
  });
}
