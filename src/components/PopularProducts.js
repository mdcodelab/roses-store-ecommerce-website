import React from 'react';
import {popularProducts} from "../components_data/dataProducts";
import Product from "./Product"

console.log(popularProducts);

function PopularProducts() {

  const[popular, setPopular]=React.useState(popularProducts);
  
  return (
    <section className="popularProducts-container">
      <h2>Popular Products</h2>
      <div className="line"></div>
      <div className="popularProducts__items">
        {popularProducts.map((product) => {
          const { id, image, title } = product;
          return <Product key={id} product={product}></Product>;
        })}
      </div>
    </section>
  );
}

export default PopularProducts;
