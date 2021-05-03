import React from "react";
import "../Footer/footer.scss";

import { BiUser } from "react-icons/bi";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="phone-container">
          <div className="phone-1">
            <span>Бесплатный звонок по РФ</span>
            <p>+7 (831) 282-60-00</p>
          </div>
          <div className="phone-1">
            <span>Бесплатный звонок по РФ</span>
            <p>+7 (831) 282-60-00</p>
          </div>
        </div>
        <p className="footer-info">График работы по будням с 9:00 до 18:00</p>
        <p className="footer-info">Email: info@.ru</p>
        <p className="footer-info"> Поддержка</p>
        <div className="lisence">
          <p>©2020. Пиросмани</p>
          <p>Условия и соглашения</p>
          <p>Политика конфиденциальности</p>
        </div>
      </div>
      <div className="footer-contact">
        <p>Мы в в контакте </p>
        <p>Мы в instagram </p>
      </div>
      <div className="footer-signIn">
        <BiUser style={{ fontSize: "2rem", marginRight: "1rem" }} />
        <p>Войти / Регистрация</p>
      </div>
    </div>
  );
};

export default Footer;
