import { MOVIES_API } from './constants';

class MoviesApi {
  constructor(options) {
    this._url = options.url;
    this.headers = options.headers;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка ${res.status}`);
  }

  getMovies() {
    return fetch(`${this._url}`, {
      method: 'GET',
      headers: this.headers,
    }).then(this._checkResponse);
  }
}

const moviesApi = new MoviesApi({
  url: MOVIES_API,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default moviesApi;
