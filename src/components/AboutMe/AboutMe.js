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
              Я родился на Дальнем Востоке России. В настоящее время живу во
              Владивостоке. Учусь в Дальневосточном федеральном университете на
              втором курсе магистратуры. Профиль моей подготовки - системы
              радиосвязи и радиодоступа. Я обожаю слушать музыку, плеер играет с
              утра и до ночи. Играю в волейбольной сборной своего университета.
              С детства любил программировать, и вот сейчас решил попробовать
              себя в веб-разработке.
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
