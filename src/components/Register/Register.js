import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import Form from '../Form/Form';
import './Register.css';

function Register() {
  return (
    <section className='register'>
      <div className='register__container'>
        <Link to='/' className='register__link'>
          <img className='register__logo' src={logo} alt='Логотип сайта' />
        </Link>
        <h1 className='register__title'>Добро пожаловать!</h1>
        <Form
          buttonText='Зарегистрироваться'
          linkText='Войти'
          text='Уже зарегистрированы?'
          route='/signin'>
          <label className='form__label' htmlFor='name'>
            Имя
            <input
              className='form__input'
              name='name'
              type='text'
              minLength={2}
              maxLength={30}
              required
            />
            <span className='form__error'>Что-то пошло не так...</span>
          </label>
        </Form>
      </div>
    </section>
  );
}

export default Register;
