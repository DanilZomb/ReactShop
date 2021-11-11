import React from "react";
import "./ProductCard.css";
import { MdAddShoppingCart } from "react-icons/md";

export default function ProductCard({product,onAdd}) {
  return (
    <div class="products-wrapper-card">
      <img
        src={product.img}
        alt={product.name}
        width="200"
        height="150"
        class="product-img"
      />
      <div class="products-wrapper-card-inf">
        <h3 class="product-name">{product.name}</h3>
        <p class="product-information">{product.information}</p>
        <p class="product-weight">{product.weight + "kilo"}</p>

        <div class="product-wrapper-btns">
          <div class="product-price">{"$" + product.price}</div>
          <div class="product-wrapper-add" onClick={()=>onAdd(product)}>
            <MdAddShoppingCart class="product-add" />
          </div>
        </div>
      </div>
    </div>
  );
}
