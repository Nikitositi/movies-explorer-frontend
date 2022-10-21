import MoviesCardList from '../MoviesCardList/MoviesCardList';
// import Preloader from '../Preloader/Preloader';
import SearchForm from '../SearchForm/SearchForm';
import './Movies.css';

function Movies() {
  return (
    <div className='movies'>
      <div className='movies__container'>
        <SearchForm />
        <MoviesCardList />
        {/* <Preloader /> */}
      </div>
    </div>
  );
}

export default Movies;
