import React from 'react';
import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css'
const HeaderCartButton=(props)=>{

    return(
        <button className={classes.button} onClick={props.onClick}>
            <sapn className={classes.icon}>
            <CartIcon />
            </sapn>
            Your Cart
            <sapn className={classes.badge}>
              0  
            </sapn>
            <sapn>
                
            </sapn>
        </button>
    )
}
export default HeaderCartButton;