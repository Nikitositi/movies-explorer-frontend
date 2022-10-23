import SectionTitle from '../SectionTitle/SectionTitle';
import './AboutProject.css';

function AboutProject() {
  return (
    <section className='about-project' id='about-project'>
      <div className='about-project__container'>
        <SectionTitle title='О проекте' />
        <div className='about-project__description'>
          <article className='about-project__article'>
            <h3 className='about-project__article-title'>
              Дипломный проект включал 5 этапов
            </h3>
            <p className='about-project__article-text'>
              Составление плана, работу над бэкендом, вёрстку, добавление
              функциональности и финальные доработки.
            </p>
          </article>
          <article className='about-project__article'>
            <h3 className='about-project__article-title'>
              На выполнение диплома ушло 5 недель
            </h3>
            <p className='about-project__article-text'>
              У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
              соблюдать, чтобы успешно защититься.
            </p>
          </article>
        </div>
        <div className='about-project__timeline'>
          <div className='about-project__timeline-item about-project__timeline-item_background_green'>
            1 неделя
          </div>
          <div className='about-project__timeline-item about-project__timeline-item_background_grey'>
            4 недели
          </div>
          <div className='about-project__timeline-item'>Back-end</div>
          <div className='about-project__timeline-item'>Front-end</div>
        </div>
      </div>
    </section>
  );
}

export default AboutProject;
