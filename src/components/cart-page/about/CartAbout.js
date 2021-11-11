import React from "react";
import "./CartAbout.css";
import CartButtons from "./components/CartButtons";

export default function CartAbout({ cartItems, onAdd, onDelete }) {
 
  return (
    <div>
      {cartItems.length === 0 && <div>Cart is empty</div>}
      {cartItems.map((item) => (
        <div class="product-wrapper-cart" key={item.id}>
          <img src={item.img} alt={item.name} class="product-img-cart" />
          <div class="products-wrapper-cart-inf">
            <h3 class="product-name-cart">{item.name}</h3>
            <p class="product-information-cart">{item.information}</p>
            <p class="product-weight-cart">{item.qty + " kilo"}</p>

            <div class="product-wrapper-btns">
              <div class="product-price">
                ${ item.qty <= item.qty % 3 ? item.price * item.qty : item.price * item.qty - Math.floor(item.qty / 3) * item.sale + item.saleInf} 
              </div>

              <CartButtons item={item} onAdd={onAdd} onDelete={onDelete} />
              
            </div>
          </div>
        </div>

      ))}
    </div>
  );
}
