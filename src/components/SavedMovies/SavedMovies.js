import { useState, useMemo } from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import { SHORT_MOVIE_DURATION } from '../../utils/constants';
import './SavedMovies.css';
import Preloader from '../Preloader/Preloader';

function SavedMovies(props) {
  const [checkBoxActive, setCheckBoxActive] = useState(false);
  const [filter, setFilter] = useState('');

  const filterShortMovies = (filterMovies) =>
    filterMovies.filter((m) => m.duration < SHORT_MOVIE_DURATION);

  function checkBoxClick() {
    setCheckBoxActive(!checkBoxActive);
  }

  const filteredMovies = useMemo(
    () =>
      props.savedMovies.filter((m) =>
        m.nameRU.toLowerCase().includes(filter.toLowerCase())
      ),
    [filter, props.savedMovies]
  );

  return (
    <>
      <Header bgColor='dark' loggedIn={props.loggedIn} />
      <main className='saved-movies'>
        <div className='saved-movies__container'>
          <SearchForm
            onSubmit={setFilter}
            checkBoxClick={checkBoxClick}
            searchKeyword={props.searchKeyword}
          />
          {props.isLoading && <Preloader />}
          {!props.isLoading && (
            <MoviesCardList
              movies={
                checkBoxActive
                  ? filterShortMovies(filteredMovies)
                  : filteredMovies
              }
              isLoading={props.isLoading}
              onDelete={props.onDelete}
              savedMovies={props.savedMovies}
            />
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}

export default SavedMovies;
