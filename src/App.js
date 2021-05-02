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
        "https://images.unsplash.com/photo-1525351326368-efbb5cb6814d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80.jpeg",
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
        "https://images.unsplash.com/photo-1525351326368-efbb5cb6814d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80.jpeg",
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
        "https://images.unsplash.com/photo-1525351326368-efbb5cb6814d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80.jpeg",
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
        "https://images.unsplash.com/photo-1525351326368-efbb5cb6814d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80.jpeg",
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
        "https://images.unsplash.com/photo-1525351326368-efbb5cb6814d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80.jpeg",
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
        "https://images.unsplash.com/photo-1525351326368-efbb5cb6814d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80.jpeg",
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
        "https://images.unsplash.com/photo-1525351326368-efbb5cb6814d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80.jpeg",
      title: "Голень Говядины",
      info:
        "Описание мраморной говядины, состоящее из нескольких преложений. Можно наполнить",
      stars: 4,
      price: 1080,
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
          </Route>
          <Route path="/">
            <Navbar />
            <HomeBanner />
            <SliderMenu />
            <AllProducts data={data} />
            <Delivery />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
