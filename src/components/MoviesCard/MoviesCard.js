import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './MoviesCard.css';

function MoviesCard(props) {
  const { image, title, duration, isSaved } = props;
  const { pathname } = useLocation();
  useEffect;

  return (
    <li className='movies-card'>
      <div className='movies-card__img-wrapper'>
        <img className='movies-card__image' src={image} alt={title} />
        {pathname === '/saved-movies' ? (
          <button className='movies-card__btn movies-card__btn_delete' />
        ) : isSaved ? (
          <button className='movies-card__btn'>Сохранить</button>
        ) : (
          <button className='movies-card__btn movies-card__btn_success' />
        )}
      </div>
      <div className='movies-card__wrapper'>
        <h2 className='movies-card__title'>{title}</h2>
        <p className='movies-card__time'>{duration}</p>
      </div>
    </li>
  );
}

export default MoviesCard;
