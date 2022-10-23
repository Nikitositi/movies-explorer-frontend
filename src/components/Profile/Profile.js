import { useInput } from '../../utils/useInput';
import './Profile.css';

function Profile(props) {
  const { userName } = props;
  const name = useInput(userName);

  return (
    <main className='profile'>
      <div className='profile__container'>
        <h1 className='profile__title'>Привет, {userName}!</h1>
        <form className='profile__form'>
          <label className='profile__label' htmlFor='name'>
            Имя
            <input
              className='profile__input'
              value={name.value}
              onChange={(evt) => name.onChange(evt)}
              name='name'
              placeholder='Имя'
            />
            <span className='profile__error'></span>
          </label>
          <label className='profile__label' htmlFor='email'>
            E-mail
            <input
              className='profile__input'
              placeholder='Email'
              value='pochta@yandex.ru'
              name='email'
            />
            <span className='profile__error'></span>
          </label>
          <div className='profile__btn-container'>
            <button className='profile__btn-edit' type='submit'>
              Редактировать
            </button>
            <button className='profile__btn-logout' type='button'>
              Выйти из аккаунта
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}

export default Profile;
