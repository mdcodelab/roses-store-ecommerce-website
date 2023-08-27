import React from 'react'
import {data} from "../components_data/dataSlide"
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
//import { requirePropFactory } from '@mui/material';
//import { requirePropFactory } from '@mui/material';
import styled from "styled-components";


function Slider() {

  const[items, setItem]=React.useState(data);
  const[index, setIndex]=React.useState(0);

//this will run in 2 situation: when items OR index change
  React.useEffect (() => {
    if(index <0) {
      setIndex(data.length-1);
    }

    if(index > data.length-1) {
      setIndex(0);
    }
  }, [items, index])

  React.useEffect(() => {
    let slide =setInterval(()=> {
      setIndex(index+1)
    }, 8000);
    return () => clearInterval(slide);
  }, [index])


  return (
    <section className="slider-container">
    <div className="slider-banner">
    <div className="slider-wrapper">
        {items.map((item, itemIndex) => {
          const {id, image, name, title, text}=item;
          let position="nextSlide";

          if(itemIndex === index){
            position="activeSlide";
          }

          
          return <article key={id} className={position}>
            <div className="image-slider">
              <img src={image} alt={name}></img>
            </div>
              
            <div className="info-slider">
            <h1 className="slider-heading">{title}</h1>
              <p className="slider-paragraph">{text}</p>       
              <button>Show me</button>
            </div>
          </article>
        })}

        <div className="arrow left" onClick={() => setIndex(index-1)}>
      <ArrowLeftIcon style={{fontSize: "50px"}}></ArrowLeftIcon></div>

      <div className="arrow right" onClick={() => setIndex(index+1)}>
        <ArrowRightIcon style={{fontSize: "50px"}}></ArrowRightIcon></div>
      
    </div>

    </div>
  </section>
  )
}




export default Slider

