import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addToBasket, incrementQuantity } from "../../actions";
import "./cart.scss";

const Cart = () => {
  const basket = useSelector((state) => state.basketReducer.basket);

  const dispatch = useDispatch();
  const [inc, setInc] = useState(1);
  console.log(inc);
  return (
    <div className="cart-page">
      <div className="cart-container">
        <h1>Корзина</h1>
        {basket.map((item) => {
          return (
            <div className="added-product">
              <p>x</p>
              <img src={item.img} alt="" />
              <p>{item.title}</p>
              <div className="quantity">
                <button>-</button>
                <input type="text" value={item.count} />
                <button
                  onClick={() => (setInc(inc + 1), dispatch(addToBasket(item)))}
                >
                  +
                </button>
              </div>
              <p>{item.price} ₽</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cart;
