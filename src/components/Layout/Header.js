import {Fragment} from 'react';
 import MealsHeader from './../../assets/Meals.jpeg';
 import classes from './Header.module.css';
 import HeaderCartButton from './HeaderCartButton';
const Header=(props)=>{
return(
    <Fragment>
        <header className={classes.header}>
            <h1>REACTMeals</h1>
          <HeaderCartButton/>
        </header>
        <div className={classes['main-image']}>
            <img src={MealsHeader} alt='headerImage'/>
        </div>
    </Fragment>
)
}
export default Header