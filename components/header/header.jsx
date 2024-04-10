import clsx from "clsx";
import Image from "next/image";
import logoSrc from "./logo.png";
import { PhoneIcon } from "./images/phone-icon";
import { LocationIcon } from "./images/location-icon";
import { LocationArrowIcon } from "./images/location-arrow-icon";

export function Header({ className }) {
  return (
    <header className={clsx(className, "")}>
      <div className="header__container">
        <div className="content">
          <div className="logo">
            <Image src={logoSrc} />
            <h1 className="logo__title">Scamber</h1>
          </div>
          <nav className="header__menu-block menu">
            <ul className="menu__list">
              <li className="menu__item ">
                <a href="#header" className="menu__link menu__active">
                  Головна
                </a>
              </li>
              <li className="menu__item">
                <a href="#about__title" className="menu__link">
                  Про нас
                </a>
              </li>
              <li className="menu__item">
                <a href="#catalog__title" className="menu__link">
                  Каталог
                </a>
              </li>
              <li className="menu__item">
                <a href="#contacts__title" className="menu__link">
                  Контакти
                </a>
              </li>
              <li className="menu__item">
                <a href="#order__title" className="menu__link">
                  Купити авто
                </a>
              </li>
            </ul>
          </nav>
          <div class="header__contacts">
            <div class="header__contacts-item">
              <PhoneIcon />
              <a href="tel:+380681543521" class="header__contact-text">
                +380 68 154 35 21
              </a>
            </div>
            <div class="header__contacts-item">
              <button class="header__contact-more">
                <LocationIcon />
                <p class="header__contact-text">Івано-Франківськ</p>
                <LocationArrowIcon />
              </button>
            </div>
            <div class="header__contacts-item">
              <a href="pages/signIn.php" class="header__contact-sign-in">
                Sign in
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
