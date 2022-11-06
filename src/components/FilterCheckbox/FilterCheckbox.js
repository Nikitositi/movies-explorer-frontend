import './FilterCheckbox.css';

function FilterCheckbox(props) {
  return (
    <div className='filter-checkbox'>
      <label className='filter-checkbox__label'>
        <input
          type='checkbox'
          className='filter-checkbox__input'
          onChange={props.checkBoxClick}
          checked={props.isShort}
        />
        <span className='filter-checkbox__round'></span>
      </label>
      <p className='filter-checkbox__text'>Короткометражки</p>
    </div>
  );
}

export default FilterCheckbox;
