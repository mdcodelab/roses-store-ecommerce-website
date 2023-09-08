import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import {Badge} from '@mui/material';
import ShoppingCartOutlined from '@mui/icons-material/ShoppingCart';
import styled from "styled-components";
import {Link} from "react-router-dom";


function Navbar() {
  return (
    <Wrapper className="navbar-container">
      <h1 className="logo-bis">Love Roses</h1>
      <div className="navbar-wrapper">
        <div className="left">
          <span className="language">EN </span>
          <div className="menu-links">
            <Link to="/" className="menuItem">
              HOME
            </Link>
            <Link to="/products" className="menuItem">
              PRODUCTS
            </Link>
          </div>
        </div>
        <div className="center">
          <h1 className="logo">LoveRoses</h1>
        </div>
        <div className="right">
          <Link to="/register" className="menuItem">
            REGISTER
          </Link>
          <Link to="/login" className="menuItem">
            LOGIN
          </Link>
          <div className="menuItem">
            <Link to="/cart"><Badge badgeContent={4} color="primary"><ShoppingCartOutlined /></Badge></Link>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  height: 8rem;
  

  div.navbar-wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 1rem;
    margin-top: 2.5rem;
  }

  h1.logo-bis {
    display: none;
  }

  .left,
  .center,
  .right {
    flex: 1;
  }

  /* left*/
  .left {
    display: flex;
    align-items: center;
  }

  span.language {
    font-size: 1.4rem;
    cursor: pointer;
    color: rgba(136, 8, 8, 1);
  }

  div.menu-links {
    display: flex;
    align-items: center;
    margin-left: 2.5rem;
    padding: 0.5rem;
  }

  a {
    letter-spacing: 0.08rem; 
    transition: all 0.5s ease;

   }

   a:hover {
    letter-spacing: 0.12rem;
   }

  /*center */
  h1.logo, h1.logo-bis {
    font-weight: 600;
    text-align: center;
    color: rgba(136, 8, 8, 1);
    font-family: "Tangerine", cursive;
    font-weight: 700;
    font-size: 6rem;
    cursor: pointer;
  }

  /* right*/
  div.menuItem,
  a.menuItem {
    font-size: 1.4rem;
    cursor: pointer;
    margin-left: 2.5rem;
  }

  div.right {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    color: rgba(136, 8, 8, 1);
  }

  @media only screen and (max-width: 826px) {
    html {
      font-size: 50%;
    }
  }

  @media only screen and (max-width: 708px) {
    html {
      font-size: 35%;
    }

    h1.logo {
      display: none;
    }
  }

  @media only screen and (max-width: 696px) {
    div.navbar-wrapper {
      padding: 1rem 2rem;
    }
    div.search-container {
      margin: 0;
    }

    a.menuItem,
    div.menuItem {
      margin-left: 0;
      margin-right: 1rem;
    }
    span.language {
      display: none;
    }

    h1.logo {
      text-align: center;
      margin-left: 10%;
    }
    input.search {
      width: 10rem;
    }
    div.right {
      flex: 2;
    }
  }
  @media only screen and (max-width: 519px) {
    h1.logo {
      margin: 10% 0;
    }
    div.search-container {
      width: 15rem;
      height: 3rem;
    }
    a.menuItem {
      letter-spacing: 0.04rem;
      font-size: 1.2rem;

    }
    input.search {
      width: 100%;
    }
  }

  @media only screen and (max-width: 401px) {
    h1.logo {
      font-size: 3rem;
      margin: 2% 0;
    }
    a.menuItem,
    div.enuItem {
      white-space: nowrap;
    }
    div.navbar-wrapper {
      padding: 1rem;
    }

    h1.logo {
      margin: 5% 0;
    }
  }
`;

export default Navbar
