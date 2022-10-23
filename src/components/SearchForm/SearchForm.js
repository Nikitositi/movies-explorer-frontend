import './SearchForm.css';
import searchImage from '../../images/search-icon.svg';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import { useWindowSize } from '../../utils/useWindowSize';

function SearchForm() {
  const [width] = useWindowSize();

  return (
    <section className='search'>
      <div className='search__container'>
        <form className='search__form'>
          <img src={searchImage} alt='Иконка поиска' className='search__icon' />
          <input className='search__input' placeholder='Фильм' required />
          <div className='search__btn-container'>
            <button type='submit' className='search__btn'>
              Найти
            </button>
          </div>
          {width > 600 ? (
            <div className='search__right-side'>
              <FilterCheckbox />
            </div>
          ) : (
            ''
          )}
        </form>
        {width <= 600 ? <FilterCheckbox /> : ''}
      </div>
    </section>
  );
}

export default SearchForm;
