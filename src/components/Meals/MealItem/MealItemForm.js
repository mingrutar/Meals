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

  useEffect(() => {
    console.debug("useEffect ENTER: isValid=" + isValid);
    if (!isValid) {
      return () => {
        setQuantity("");
        console.debug("useEffect CLEAN UP: setQuantity()");
      };
    } else {
      // TODO works?
      return () => {
        console.debug("useEffect CLEAN UP: none");
      };
    }
  }, [isValid]);

  //TODO: use Context
  const addMeal = () => {
    console.log(`quality=${quantity}`);
    orderCtx.onAdd(props.id, quantity);
  };
  // check entered is a number
  const onChangeHandler = (event) => {
    const enteredVal = event.target.value;
    const isValNumber =
      enteredVal.length > 0 ? validator.isNumeric(enteredVal) : true;
    setQuantity(enteredVal);
    setIsValid(isValNumber);
  };
  // check if exceed max_quantity
  const onValidateHandler = (event) => {
    if (props.max_quantity && quantity > props.max_quantity) {
      // TODO: Modal ; change to max_quantity or 0
      console.log(
        `quantity ${quantity} > props.max_quantity ${props.max_quantity},`
      );
      setQuantity(props.max_quantity); // TODO: take result of Modal
    }
  };
  return (
    <form className={styles.form}>
      {!isValid && <p>Please enter amount number</p>}
      <Input
        label="Amount"
        onChange={onChangeHandler}
        onBlur={onValidateHandler}
      ></Input>
      <Button type="button" onClick={addMeal}>
        + Add
      </Button>
    </form>
  );
};
export default MealItemForm;
