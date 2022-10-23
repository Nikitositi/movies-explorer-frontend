import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Burger.css';

function Burger() {
  const { pathname } = useLocation();
  const [activeBurger, setActiveBurger] = useState(false);

  function closeBurger() {
    setActiveBurger(false);
  }

  function handleActiveBurger() {
    setActiveBurger(!activeBurger);
  }
  return (
    <>
      <button
        type='button'
        className={`burger ${activeBurger ? 'burger_active' : ''}`}
        onClick={handleActiveBurger}>
        <span className='burger__line' />
        <span className='burger__line' />
        <span className='burger__line' />
      </button>
      <div className={`overlay ${activeBurger ? 'overlay_active' : ''}`}>
        <div
          className={`burger__menu ${
            activeBurger ? 'burger__menu_active' : ''
          }`}>
          <div className='burger__menu__wrapper' type='button'>
            <button className='burger_close' onClick={handleActiveBurger}>
              <span className='burger__line' />
              <span className='burger__line' />
              <span className='burger__line' />
            </button>
            <nav className='burger__menu__nav'>
              <ul className='burger__menu__list'>
                <li className='burger__menu__item'>
                  <Link className='burger__menu__link' to='/'>
                    Главная
                  </Link>
                </li>
                <li className='burger__menu__item'>
                  <Link
                    onClick={closeBurger}
                    className={`burger__menu__link ${
                      pathname === '/movies' ? 'burger__menu__link_active' : ''
                    }`}
                    to='/movies'>
                    Фильмы
                  </Link>
                </li>
                <li className='burger__menu__item'>
                  <Link
                    onClick={closeBurger}
                    className={`burger__menu__link ${
                      pathname === '/saved-movies'
                        ? 'burger__menu__link_active'
                        : ''
                    }`}
                    to='/saved-movies'>
                    Сохранённые фильмы
                  </Link>
                </li>
              </ul>
            </nav>
            <Link
              to='/profile'
              className='burger__menu__link-account'
              onClick={closeBurger}>
              Аккаунт
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Burger;
