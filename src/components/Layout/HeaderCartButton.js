import React,{useContext} from 'react';
import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css'
import CartContext from '../Cart/CartContext';
const HeaderCartButton=(props)=>{
    const cartcontext1 = useContext(CartContext);
    let quantity = 0;
    cartcontext1.items.forEach(item => {
      quantity = quantity + Number(item.quantity);
    });
    return(
        <button className={classes.button} onClick={props.onClick}>
            <sapn className={classes.icon}>
            <CartIcon />
            </sapn>
            <span>Your Cart</span>
            <sapn className={classes.badge}>
            {quantity}
            </sapn>
           
                
            
        </button>
    )
}
export default HeaderCartButton;