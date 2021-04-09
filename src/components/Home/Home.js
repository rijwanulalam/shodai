import React, { useEffect, useState } from "react";
import Search from "../Search/Search";
import Header from "../Header/Header";
import Product from "../Product/Product";
import "./Home.css";

const Home = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch("https://limitless-island-97162.herokuapp.com/getProducts")
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);
  return (
    <div>
      <Header></Header>
      <Search></Search>
      <div className="products-flex">
        {product.map((p) => (
          <Product p={p}></Product>
        ))}
      </div>
    </div>
  );
};

export default Home;
