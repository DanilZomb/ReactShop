import React from "react";
import "./ShopAbout.css";
import ProductCards from "./components/ProductCards";

export default function ShopApp({products, onAdd}) {
  return (
    <main>
      <div class="about-wrapper-header">Products</div>
    
      <ProductCards products={products} onAdd={onAdd}/>
    </main>
  );
}
