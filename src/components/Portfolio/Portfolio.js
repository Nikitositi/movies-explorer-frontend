import './Portfolio.css';

function Portfolio() {
  return (
    <section className='portfolio'>
      <div className='portfolio__container'>
        <h2 className='portfolio__title'>Портфолио</h2>
        <ul className='portfolio__list'>
          <li className='portfolio__list-item'>
            <a
              href='https://github.com/Nikitositi/how-to-learn'
              className='portfolio__link'
              target='_blank'
              rel='noreferrer'>
              Одностраничный сайт
              <span className='portfolio__link-arrow'>↗</span>
            </a>
          </li>
          <li className='portfolio__list-item'>
            <a
              href='https://nikitositi.github.io/russian-travel/'
              className='portfolio__link'
              target='_blank'
              rel='noreferrer'>
              Адаптивный сайт
              <span className='portfolio__link-arrow'>↗</span>
            </a>
          </li>
          <li className='portfolio__list-item'>
            <a
              href='https://github.com/Nikitositi/react-mesto-api-full'
              className='portfolio__link'
              target='_blank'
              rel='noreferrer'>
              Одностраничное приложение
              <span className='portfolio__link-arrow'>↗</span>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Portfolio;
