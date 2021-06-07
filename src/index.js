import './sass/main.scss';
import Refs from './js/refs.js'; 
import ApiService from './js/apiService'
var debounce = require('lodash.debounce');

const apiService = new ApiService;

const refs = Refs();

refs.input.addEventListener('input', debounce(indetifyValue, 700));

function indetifyValue(ev) {
  const textOfInput = ev.target.value.trim();
  if (textOfInput.length < 1) {
    return console.log(error);
  }
  return console.log(textOfInput)
}