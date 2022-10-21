import { useHistory } from 'react-router-dom';
import './NotFound.css';

function NotFound() {
  const history = useHistory();

  function goBack() {
    history.goBack();
  }

  return (
    <section className='not-found'>
      <div className='not-found__container'>
        <h1 className='not-found__title'>404</h1>
        <p className='not-found__text'>Страница не найдена</p>
        <button className='not-found__btn' onClick={goBack}>
          Назад
        </button>
      </div>
    </section>
  );
}

export default NotFound;
