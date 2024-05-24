import Image from "next/image";
import contactMapSrc from "./images/contacts/contacts_map.png";
import contactPhoneSrc from "./images/contacts/contacts_phone.png";
import contactTgSrc from "./images/contacts/contacts_tg.png";
import contactInstagramSrc from "./images/contacts/contacts_instagram.png";

export function MainContactUs() {
  return (
    <section id="about" className="page__contacts contacts">
      <div className="contacts__container">
        <div className="contacts__content">
          <div className="contacts__inform">
            <h2 className="contacts__title">Контакти</h2>
            <p className="contacts__desc">
              Якщо у Вас виникнуть якісь запитання, то Ви можете зв’язатися з
              нашими працівниками, які обов’язково допоможуть Вам, або
              навідатися у наш автосалон.
            </p>
            <ul className="contacts__list">
              <li className="contacts__item">
                <a href="tel:+(380)68-888-88-88" className="contacts__link">
                  <Image src={contactPhoneSrc} />
                  +(380)68-888-88-88
                </a>
              </li>
              <li className="contacts__item">
                <a href="tel:+(380)68-888-88-88" className="contacts__link">
                  <Image src={contactTgSrc} />
                  t.me/scamber_tg
                </a>
              </li>
              <li className="contacts__item">
                <a href="tel:+(380)68-888-88-88" className="contacts__link">
                  <Image src={contactInstagramSrc} />
                  @scamber_avto
                </a>
              </li>
              <li className="contacts__item">
                <p className="contacts__link">
                  <Image src={contactMapSrc} />
                  м.Хмельницький, проспект Миру 56
                </p>
              </li>
            </ul>
          </div>
          <div className="contacts__map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2594.608305560216!2d27.013597298540553!3d49.43521885006622!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473207b01eb83ed3%3A0xfa17ef6dae6da7e0!2zQXVkaSDQptC10L3RgtGAINCl0LzQtdC70YzQvdC40YbRjNC60LjQuQ!5e0!3m2!1suk!2sua!4v1716540244070!5m2!1suk!2sua"
              width="635px"
              height="100%"
              allowFullScreen="true"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
