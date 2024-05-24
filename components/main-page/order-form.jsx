import { useState } from "react";

export function MainOrderForm() {
  const [formData, setFormData] = useState({
    client_name: "",
    client_last_name: "",
    client_contacts: "",
    order_detail: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch.post(
        "http://scamber-api/api/order-processing",
        formData,
      );
      console.log(response.data);
      setFormData({
        client_name: "",
        client_last_name: "",
        client_contacts: "",
        order_detail: "",
      });
    } catch (error) {
      console.error("Error submitting order:", error);
    }
  };

  return (
    <section id="order" className="page__order order">
      <div className="order__container">
        <h2 id="order__title" className="order__title title">
          Замовити авто
        </h2>
        <p className="order__text">
          У нашому автосалоні діє функція «Авто під замовлення». Залиште заявку
          у формі нижче і наші менеджери обов'язково зв'яжуться з вами для
          уточнення деталей та підбору ідеального авто для вас!
        </p>
        <div className="order__form-block">
          <h3 className="form__title title">Замовлення авто</h3>
          <form className="order__form" onSubmit={handleSubmit}>
            <label name="label" className="order__label"></label>
            <div className="order__form-content">
              <input
                name="client_name"
                className="order__name-input"
                type="text"
                placeholder="Ваше ім'я"
                value={formData.client_name}
                onChange={handleChange}
              />
              <input
                name="client_last_name"
                className="order__last-name-input"
                type="text"
                placeholder="Ваше прізвище"
                value={formData.client_last_name}
                onChange={handleChange}
              />
              <div className="order__contact-type-block">
                <p className="order__contact-type-text">Оберіть тип зв'язку</p>
                <select
                  name="type-of-contact"
                  id="type-of-contact"
                  className="type-of-contact"
                  onChange={handleChange}
                >
                  <option value="Phone" selected>
                    Номер телефону
                  </option>
                  <option value="E-mail">E-mail</option>
                  <option value="Telegram">Telegram</option>
                </select>
              </div>
              <input
                name="client_contacts"
                className="order__contact-data contact-type-input"
                id="order__contact-link"
                type="text"
                placeholder="Введіть свій номер телефону"
              />
              <textarea
                name="order_details"
                placeholder="Введіть деталі замовлення"
                className="order__message"
                value={formData.order_detail}
                onChange={handleChange}
              ></textarea>
              <button type="submit" className="order__button">
                Замовити авто
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
