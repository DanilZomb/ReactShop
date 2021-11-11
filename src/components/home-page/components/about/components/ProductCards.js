import React from "react";
import "./ProductCards.css";
import ProductCard from './components/ProductCard'

export default function ProductCards({ products,onAdd }) {
  return (
      <div class="about-wrapper">
        {products.map((product) =>(
           <ProductCard key={product.id} product={product} onAdd={onAdd}/>
        ))}
      </div>
  );
}
