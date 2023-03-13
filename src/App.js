// import logo from './logo.svg';
import { Fragment } from 'react';
import './App.css';
import Header from './components/Layout/Header';
import MealsSummary from './components/Meals/MealsSummary';
function App() {
  return (
    <Fragment>
      <Header/>
      <MealsSummary/>
    </Fragment>
  );
}

export default App;
