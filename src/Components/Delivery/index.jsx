import React from "react";
import "./delivery.scss";
const Delivery = () => {
  return (
    <div className="delivery">
      <div className="delivery-container">
        <div className="delivery-info">
          <h4>Бесплатная доставка по Москве и Области от 2999 RUB!</h4>
          <button>Оформить</button>
        </div>
        <div className="img-container">
          <img src="/nissan.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Delivery;
