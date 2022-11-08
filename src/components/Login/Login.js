import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import Form from '../Form/Form';
import Preloader from '../Preloader/Preloader';
import './Login.css';

function Login(props) {
  return (
    <main className='login'>
      {props.isLoading ? (
        <Preloader />
      ) : (
        <div className='login__container'>
          <Link to='/' className='login__link'>
            <img className='login__logo' src={logo} alt='Логотип сайта' />
          </Link>
          <h1 className='login__title'>Рады видеть!</h1>
          <Form
            buttonText='Войти'
            linkText='Регистрация'
            text='Ещё не зарегистрированы?'
            route='/signup'
            onLogin={props.onLogin}
            message={props.message}
          />
        </div>
      )}
    </main>
  );
}

export default Login;
