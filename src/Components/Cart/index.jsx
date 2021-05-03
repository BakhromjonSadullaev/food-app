import React, { useState } from "react";

import { CgClose } from "react-icons/cg";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addToBasket, clearItemFromCart, removeFromCart } from "../../actions";
import { totalSum } from "../../reducers/basketReducer";
import OrderCheque from "../OrderCheque";
import "./cart.scss";

const Cart = () => {
  const basket = useSelector((state) => state.basketReducer.basket);
  const total = totalSum(basket);

  const dispatch = useDispatch();

  return (
    <div className="cart-page">
      <div className="cart-container">
        <h1>Корзина</h1>
        {basket == 0 ? (
          <h1 style={{ textAlign: "center", marginTop: "4rem" }}>
            Ваша корзина пуста
          </h1>
        ) : (
          basket.map((item) => {
            return (
              <div className="added-product">
                <p onClick={() => dispatch(clearItemFromCart(item.id))}>
                  <CgClose
                    style={{
                      fontSize: "1.5rem",
                      fontWeight: "800",
                      cursor: "pointer",
                    }}
                  />
                </p>
                <img src={item.img} alt="" />
                <p>{item.title}</p>
                <div className="quantity">
                  <button onClick={() => dispatch(removeFromCart(item.id))}>
                    -
                  </button>
                  <input type="text" value={item.quantity} />
                  <button onClick={() => dispatch(addToBasket(item))}>+</button>
                </div>
                <p>{item.price} ₽</p>
              </div>
            );
          })
        )}
        <div className="bonus">
          <p>Закажите на 3000 RUB и получите</p>

          <div className="bonus-info">
            <img src="/pig.png" alt="" />
            <h4>
              <span style={{ fontWeight: "700" }}>30 RUB</span> на бонусный счет
            </h4>
          </div>
          <div className="bonus-info">
            <img src="/delivery-car.png" alt="" />
            <h4 style={{ fontWeight: "600" }}>Бесплатная доставка</h4>
          </div>
        </div>
      </div>
      <div className="order-cheque-container">
        <OrderCheque />
      </div>
    </div>
  );
};

export default Cart;
