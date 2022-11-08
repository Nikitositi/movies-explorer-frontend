import { MAIN_API, MOVIES_URL } from './constants';

class MainApi {
  constructor(options) {
    this._url = options.url;
    this._headers = options.headers;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(res);
  }

  register(name, email, password) {
    return fetch(`${this._url}/signup`, {
      method: 'POST',
      credentials: 'include',
      headers: this._headers,
      body: JSON.stringify({ name, email, password }),
    }).then(this._checkResponse);
  }

  login(email, password) {
    return fetch(`${this._url}/signin`, {
      method: 'POST',
      credentials: 'include',
      headers: this._headers,
      body: JSON.stringify({ email, password }),
    }).then(this._checkResponse);
  }

  logout() {
    return fetch(`${this._url}/signout`, {
      method: 'POST',
      headers: this._headers,
      credentials: 'include',
    }).then(this._checkResponseStatus);
  }

  checkToken(token) {
    return fetch(`${this._url}/users/me`, {
      method: 'GET',
      credentials: 'include',
      headers: {
        ...this._headers,
        Authorization: `Bearer ${token}`,
      },
    }).then(this._checkResponse);
  }

  getUserData(token) {
    return fetch(`${this._url}/users/me`, {
      method: 'GET',
      credentials: 'include',
      headers: {
        ...this._headers,
        Authorization: `Bearer ${token}`,
      },
    }).then(this._checkResponse);
    // .then((data) => data);
  }

  editUserData(name, email) {
    const token = localStorage.getItem('token');

    return fetch(`${this._url}/users/me`, {
      method: 'PATCH',
      credentials: 'include',
      headers: {
        ...this._headers,
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        name,
        email,
      }),
    }).then(this._checkResponse);
  }

  getMovies(token) {
    return fetch(`${this._url}/movies`, {
      method: 'GET',
      credentials: 'include',
      headers: {
        ...this._headers,
        Authorization: `Bearer ${token}`,
      },
    }).then(this._checkResponse);
    // .then((data) => data);
  }

  saveMovie(movie) {
    const token = localStorage.getItem('token');

    return fetch(`${this._url}/movies`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        ...this._headers,
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        country: movie.country,
        director: movie.director,
        duration: movie.duration,
        year: movie.year,
        description: movie.description,
        image: `${MOVIES_URL}${movie.image.url}`,
        trailerLink: movie.trailerLink,
        thumbnail: `${MOVIES_URL}${movie.image.formats.thumbnail.url}`,
        movieId: movie.id,
        nameRU: movie.nameRU,
        nameEN: movie.nameEN,
      }),
    }).then(this._checkResponse);
    // .then((data) => data);
  }

  deleteMovie(movieId) {
    const token = localStorage.getItem('token');

    return fetch(`${this._url}/movies/${movieId}`, {
      method: 'DELETE',
      credentials: 'include',
      headers: {
        ...this._headers,
        Authorization: `Bearer ${token}`,
      },
    }).then(this._checkResponse);
    // .then((data) => data);
  }
}

const api = new MainApi({
  url: MAIN_API,
  // url: 'http://localhost:3000',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
