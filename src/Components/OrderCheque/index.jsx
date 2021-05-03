import React from "react";
import { useSelector } from "react-redux";
import { totalSum } from "../../reducers/basketReducer";
import "../../Components/OrderCheque/orderCheque.scss";
const OrderCheque = () => {
  const basket = useSelector((state) => state.basketReducer.basket);
  const total = totalSum(basket);
  return (
    <div>
      <div className="order-cheque">
        <h2>Заказ №47593</h2>
        <div className="products-in-cart">
          <p>Товаров в корзине</p>
          <p>{total} ₽</p>
        </div>
        <div className="products-in-cart">
          <p>Промокод</p>
          <p>0 ₽</p>
        </div>
        <p style={{ marginBottom: "10px", fontWeight: "600" }}>
          Итого к оплате
        </p>
        <p style={{ marginBottom: "10px", fontWeight: "600" }}>{total} ₽</p>
        <button disabled={total == 0 && true}>Оформить заказ</button>
      </div>

      <div className="promocode">
        <h4>Промокод</h4>
        <input placeholder="Введите промокод" type="text" />
        <button>Подтвердить</button>
      </div>
    </div>
  );
};

export default OrderCheque;
