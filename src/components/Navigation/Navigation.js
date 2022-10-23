import { Link } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
  return (
    <nav className='navigation'>
      <ul className='navigation__list'>
        <li className='navigation__list-item'>
          <Link to='/movies' className='navigation__link'>
            Фильмы
          </Link>
        </li>
        <li className='navigation__list-item'>
          <Link to='/saved-movies' className='navigation__link'>
            Сохранённые фильмы
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
