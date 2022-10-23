import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import { useInput } from '../../utils/useInput';
import Form from '../Form/Form';
import './Register.css';

function Register() {
  const name = useInput('', { isEmpty: true, minLength: 2 });

  return (
    <main className='register'>
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
              value={name.value}
              onChange={(evt) => name.onChange(evt)}
              onBlur={() => name.onBlur()}
              name='name'
              type='text'
              minLength={2}
              maxLength={30}
              required
            />
            {name.isDirty && name.isEmpty && (
              <span className='form__error'>Поле не может быть пустым</span>
            )}
            {name.isDirty && name.minLengthError && (
              <span className='form__error'>
                Длина не может быть короче 2 символов
              </span>
            )}
          </label>
        </Form>
      </div>
    </main>
  );
}

export default Register;
