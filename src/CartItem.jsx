import React,{useState} from "react";

const CartItem=({item,delFromCart})=>{

    const [quantity,setQuantity]=useState(1);

    function inc(){
        setQuantity(quantity+1);
    }

    function dec(){
        setQuantity(quantity-1);
    }

    return(
        <>
        {
            (quantity>0)?
            <div className="cart-item">
                <h4>{item.title}</h4>
                <p>${quantity*item.price}</p>
                <div>
                    <button onClick={inc}>+</button>
                    <p>{quantity}</p>
                    <button onClick={dec}>-</button>
                </div>
                <button onClick={()=>proCart(item)}>Remove from Cart</button>
            </div>
            :null
        }
        </>
    );
};

export default CartItem;