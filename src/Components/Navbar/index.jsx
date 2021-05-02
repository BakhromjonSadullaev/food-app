import React, { useState } from "react";
import "./style.scss";

import { Link } from "react-router-dom";

import { FiPhone } from "react-icons/fi";
import { BiUser } from "react-icons/bi";
import { RiShoppingCartLine } from "react-icons/ri";
import { GiFoodChain, GiTomato } from "react-icons/gi";
import { IoFastFoodOutline } from "react-icons/io5";

import { useSelector } from "react-redux";

const Navbar = () => {
  const basket = useSelector((state) => state.basketReducer.basket);
  const [showMenu, setShowMenu] = useState(false);
  console.log(basket.length);
  return (
    <div className="navbar">
      <div className="navbar-container">
        <Link to="/">
          <div className="nav-logo" style={{ cursor: "pointer" }}>
            <img src="/logo.png" alt="logo" />
          </div>
        </Link>
        <div className="nav-menu">
          <div
            onMouseLeave={() => setShowMenu(false)}
            onMouseEnter={() => setShowMenu(true)}
            className="menu"
          >
            <p>Меню</p>

            {showMenu && (
              <div className="menu-container">
                <h4 style={{ marginBottom: "5px" }}>Меню</h4>
                <div className="foods">
                  <GiFoodChain />
                  <span>Супы</span>
                </div>
                <div className="foods">
                  <GiFoodChain />
                  <span>Хачапури</span>
                </div>
                <div className="foods">
                  <IoFastFoodOutline />
                  <span>Холодные закуски</span>
                </div>
                <div className="foods">
                  <GiFoodChain />
                  <span>Хинкали</span>
                </div>
                <div className="foods">
                  <GiFoodChain />
                  <span>Шашлык</span>
                </div>
                <div className="foods">
                  <GiTomato />
                  <span>Соусы</span>
                </div>
                <div className="foods">
                  <GiFoodChain />
                  <span>Салаты</span>
                </div>
                <div className="foods">
                  <IoFastFoodOutline />
                  <span>Горячие блюда</span>
                </div>
              </div>
            )}
          </div>
          <p style={{ cursor: "pointer" }}>Доставка</p>
          <p style={{ cursor: "pointer" }}>Оплата</p>
          <p style={{ cursor: "pointer" }}>Бронь стола</p>
          <div className="phone" style={{ cursor: "pointer" }}>
            <span>
              <FiPhone
                style={{
                  color: "green",
                  fontSize: "22px",
                  marginRight: "10px",
                }}
              />
            </span>{" "}
            <p>+7 (831) 282-60-00</p>
          </div>
        </div>
        <div className="user-cart">
          <BiUser style={{ cursor: "pointer" }} />
          <Link to="/cart">
            <div className="cart">
              <RiShoppingCartLine style={{ cursor: "pointer" }} />
              <p>{basket.length}</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
