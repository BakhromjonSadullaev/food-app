import React from "react";

import Product from "../Product/index";
import "./allProducts.scss";
const AllProducts = ({ data }) => {
  return (
    <div className="allProducts">
      <h1>Все товары</h1>
      <div className="products-container">
        {data.map(({ id, title, info, img, stars, price, count } = data) => (
          <Product
            id={id}
            title={title}
            img={img}
            stars={stars}
            price={price}
            info={info}
            count={count}
          />
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
