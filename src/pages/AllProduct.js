import React from 'react';
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";
import styled from "styled-components";
import {dataRoses} from "../components_data/dataProducts.js";
import { dataBaskets} from "../components_data/dataProducts.js";
import { dataPaper } from "../components_data/dataProducts.js";
import { dataRibbons } from "../components_data/dataProducts.js";
import {GiRose} from "react-icons/gi";
import {BsFillEnvelopePaperHeartFill} from "react-icons/bs";
import {BsBasket2} from "react-icons/bs";
import { GiBowTieRibbon } from "react-icons/gi";


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
        <section className="list"></section>

        <section className="allProducts">
          <div className="roses category">
            <h2>Roses</h2>
            <div className="line"></div>
            <div className="category__item">
              {dataRoses.map((rose) => {
                return (
                  <div>
                    <img src={rose.image}></img>
                    <h4>{rose.title}</h4>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="Baskets category">
            <h2>Baskets</h2>
            <div className="line"></div>
            <div className="category__item">
              {dataBaskets.map((basket) => {
                return (
                  <div>
                    <img src={basket.image}></img>
                    <h4>{basket.title}</h4>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="paper category">
            <h2>Paper</h2>
            <div className="line"></div>
            <div className="category__item">
              {dataPaper.map((paper) => {
                return (
                  <div>
                    <img src={paper.image}></img>
                    <h4>{paper.title}</h4>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="ribbons category">
            <h2>Ribbons</h2>
            <div className="line"></div>
            <div className="category__item">
              {dataRibbons.map((ribbon) => {
                return (
                  <div className="category__item">
                    <img src={ribbon.image}></img>
                    <h4>{ribbon.title}</h4>
                  </div>
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

const Div = styled.div `
width: 100%;
height: 100%;
display: flex;
align-items: center;
justify-content: center;
border: 3px solid red;

.list {
    flex: 0.5;
}

.allProducts {
    flex: 1.2;
    height: 100%;
}

img {
    width: 8rem;
    height: 4rem;
}
`;


export default AllProduct;
