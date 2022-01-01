import React from "react";
import styles from "./MealItem.module.css";

const MealItem = (props) => {
  return (
    <div className={styles.meal}>
      <h1>{props.name}</h1>
      <p className={styles.description}>{props.description}</p>
      <p className={styles.price}>{`${props.price}`}</p>
    </div>
  );
};
export default MealItem;
