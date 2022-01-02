import React, { useState, useEffect, useContext } from "react";
import validator from "validator";

import orderContext from "../../../store/order-context";

import Input from "../../UI/Input/Input";
import Button from "../../UI/Button/Button";
import styles from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  const orderCtx = useContext(orderContext);

  // TODO: useReducer
  const [isValid, setIsValid] = useState(true);
  const [quantity, setQuantity] = useState("");

  // useEffect(() => {
  //   console.debug("useEffect ENTER: isValid=" + isValid);
  //   if (!isValid) {
  //     return () => {
  //       setQuantity("");
  //       console.debug("useEffect CLEAN UP: setQuantity()");
  //     };
  //   } else {
  //     // TODO works?
  //     return () => {
  //       console.debug("useEffect CLEAN UP: none");
  //     };
  //   }
  // }, [isValid]);

  const addMeal = () => {
    if (quantity.trim().length > 0) orderCtx.onAdd(props.id, +quantity);
    else console.log(`Please enter a valid quality`);
  };
  // check entered is a number
  const onChangeHandler = (event) => {
    const enteredVal = event.target.value;
    const isValNumber =
      enteredVal.trim().length > 0 ? validator.isNumeric(enteredVal) : true;
    setIsValid(isValNumber);
    if (isValNumber) setQuantity(enteredVal);
  };
  return (
    <form className={styles.form}>
      {!isValid && <p>Please enter amount number</p>}
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
