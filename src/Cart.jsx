import React from "react";
import CartItem from './CartItem';

const Cart=({cartItems,delFromCart})=>{
    return(
        <div className="container"> 
            <h2>Cart</h2>
            <div className="cart">
                {
                    cartItems.map((item,index)=>(
                    <CartItem key={index} item={item} delFromCart={delFromCart}/>
                    ))
                }
            </div>
        </div>
    );
};

export default Cart;