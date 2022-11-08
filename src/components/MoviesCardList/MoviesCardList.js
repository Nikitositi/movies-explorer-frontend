import { useState, useEffect, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';
import Preloader from '../Preloader/Preloader';
import {
  DESKTOP_WIDTH,
  MOBILE_WIDTH,
  TABLET_WIDTH,
} from '../../utils/constants';

function MoviesCardList(props) {
  const [currentCards, setCurrentCards] = useState(0);
  const [addCards, setAddCards] = useState(3);
  const [moviesToShow, setMoviesToShow] = useState([]);

  const location = useLocation();

  const getCards = (windowSize) => {
    if (windowSize > DESKTOP_WIDTH) {
      return { first: 9, more: 3 };
    }
    if (windowSize > TABLET_WIDTH && windowSize <= DESKTOP_WIDTH) {
      return { first: 8, more: 2 };
    }
    if (windowSize >= MOBILE_WIDTH && windowSize <= TABLET_WIDTH) {
      return { first: 6, more: 2 };
    }
    return { first: 5, more: 1 };
  };

  const renderAddCards = useCallback(() => {
    const count = Math.min(props.movies.length, currentCards + addCards);
    const moreCards = props.movies.slice(currentCards, count);
    setMoviesToShow([...moviesToShow, ...moreCards]);
    setCurrentCards(count);
  }, [currentCards, addCards, props.movies, moviesToShow]);

  const resize = useCallback(() => {
    const windowSize = window.innerWidth;
    setAddCards(getCards(windowSize));
  }, []);

  useEffect(() => {
    window.addEventListener('resize', resize);

    return () => {
      window.removeEventListener('resize', resize);
    };
  }, [resize]);

  useEffect(() => {
    const windowSize = window.innerWidth;
    setAddCards(getCards(windowSize).more);
    const count = Math.min(props.movies.length, getCards(windowSize).first);
    setMoviesToShow(props.movies.slice(0, count));
    setCurrentCards(count);
  }, [props.movies]);

  const renderMovies = useCallback(() => {
    renderAddCards();
  }, [renderAddCards]);

  return (
    <section className='movies-card-list'>
      <div
        className={`movies-card-list__container ${
          location.pathname === '/saved-movies'
            ? 'movies-card-list__container_saved-movies'
            : ''
        }`}>
        {props.isLoading && <Preloader />}
        {props.notFoundMovies && <span>Ничего не найдено</span>}

        {props.movies.length ? (
          <>
            <ul id='movies-card-list' className='movies-card-list__list'>
              {moviesToShow.map((movie) => {
                return (
                  <MoviesCard
                    movie={movie}
                    onSave={props.onSave}
                    onDelete={props.onDelete}
                    savedMovies={props.savedMovies}
                    key={movie._id || movie.id}
                  />
                );
              })}
            </ul>
            <div
              className={
                props.saved
                  ? 'movies-card-list__btn-container movies-card-list__btn-container_hide'
                  : `movies-card-list__btn-container ${
                      props.movies.length === moviesToShow.length
                        ? 'movies-card-list__btn-container_hide'
                        : ''
                    }`
              }>
              {location.pathname === '/movies' && (
                <button
                  className={`movies-card-list__btn ${
                    currentCards > props.movies.length &&
                    'movies-card-list__btn_disabled'
                  } ${
                    currentCards === props.movies.length &&
                    'movies-card-list__btn_display-none'
                  }`}
                  onClick={renderMovies}>
                  Ещё
                </button>
              )}
              {location.pathname === '/saved-movies' && (
                <button
                  className='movies-card-list__btn_display-none'
                  onClick={renderMovies}>
                  Ещё
                </button>
              )}
            </div>
          </>
        ) : (
          <>
            {location.pathname === '/saved-movies' && (
              <p className='movies-card-list__text'>
                Добавляйте сюда понравившиеся фильмы
              </p>
            )}
            {location.pathname === '/movies' && (
              <p className='movies-card-list__text'>Начните искать фильмы</p>
            )}
          </>
        )}
      </div>
    </section>
  );
}

export default MoviesCardList;
