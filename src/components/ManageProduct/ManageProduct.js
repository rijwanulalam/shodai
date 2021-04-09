import { Button } from "@material-ui/core";
import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../App";
import AdminNav from "../AdminNav/AdminNav";
import "./ManageProduct.css";

const ManageProduct = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://limitless-island-97162.herokuapp.com/getProducts")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  const deleteHandler = (e, id) => {
    fetch("https://limitless-island-97162.herokuapp.com/deleteProduct/" + id, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((result) => {
        if (result) {
          e.target.parentNode.parentNode.parentNode.style.display = "none";
        }
      });
  };
  return (
    <div>
      <AdminNav></AdminNav>
      <div className="product-list">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Product Name</th>
              <th scope="col">Weight</th>
              <th scope="col">Price</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          {products.map((product) => (
            <tbody>
              <tr>
                <th scope="row">{product.productName}</th>
                <td>{product.productWeight}</td>
                <td>{product.productPrice}</td>
                <td>
                  <Button
                    onClick={(e) => deleteHandler(e, product._id)}
                    variant="outlined"
                    color="secondary"
                  >
                    Delete
                  </Button>{" "}
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
};

export default ManageProduct;
