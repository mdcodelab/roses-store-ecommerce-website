import React from "react";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Newsletter from "../components/Newsletter";
import Products from "../components/PopularProducts";

function PopularProducts() {
  return (
    <section className="productList-container">
      <Navbar></Navbar>
      <Announcement></Announcement>
      <div className="filter-container">
        <h1 className="product-name">Roses</h1>

        <div className="filters">
          <form action="">
            <labeL>Select your favorite rose color:</labeL>
            <select className="rose-select">
              <option>Color</option>
              <option>White</option>
              <option>Yellow</option>
              <option>Orange</option>
              <option>Pink</option>
              <option>Red</option>
              <option>Violet</option>
              <option>Blue</option>
              <option>Green</option>
              <select>Multicolour</select>
            </select>
          </form>

          <form>
            <label>Sort products:</label>
            <select name="" id="">
              <option>Newest</option>
              <option>Price (asc)</option>
              <option>Price (desc)</option>
            </select>
          </form>
        </div>
      </div>

      <Products></Products>
      <Newsletter></Newsletter>
      <Footer></Footer>
    </section>
  );
}

export default PopularProducts;
