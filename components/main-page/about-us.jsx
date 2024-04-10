import Image from "next/image";
import about1Src from "./about/about_1.png";
import about2Src from "./about/about_2.png";
import about3Src from "./about/about_3.png";
import about4Src from "./about/about_4.png";

export function MainAboutUs() {
  return (
    <section id="about" class="page__about about">
      <div class="about__container">
        <h2 id="about__title" class="about__title title">
          Про автосалон Scamber
        </h2>
        <p class="about__description">
          Автосалон <span>Scamber</span> спеціалізується на продажу б/у та нових
          машин, викупом ваших автомобілів та trade-in. Наша команда допоможе
          Вам підібрати необхідний автомобіль та надасть відповідь на всі
          виникші питання.
        </p>
        <div class="about__statistics">
          <div class="statistic__item">
            <p class="statistic__title">2</p>
            <div class="statistic__text">РОКИ НА РИНКУ</div>
          </div>
          <div class="statistic__item">
            <p class="statistic__title">250+</p>
            <div class="statistic__text">ПРОДАНИХ АВТОМОБІЛІВ</div>
          </div>
        </div>
        <p class="about__description">
          Наш досвід у перевірці та продажу авто дає змогу зробити процес
          підбору безпечним та ефективним. Перед тим як автомобіль попадає в наш
          автосалон, він проходить перевірку на дефекти та проблеми, щоб ви
          могли бути впевнені в його надійності. Наші фахівці проведуть
          детальний технічний огляд авто та нададуть повний звіт про його стан,
          пробіг та дефекти.
        </p>
        <div class="about__why-we">
          <div class="why-we__item">
            <div class="why-we__image">
              <Image src={about1Src} alt="about1" />
            </div>
            <p class="why-we__text">
              Економимо Ваш час попередніми перевірками авто
            </p>
          </div>
          <div class="why-we__item">
            <div class="why-we__image">
              <Image src={about2Src} alt="about2" />
            </div>
            <p class="why-we__text">Велика кількість задоволених клієнтів</p>
          </div>
          <div class="why-we__item">
            <div class="why-we__image">
              <Image src={about3Src} alt="about3" />
            </div>
            <p class="why-we__text">
              Надійні умови договору та оформлення гарантії
            </p>
          </div>
          <div class="why-we__item">
            <div class="why-we__image">
              <Image src={about4Src} alt="about4" />
            </div>
            <p class="why-we__text">
              Продаж автомобілів, які успішно пройшли перевірку
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
