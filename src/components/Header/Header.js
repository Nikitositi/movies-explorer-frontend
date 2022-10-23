import Navigation from '../Navigation/Navigation';
import logo from '../../images/logo.svg';
import './Header.css';
import { Link, useLocation } from 'react-router-dom';
import Burger from '../Burger/Burger';

function Header(props) {
  const { bgColor } = props;
  const { pathname } = useLocation();

  return (
    <header className={`header header_bg-color_${bgColor}`}>
      <div className='header__container'>
        <div className='header__wrapper'>
          <Link to='/' className='header__logo'>
            <img src={logo} alt='Логотип сайта' />
          </Link>
          {pathname === '/' ? '' : <Navigation></Navigation>}
        </div>
        <div className='header__nav'>
          {pathname === '/' ? (
            <>
              <Link
                to={`${pathname === '/' ? '/signup' : '/profile'}`}
                className='header__link'>
                Регистрация
              </Link>
              <Link to='/signin' className='header__btn' type='button'>
                Войти
              </Link>
            </>
          ) : (
            <>
              <Link to='/profile' className='header__link-account'>
                Аккаунт
              </Link>
              <Burger />
            </>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
