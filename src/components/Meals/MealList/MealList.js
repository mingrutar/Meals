import React from "react";

import Card from "../../UI/Card/Card";
import MealItem from "../MealItem/MealItem";
import MealItemForm from "../MealItem/MealItemForm";

import styles from "./MealList.module.css";

const MealList = (props) => {
  return (
    <ul className={styles.ul}>
      {props.menuList.map((mi) => (
        <li key={mi.id}>
          <Card className={styles.menu}>
            <MealItem
              name={mi.name}
              description={mi.description}
              price={mi.price}
            />
            <MealItemForm />
          </Card>
        </li>
      ))}
    </ul>
  );
};

export default MealList;
