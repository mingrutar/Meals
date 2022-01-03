import React, { useState, useEffect, createContext } from "react";

// TODO: add sum?
const OrderContext = createContext({
  totalMeals: 0,
  order: () => {},
  orderMeal: (mealId) => undefined,
  cleanOrder: () => {},
  onAdd: (mealId, quantity) => {},
  onRemove: (mealId) => {},
  onUpdate: (mealId, val) => {},
});

export const OrderContextProvide = (props) => {
  const [mealCounter, setMealCounter] = useState(0);
  const [meals, setMeals] = useState({}); // {menuId: quantity}

  useEffect(() => {
    const total = Object.keys(meals).reduce((sum, x) => (sum += meals[x]), 0);
    setMealCounter(total);
    return () => {};
  }, [meals]);

  // lost date in 2nd call const Order = {
  //   meals: [], // {id, quatity}
  //   deliverType: 1,
  //   customer: { name: "John", phone: "123-333-4444" }, //placeholder
  // };
  const addMealHandler = (mealId, quantity) => {
    // console.debug(`addMealHandler: (${mealId}, ${+quantity}) meals=`, meals);
    if (meals[mealId] !== +quantity) {
      setMeals((prev) => {
        const curOrder = [...prev];
        curOrder[mealId] = +quantity;
        return curOrder;
      });
    }
  };
  const deleteMealHandler = (mealId) => {
    // console.debug(`deleteMealHandler: id=${mealId}`);
    if (mealId in meals) {
      setMeals((prev) => prev.filter((id) => id !== mealId));
    }
  };
  const onUpdateHandler = (mealId, val) => {
    // console.debug(`onUpdateHandler: (${mealId}, ${+val})`);
    if (mealId in meals) {
      setMeals((prev) => {
        const curOrder = [...prev];
        curOrder[mealId] += +val;
        return curOrder;
      });
    }
  };
  const getOrder = () => {
    return meals;
  };
  const orderMeal = (mealId) => meals[mealId];

  const cleanUp = () => {
    setMeals([]);
  };
  return (
    <OrderContext.Provider
      value={{
        totalMeals: mealCounter,
        onAdd: addMealHandler,
        onRemove: deleteMealHandler,
        onUpdate: onUpdateHandler,
        order: getOrder,
        orderMeal: orderMeal,
        cleanOrder: cleanUp,
      }}
    >
      {props.children}
    </OrderContext.Provider>
  );
};
export default OrderContext;
