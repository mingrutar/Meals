import React, { useState } from "react";
import Input from "../../UI/Input/Input";
import Button from "../../UI/Button/Button";
import styles from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  const [quantity, setQuantity] = useState("");

  //TODO: use Context
  const addMeal = () => {
    console.log(`quality=${quantity}`);
  };
  const onValidateHandler = (event) => {
    const qual = event.target.value;
    if (qual <= 0) {
      console.log("quantity <= 0");
      return;
    }
    setQuantity(qual);
  };
  return (
    <form className={styles.form} onSubmit={addMeal}>
      <Input label="Amount" value={quantity} onBlur={onValidateHandler}></Input>
      <Button type="submit">+ Add</Button>
    </form>
  );
};
export default MealItemForm;
