import React from 'react';
import {popularProducts} from "../components_data/dataProducts";
import Product from "./Product"

console.log(popularProducts);

function Products() {

  const[popular, setPopular]=React.useState(popularProducts);
  
  return (
    <section className="products">
      {popularProducts.map(product => {
        const {id, image, title}=product;
        return <Product key={id} product={product}></Product>
      })}

    </section>
  );
}

export default Products;
