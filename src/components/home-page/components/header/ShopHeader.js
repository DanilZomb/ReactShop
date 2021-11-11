import React from "react";
import "./ShopHeader.css";
import ImgLoop from "../../../../assets/icons/loup.svg";
import { Link } from "react-router-dom";
import { IoMdCart } from "react-icons/io";

export default function ShopHeader({ cartItems }) {
  return (
    <header class="container-fluid">
      <div class="col-auto header-wrapper-logo" style={{ maxWidth: "400px" }}>
        <Link to="/" style={{textDecoration:'none'}}>
          <logo class="header-logo-icon">Shopster</logo>
        </Link>
      </div>

      <div class="col-auto header-wrapper-input" style={{ maxWidth: "400px" }}>
        <label class="header-wrapper-label">
          <input
            type="text"
            placeholder="Search..."
            class="header-inpt"
            required
          />

          <button type="button" class="header-btn">
            <img src={ImgLoop} width="15" height="15" alt="btn-icon" />
          </button>
        </label>

        <div class="header-wrapper-cart">
          {cartItems.length === 0 ? (
            ""
          ) : (
            <div class="header-producs-in-cart-quantity">
              {cartItems.length}
            </div>
          )}
          <Link to="/cart" style={{textDecoration:'none'}}>
            <IoMdCart class="header-cart-icon" />
          </Link>
        </div>
      </div>
    </header>
  );
}
