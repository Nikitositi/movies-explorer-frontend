import './Footer.css';

function Footer() {
  return (
    <section className='footer'>
      <div className='footer__container'>
        <p className='footer__text'>
          Учебный проект Яндекс.Практикум х BeatFilm.
        </p>
        <div className='footer__copyrights'>
          <p className='footer__year'>© {new Date().getFullYear()}</p>
          <ul className='footer__list'>
            <li className='footer__list-item'>
              <a
                className='footer__link'
                href='https://practicum.yandex.ru'
                target='_blank'
                rel='noreferrer'>
                Яндекс.Практикум
              </a>
            </li>
            <li className='footer__list-item'>
              <a
                className='footer__link'
                href='https://github.com'
                target='_blank'
                rel='noreferrer'>
                Github
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Footer;
