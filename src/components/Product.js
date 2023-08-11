import Search from '@mui/icons-material/Search';
import ShoppingCart from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteIcon from '@mui/icons-material/Favorite';
import React from 'react';



function Product({product}) {
  const {id, image, title}=product

  return (
    <div className="product-container">
        
          <div className="circle"></div>
        <div className="product-image">
          <img src={image} alt={title}></img>
        </div>
        
        <div className="product-info">
        <div className="product-icon"><ShoppingCart style={{fontSize: "2.5rem"}}></ShoppingCart></div>
          <div className="product-icon"><SearchIcon style={{fontSize: "2.5rem"}}></SearchIcon></div>
          <div className="product-icon"><FavoriteIcon style={{fontSize: "2.5rem"}}></FavoriteIcon></div>
        </div>

    </div>
  );
}

export default Product;
