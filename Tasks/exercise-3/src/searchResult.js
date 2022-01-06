import React from "react";
import styles from "./styles.module.css";

export default function searchResult(props) {
  return (
    <div className={styles.productList}>
      <div>
        <img src={`./images/${props.image}`} alt={"product"} />{" "}
      </div>
      <div className={styles.productName}> {props.productName} </div>
      <div className={styles.price}> {props.price} </div>
    </div>
  );
}
