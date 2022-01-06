import axios from "axios";
import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";
import { useParams } from "react-router-dom";

function AdminView(props) {
  let { id } = useParams();
  const [newProductName, setNewProductName] = useState("");
  const [newProductPrice, setNewProductPrice] = useState("");

  function addNewProduct(event) {
    event.preventDefault();
    const productInfo = {
      newProductName,
      newProductPrice,
    };
    axios
      .post("http://localhost:3001/products", productInfo)
      .then((response) => {
        console.log(response);
        props.addNewProduct(newProductName, newProductPrice);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const deleteProductButton = (productId) => {
    axios.delete(`http://localhost:3001/products/${id}`).then((response) => {
      console.log(response);
    });
    props.deleteProduct(productId);
  };

  return (
    <div>
      <button className={styles.adminbutton} onClick={props.disableAdminMode}>
        Disable Admin Mode
      </button>
      <div className={styles.addnewProduct}>
        <div className={styles.addTitle}>Add new product</div>
        <div className={styles.newInput}>
          <div>
            Product Name{" "}
            <input
              type="text"
              onChange={(event) => setNewProductName(event.target.value)}
            />
          </div>
          <div>
            {" "}
            Price
            <input
              type="text"
              onChange={(event) => setNewProductPrice(event.target.value)}
            />
          </div>
          {/*             <div>
                  {" "}
                  Image 
                  <input type="file" />
                </div> */}
          <button onClick={addNewProduct}>Add product to the list</button>
        </div>
      </div>
      <h1>List of Products</h1>
      {props.products.map((product, index) => (
        <div key={index}>
          <button onClick={() => deleteProductButton(product.id)}>X</button>
          {product.productName}, {product.price}
        </div>
      ))}
    </div>
  );
}

export default AdminView;
