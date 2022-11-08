import './App.css';
import Main from '../Main/Main';
import {
  Redirect,
  Route,
  Switch,
  useHistory,
  useLocation,
} from 'react-router-dom';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import Register from '../Register/Register';
import NotFound from '../NotFound/NotFound';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import { useEffect, useState } from 'react';
import api from '../../utils/MainApi';
import { CurrentUserContext } from '../../context/CurrentUserContext';
import moviesApi from '../../utils/MoviesApi';
import Popup from '../Popup/Popup';

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');
  const [currentUser, setCurrentUser] = useState({});
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  // Фильмы
  const [allMovies, setAllMovies] = useState(
    JSON.parse(localStorage.getItem('loadedFilms')) || []
  );
  const [movies, setMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);

  const [filteredMovies, setFilteredMovies] = useState(
    JSON.parse(localStorage.getItem('filteredMovies')) || []
  );

  const [searchKeyword, setSearchKeyword] = useState(
    localStorage.getItem('searchKeyword') || ''
  );

  const history = useHistory();
  const location = useLocation();

  function closePopup() {
    setIsPopupOpen(false);
  }

  // Проверка токена
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      api
        .checkToken(token)
        .then(() => {
          setLoggedIn(true);
          history.push(location.pathname);
        })
        .catch((err) => {
          if (err.status === 409) {
            setPopupMessage('Пользователь с таким email уже зарегистрирован');
            setIsPopupOpen(true);
          }
        });
    } else {
      api.logout().then(() => {
        localStorage.clear();
        setAllMovies([]);
        setMovies([]);
        setSavedMovies([]);
        setCurrentUser({});
        setSearchKeyword('');
        setFilteredMovies([]);
        setLoggedIn(false);
        history.push('/');
      });
    }
  }, []);

  // Загрузка данных после логина
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (loggedIn) {
      Promise.all([api.getUserData(token), api.getMovies(token)])
        .then(([userData, movies]) => {
          setCurrentUser(userData);
          localStorage.setItem('currentUser', JSON.stringify(userData));
          setSavedMovies(movies);
          localStorage.setItem('savedMovies', JSON.stringify(movies));
        })
        .catch((err) => console.log(err));

      if (!localStorage.getItem('loadedMovies')) {
        moviesApi
          .getMovies()
          .then((data) => {
            setAllMovies(data);
            localStorage.setItem('loadedMovies', JSON.stringify(data));
          })
          .catch((err) => console.log(err));
      }

      if (filteredMovies.length) {
        setMovies(filteredMovies);
      }
    }
  }, [loggedIn, filteredMovies]);

  // Функция логина
  function handleLogin(email, password) {
    api
      .login(email, password)
      .then((res) => {
        if (res.token) {
          localStorage.setItem('token', res.token);
          setLoggedIn(true);
          history.push('/movies');
          setPopupMessage('Добро пожаловать');
          setIsPopupOpen(true);
        }
      })
      .catch((err) => {
        if (err.status === 401) {
          setPopupMessage('Неверная почта или пароль');
          setIsPopupOpen(true);
        } else {
          setPopupMessage('Произошла ошибка, попробуйте ещё раз');
          setIsPopupOpen(true);
        }
        setIsPopupOpen(true);
      })
      .finally(() => {
        setTimeout(closePopup, 2000);
      });
  }

  // Функция регистрации
  function handleRegister(name, email, password) {
    api
      .register(name, email, password)
      .then((res) => {
        if (res) {
          handleLogin(email, password);
          setCurrentUser(res);
          setPopupMessage('Успешная регистрация');
        }
      })
      .catch((err) => {
        if (err.status === 409) {
          setPopupMessage('Пользователь с таким email уже зарегистрирован');
          setIsPopupOpen(true);
        } else {
          setPopupMessage(
            'Произошла ошибка, попробуйте перезагрузить страницу.'
          );
          setIsPopupOpen(true);
        }
      })
      .finally(() => {
        setTimeout(closePopup, 2000);
      });
  }

  // Функция выхода из аккаунта
  function handleLogout() {
    setPopupMessage('До скорых встреч');
    api
      .logout()
      .then(() => {
        setIsPopupOpen(true);
        setTimeout(closePopup, 2000);
        localStorage.clear();
        setAllMovies([]);
        setMovies([]);
        setSavedMovies([]);
        setCurrentUser({});
        setSearchKeyword('');
        setFilteredMovies([]);
        setLoggedIn(false);
        history.push('/');
      })
      .catch(() => {
        setPopupMessage('Произошла ошибка, попробуйте eщё раз');
        setIsPopupOpen(true);
      })
      .finally(() => {
        setTimeout(closePopup, 2000);
      });
  }

  // Функция редактирования профиля
  function handleEditUser(name, email) {
    api
      .editUserData(name, email)
      .then((user) => {
        setPopupMessage('Данные профиля успешно обновлены.');
        setCurrentUser(user);
        setIsPopupOpen(true);
      })
      .catch((err) => {
        if (err.status === 409) {
          setPopupMessage('Пользователь с таким email уже зарегистрирован');
          setIsPopupOpen(true);
        } else {
          setPopupMessage('Произошла ошибка, попробуйте eщё раз');
          setIsPopupOpen(true);
        }
        console.log(err);
      })
      .finally(() => {
        setTimeout(closePopup, 2000);
      });
  }

  // Функция отбора фильмов
  function searchMovies(movie, name) {
    return movie.filter((m) =>
      m.nameRU.toLowerCase().includes(name.toLowerCase())
    );
  }

  // Функиця поиска фильмов
  function handleSearchMovies(name) {
    setIsLoading(true);
    const newMovies = searchMovies(allMovies, name);
    setMovies(newMovies);
    localStorage.setItem('filteredMovies', JSON.stringify(newMovies));
    setFilteredMovies(newMovies);
    localStorage.setItem('searchKeyword', name);
    setSearchKeyword(name);
    setIsLoading(false);
  }

  // Функиця поиска сохраненных фильмов
  function handleSearchSavedMovies(name) {
    const newSavedMovies = searchMovies(savedMovies, name);
    setSavedMovies(newSavedMovies);
  }

  // Функция сохранения фильма
  function handleSaveMovie(movie) {
    setIsLoading(true);
    api
      .saveMovie(movie)
      .then((data) => {
        setPopupMessage('Фильм добавлен в избранное');
        setSavedMovies([data, ...savedMovies]);
        localStorage.setItem(
          'savedMovies',
          JSON.stringify([data, ...savedMovies])
        );
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setTimeout(() => setIsLoading(false), 1000);
        setTimeout(() => setIsPopupOpen(true), 1000);
        setTimeout(closePopup, 2000);
      });
  }

  // Функция удаления фильма
  function handleDeleteMovie(movie) {
    setIsLoading(true);
    const savedMovie = savedMovies.find(
      (item) => item.movieId === movie.movieId
    );
    api
      .deleteMovie(savedMovie._id)
      .then(() => {
        setPopupMessage('Фильм удалён из избранного');
        const newMoviesList = savedMovies.filter(
          (item) => item._id !== savedMovie._id
        );
        setSavedMovies(newMoviesList);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setTimeout(() => setIsLoading(false), 1000);
        setTimeout(() => setIsPopupOpen(true), 1000);
        setTimeout(closePopup, 2000);
      });
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className='app'>
        <Switch>
          <Route exact path='/'>
            <Header loggedIn={loggedIn} bgColor='blue' />
            <Main />
            <Footer />
          </Route>
          <ProtectedRoute
            exact
            path='/profile'
            component={Profile}
            loggedIn={loggedIn}
            onLogout={handleLogout}
            onEditUser={handleEditUser}
            user={currentUser}
          />
          <ProtectedRoute
            exact
            path='/movies'
            component={Movies}
            loggedIn={loggedIn}
            isLoading={isLoading}
            movies={movies}
            savedMovies={savedMovies}
            onSubmit={handleSearchMovies}
            onSave={handleSaveMovie}
            onDelete={handleDeleteMovie}
            searchKeyword={searchKeyword}
          />
          <ProtectedRoute
            exact
            path='/saved-movies'
            component={SavedMovies}
            loggedIn={loggedIn}
            isLoading={isLoading}
            movies={savedMovies}
            onSubmit={handleSearchSavedMovies}
            onDelete={handleDeleteMovie}
            savedMovies={savedMovies}
            searchKeyword={searchKeyword}
          />
          <Route path='/signin'>
            {loggedIn ? (
              <Redirect to='/' />
            ) : (
              <Login
                onLogin={handleLogin}
                onClose={closePopup}
                isOpen={isPopupOpen}
              />
            )}
          </Route>
          <Route path='/signup'>
            {loggedIn ? (
              <Redirect to='/' />
            ) : (
              <Register onRegister={handleRegister} />
            )}
          </Route>
          <Route path='*'>
            <NotFound />
          </Route>
        </Switch>
        <Popup
          message={popupMessage}
          onClose={closePopup}
          isOpen={isPopupOpen}
        />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
