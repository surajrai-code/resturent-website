// import logo from './logo.svg';
import React,{ Fragment ,useState} from 'react';
import './App.css';
import Header from './components/Layout/Header';
import MealList from './components/Meals/MealList';
import MealsSummary from './components/Meals/MealsSummary';
import Cart from './components/Cart/Cart';
const App=()=>{
  const [ShowCart,setShowCart]=useState();
  const ShowCartHandler=()=>{
    setShowCart(true);
  }
  const HideCartHandler=()=>{
    setShowCart(false);
  }
  return (
    <Fragment>
    {ShowCart && <Cart onClose={HideCartHandler}/>}
      <Header onShow={ShowCartHandler}/>
      <MealsSummary/>
      <MealList></MealList>
    </Fragment>
  );
}

export default App;
