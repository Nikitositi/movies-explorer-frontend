import { Link, useLocation } from 'react-router-dom';
import './Form.css';

function Form(props) {
  const { buttonText, linkText, text, route } = props;
  const { pathname } = useLocation();

  return (
    <form className='form'>
      {props.children}
      <label className='form__label' htmlFor='email'>
        E-mail
        <input className='form__input' name='email' type='email' required />
        <span className='form__error'>Что-то пошло не так...</span>
      </label>
      <label className='form__label' htmlFor='password'>
        Пароль
        <input
          className='form__input'
          name='password'
          type='password'
          minLength={2}
          required
        />
        <span className='form__error'>Что-то пошло не так...</span>
      </label>
      <button
        className={`form__btn ${
          pathname === '/signin' ? 'form__btn_signin' : ''
        }`}
        type='submit'>
        {buttonText}
      </button>
      <p className='form__text'>
        {`${text} `}
        <Link className='form__link' to={route}>
          {linkText}
        </Link>
      </p>
    </form>
  );
}

export default Form;
