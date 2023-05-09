import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import "./HomePage.css";
const HomePage = () => {
  const [products, setProducts] = useState([]);
  const getProducts = async (e) => {
    const response = await fetch(
      "http://localhost/Scandiweb-Junior-Developer-Test-Task/server/products",
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }
    );

    const responseJson = await response.json();
    console.log(responseJson);
    setProducts(responseJson);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <div className="navbar">
        <h1>Product List</h1>
        <div className="buttons-contianer">
          <a href="/addProductPage">
            <button className="button button-add">ADD</button>
          </a>
          <button className="button button-remove" id="delete-product-btn">
            MASS DELATE
          </button>
        </div>
      </div>
      {products.map((post) => {
        return (
          <div className="products-list">
            <div className="product">
              <input type="checkbox" className="delete-checkbox" />
              <p>{post.sku}</p>
              <p>{post.name}</p>
              <p>{post.attribute}</p>
            </div>
          </div>
        );
      })}

      <footer className="foot">
        {" "}
        <p>Scandiweb Test assigment</p>
      </footer>
    </div>
  );
};

export default HomePage;
