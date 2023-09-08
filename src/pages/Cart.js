import React from 'react';
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import { green } from '@mui/material/colors';
import { filledInputClasses, requirePropFactory, SpeedDialIcon } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';


function Cart() {
const props = {
  type: "filled"
}
  
let styles = {
  background: props.type === "filled" ? "rgba(136, 8, 8, 1)" : "white",
  border: props.type === "filled" ? "none" : "rgba(136, 8, 8, 1)",
  color: props.type === "filled" ? "white" : "rgba(136, 8, 8, 1)"
}

    
  return (
    <section className="cart-container">
    <Announcement></Announcement>
    <Navbar></Navbar>
      <div className="wrapper-cart">
        <h1 className="cart-title">Your bag</h1>
        <div className="wrapper-cart-top">
            <button className="top-btn">CONTINUE SHOPPING</button>
            <div className="top-texts">
                <a href="#"className="top-text">Shopping Bag (2)</a>
                <a href="#" className="top-text">Your wish list (0)</a>
            </div>
            <button props={props.type} style={styles} className="bottom-btn">CHECKOUT NOW</button>
        </div>
        
        <div className="wrapper-cart-bottom">
            <div className="info">Info
                <div className="product">
                  <div className="product-detail">
                    
                      <img src={require("../images/background/cart_1.jpg")}></img>
                      <div className="details">
                    <p className="productname"><b>Product:</b> Rose</p>
                    <p className="productid"><b>ID:</b> 225627</p>
                    <p className="produCtcolor" color="red"><b>Color: </b> Red</p>
                  </div>
                  </div>
                  <div className="price-detail">
                  
                  <div className="product-amount-container">
                  <AddIcon style={{fontSize: "25px"}} className="add-icon"></AddIcon>
                  <div className="product-amount">
                    <p className="product-quantity">2</p>
                    <p className="product-price-price">$ 20</p>
                  </div>
                  <RemoveIcon style={{fontSize: "25px"}} className="remove-icon"></RemoveIcon>

                  </div>
                  </div>
                </div>

                <hr></hr>
                <div className="product">
                  <div className="product-detail">
                    
                      <img src={require("../images/background/cart_2.jpg")}></img>
                      <div className="details">
                    <p className="productname"><b>Product:</b> Rose</p>
                    <p className="productid"><b>ID:</b> 225627</p>
                    <p className="produCtcolor" color="red"><b>Color: </b> Red</p>
                  </div>
                  </div>
                  <div className="price-detail">
                  
                  <div className="product-amount-container">
                  <AddIcon style={{fontSize: "25px"}} className="add-icon"></AddIcon>
                  <div className="product-amount">
                    <p className="product-quantity">2</p>
                    <p className="product-price-price">$ 20</p>
                  </div>
                  <RemoveIcon style={{fontSize: "25px"}} className="remove-icon"></RemoveIcon>

                  </div>
                  </div>
                </div>
            </div>

            <div className="summary">
            <h1 className="summary-title">ORDER SUMMARY</h1>
            
            <div className="summary-item">
              <span className="summary-item-text">Subtotal: </span>
              <span className="summary-item-price">$ 40</span>
            </div>

            <div className="summary-item">
              <span className="summary-item-text">Shipping discount: </span>
              <span className="summary-item-price">-$ 5.90</span>
            </div>

            <div className="summary-item">
              <span className="summary-item-text">Eastimated shipping: </span>
              <span className="summary-item-price">$ 5.90</span>
            </div>

            <div className="summary-item">
              <span className="summary-item-text-total" type="total">Total: </span>
              <span className="summary-item-price">$ 40</span>
            </div>
            <button>CHECKOUT NOW</button>
            </div>
        </div>
      </div>
    <Footer></Footer>
    </section>
  );
}

export default Cart;
