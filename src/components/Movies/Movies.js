import MoviesCardList from '../MoviesCardList/MoviesCardList';
// import Preloader from '../Preloader/Preloader';
import SearchForm from '../SearchForm/SearchForm';
import './Movies.css';

function Movies() {
  return (
    <main className='movies'>
      <div className='movies__container'>
        <SearchForm />
        <MoviesCardList />
        {/* <Preloader /> */}
      </div>
    </main>
  );
}

export default Movies;
