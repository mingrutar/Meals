import React, { useState, useContext } from "react";

import MainHeader from "./components/MainHeader/MainHeader";
import MealList from "./components/Meals/MealList/MealList";
import Cart from "./components/Cart/Cart";
import OrderContext from "./store/order-context";
import ContainerModal from "./components/UI/Modal/ContainerModal";
import Button from "./components/UI/Button/Button";

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
  const orderCtx = useContext(OrderContext);

  const [showCart, setShowCart] = useState(false);
  const [ordering, setOrdering] = useState(null);

  const storeMenu = () => {
    const menulookup = {};
    menuList.forEach((mi) => (menulookup[mi.id] = mi));
    localStorage.setItem("menu", JSON.stringify(menulookup));
  };
  storeMenu();
  const viewOrderHandler = () => {
    setShowCart(true);
  };
  const onOrderHandler = (order) => {
    console.log("Order meals ...", order);
    setOrdering({ title: "Order ...", message: "Please click okay" });
  };
  const resetOrder = () => {
    orderCtx.cleanOrder();
    setOrdering(null);
    setShowCart(false);
  };
  const onCloseHandler = () => {
    setShowCart(false);
  };

  const modalHeader = <h2>Make order</h2>;
  const modalContent = <p>The function is not supported yet</p>;
  const modalFooter = <Button onClick={resetOrder}>Okay</Button>;

  return (
    // <div className={styles.main}>
    <React.Fragment>
      <MainHeader onViewCart={viewOrderHandler} />
      {showCart && <Cart onClose={onCloseHandler} onOrder={onOrderHandler} />}
      {ordering !== null && (
        <ContainerModal
          header={modalHeader}
          message={modalContent}
          footer={modalFooter}
          reset={resetOrder}
        ></ContainerModal>
      )}

      <MealList menuList={menuList} />
    </React.Fragment>
  );
}

export default App;
