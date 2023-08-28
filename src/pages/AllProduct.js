import React from 'react';
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";
import styled from "styled-components";
import {dataRoses, dataBaskets, dataPaper, dataRibbons} from "../components_data/dataProducts.js";
import {GiRose} from "react-icons/gi";
import {BsFillEnvelopePaperHeartFill} from "react-icons/bs";
import {BsBasket2} from "react-icons/bs";
import { GiBowTieRibbon } from "react-icons/gi";
import {Link} from "react-router-dom";


function AllProduct() {
    const [roses, setRoses]=React.useState(dataRoses);
    const [baskets, setBaskets] = React.useState(dataBaskets);
    const [paper, setPaper] = React.useState(dataPaper);
const [ribbons, setRibbons] = React.useState(dataRibbons);



  return (
    <Wrapper>
      <Announcement></Announcement>
      <Navbar></Navbar>
      <Div>
        <section className="list">
          <div className="list__categories">
            <Link to="/products" className="category__link">All Products</Link>
            <Link to="/products" className="category__link"> <span><GiRose></GiRose></span>Roses</Link>
            <Link to="/products" className="category__link"><span><BsBasket2></BsBasket2></span>Baskets</Link>
            <Link to="/products" className="category__link"><span><BsFillEnvelopePaperHeartFill></BsFillEnvelopePaperHeartFill></span>Wrapping paper</Link>
            <Link to="/products" className="category__link"><span><GiBowTieRibbon></GiBowTieRibbon></span>Ribbons</Link>
          </div>
        </section>

        <section className="allProducts">
          <div className="roses category">
            <h2>
              <span>
                <GiRose style={{ fontSize: "3rem" }}></GiRose>
              </span>
              Roses
            </h2>
            <div className="line"></div>
            <div className="category__items">
              {dataRoses.map((rose) => {
                return (
                  <Link className="category__item" key={rose.id}>
                    <img src={rose.image} alt={rose.title}></img>
                    <h4>{rose.title}</h4>
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="Baskets category">
            <h2>
              <span>
                <BsBasket2 style={{ fontSize: "3rem" }}></BsBasket2>
              </span>
              Baskets
            </h2>
            <div className="line"></div>
            <div className="category__items">
              {dataBaskets.map((basket) => {
                return (
                  <Link className="category__item" key={basket.id}>
                    <img src={basket.image} alt={basket.title}></img>
                    <h4>{basket.title}</h4>
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="paper category">
            <h2>
              <span>
                <BsFillEnvelopePaperHeartFill
                  style={{ fontSize: "3rem" }}
                ></BsFillEnvelopePaperHeartFill>
              </span>{" "}
              Wrapping Paper
            </h2>
            <div className="line"></div>
            <div className="category__items">
              {dataPaper.map((paper) => {
                return (
                  <Link className="category__item" key={paper.id}>
                    <img src={paper.image} alt={paper.title}></img>
                    <h4>{paper.title}</h4>
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="ribbons category">
            <h2>
              <span>
                <GiBowTieRibbon style={{ fontSize: "3rem" }}></GiBowTieRibbon>
              </span>
              Ribbons
            </h2>
            <div className="line"></div>
            <div className="category__items">
              {dataRibbons.map((ribbon) => {
                return (
                  <Link className="category__item" key={ribbon.id}>
                    <img src={ribbon.image} alt={ribbon.title}></img>
                    <h4>{ribbon.title}</h4>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      </Div>

      <Footer></Footer>
    </Wrapper>
  );
}

const Wrapper = styled.section `
width: 100%;
height: 100%;
`;

const Div = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  border: 3px solid red;

  section.list {
    margin: 15rem 2rem 0;
    flex: 0.4;
    padding-left: 2rem;
  }

  div.list__categories a {
    display: block;
    font-size: 2.2rem;
    margin-bottom: 3rem;
    color: var(--text-color);
    letter-spacing: 0.15rem;
  }

  div.list__categories span {
    display: inline-block;
    margin-right: 1.2rem;
  }

  .allProducts {
    flex: 1.2;
    height: 100%;
  }

  div.category {
    margin: 2.5rem 0;
    width: 100%;
    height: 100%;
  }

  div.category h2 {
    text-align: center;
    background: transparent;
    color: var(--green-color2);
    display: flex;
    align-items: center;
    margin: 0 auto;
    text-shadow: L none;
    font-family: "Tangerine", cursive;
    font-size: 4.5rem;
    font-weight: bold;
  }

  div.line {
    height: 2.5px;
    width: 15rem;
    background: var(--heading-color);
    margin: 0.5rem auto 3rem;
    border-radius: 0.3rem;
  }

  div.category span {
    display: inline-block;
    margin-right: 1.5rem;
  }

  div.category__items {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-evenly;
    gap: 1rem;
  }

  a.category__item {
    width: 26rem;
    height: 24rem;
    display: flex;
    flex-direction: column;
    border-radius: 1rem;
    box-shadow: var(--shadowSmall);
    margin-bottom: 3rem;
  }

  a.category__item h4 {
    text-align: left;
    margin-top: 2rem;
    font-size: 1.85rem;
    color: var(--green-color2);
    letter-spacing: 0.12rem;
  }

  a.category__item img {
    width: 100%;
    height: 18rem;
  }


  @media (max-width: 800px) {
    flex-direction: column;
    section.list {
      height: 100%;
      background: none;
      padding: 2rem 3rem;
      margin: 0;
    }
  }
`;


export default AllProduct;
