import React from 'react';
import {dataCategories} from "../components_data/dataCategories";
import CategoryItem from "./CategoryItem";
import {Link} from "react-router-dom";


function Categories() {
  const[categories, setCategories]=React.useState(dataCategories);


  return (
    <section className="categories">
      <h2>Categories</h2>
      <div className="line"></div>
      <div className="category__items">
        {categories.map((category) => {
          return (
            <CategoryItem category={category} key={category.id}></CategoryItem>
          );
        })}
      </div>
    </section>
  );
}

export default Categories;
