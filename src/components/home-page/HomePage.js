import React from "react";
import "./HomePage.css";
import ShopAbout from "../home-page/components/about/ShopAbout";
import ShopFooter from "../home-page/components/footer/ShopFooter";


export default function HomePage({products,onAdd}) {
  return (
    <div>
      <ShopAbout products={products} onAdd={onAdd} />
      <ShopFooter />
    </div>
  );
}
