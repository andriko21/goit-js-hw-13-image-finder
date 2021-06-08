export default class NewsApiService {
  constructor() {
    this.searchQuery = ''; 
    this.page = 1;
  }
  requestOnUrl() {
    console.log(this);
    const KEY = '21976842-31d07f608689cfce6bd621b19';
    const URL = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12&key=${KEY}`;

    return fetch(URL) 
      .then(response => response.json())
      .then(data => {
        this.page += 1;
        return data; 
      });
  }

  resetPage() {
    this.page = 1;
  }
 
  get query() {
    return this.searchQuery;
  }

  set query(newQeury) {
    this.searchQuery = newQeury;
  }
}