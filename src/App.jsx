import React,{useState} from "react";
import ProductList from "./ProductList";
import Cart from "./Cart";
import './App.css';

function App() {

  const [cartItems,setCartItems]=useState([]);
  
  function addToCart(product){
    setCartItems([...cartItems,product]);
  }

  function delFromCart(productToRemove){
    setCartItems(cartItems.filter(item=>item!=productToRemove));
  }

  return (
    <>
      <h1>Shopping Cart</h1>
      <ProductList addToCart={addToCart}/>
      <Cart cartItems={cartItems} delFromCart={delFromCart}/>

    </>
  )
}

export default App
