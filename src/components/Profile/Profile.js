import './Profile.css';

function Profile(props) {
  const { userName } = props;

  return (
    <div className='profile'>
      <div className='profile__container'>
        <h1 className='profile__title'>Привет, {userName}!</h1>
        <form className='profile__form'>
          <label className='profile__label' htmlFor='name'>
            Имя
            <input className='profile__input' placeholder='Имя' name='name' />
            <span className='profile__error'></span>
          </label>
          <label className='profile__label' htmlFor='email'>
            E-mail
            <input
              className='profile__input'
              placeholder='Email'
              name='email'
            />
            <span className='profile__error'></span>
          </label>
          <button className='profile__btn-edit' type='submit'>
            Редактировать
          </button>
        </form>
        <button className='profile__btn-logout' type='button'>
          Выйти из аккаунта
        </button>
      </div>
    </div>
  );
}

export default Profile;
