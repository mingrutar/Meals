import React from "react";

import styles from "./CartItem.module.css";

const CartItem = (props) => {
  return (
    <div className="styles.cart-item">
      <div>
        <h2>{props.name}</h2>
        <div className={styles.summary}>
          <div className={styles.price}>{props.price}</div>
          <div className={styles.amount}>{`x ${props.subTotal}`}</div>
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
