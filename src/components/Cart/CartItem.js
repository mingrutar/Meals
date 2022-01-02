import React from "react";

import styles from "./CartItem.module.css";

const CartItem = (props) => {
  console.log(props.quantity);
  const quantity = "x " + props.quantity;
  return (
    <div className={styles.cart_item}>
      <div>
        <h2>{props.name}</h2>
        <div className={styles.summary}>
          <div className={styles.price}>{props.price}</div>
          <div className={styles.amount}>{quantity}</div>
        </div>
      </div>
      <div className={styles.actions}>
        <div
          className={styles.amount}
          onClick={() => props.onUpdate(props.id, -1)}
        >
          -
        </div>
        <div
          className={styles.amount}
          onClick={() => props.onUpdate(props.id, 1)}
        >
          +
        </div>
      </div>
    </div>
  );
};

export default CartItem;
