import React from 'react';
import Tilt from 'react-parallax-tilt';

function CategoryItem({category}) {
    const{id, image, title}=category;

  return (
<div className="category-container">
    <Tilt className="tilt" glareColor="white" options={{easing: "cubic-bezier(.03,.98,.52,.99)", perspective : "1000"}}>
    <div className=" category"> 
 
      <img src={image} alt={title}></img>

      <div className="info-category">
      <h2>{title}</h2>
      <button>SHOP NOW</button>
      
    
 </div>

   </div> 
   </Tilt>
</div>
  );
}

export default CategoryItem;
