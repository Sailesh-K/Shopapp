import React from "react";

const Product=({product,addToCart})=>{
    return(
        <div className="product-card">
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            <p>{product.desc}</p>
            <button onClick={()=>addToCart(product)}>Add to Cart</button><br />
        </div>
    );
};

export default Product;