import React from "react";
import "./CartPage.css";
import CartAbout from "./about/CartAbout";

export default function CartPage({ cartItems, onAdd, onDelete }) {
  const itemsSumPrice = cartItems.reduce((a,c)=> a + c.price * c.qty - Math.floor(c.qty / 3) * c.sale, 0);

  return (
    <div>
      <div class="about-wrapper-cart">
        <div class="cart-quantity-wrapper">In Cart<div class="cart-quantity">{cartItems.length}</div></div>
        <div class="cart-sumprice-wrapper">Total price<div class="cart-sumprice">${itemsSumPrice}</div></div>
        </div>
 

      <div class="products-wrapper">
        <CartAbout cartItems={cartItems} onDelete={onDelete} onAdd={onAdd} />
      </div>
    </div>
  );
}
