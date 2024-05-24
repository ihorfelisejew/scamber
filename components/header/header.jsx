import clsx from "clsx";
import Image from "next/image";
import logoSrc from "./logo.png";
import { PhoneIcon } from "./images/phone-icon";
import { LocationIcon } from "./images/location-icon";
import { LocationArrowIcon } from "./images/location-arrow-icon";
import { useState, useEffect, useRef } from "react";

export function Header({ className }) {
  const [carShowrooms, setCarShowrooms] = useState([]);
  const [activeShowroom, setActiveShowroom] = useState("Івано-Франківськ");
  const [isOpen, setIsOpen] = useState(false);
  const locationsRef = useRef(null);

  useEffect(() => {
    fetch("http://scamber-api/api/car-showroom")
      .then((response) => response.json())
      .then((data) => {
        setCarShowrooms(data);
        setActiveShowroom(data[0]);
        console.log(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleChangeCity = (city) => {
    toggleOpen();
    setActiveShowroom(city);
  };

  const locationsStyle = {
    height: isOpen ? "193px" : "0",
    transition: `height 1s ease, opacity 0.5s ease, ${!isOpen && "padding 0s ease 0.5s"}`,
    padding: isOpen ? "40px 10px 12px" : "0",
    opacity: isOpen ? "1" : "0",
  };

  return (
    <header>
      <div className="header__container">
        <div className="content">
          <div className="logo">
            <Image src={logoSrc} alt="logo" />
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
            </ul>
          </nav>
          <div className={clsx("header__contacts", className)}>
            <div className="header__contacts-item">
              <PhoneIcon />
              <a href="tel:+380681543521" className="header__contact-text">
                +380 68 154 35 21
              </a>
            </div>
            <div
              className={clsx(
                "header__contacts-item location-item ",
                isOpen && "active",
              )}
            >
              <button className="header__contact-more" onClick={toggleOpen}>
                <LocationIcon />
                <p className="header__contact-text">{activeShowroom}</p>
                <LocationArrowIcon className={isOpen && "active"} />
              </button>
              <div
                ref={locationsRef}
                className="not-visible-locations"
                style={locationsStyle}
              >
                <div className="scrollable__block">
                  {Object.entries(carShowrooms)
                    .filter(([id]) => carShowrooms[id] != activeShowroom) // Фільтрація масиву, щоб відфільтрувати id === '0'
                    .map(([id, city]) => (
                      <button
                        key={id}
                        className="not-visible-location"
                        onClick={() => handleChangeCity(city)}
                      >
                        {city}
                      </button>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
