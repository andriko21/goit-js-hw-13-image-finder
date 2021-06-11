import './sass/main.scss';
import Refs from './js/refs.js';
import ApiService from './js/apiService';
import cardTpl from './templates/card.hbs';
const apiService = new ApiService();
const refs = Refs();

refs.searchForm.addEventListener('submit', onSearch);
refs.buttonMore.addEventListener('click', onLoadMore);

function onSearch(event) {
  event.preventDefault();

  apiService.query = event.currentTarget.elements.query.value.trim();
  apiService.resetPage();
  apiService.requestOnUrl().then(renderCard);
  refs.buttonMore.classList.remove('is-hidden');

  refs.gallery.innerHTML = '';
}

function onLoadMore() {
  apiService.requestOnUrl().then(renderCard).then(scroll);
}

function scroll() {
  refs.loadBtn.scrollIntoView({
    block: "start", behavior: "smooth"
  });
}

function renderCard(data) {
  const card = cardTpl(data);
  refs.gallery.insertAdjacentHTML('beforeend', card);
}
