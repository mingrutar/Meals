import React, { useContext } from "react";

import orderContext from "../../store/order-context";

import Card from "../UI/Card/Card";
import CartItem from "./CartItem";

import styles from "./Cart.module.css";

const Cart = (props) => {
  const orderCtx = useContext(orderContext);

  const order = orderCtx.order();
  const jsonMenu = localStorage.getItem("menu");
  const menu = JSON.parse(jsonMenu);
  let total = 0;
  const orderDetails = Object.keys(order).map((mealId) => {
    const mid = menu[mealId]; // menu item detal
    total += mid.price * order[mealId]; // quantity;
    return {
      id: mealId,
      name: mid.name,
      price: mid.price,
      quantity: order[mealId],
    };
  });
  total = total.toFixed(2);
  const onUpdateHandler = (id, delta) => {
    // console.log(`onUpdateHandler: id=${id}, delta=${delta}`);
    orderCtx.onUpdate(id, delta);
  };
  return (
    <div className={styles.cart}>
      <ul className={styles.cart_items}>
        {orderDetails.map((mi) => (
          <li key={mi.id}>
            <Card>
              <CartItem
                id={mi.id}
                name={mi.name}
                price={mi.price}
                quantity={mi.quantity}
                onUpdate={onUpdateHandler}
              />
            </Card>
          </li>
        ))}
      </ul>
      <div className={styles.total}>
        <p>Total Amount</p>
        <p>{total}</p>
      </div>
      <div className={styles.actions}>
        <button className={styles.action} type="button" onClick={props.onClose}>
          Close
        </button>
        <button
          className={styles.action}
          type="button"
          onClick={() => props.onOrder(order)}
        >
          Order
        </button>
      </div>
    </div>
  );
};

export default Cart;
