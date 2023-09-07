import React from 'react';
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import Newsletter from '../components/Newsletter';
import { requirePropFactory } from '@mui/material';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import {dataRoses, dataPaper, dataRibbons, dataBaskets} from "../components_data/dataProducts";

const allData={...dataRoses, ...dataPaper, ...dataRibbons, ...dataPaper};


function ProductPage() {
  return (
    <section className="productPage-container">
      <Navbar></Navbar>
      <Announcement></Announcement>
          <div className="productPage-wrapper">
            <div className="productPage-image-container">
              <img src={require("../images/roses/blue/blue_1.jpg")}></img>
            </div>

            <div className="productPage-info-container">
              <h1 className="product-title">Blue rose</h1>
              <p className="product-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, tempore.</p>
              <p className="price">$20</p>
              <div className="filter-color">
              <select>
                <option>Color</option>
                <option>Intense</option>
                <option value="">Light</option>
                <option>Whitish/Mixed</option>
                <option>Mixed</option>
              </select>
            </div>
            <div className="buttons-container">
                <div className="buttons-1">
                  <button className="remove"><RemoveIcon></RemoveIcon></button>
                  <span className="quantity">1</span>
                  <button className="add"><AddIcon></AddIcon></button>
                </div>
                <div className="buttons-2">
                  <button className="cart">ADD TO CART</button>
                </div>
            </div>
            </div>

          </div>

      <Newsletter></Newsletter>
      <Footer></Footer>
    </section>
  );
}

export default ProductPage;
