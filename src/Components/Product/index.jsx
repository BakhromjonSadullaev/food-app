import React, { useState, useEffect } from "react";
import "./style.scss";

import { addToBasket } from "../../actions";
import { useDispatch } from "react-redux";

import ReactStars from "react-rating-stars-component";
const Product = ({ id, img, title, info, stars, price, count }) => {
  const [disabled, setDisabled] = useState(false);
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
          disabled={disabled}
          onClick={() => (
            setDisabled(true),
            dispatch(addToBasket({ id, img, title, info, stars, price, count }))
          )}
        >
          {disabled ? "в корзине" : "добавить в корзину"}
        </button>
      </div>
    </div>
  );
};

export default Product;
