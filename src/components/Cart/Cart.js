import React,{useContext} from 'react';
import classes from './Cart.module.css';
import Modal from '../UI/Modal';
import CartContext from './CartContext';

const Cart=(props)=>{
    const cartcntx= useContext(CartContext)
 
    const CartItem = (
      <ul className={classes["cart-items"]}>
        { cartcntx.items.map((item) => (
          <li>Name:{item.name} Price:{item.price}  Quantity:{item.quantity}</li>
        ))}
      </ul>
    );

    return(
        <Modal onClose={props.onClose}>
        
            <div className={classes.total}>
            {CartItem}
                <span>
                    TOTAL AMOUNT
                </span>
                <span>
                    35.5
                </span>
            </div>
            <div className={classes.action}>
            <div><button className={classes['button--alt']} onClick={props.onClose}>Close</button></div>
            <div><button className={classes.button}>Order</button></div>

            </div>
        </Modal>
    )

}
export default Cart;