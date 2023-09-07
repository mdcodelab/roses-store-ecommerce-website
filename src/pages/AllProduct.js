import React from "react";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";
import styled from "styled-components";
import {
  dataRoses,
  dataBaskets,
  dataPaper,
  dataRibbons,
} from "../components_data/dataProducts.js";
import { GiRose } from "react-icons/gi";
import { BsFillEnvelopePaperHeartFill } from "react-icons/bs";
import { BsBasket2 } from "react-icons/bs";
import { GiBowTieRibbon } from "react-icons/gi";
import {BsFlower1} from "react-icons/bs";
import { Link } from "react-router-dom";

function AllProduct() {
  const [roses, setRoses] = React.useState(dataRoses);
  const [baskets, setBaskets] = React.useState(dataBaskets);
  const [paper, setPaper] = React.useState(dataPaper);
  const [ribbons, setRibbons] = React.useState(dataRibbons);

  const allData = [...dataRoses, ...dataBaskets, ...dataPaper, ...dataRibbons];

  const [category, setCategory] = React.useState(allData);

  

  return (
    <Wrapper>
      <Announcement />
      <Navbar />
      <div className="products__wrapper">
        <section className="list">
          <div className="list__categories">
            <button type="button" onClick={() => setCategory(allData)}>
              <BsFlower1 className="icon"></BsFlower1> All Products
            </button>
            <button type="button" onClick={() => setCategory(dataRoses)}>
              <GiRose className="icon"></GiRose> Roses
            </button>
            <button type="button" onClick={() => setCategory(dataBaskets)}>
              <BsBasket2 className="icon"></BsBasket2> Baskets
            </button>
            <button type="button" onClick={() => setCategory(dataPaper)}>
              <BsFillEnvelopePaperHeartFill className="icon"></BsFillEnvelopePaperHeartFill>
              Wrapping Paper
            </button>
            <button type="button" onClick={() => setCategory(dataRibbons)}>
              <GiBowTieRibbon className="icon"></GiBowTieRibbon> Ribbons
            </button>
          </div>
        </section>

        <section className="allProducts">
        <h3 className="number">{category.length} products.</h3>
          <div className="category__items">
            {category.map((item) => {
                const { id, image, title, price} = item;
                return (
                  <div className="category__item" key={id}>
                    <Link className="category__item" to={`/product/${id}`}>
                      <img src={image} alt={title} />
                      <div>
                        <p>{title}</p>
                        <p>${price}</p>
                      </div>
                    </Link>
                  </div>
                );
              })}
          </div>
        </section>
      </div>

      <Footer />
    </Wrapper>
  );
}

   
  const Wrapper = styled.section`
    width: 100%;
    height: 100%;

    div.products__wrapper {
      display: flex;
      width: 100%;
      height: 100%;
      border-top: 3px solid var(--heading-color);
      border-bottom: 3px solid var(--heading-color);
    }

    .number {
      text-align: right;
      font-size: 2rem;
      margin-bottom: 1rem;
      margin-right: 1rem;
      color: var(--heading-color);


    }

    section.list {
      flex: 0.4;
      padding-left: 2rem;
      padding-top: 10rem;
    }

    div.list__categories button {
      display: block;
      width: 20rem;
      height: 3.5rem;
      margin: 0 auto;
      margin-bottom: 2.5rem;
      cursor: pointer;
      font-size: 2rem;
      border-radius: 0.5rem;
      border: 0.1rem solid var(--heading-color);
      color: #fff;
      background: var(--heading-color);
      letter-spacing: 0.1rem;
      transition: all 0.7s ease-in-out;
    }

    div.list__categories button:hover {
      transform: translateX(3rem);
    }

    div.list__categories .icon {
      display: inline-block;
      margin-right: 1.5rem;
      font-size: 2.5rem;
      color: var(--green-color1);
      transition: all 0.5s ease;
    }

    div.list__categories .icon:hover {
      transform: rotate(1800deg);
    }

    section.allProducts {
      padding-top: 5rem;
      flex: 1.2;
      width: 100%;
      height: 100%;
      box-shadow: var(--shadowSmall);
    }

    div.category__items {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-evenly;
      gap: 1rem;
    }

    div.category__items h3 {
      font-size: 2rem;
      color: var(green-color1);
      margin-bottom: 1rem;
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

    a.category__item div {
      text-align: left;
      margin-top: 2rem;
      font-size: 1.85rem;
      color: var(--green-color2);
      letter-spacing: 0.12rem;
      display: flex;
      width: 100%;
    justify-content: space-evenly;
    }

    a.category__item img {
      width: 100%;
      height: 18rem;
      border-radius: 1rem 1rem 0 0;
    }

    @media (max-width: 800px) {
      div.products__wrapper {
        flex-direction: column;
      }
      section.list button {
        margin: 0 auto 2.5rem;
      }
    }
  `;





export default AllProduct;
