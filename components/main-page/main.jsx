import Image from "next/image";
import carSrc from "./main_car.png";
import { UiButton } from "../uikit/ui-button";

export function Main() {
  return (
    <main className="page__main main">
      <div className="main__container">
        <div className="main__content">
          <div className="main__info">
            <h1 className="main__title">
              Твій новий автомобіль за доступною ціною
            </h1>
            <p className="main__text">
              Автосалон, де ти можеш знайти будь-який автомобіль та купити його
              всього за декілька кліків. Вперед!
            </p>
            <button className="main__button">Обрати автомобіль</button>
          </div>
          <div className="main__image">
            <Image src={carSrc} alt="Car" />
          </div>
        </div>
      </div>
      <div className="main__bg">
        <div className="main__bg-content"></div>
      </div>
    </main>
  );
}
