import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import AdminNav from "../AdminNav/AdminNav";
import "./AddProduct.css";

const AddProduct = () => {
  const { register, handleSubmit } = useForm();
  const [imageURL, setImageURL] = useState(null);

  const onSubmit = (data) => {
    const productData = {
      productName: data.productName,
      productWeight: data.productWeight,
      productPrice: data.productPrice,
      imageURL: imageURL,
    };
    console.log(productData);
    const url = `https://limitless-island-97162.herokuapp.com/products`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(productData),
    }).then((res) => console.log("server side response"));
  };
  const handleUpload = (event) => {
    const imageData = new FormData();
    imageData.set("key", "f024a4a3ada5624b1a35933d92e02b93");
    imageData.append("image", event.target.files[0]);
    axios
      .post("https://api.imgbb.com/1/upload", imageData)
      .then((res) => setImageURL(res.data.data.display_url))
      .catch((error) => console.log(error));
    console.log(imageURL);
  };
  return (
    <div className="admin-container">
      <AdminNav></AdminNav>
      <h2>Add Your Product</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          name="productName"
          placeholder="Product name"
          type="text"
          {...register("productName")}
        />
        <br />
        <br />
        <input
          name="productWeight"
          placeholder="Product weight"
          type="text"
          {...register("productWeight")}
        />
        <br />
        <br />
        <input
          name="productPrice"
          placeholder="Product price"
          type="text"
          {...register("productPrice")}
        />
        <br />
        <br />
        <p>Upload Your Product Photo</p>{" "}
        <input type="file" name="productPhoto" onChange={handleUpload} />
        <br />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
};

export default AddProduct;
