// import logo from './logo.svg';
import React, { useState } from "react";
import "./App.css";
import Header from "./components/Layout/Header";
import MealList from "./components/Meals/MealList";
import MealsSummary from "./components/Meals/MealsSummary";
import Cart from "./components/Cart/Cart";
import CartProvider from "./components/Cart/CartProvider";
const App = () => {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };
  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <MealsSummary />
      <MealList />
    </CartProvider>
  );
};

export default App;
