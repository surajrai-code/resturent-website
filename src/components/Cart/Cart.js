import React from 'react';
import classes from './Cart.module.css';
import Modal from '../UI/Modal';

const Cart=(props)=>{
 const CartItem=(<ul className={classes['cart-items']}>
 {[{id:'c1', name:'Sushi',amount: 2,price: 12.99}].map((item)=>(<li>{item.name}</li>))}
    </ul>) ;

    return(
        <Modal onClose={props.onClose}>
        {CartItem}
            <div className={classes.total}>
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