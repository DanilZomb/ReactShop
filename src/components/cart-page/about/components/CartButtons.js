import React from "react";
import "./CartButtons.css";
import { MdOutlineRemoveShoppingCart } from "react-icons/md";
import { HiPlus } from "react-icons/hi";

export default function CartButtons({ item, onAdd, onDelete }) {
  return (
    <div class="product-wrapper-cart-icons">
      <div onClick={() => onAdd(item)}>
        <HiPlus class="product-cart-quantity" />
      </div>
      <div class="product-wrapper-cart-delete" onClick={() => onDelete(item)}>
        <MdOutlineRemoveShoppingCart class="product-cart-delete" />
      </div>
    </div>
  );
}
