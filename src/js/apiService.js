import refs from './refs.js'
// fetch(
//   'https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=cat&page=1&per_page=12&key=21976842-31d07f608689cfce6bd621b19',
// )
//   .then(res => res.json())
//   .then(console.log);
const KEY = "21976842-31d07f608689cfce6bd621b19";
const URL = 'https://pixabay.com/api/';
const SETINGS = 'image_type=photo&orientation=horizontal';

export default class ApiService {
    constructor() {
        this.page = 1;
        this.searchQuery = '';
        

    }
     async requestOnUrl() {
        try {
            const mainIncvery = await fetch(`${URL}?${TUNING}&q=${this.searchQuery}&page=${this.page}&per_page=12&key=${KEY}`)
            const inquiry = await mainIncvery.json();
            this.increment(); 
            return inquiry;
        } catch {
           return console.log('error');
        }
               
   
    }
   
    increment() {
       this.page += 1;
    }

    resetPage() {
        this.page = 1
    }
}