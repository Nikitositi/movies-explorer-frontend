import { useContext, useEffect } from 'react';
import { CurrentUserContext } from '../../context/CurrentUserContext';
import { useCustomValidation } from '../../utils/useCustomValidation';
import { useFormValidity } from '../../utils/useFormValidity';
// import { useInput } from '../../utils/useInput';

import Header from '../Header/Header';
import './Profile.css';

function Profile(props) {
  const currentUser = useContext(CurrentUserContext);
  // создаем новый объект о пользователе для сравнения с values
  const currentUserData = { name: currentUser.name, email: currentUser.email };
  const {
    values,
    errors,
    setValues,
    handleChange,
    isFormValid,
    setIsFormValid,
  } = useCustomValidation(currentUser.name, currentUser.email);
  useFormValidity(values, errors, setIsFormValid, currentUserData);

  // Отображение текущих данных в инпутах
  useEffect(() => {
    setValues({
      name: currentUser.name,
      email: currentUser.email,
    });
  }, [currentUser.name, currentUser.email, setValues]);

  function handleSubmit(evt) {
    evt.preventDefault();
    props.onEditUser(values.name, values.email);
  }

  return (
    <>
      <Header bgColor='dark' />
      <main className='profile'>
        <div className='profile__container'>
          <h1 className='profile__title'>{`Привет, ${currentUser.name}!`}</h1>
          <form className='profile__form' onSubmit={handleSubmit}>
            <label className='profile__label' htmlFor='name'>
              Имя
              <input
                className='profile__input'
                value={values.name || ''}
                onChange={handleChange}
                name='name'
                placeholder='Имя'
              />
            </label>
            <span className='form__error'>{errors['name']}</span>
            <label className='profile__label' htmlFor='email'>
              E-mail
              <input
                className='profile__input'
                placeholder='Email'
                name='email'
                value={values['email'] || ''}
                onChange={handleChange}
              />
            </label>
            <span className='form__error'>{errors['email']}</span>
            <div className='profile__btn-container'>
              <button
                className='profile__btn-edit'
                type='submit'
                disabled={!isFormValid}>
                Редактировать
              </button>
              <button
                className='profile__btn-logout'
                type='button'
                onClick={props.onLogout}>
                Выйти из аккаунта
              </button>
            </div>
          </form>
        </div>
      </main>
    </>
  );
}

export default Profile;
