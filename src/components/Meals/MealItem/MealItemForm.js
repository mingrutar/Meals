import React, { useState, useEffect, useContext } from "react";
import validator from "validator";

import orderContext from "../../../store/order-context";

import Input from "../../UI/Input/Input";
import Button from "../../UI/Button/Button";
import styles from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  const orderCtx = useContext(orderContext);

  // TODO: useReducer
  const [isAdded, setIsAdded] = useState(false);
  const [quantity, setQuantity] = useState("");

  useEffect(() => {
    if (props.showCart) {
      let qval = orderCtx.orderMeal(props.id);
      if (qval === undefined) qval = "";
      if (qval !== quantity) setQuantity(qval);
    }
    return () => {};
  }, [orderCtx.totalMeals]);

  const addMeal = () => {
    if (quantity.trim().length > 0) {
      orderCtx.onAdd(props.id, +quantity);
      setIsAdded(true);
    } else console.log(`Please enter a valid quality`);
  };
  // check entered is a number
  const onChangeHandler = (event) => {
    const enteredVal = event.target.value;

    if (enteredVal.trim().length > 0 && validator.isNumeric(enteredVal)) {
      setQuantity(enteredVal);
      setIsAdded(false);
    }
  };
  return (
    <form className={styles.form}>
      {/* isAdded, change text color to gray */}
      <Input
        label="Amount"
        onChange={onChangeHandler}
        onBlur={() => {}}
        value={quantity}
      ></Input>
      <Button type="button" onClick={addMeal}>
        + Add
      </Button>
    </form>
  );
};
export default MealItemForm;
