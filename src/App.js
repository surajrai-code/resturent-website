// import logo from './logo.svg';
import { Fragment } from 'react';
import './App.css';
import Header from './components/Layout/Header';
import MealList from './components/Meals/MealList';
import MealsSummary from './components/Meals/MealsSummary';
function App() {
  return (
    <Fragment>
      <Header/>
      <MealsSummary/>
      <MealList></MealList>
    </Fragment>
  );
}

export default App;
