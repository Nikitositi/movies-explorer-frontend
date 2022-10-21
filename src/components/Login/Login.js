import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import Form from '../Form/Form';
import './Login.css';

function Login() {
  return (
    <section className='login'>
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
        />
      </div>
    </section>
  );
}

export default Login;
