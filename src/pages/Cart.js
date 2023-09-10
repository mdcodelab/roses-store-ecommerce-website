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
  const { cart, deleteFromCart, productQuantity} = useGlobalContext();
  const[cartQuantity, setCartQuantity]=React.useState(productQuantity);

  function addCartQuantity () {
    setCartQuantity(prevState => prevState+1);
  }

  function decreaseCartQuantity () {
    if(cartQuantity > 1) {
      setCartQuantity(prevState => prevState-1);
    }
  }

  const {id}=useParams();
  function selectedItem () {
  let item = cart.find((item) => item.id === id)
  }

  return (
    <Wrapper className="cart__container">
      <Announcement />
      <Navbar />
      <div className="cart__wrapper">
        <h1 className="cart__title">
          {" "}
          <BsFlower1 className="icon__title"></BsFlower1> Your bag
        </h1>
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
                const { id, title, category, image, price } = cartItem;
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
                      </div>
                      <MdDeleteOutline className="delete__icon" onClick={()=> deleteFromCart(id)}/>
                      <div className="product__buttons">
                        <div className="decrease" onClick={() => decreaseCartQuantity()}>-</div>
                        <div className="item__quantity">{cartQuantity}</div>
                        <div className="increase" onClick={()=> addCartQuantity()}>+</div>
                      </div>
                      <div className="product__price">
                        <p className="item__price">${price*cartQuantity}</p>
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
              <div className="summary__item">
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
              <Link to="/pay">CHECKOUT NOW</Link>
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
    padding: 1rem;
  }

  div.cart__wrapper__top a {
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
    width: 80rem;
    margin: 0 auto;
    justify-content: space-between;
    align-items: center;
    border: 2px solid black;
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
  }

  div.product__buttons {
    width: 8rem;
    padding: 1rem;
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
`;

export default Cart;
