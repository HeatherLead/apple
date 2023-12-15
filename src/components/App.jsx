import React, { useState, useEffect } from "react";
import LandingPage from "./LandingPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Market from "./Market";
import ErrorPage from "./ErrorPage";
import Iphones from "./Iphones";
import Airpods from "./Airpods";
import Mackbooks from "./Mackbooks";
import Ipad from "./Ipad";
import Mac from "./Mac";
import MacDisplay from "./MacDisplay";
import ProductPage from "./ProductPage";
import { CartContext } from "./ProductPage";

function App() {
  const [cartItem, setCartItem] = useState([]);
  const addToCart = (item) => {
    setCartItem([...cartItem, item]);
  };
  useEffect(() => {
    const json = localStorage.getItem("cartItem");
    const savedCart = JSON.parse(json);
    if (savedCart) {
      setCartItem(savedCart);
    }
  }, []);

  useEffect(() => {
    const json = JSON.stringify(cartItem);
    localStorage.setItem("cartItem", json);
  }, [cartItem]);

  return (
    <CartContext.Provider value={{ cartItem, addToCart, setCartItem }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element=<LandingPage /> errorElement=<ErrorPage /> />
          <Route path="/market/all" element={<Market />} />
          <Route path="/market/iphones" element={<Iphones />} />
          <Route path="/market/airpods" element={<Airpods />} />
          <Route path="/market/mackbooks" element={<Mackbooks />} />
          <Route path="/market/ipad" element={<Ipad />} />
          <Route path="/market/mac" element={<Mac />} />
          <Route path="/market/macDisplay" element={<MacDisplay />} />
          <Route path="/market/all/product/:id" element={<ProductPage />} />
        </Routes>
      </BrowserRouter>
    </CartContext.Provider>
  );
}

export default App;
