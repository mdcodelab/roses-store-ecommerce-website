import React from "react";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useGlobalContext } from "../cartContext";
import { Link } from "react-router-dom";

function Cart() {
  const { cart } = useGlobalContext();

  return (
    <section className="cart-container">
      <Announcement />
      <Navbar />
      <div className="wrapper-cart">
        <h1 className="cart-title">Your bag</h1>
        <div className="wrapper-cart-top">
          <button className="top-btn">CONTINUE SHOPPING</button>
          <div className="top-texts">
            <Link to="/wish" className="top-text">
              Your wish list (0)
            </Link>
          </div>
          <button className="bottom-btn">CHECKOUT NOW</button>
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
            <span className="summary-item-text">Estimated shipping: </span>
            <span className="summary-item-price">$ 5.90</span>
          </div>
          <div className="summary-item">
            <span className="summary-item-text-total">Total: </span>
            <span className="summary-item-price">$ 40</span>
          </div>
          <button>CHECKOUT NOW</button>
        </div>
      </div>
      <Footer />
    </section>
  );
}

export default Cart;
