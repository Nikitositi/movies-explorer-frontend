import { useEffect, useState } from 'react';
import { SHORT_MOVIE_DURATION } from '../../utils/constants';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
// import Preloader from '../Preloader/Preloader';
import SearchForm from '../SearchForm/SearchForm';
import './Movies.css';

function Movies(props) {
  const [checkBoxActive, setCheckBoxActive] = useState(false);
  const [isShort, setIsShort] = useState(false);

  function checkBoxClick() {
    setCheckBoxActive(!checkBoxActive);
    localStorage.setItem('checkBox', !checkBoxActive);
  }

  useEffect(() => {
    const checkBoxLocal = localStorage.getItem('checkBox');
    if (checkBoxLocal === 'true') {
      setIsShort(isShort);
      setCheckBoxActive(true);
    }
  }, []);

  const filterShortMovies = (filterMovies) =>
    filterMovies.filter((m) => m.duration < SHORT_MOVIE_DURATION);

  return (
    <>
      <Header bgColor='dark' loggedIn={props.loggedIn} />
      <main className='movies'>
        <div className='movies__container'>
          <SearchForm
            onSubmit={props.onSubmit}
            checkBoxClick={checkBoxClick}
            searchKeyword={props.searchKeyword}
            isShort={checkBoxActive}
          />
          {props.isLoading && <Preloader />}
          {!props.isLoading && (
            <MoviesCardList
              movies={
                checkBoxActive ? filterShortMovies(props.movies) : props.movies
              }
              onSave={props.onSave}
              onDelete={props.onDelete}
              savedMovies={props.savedMovies}
              checkBox={checkBoxClick}
            />
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Movies;
