import React, { useState } from "react";

import MainHeader from "./components/MainHeader/MainHeader";
import MealList from "./components/Meals/MealList/MealList";
import Cart from "./components/Cart/Cart";

const menuList = [
  {
    id: 1,
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
    max_quantity: 100,
  },
  {
    id: 2,
    name: "Schnitzel",
    description: "A german specialty",
    price: 16.5,
    max_quantity: 150,
  },
  {
    id: 3,
    name: "Barbecue",
    description: "Popular american food",
    price: 12.99,
    max_quantity: 1001,
  },
  {
    id: 4,
    name: "whatever",
    description: "International food",
    price: 10.99,
    max_quantity: undefined,
  },
];

function App() {
  const [showCart, setShowCart] = useState(false);

  //TODO: popup OrderSummery Modal
  const menulookup = {};
  menuList.forEach((mi) => (menulookup[mi.id] = mi));
  localStorage.setItem("menu", JSON.stringify(menulookup));

  const viewOrderHandler = () => {
    setShowCart(true);
  };

  const onOrderHandler = (order) => {
    console.log("Order meals ...", order);
  };
  const onCloseHandler = () => {
    setShowCart(false);
  };

  return (
    // <div className={styles.main}>
    <React.Fragment>
      <MainHeader onViewCart={viewOrderHandler} />
      {showCart && <Cart onClose={onCloseHandler} onOrder={onOrderHandler} />}
      <MealList menuList={menuList} />
    </React.Fragment>
  );
}

export default App;
