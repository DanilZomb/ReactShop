import React, { useState } from "react";
import "./App.css";
import HomePage from "./components/home-page/HomePage";
import CartPage from "./components/cart-page/CartPage";
import ShopHeader from "./components/home-page/components/header/ShopHeader";
import data from "./data";
import { Route, Routes } from "react-router-dom";

export default function App() {
  const { products } = data;
  const [cartItems, setCartItems] = useState([]);

  const onAdd = (product) => {
    const exist = cartItems.find((i) => i.id === product.id);
    if (exist) {
      setCartItems(cartItems.map((i) => i.id === product.id ? {...exist, qty: exist.qty + 1} : i));
      
    }else{
      setCartItems([...cartItems, {...product,qty:1} ])
     
    }
  };

  const onDelete = (product) =>{
    const exist = cartItems.find((i) => i.id === product.id);
    if(exist.qty === 1){
       setCartItems(cartItems.filter((i)=> i.id !== product.id))
    }else{
      setCartItems(cartItems.map ((i) => i.id === product.id ? {...exist, qty: exist.qty - 1} : i))
    }
  }

  return (
    <div className="App">
    <ShopHeader cartItems={cartItems}/>

      <Routes>
        <Route exact path="/" element={<HomePage products={products} cartItems={cartItems} onAdd={onAdd}/>} />
        <Route path="/cart" element={<CartPage  cartItems={cartItems} onAdd={onAdd} onDelete={onDelete}/>} />
      </Routes>
    </div>
  );
}
