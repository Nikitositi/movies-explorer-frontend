import SectionTitle from '../SectionTitle/SectionTitle';
import studentPhoto from '../../images/student.jpg';
import './AboutMe.css';

function AboutMe() {
  return (
    <section className='about-me' id='about-me'>
      <div className='about-me__container'>
        <SectionTitle title='Студент' />
        <div className='about-me__wrapper'>
          <div className='about-me__info'>
            <h3 className='about-me__title'>Никита</h3>
            <p className='about-me__subtitle'>Фронтенд-разработчик, 23 года</p>
            <p className='about-me__text'>
              Я родился и живу в Саратове, закончил факультет экономики СГУ. У
              меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь
              бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ
              Контур». После того, как прошёл курс по веб-разработке, начал
              заниматься фриланс-заказами и ушёл с постоянной работы.
              {/* ЗАПОЛНИТЬ СВОЕЙ БИОГРАФИЕЙ */}
            </p>
            <a href='https://github.com/Nikitositi' className='about-me__link'>
              Github
            </a>
          </div>
          <img
            src={studentPhoto}
            alt='Изображение студента'
            className='about-me__photo'
          />
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
