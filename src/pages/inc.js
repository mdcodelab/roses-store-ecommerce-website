// ...

function AllProduct() {
  // ... (alte stări)

  const [search, setSearch] = React.useState("");
  const [filteredData, setFilteredData] = React.useState(allData);

  React.useEffect(() => {
    setFilteredData(
      allData.filter((product) =>
        product.title.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, allData]);

  const handleInputChange = (event) => {
    setSearch(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <Wrapper>
      {/* ... restul componentelor */}

      <div className="products__wrapper">
        <section className="list">
          <div className="list__categories">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="...Search by title"
                className="form-input"
                value={search}
                onChange={handleInputChange} // Ascultă schimbările din input
              />
              <button className="form-button">
                <SendIcon className="icon-button"></SendIcon>
              </button>
            </form>
            {/* ... restul butoanelor */}
          </div>
        </section>

        <section className="allProducts">
          <h3 className="number">{filteredData.length} products.</h3>
          <div className="category__items">
            {filteredData.map((item) => {
              // ... restul implementării
            })}
          </div>
        </section>
      </div>

      {/* ... restul componentelor */}
    </Wrapper>
  );
}

// ...
