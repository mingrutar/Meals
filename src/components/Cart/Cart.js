import React, { useContext } from "react";

import orderContext from "../../store/order-context";

import Card from "../UI/Card/Card";
import CartItem from "./CartItem";

import styles from "./Cart.module.css";

const Cart = (props) => {
  const orderCtx = useContext(orderContext);

  const order = orderCtx.order();
  // const menu = localStorage.getItem("menu");
  const menu = props.menu;
  let total = 0;
  const orderDetails = order.map((meal) => {
    const mid = menu[meal.id]; // menu item detal
    const subTotal = mid.price * meal.quantity;
    total += subTotal;
    return {
      id: meal.id,
      name: mid.name,
      price: mid.price,
      quantity: meal.quantity,
      mealTotal: subTotal,
    };
  });
  const onUpdateHandler = (id, delta) => {
    console.log(`onUpdateHandler: id=${id}, delta=${delta}`);
  };
  return (
    <React.Fragment>
      <ul className={styles.cart_items}>
        {orderDetails.map((mi) => (
          <li key={mi.id}>
            <Card>
              <CartItem
                id={mi.id}
                name={mi.name}
                price={mi.price}
                subTotal={mi.subTotal}
                quatity={mi.quantity}
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
    </React.Fragment>
  );
};

export default Cart;
