import './SearchForm.css';
import searchImage from '../../images/search-icon.svg';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm() {
  return (
    <section className='search'>
      <div className='search__container'>
        <form className='search__form'>
          <img src={searchImage} alt='Иконка поиска' className='search__icon' />
          <input className='search__input' placeholder='Фильм' />
          <div className='search__left-side'>
            <div className='search__btn-container'>
              <button type='submit' className='search__btn'>
                Найти
              </button>
            </div>
            <FilterCheckbox />
          </div>
        </form>
      </div>
    </section>
  );
}

export default SearchForm;
