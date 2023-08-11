import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import {Badge} from '@mui/material';
import ShoppingCartOutlined from '@mui/icons-material/ShoppingCart';

function Navbar() {
  return (
    <section className="navbar-container">
      <div className="navbar-wrapper">
        <div className="left">
            <span className="language">EN </span>
            <div className="search-container">
                <input type="text" className="search"></input>
                <SearchIcon style={{color: "gray", fontSize: "18px"}} className="search-icon"></SearchIcon>
            </div>
        </div>
        <div className="center">
            <h1 className="logo">LoveRoses</h1>
        </div>
        <div className="right">
            <a href="#" className="menuItem">REGISTER</a>
            <a href="#" className="menuItem">SIGN IN</a>
            <div className="menuItem">
            <Badge badgeContent={4} color="primary"><ShoppingCartOutlined/></Badge>
            </div>
        </div>
      </div>
      </section>
  )
}

export default Navbar
