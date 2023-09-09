import React from 'react';
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import {MdDeleteOutline} from "react-icons/md";
import { useGlobalContext } from '../cartContext';
import { Link } from "react-router-dom";
import styled from "styled-components";

function Cart() {
  const { cart } = useGlobalContext();
  console.log(cart);

  return (
    <Wrapper className="cart-container">
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
  
        <div className="cart-products">
          <div className="products">
            {cart.map((cartItem) => {
              const{id, title, category, image, price}=cartItem;
              return (
                <>
                  <div className="product" key={id}>
                    <img src={image} alt={title}></img>
                    <div className="product-details">
                      <h2>{title}</h2>
                      <p>ID: {id}</p>
                      <p>{category}</p>
                      <h3>${price}</h3>
                    </div>
                    <MdDeleteOutline></MdDeleteOutline>
                    <div className="product-buttons">
                      <div>-</div>
                      <div>1</div>
                      <div>+</div>
                    </div>
                    <div className="product-price">
                      <p>${price}</p>
                    </div>
                  </div>
                  <hr></hr>
                </>
              );
            })}
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
      </div>
      <Footer />
    </Wrapper>
  );
}

const Wrapper = styled.section`

`;

export default Cart;
