import React from "react";
import { useParams, Link } from "react-router-dom";
import { dataAllProducts } from "../components_data/dataAllProducts";
import Footer from "../components/Footer";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import { GiDaggerRose } from "react-icons/gi";

function ProductsByCategory() {
  const { category } = useParams();

  console.log("category", category);

  if (!category) {
    return <div>Invalid category</div>;
  }

  const filteredProducts = dataAllProducts.filter(
    (product) => product.category === category
  );

  if (filteredProducts.length === 0) {
    return <div>No products found for category: {category}</div>;
  }

  return (
    <section className="products__by__categories">
      <Announcement />
      <Navbar />
      <hr />
      <div className="my__products">
        <div className="products__heading" style={{display: "flex", width: "15rem"}}>
          <h1 className="category__title">
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </h1>
        </div>
        <div className="my__products__content">
          {filteredProducts.map((product) => (
            <Link
              to={`/products/${product.id}`}
              key={product.id}
              className="category__product"
            >
              <img src={product.image} alt={product.title} />
              <div className="prod__info">
                <h3>{product.title}</h3>
                <p>{product.description}</p>
                <span
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: "bold",
                    color: "#777",
                  }}
                >
                  Price: ${product.price}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <hr />
      <Footer />
    </section>
  );
}

export default ProductsByCategory;
