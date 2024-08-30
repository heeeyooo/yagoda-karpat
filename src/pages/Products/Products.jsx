import { useState } from "react";
import Product from "../../components/Product/Product";
import { productsData } from "../../data/DataProducts";
import "./Products.css";

const Products = () => {
  const [search, setSearch] = useState("");

  return (
    <div className="products-container" id="section3">
      <h3 className="products-main-info">Our products</h3>
      <p className="products-info">
        We specialise in freshly frozen bilberry, lingonberry, plum, strawberry,
        sourcherry, rosehip and elderberry. All our products are grown and
        harvested exclusively in ecologically clean areas of Ukraine
      </p>
      <p className="filter-title">Filter</p>
      <input
        className="search-input"
        type="text"
        placeholder="Product"
        onChange={(e) => setSearch(e.target.value)}
      />
      {productsData
        .filter((item) => {
          return search.toLowerCase() === ""
            ? item
            : item.title.toLowerCase().startsWith(search.toLowerCase());
        })
        .map((product) => {
          return <Product product={product} key={product.id} />;
        })}
    </div>
  );
};

export default Products;
