import { useLocation } from 'react-router-dom';
import movies from '../../utils/constants';
import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';

function MoviesCardList() {
  const { pathname } = useLocation();

  return (
    <section className='movies-card-list'>
      <div
        className={`movies-card-list__container ${
          pathname === '/saved-movies'
            ? 'movies-card-list__container_saved-movies'
            : ''
        }`}>
        <ul id='movies-card-list' className='movies-card-list__list'>
          {movies.map((card, i) => {
            let isSaved = false;
            if (i % 2 === 0) {
              isSaved = true;
            }
            return (
              <MoviesCard
                key={i}
                image={card.url}
                title={card.title}
                duration={card.duration}
                isSaved={isSaved}
              />
            );
          })}
        </ul>
        <div
          className={`movies-card-list__btn-container ${
            pathname === '/saved-movies'
              ? 'movies-card-list__btn-container_hide'
              : ''
          }`}>
          <button className='movies-card-list__btn'>Ещё</button>
        </div>
      </div>
    </section>
  );
}

export default MoviesCardList;
