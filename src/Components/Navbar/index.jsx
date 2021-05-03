import React, { useState } from "react";
import "./style.scss";

import { Link } from "react-router-dom";

import { FiPhone } from "react-icons/fi";
import { BiUser } from "react-icons/bi";
import { CgClose } from "react-icons/cg";
import { RiShoppingCartLine } from "react-icons/ri";
import { GiFoodChain, GiTomato } from "react-icons/gi";
import { IoFastFoodOutline } from "react-icons/io5";

import { useSelector } from "react-redux";
import { totalCount } from "../../reducers/basketReducer";

const Navbar = () => {
  const basket = useSelector((state) => state.basketReducer.basket);
  const count = totalCount(basket);
  const [showMenu, setShowMenu] = useState(false);
  const [open, setOpen] = useState(false);
  const [showUserAuth, setShowUserAuth] = useState(false);

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
          <BiUser
            onClick={() => setShowUserAuth(true)}
            style={{ cursor: "pointer" }}
          />
          <Link to="/cart">
            <div className="cart">
              <RiShoppingCartLine style={{ cursor: "pointer" }} />
              {count !== 0 && <p className="nav-count">{count}</p>}
            </div>
          </Link>
        </div>
      </div>
      {showUserAuth && (
        <div className="modal">
          <div className="modal-container">
            <button
              className="modal-close"
              onClick={() => setShowUserAuth(false)}
            >
              <CgClose />
            </button>
            <BiUser
              style={{
                fontSize: "2rem",
                marginTop: "1.5rem",
                marginBottom: "1rem",
                color: "lightgray",
              }}
            />
            <h1
              style={{
                marginBottom: "1rem",
                fontWeight: "400",
                fontSize: "25px",
              }}
            >
              Регистрация
            </h1>
            <input placeholder="Телефон" type="tel" />
            <input placeholder="Пароль" type="password" />
            <input placeholder="Подтвердите пароль" type="password" />
            <form>
              <input style={{ marginLeft: "-4rem" }} type="checkbox" />
              <span style={{ marginLeft: "-4rem" }}>
                Хочу получать выгодные предложения от магазина
              </span>
            </form>
            <button className="register">Зарегистрироваться</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
