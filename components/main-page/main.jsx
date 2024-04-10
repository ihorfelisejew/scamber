import Image from "next/image";
import carSrc from "./main_car.png";

export function Main() {
  return (
    <main class="page__main main">
      <div class="main__container">
        <div class="main__content">
          <div class="main__info">
            <h1 class="main__title">
              Твій новий автомобіль за доступною ціною
            </h1>
            <p class="main__text">
              Автосалон, де ти можеш знайти будь-який автомобіль та купити його
              всього за декілька кліків. Вперед!
            </p>
            <button class="main__button">Обрати автомобіль</button>
          </div>
          <div class="main__image">
            <Image src={carSrc} alt="Car" />
          </div>
        </div>
      </div>
      <div class="main__bg">
        <div class="main__bg-content"></div>
      </div>
    </main>
  );
}
