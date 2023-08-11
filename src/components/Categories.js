import React from 'react';
import {dataCategories} from "../components_data/dataCategories";
import CategoryItem from "./CategoryItem";



function Categories() {
  const[categories, setCategories]=React.useState(dataCategories);


  return (
    <section className="categories">
    {categories.map((category) => {
      return <CategoryItem category={category} key={category.id}></CategoryItem>
    })}
      
    </section>
  );
}

export default Categories;
