import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import {Badge} from '@mui/material';
import ShoppingCartOutlined from '@mui/icons-material/ShoppingCart';
import styled from "styled-components";


function Navbar() {
  return (
    <Wrapper className="navbar-container">
    <h1 className="logo-bis">Love Roses</h1>
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
      </Wrapper>
  )
}

const Wrapper = styled.section`
  height: 8rem;
  

  div.navbar-wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 2rem;
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

  div.search-container {
    border: 1px solid rgba(136, 8, 8, 1);
    border-radius: 0.3rem;
    display: flex;
    align-items: center;
    margin-left: 2.5rem;
    padding: 0.5rem;
  }

  input.search {
    border: none;
    outline: none;
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
      font-size: 1.2rem;
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
