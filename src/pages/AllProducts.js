import React, { Suspense } from "react";
import { Img } from "react-image";
import { dataRoses_1 } from "../components_data/dataProducts.js";
import { dataBaskets } from "../components_data/dataProducts.js";
import { dataPaper } from "../components_data/dataProducts";
import { dataRibbons } from "../components_data/dataProducts.js";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { IoRoseOutline } from "react-icons/io";
import { BsBasket } from "react-icons/bs";
import { BsFillEnvelopePaperHeartFill } from "react-icons/bs";
import { GiBowTieRibbon } from "react-icons/gi";
import rose_1 from "../images/roses/red/red_1.jpg"


function AllProducts() {
  const [roses, setRoses] = React.useState(dataRoses_1);
  const [baskets, setBaskets] = React.useState(dataBaskets);
  const [paper, setPaper] = React.useState(dataPaper);
  const [ribbons, setRibbons] = React.useState(dataRibbons);

  return (
    <section className="all-products">
    <img src={rose_1}></img>
      <h1>All Products</h1>
      <article className="all-roses">
        {roses.map((rose, index) => {
          const { id, image, title } = rose;
          return (
            <div className="rose item" key={id}>
              <h2>{title}</h2>
              <img src={image} alt={title}></img>
            </div>
          );
        })}
      </article>

      <article className="all-baskets"></article>

      <article className="all-paper"></article>

      <article className="all-ribbons">
        {ribbons.map((ribbon) => {
          const { id, image, title } = ribbon;
          return (
            <div className="ribbon item" key={id}>
              <h2>{title}</h2>
              <img src={image} alt={title}></img>
            </div>
          );
        })}
      </article>
    </section>
  );
}



export default AllProducts;
