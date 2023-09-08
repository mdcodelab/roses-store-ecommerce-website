import Search from '@mui/icons-material/Search';
import ShoppingCart from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteIcon from '@mui/icons-material/Favorite';
import React from 'react';
import {Link} from "react-router-dom";



function Product({product}) {
const {id, image, title}=product
  return (
    <div className="product-container">
      <div className="circle"></div>
      <div className="product-image">
        <img src={image} alt={title}></img>
      </div>

      <div className="product-info">
        <div className="product-icon">
          <Link to="/cart">
            <ShoppingCart
              style={{ fontSize: "2.5rem", color: "white" }} className="product=icon"
            ></ShoppingCart>
          </Link>
        </div>
        <div className="product-icon">
          <Link to="/products">
            <SearchIcon
              style={{ fontSize: "2.5rem", color: "white" }} className="product-icon"
            ></SearchIcon>
          </Link>
        </div>
        <div className="product-icon">
          <Link to="/wish"><FavoriteIcon style={{ fontSize: "2.5rem", color: "white" }} className="product-icon"></FavoriteIcon></Link></div>
      </div>
    </div>
  );
}

export default Product;
