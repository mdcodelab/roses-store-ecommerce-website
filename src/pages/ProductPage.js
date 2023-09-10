import React from 'react';
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import Newsletter from '../components/Newsletter';
import { requirePropFactory } from '@mui/material';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import {useParams, Link} from "react-router-dom";
import {dataRoses, dataPaper, dataRibbons, dataBaskets} from "../components_data/dataProducts";
import { useGlobalContext } from '../cartContext';


function ProductPage() {
  const [number, setNumber]=React.useState(1);

  function addNumber () {
    setNumber(prevState => prevState +1);
  }

function decreaseNumber () {
if(number > 1) {
  setNumber(prevState => prevState -1);
}
}



  const allData=[...dataRoses, ...dataPaper, ...dataRibbons, ...dataPaper];
const {id}=useParams();



const product = allData.find((product) => product.id === Number(id));

const {addToCart}=useGlobalContext();
if(!product) {
  return <h2>Product not found!</h2>
}

  return (
    <section className="productPage-container">
      <Announcement></Announcement>
      <Navbar></Navbar>
          <div className="productPage-wrapper">
            <div className="productPage-image-container">
              <img src={product.image} alt={product.title}></img>
            </div>

            <div className="productPage-info-container">
              <h1 className="product-title">{product.title}</h1>
              <p className="product-description">{product.description}</p>
              <p className="price">${product.price}</p>
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
                  <button className="remove" onClick={()=> decreaseNumber()}><RemoveIcon></RemoveIcon></button>
                  <span className="quantity">{number}</span>
                  <button className="add" onClick={()=> addNumber()}><AddIcon></AddIcon></button>
                </div>
                <div className="buttons-2">
                  <Link to="/cart" className="cart" onClick={()=> addToCart(product, number)}>ADD TO CART</Link>
                  <p>OR</p>
                  <Link className="cart" to="/products">BACK TO PRODUCTS</Link>
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
