import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import './SavedMovies.css';

function SavedMovies() {
  return (
    <div className='saved-movies'>
      <div className='saved-movies__container'>
        <SearchForm />
        <MoviesCardList />
      </div>
    </div>
  );
}

export default SavedMovies;
