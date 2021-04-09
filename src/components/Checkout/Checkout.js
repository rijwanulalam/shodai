import { Button } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import AdminNav from "../AdminNav/AdminNav";
import "./Checkout.css";

const Checkout = () => {
  const { pId } = useParams();
  console.log("pId", pId);
  const [newProduct, setNewProduct] = useState({});
  useEffect(() => {
    fetch(`https://limitless-island-97162.herokuapp.com/checkout/${pId}`)
      .then((res) => res.json())
      .then((data) => setNewProduct(data));
  }, [pId]);
  return (
    <div>
      <AdminNav></AdminNav>
      <div className="checkout-section">
        <br></br>
        <h1>Checkout</h1>
        <br></br>
        <div className="checkout-list">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Serial</th>
                <th scope="col">Product</th>
                <th scope="col">Quantity</th>
                <th scope="col">Price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>{newProduct.productName}</td>
                <td>1</td>
                <td>{newProduct.productPrice}</td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td></td>
                <td>Total</td>
                <td></td>
                <td>{newProduct.productPrice}</td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td>
                  {" "}
                  <Button variant="outlined" color="secondary">
                    Checkout
                  </Button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
