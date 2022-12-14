import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import './SavedMovies.css';

function SavedMovies() {
  return (
    <main className='saved-movies'>
      <div className='saved-movies__container'>
        <SearchForm />
        <MoviesCardList />
      </div>
    </main>
  );
}

export default SavedMovies;
