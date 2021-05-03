import React, { useState, useEffect } from "react";
import "./style.scss";

import { addToBasket } from "../../actions";
import { useDispatch, useSelector } from "react-redux";

import ReactStars from "react-rating-stars-component";
import basketReducer, { addItemToCart } from "../../reducers/basketReducer";
const Product = ({ id, img, title, info, stars, price, count }) => {
  const basket = useSelector((state) => state.basketReducer.basket);
  const dispatch = useDispatch();
  return (
    <div className="product">
      <div className="img-container">
        <img src={img} alt="" />
      </div>
      <div className="product-info">
        <h1>{title}</h1>
        <p>{info}</p>
        <ReactStars
          edit={false}
          value={stars}
          edit={false}
          count={5}
          size={22}
          activeColor="#00AC4E"
        />
        <div className="price">
          <p>{price} ₽/кг</p>
          <span>За 500гр.</span>
        </div>
        <button
          onClick={() =>
            dispatch(addToBasket({ id, img, title, info, stars, price, count }))
          }
        >
          {basket.some((el) => el.id === id)
            ? "в корзине"
            : "добавить в корзину"}
        </button>
      </div>
    </div>
  );
};

export default Product;
