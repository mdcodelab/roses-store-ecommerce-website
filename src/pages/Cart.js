import React from "react";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import { MdDeleteOutline } from "react-icons/md";
import { useGlobalContext } from "../cartContext";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import {BsFlower1} from "react-icons/bs";

function Cart() {
  const { cart, deleteFromCart, increaseCartQuantity, decreaseCartQuantity} = useGlobalContext();
  


  const {id}=useParams();
  function selectedItem () {
  let item = cart.find((item) => item.id === id)
  }

  const subtotal = cart.reduce((acc, cart) => {
    return acc + cart.price * cart.quantity;
  }, 0);

const estimatedShipping = 5.9
const estimatedDiscount=5.9
 
  return (
    <Wrapper className="cart__container">
      <Announcement />
      <Navbar />
      <div className="cart__wrapper">
        <h1 className="cart__title">
          <BsFlower1 className="icon__title"></BsFlower1> Your bag</h1>
        <div className="cart__wrapper__top">
          <Link className="top__btn" to="/products">
            CONTINUE SHOPPING
          </Link>
          <div className="top__texts">
            <Link to="/wish" className="top__text">
              Your wish list (0)
            </Link>
          </div>
          <Link className="bottom__btn" to="/pay">
            CHECKOUT NOW
          </Link>
        </div>

        <div className="cart__products__wrapper">
          <div className="cart__products">
            {cart.length === 0 ? (
              <div className="product__empty">
                <h2>Your cart is empty.</h2>
                <Link to="/products" className="empty">
                  Fill it!
                </Link>
              </div>
            ) : (
              cart.map((cartItem) => {
                const { id, title, category, image, price, quantity } = cartItem;
                return (
                  <React.Fragment key={id}>
                    <div className="product__item">
                      <Link to={`/products/${id}`} onClick={()=> selectedItem(id)}>
                        <img src={image} alt={title} />
                      </Link>
                      <div className="product__details">
                        <h2>{title}</h2>
                        <p>ID: {id}</p>
                        <p className="info__category">{category}</p>
                        <h3>${price}</h3>
                        <div className="product__buttons">
                        <div className="decrease" onClick={()=> decreaseCartQuantity(id)} >-</div>
                        <div className="item__quantity">{cartItem.quantity}</div>
                        <div className="increase" onClick={()=> increaseCartQuantity(id)}>+</div>
                      </div>
                      </div>
                      <div className="product__price">
                    <MdDeleteOutline className="delete__icon" onClick={()=> deleteFromCart(id)}/>
                        <p className="item__price">${price*quantity}</p>
                      </div>
          
                    </div>
                    <hr />
                  </React.Fragment>
                );
              })
            )}
          </div>

          <div className="cart__summary">
            <div className="cart__summary__content">
              <h1 className="summary__title">ORDER SUMMARY</h1>
              <hr></hr>
              <div className="summary__item">
                <span className="summary-item-text">Subtotal: </span>
                <span className="summary-item-price">$ {subtotal}</span>
              </div>
              <div className="summary__item">
                <span className="summary-item-text">Shipping discount: </span>
                <span className="summary-item-price">-$ 5.90</span>
              </div>
              <div className="summary__item">
                <span className="summary-item-text">Estimated shipping: </span>
                <span className="summary-item-price">$ 5.90</span>
              </div>
              <div className="summary__item">
                <span className="summary-item-text-total">Total: </span>
                <span className="summary-item-price">$ {subtotal + estimatedShipping - estimatedDiscount}</span>
              </div>
              <Link to="/pay" className="order">CHECKOUT NOW</Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
  height: 100%;

  div.cart__wrapper {
    border-top: 0.2rem solid var(--heading-color);
    border-bottom: 0.2rem solid var(--heading-color);
  }

  div.cart__wrapper h1.cart__title {
    margin: 2rem 0;
    font-size: 3rem;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    letter-spacing: 0.2rem;
    color: #fff;
    background: var(--heading-color);
    padding: 1rem 0;
  }

  .icon__title {
    display: block;
    margin-right: 1.5rem;
    color: var(--green-color1);
    transition: 0.5s ease;
  }

  .icon__title:hover {
    transform: rotate(180deg);
  }

  div.cart__wrapper__top {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    font-size: 1.5rem;
    padding: 2rem;
  }

  div.cart__wrapper__top a {
    display: block;
    padding: 0.7rem 1.5rem;
    border-radius: 0.5rem;
    text-align: center;
    color: #333;
    box-shadow: var(--shadowSmall);
  }

  div.cart__wrapper__top .top__btn {
    border: 0.15rem solid #555;
  }

  div.cart__wrapper__top .top__btn {
    border: 0.15rem solid var(--heading-color);
    color: var(--heading-color);
    transition: all 0.5s ease;
  }

  div.cart__wrapper__top .top__btn:hover {
    color: #fff;
    background: var(--green-color2);
  }

  div.cart__wrapper__top .bottom__btn {
    color: #fff;
    background: var(--heading-color);
    transition: all 0.5s ease;
  }

  div.cart__wrapper__top .bottom__btn:hover {
    color: var(--heading-color);
    background: #fff;
    border: 0.15rem solid var(--heading-color);
  }

  div.product__empty {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
  }

  div.product__empty h2 {
    color: var(--green-color2);
  }

  div.product__empty a.empty {
    display: block;
    margin: 2rem auto 0;
    font-size: 2rem;
    padding: 0.5rem 2rem;
    color: #fff;
    background: var(--green-color2);
    border-radius: 0.5rem;
    letter-spacing: 0.15rem;
    box-shadow: var(--shadowSmall);
    transition: all 0.5s ease;
  }

  div.product__empty a.empty:hover {
    background: var(--heading-color);
    transform: scale(1.05);
  }

  div.cart__products__wrapper {
    display: flex;
    flex-direction: column;
    min-height: 70vh;
  }

  div.cart__products,
  div.cart.summary {
    flex: 1;
  }

  div.product__item {
    display: flex;
    padding: 2rem 3rem;
    width: 85rem;
    margin: 0 auto;
    justify-content: space-between;
    align-items: center;
    box-shadow: var(--shadowSmall);
    border-radius: 1rem;
  }

  div.product__item img {
    width: 20rem;
    height: 20rem;
    border-radius: 0.5rem;
    box-shadow: var(--shadowSmall);
  }

  div.product__details p {
    font-size: 1.8rem;
    margin-bottom: 1rem;
  }

  div.product__details p.info__category {
    text-transform: capitalize;
  }

  div.product__details h2 {
    font-size: 2.5rem;
  }

  div.product__details h3 {
    font-size: 2rem;
  }

  .delete__icon {
    font-size: 2.5rem;
    cursor: pointer;
    color: red;
    display: block;
    margin-right: 3rem;
  }

  div.product__buttons {
    width: 8rem;
    padding: 0.5rem;
    margin-top: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 2rem;
    box-shadow: var(--shadowSmall);
    border-radius: 0.5rem;
    border: 0.1rem solid var(--heading-color);
  }

  div.decrease,
  div.increase {
    cursor: pointer;
  }

  p.item__price {
    font-size: 2.2rem;
    font-weight: bold;
  }

  div.product__price {
    display: flex;
  }

  div.cart__summary {
    width: 100%;
  }

  div.cart__summary__content {
    width: max-content;
    margin: 2rem auto;
    padding: 1.5rem 30rem;
    border: 0.2rem dotted var(--heading-color);
    border-radius: 1rem;
  }

  div.cart__summary__content h1 {
    font-size: 2.5rem;
    letter-spacing: 0.15rem;
    color: var(--green-color2);
  }

  div.summary__item {
    font-size: 1.8rem;
    display: flex;
    justify-content: space-between;
    margin-bottom: 2.2rem;
  }

  a.order {
    font-size: 2rem;
    padding: 0.5rem 2rem;
    text-align: center;
    color: #fff;
    background: var(--heading-color);
    border-radius: 0.5rem;
    box-shadow: var(--shadowSmall);
    display: block;
    letter-spacing: 0.2rem;
    transition: all 0.5s ease;
  }

  a.order:hover {
    color: var(--heading-color);
    background: #fff;
    border: 0.1rem solid var(--heading-color);
  }

  @media only screen and (max-width: 900px) {
    div.cart__wrapper__top {
      flex-direction: column;
    }
    div.cart__wrapper__top a {
      margin-bottom: 1.5rem;
    }
    div.product__item {
      width: 100%;
      display: grid;
      grid-template-rows: repeat(2, 1fr);
      grid-template-columns: repeat(2, 1fr);
      align-items: center;
      justify-items: center;
      gap: 2rem;
      height: 45vh;
    }
    div.cart__summary__content {
      padding: 1.5rem 20%;
    }
    div.cart__summary__content h1 {
      font-size: 2.2rem;
    }
  }

  @media only screen and (max-width: 500px) {
div.product__item {
  display: grid;
  grid-template-rows: repeat(3, 1fr);
grid-template-columns: 1fr;
height: 52vh;
align-items: center;
justify-items: center;
}
div.product__item img {
  width: 12rem;
  height: 12rem;
  padding: 0;
}
div.product__price{
margin-left: -10rem;
}
  }
`;

export default Cart;
