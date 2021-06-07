export default function Refs() {
  return {
    body: document.querySelector('body'),
    form: document.querySelector('#search-form'),
    btn: document.querySelector('.btn-load'),
    button: document.querySelector('button#btn-load'),
    list: document.querySelector('.list'),
    input: document.querySelector('.input'),
    loading: document.querySelector('.load-button'),
    download: document.querySelector('.download-button'),
  };
}
