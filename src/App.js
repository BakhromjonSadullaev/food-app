import React from "react";
import Navbar from "./Components/Navbar/";
import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import HomeBanner from "./Components/HomeBanner";
import SliderMenu from "./Components/SliderMenu";
import Product from "./Components/Product";
import AllProducts from "./Components/AllProducts";
import Delivery from "./Components/Delivery";
import Cart from "./Components/Cart";
import Footer from "./Components/Footer";

function App() {
  const data = [
    {
      id: 1,
      img:
        "https://images.unsplash.com/photo-1525351326368-efbb5cb6814d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80.jpeg",
      title: "Голень Говядины",
      info:
        "Описание мраморной говядины, состоящее из нескольких преложений. Можно наполнить",
      stars: 4,
      price: 1010,
      count: 0,
    },
    {
      id: 2,
      img:
        "https://images.unsplash.com/photo-1509482560494-4126f8225994?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      title: "Голень Говядины",
      info:
        "Описание мраморной говядины, состоящее из нескольких преложений. Можно наполнить",
      stars: 4,
      price: 1020,
      count: 0,
    },
    {
      id: 3,
      img:
        "https://images.unsplash.com/photo-1514326640560-7d063ef2aed5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      title: "Голень Говядины",
      info:
        "Описание мраморной говядины, состоящее из нескольких преложений. Можно наполнить",
      stars: 4,
      price: 1030,
      count: 0,
    },
    {
      id: 4,
      img:
        "https://images.unsplash.com/photo-1546039907-7fa05f864c02?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      title: "Голень Говядины",
      info:
        "Описание мраморной говядины, состоящее из нескольких преложений. Можно наполнить",
      stars: 4,
      price: 1040,
      count: 0,
    },
    {
      id: 5,
      img:
        "https://images.unsplash.com/photo-1453824979084-c8fd42932378?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      title: "Голень Говядины",
      info:
        "Описание мраморной говядины, состоящее из нескольких преложений. Можно наполнить",
      stars: 4,
      price: 1050,
      count: 0,
    },
    {
      id: 6,
      img:
        "https://images.unsplash.com/photo-1587131791788-ec0cb04e0a52?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      title: "Голень Говядины",
      info:
        "Описание мраморной говядины, состоящее из нескольких преложений. Можно наполнить",
      stars: 4,
      price: 1060,
      count: 0,
    },
    {
      id: 7,
      img:
        "https://images.unsplash.com/photo-1561043433-9265f73e685f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      title: "Голень Говядины",
      info:
        "Описание мраморной говядины, состоящее из нескольких преложений. Можно наполнить",
      stars: 4,
      price: 1070,
      count: 0,
    },
    {
      id: 8,
      img:
        "https://images.unsplash.com/photo-1572448862527-d3c904757de6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      title: "Голень Говядины",
      info:
        "Описание мраморной говядины, состоящее из нескольких преложений. Можно наполнить",
      stars: 4,
      price: 1080,
      count: 0,
    },
    {
      id: 9,
      img:
        "https://images.unsplash.com/photo-1605851868183-7a4de52117fa?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      title: "Голень Говядины",
      info:
        "Описание мраморной говядины, состоящее из нескольких преложений. Можно наполнить",
      stars: 4,
      price: 1090,
      count: 0,
    },
    {
      id: 10,
      img:
        "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      title: "Голень Говядины",
      info:
        "Описание мраморной говядины, состоящее из нескольких преложений. Можно наполнить",
      stars: 4,
      price: 1100,
      count: 0,
    },

    {
      id: 11,
      img:
        "https://images.unsplash.com/photo-1583812323673-8adbcf5b2bf6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      title: "Голень Говядины",
      info:
        "Описание мраморной говядины, состоящее из нескольких преложений. Можно наполнить",
      stars: 4,
      price: 1110,
      count: 0,
    },
    {
      id: 12,
      img:
        "https://images.unsplash.com/photo-1585238342024-78d387f4a707?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      title: "Голень Говядины",
      info:
        "Описание мраморной говядины, состоящее из нескольких преложений. Можно наполнить",
      stars: 4,
      price: 1120,
      count: 0,
    },
  ];

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/cart">
            <Navbar />
            <Cart />
            <Footer />
          </Route>
          <Route path="/">
            <Navbar />
            <HomeBanner />
            <SliderMenu />
            <AllProducts data={data} />
            <Delivery />
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
