import React from "react";
import "./style.css";

const HomeBanner = () => {
  return (
    <div className="HomeBanner">
      <div className="HomeBanner-container">
        <div className="info">
          <h1>Подарок на первый заказ.</h1>
          <p>Получите 500 рублей за подписку на рассылку</p>
          <button>Подписаться</button>
        </div>
        <div className="img-container">
          <img src="food.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
