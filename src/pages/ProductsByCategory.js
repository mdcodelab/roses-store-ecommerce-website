import React from "react";
import { useParams, Link } from "react-router-dom";
import { dataAllProducts } from "../components_data/dataAllProducts";
import Footer from "../components/Footer";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import {styled} from "styled-components";



function ProductsByCategory() {
  const { category } = useParams();

  console.log("category", category);

  if (!category) {
    return <div>Invalid category</div>;
  }

  const filteredProducts = dataAllProducts.filter(
    (product) => product.category === category
  );

  
  if (filteredProducts.length === 0) {
    return <div>No products found for category: {category}</div>;
  }

  return (
    <div className="products">
    <Announcement></Announcement>
    <Navbar></Navbar>
      <div>
        {filteredProducts.map((product) => (
          <Link to = {`/products/${product.id}`} key={product.id}>
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
          </Link>
        ))}
      </div>
      <Footer></Footer>
    </div>
  );
}

export default ProductsByCategory;
