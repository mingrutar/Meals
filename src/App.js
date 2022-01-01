import React, { useContext } from "react";

import MainHeader from "./components/MainHeader/MainHeader";
import Card from "./components/UI/Card/Card";
import MealItem from "./components/Meals/MealItem/MealItem";
import MealItemForm from "./components/Meals/MealItem/MealItemForm";

import styles from "./App.module.css";

function App() {
  //TODO: popup OrderSummery Modal
  const menuList = [
    {
      id: 1,
      name: "Sushi",
      description: "Finest fish and veggies",
      price: 22.99,
    },
    {
      id: 2,
      name: "Schnitzel",
      description: "A german specialty",
      price: 16.5,
    },
    {
      id: 3,
      name: "Barbecue",
      description: "Popular american food",
      price: 12.99,
    },
    {
      id: 4,
      name: "whatever",
      description: "International food",
      price: 10.99,
    },
  ];
  const viewOrderHandler = () => {
    console.log("viewOrderHandler called");
  };
  return (
    // <div className={styles.main}>
    <React.Fragment>
      <MainHeader onViewCart={viewOrderHandler} />
      <ul className={styles.ul}>
        {menuList.map((mi) => (
          <li key={mi.id}>
            <Card>
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
    </React.Fragment>
  );
}

export default App;
