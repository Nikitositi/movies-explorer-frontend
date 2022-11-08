import './SearchForm.css';
import searchImage from '../../images/search-icon.svg';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import { useWindowSize } from '../../utils/useWindowSize';
import { useState, useEffect } from 'react';

import { useLocation } from 'react-router-dom';

function SearchForm(props) {
  const [width] = useWindowSize();
  const [movie, setMovie] = useState('');

  const location = useLocation();

  useEffect(() => {
    if (props.searchKeyword.length && location.pathname === '/movies') {
      setMovie(props.searchKeyword);
    }
  }, []);

  function handleChange(evt) {
    setMovie(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();

    props.onSubmit(movie);
  }

  return (
    <section className='search'>
      <div className='search__container'>
        <form className='search__form' onSubmit={handleSubmit} noValidate>
          <img src={searchImage} alt='Иконка поиска' className='search__icon' />
          <input
            className='search__input'
            type='search'
            name='search'
            placeholder='Фильм'
            value={movie}
            onChange={handleChange}
            required
          />
          <div className='search__btn-container'>
            <button type='submit' className='search__btn'>
              Найти
            </button>
          </div>
          {width > 600 ? (
            <div className='search__right-side'>
              <FilterCheckbox
                checkBoxClick={props.checkBoxClick}
                isShort={props.isShort}
              />
            </div>
          ) : (
            ''
          )}
        </form>
        {width <= 600 ? (
          <FilterCheckbox
            checkBoxClick={props.checkBoxClick}
            isShort={props.isShort}
          />
        ) : (
          ''
        )}
      </div>
    </section>
  );
}

export default SearchForm;
