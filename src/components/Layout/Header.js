import {Fragment} from 'react';
 import MealsHeader from './../../assets/Meals.jpeg';
 import classes from './Header.module.css';
 import HeaderCartButton from './HeaderCartButton';
const Header=(props)=>{
return(
    <Fragment>
        <header className={classes.header}>
            <h1>REACT MEALS</h1>
          <HeaderCartButton onClick={props.onShowCart}/>
        </header>
        <div className={classes['main-image']}>
            <img src={MealsHeader} alt='headerImage'/>
        </div>
    </Fragment>
)
}
export default Header