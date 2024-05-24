import Image from "next/image";
import about1Src from "./images/about/about_1.png";
import about2Src from "./images/about/about_2.png";
import about3Src from "./images/about/about_3.png";
import about4Src from "./images/about/about_4.png";

export function MainAboutUs() {
  return (
    <section id="about" className="page__about about">
      <div className="about__container">
        <div className="about__content">
          <h2 id="about__title" className="about__title title">
            Про мережу автосалонів Scamber
          </h2>
          <p className="about__description">
            Мережа автосалонів <span>Scamber</span> спеціалізується на купівлі
            та продажу вживаних автомобілів, а також trade-in. Наша команда
            допоможе Вам підібрати автомобіль вашої мрії та надасть відповідь на
            всі запитання.
          </p>
          <div className="about__statistics">
            <div className="statistic__item">
              <p className="statistic__title">2</p>
              <div className="statistic__text">РОКИ НА РИНКУ</div>
            </div>
            <div className="statistic__item">
              <p className="statistic__title">250+</p>
              <div className="statistic__text">ПРОДАНИХ АВТОМОБІЛІВ</div>
            </div>
          </div>
          <p className="about__description">
            Наш досвід у перевірці та продажу авто дає змогу зробити процес
            підбору безпечним та ефективним. Перед тим як автомобіль попадає в
            наш автосалон, він проходить перевірку на дефекти та проблеми, щоб
            ви могли бути впевнені в його надійності. Наші фахівці проведуть
            детальний технічний огляд авто та нададуть повний звіт про його
            стан, пробіг та дефекти.
          </p>
          <div className="about__why-we">
            <div className="why-we__item">
              <div className="why-we__image">
                <Image src={about1Src} alt="about1" />
              </div>
              <p className="why-we__text">
                Економимо Ваш час попередніми перевірками авто
              </p>
            </div>
            <div className="why-we__item">
              <div className="why-we__image">
                <Image src={about2Src} alt="about2" />
              </div>
              <p className="why-we__text">
                Велика кількість задоволених клієнтів
              </p>
            </div>
            <div className="why-we__item">
              <div className="why-we__image">
                <Image src={about3Src} alt="about3" />
              </div>
              <p className="why-we__text">
                Надійні умови договору та оформлення гарантії
              </p>
            </div>
            <div className="why-we__item">
              <div className="why-we__image">
                <Image src={about4Src} alt="about4" />
              </div>
              <p className="why-we__text">
                Продаж автомобілів, які успішно пройшли перевірку
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
