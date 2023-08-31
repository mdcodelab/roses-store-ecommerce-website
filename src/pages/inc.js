<section className="allProducts">
  <div className="category__items">
    {category.map((item) => {
      const { id, image, title } = item;
      return (
        <Link className="category__item" to={`/product/${id}`} key={id}>
          <img src={image} alt={title} />
          <h4>{title}</h4>
        </Link>
      );
    })}
  </div>
</section>;
