import './sass/main.scss';
import Refs from './js/refs.js'; 
import ApiService from './js/apiService'
import cardTpl from './templates/card.hbs'
const apiService = new ApiService;
const refs = Refs();

// refs.input.addEventListener('input', debounce(indetifyValue, 700));

// function indetifyValue(ev) {
//   const textOfInput = ev.target.value.trim();
//   if (textOfInput.length < 1) {
//     return console.log(error);
//   }
//   return console.log(textOfInput)
// }
refs.searchForm.addEventListener('submit', onSearch);
refs.moreBtn.addEventListener('click', onLoadMore)

function onSearch(event) {
  event.preventDefault();

  apiService.query = event.currentTarget.elements.query.value.trim();
  apiService.resetPage();
  apiService.requestOnUrl().then(renderCard);
  refs.gallery.innerHTML = ''
}

function onLoadMore() {
  apiService.requestOnUrl().then(renderCard);

  refs.loadBtn.scrollIntoView({
    behavior: 'smooth',
    block: 'end',
  });
}

function renderCard(data) {
  const card = cardTpl(data)
  refs.gallery.insertAdjacentHTML('beforeend', card)
}