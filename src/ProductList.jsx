import React from "react";
import Product from "./Product";

const products=[
    {id:1,name:'abc',desc:"lorem ipsum dolot",price:10},
    {id:2,name:'pqr',desc:"lorem ipsum dolot",price:20},
    {id:3,name:'xyz',desc:"lorem ipsum dolot",price:30},
];

function ProductList({addToCart})
{
    return(
        <div className="container">
            <h2>Products</h2>
            <div className="product-list">
                {products.map(product=>(
                    <Product key={product.id} product={product} addToCart={addToCart} />
                ))}
            </div>
        </div>
    );
}

export default ProductList;