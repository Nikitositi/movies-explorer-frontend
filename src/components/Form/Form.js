import { Link, useLocation } from 'react-router-dom';
import { useInput } from '../../utils/useInput';
import './Form.css';

function Form(props) {
  const email = useInput('', { isEmpty: true, minLength: 3, isEmail: true });
  const password = useInput('', { isEmpty: true, minLength: 3 });
  const { buttonText, linkText, text, route } = props;
  const { pathname } = useLocation();

  function handleSubmit(evt) {
    evt.preventDefault();

    if (pathname === '/signin') {
      props.onLogin(email.value, password.value);
    } else {
      props.onRegister(props.name.value, email.value, password.value);
    }
  }

  return (
    <form className='form' onSubmit={handleSubmit}>
      {props.children}
      <label className='form__label' htmlFor='email'>
        E-mail
        <input
          onChange={(evt) => email.onChange(evt)}
          onBlur={() => email.onBlur()}
          value={email.value}
          className='form__input'
          name='email'
          type='email'
          required
        />
        {email.isDirty && email.isEmpty && (
          <span className='form__error'>Поле не может быть пустым</span>
        )}
        {email.isDirty && email.isEmailError && (
          <span className='form__error'>Некорректный email</span>
        )}
      </label>
      <label className='form__label' htmlFor='password'>
        Пароль
        <input
          onChange={(evt) => password.onChange(evt)}
          onBlur={() => password.onBlur()}
          value={password.value}
          className='form__input'
          name='password'
          type='password'
          required
        />
        {password.isDirty && password.isEmpty && (
          <span className='form__error'>Поле не может быть пустым</span>
        )}
        {password.isDirty && password.minLengthError && (
          <span className='form__error'>
            Длина пароля не может быть короче 3 символов
          </span>
        )}
      </label>
      <div className='form__wrapper'>
        {/* <span className='form__submit-error'>{props.message}</span> */}
        <button
          disabled={!email.inputValid || !password.inputValid}
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
      </div>
    </form>
  );
}

export default Form;
