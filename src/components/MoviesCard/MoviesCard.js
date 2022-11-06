import { useLocation } from 'react-router-dom';
import { MOVIES_URL } from '../../utils/constants';
import './MoviesCard.css';

function MoviesCard(props) {
  const { pathname } = useLocation();

  const isSaved = props.savedMovies.some((m) => m.movieId === props.movie.id);

  function handleSaveClick() {
    if (isSaved) {
      props.onDelete(
        props.savedMovies.filter((m) => m.movieId === props.movie.id)[0]
      );
    } else {
      props.onSave(props.movie);
    }
  }

  function handleDeleteMovie() {
    props.onDelete(props.movie);
  }

  //Функция преобразование времени
  function transformTime(duration) {
    const hours = Math.trunc(duration / 60);
    const minutes = duration % 60;
    if (hours === 0) {
      return `${minutes}м`;
    } else {
      return `${hours}ч ${minutes}м`;
    }
  }

  return (
    <li className='movies-card'>
      <div className='movies-card__img-wrapper'>
        <img
          className='movies-card__image'
          src={
            pathname === '/movies'
              ? `${MOVIES_URL}${props.movie.image.url}`
              : `${props.movie.image}`
          }
          alt={props.movie.nameRU}
        />
        <a
          href={props.movie.trailerLink}
          target='_blank'
          rel='noreferrer'
          className='movies-card__trailer-link'>
          {' '}
        </a>
        {pathname === '/movies' && (
          <button
            type='button'
            className={`movies-card__btn ${
              isSaved && 'movies-card__btn_success'
            }`}
            onClick={handleSaveClick}
            disabled={isSaved}>
            {!isSaved && 'Сохранить'}
          </button>
        )}
        {pathname === '/saved-movies' && (
          <button
            type='button'
            className='movies-card__btn movies-card__btn_delete'
            onClick={handleDeleteMovie}
          />
        )}
      </div>
      <div className='movies-card__wrapper'>
        <h2 className='movies-card__title'>{props.movie.nameRU}</h2>
        <p className='movies-card__time'>
          {transformTime(props.movie.duration)}
        </p>
      </div>
    </li>
  );
}

export default MoviesCard;
