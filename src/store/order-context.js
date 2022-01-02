import React, { useState, useEffect, createContext } from "react";

// TODO: add sum?
const OrderContext = createContext({
  totalMeals: 0,
  order: () => [],
  cleanOrder: () => {},
  onAdd: (mealId, quantity) => {},
  onRemove: (mealId) => {},
  onUpdate: (mealId, val) => {},
});

export const OrderContextProvide = (props) => {
  const [mealCounter, setMealCounter] = useState(0);
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const total = meals.reduce((sum, x) => (sum += x.quantity), 0);
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
    const idx = meals.findIndex((meal) => meal.id === mealId);
    if (idx < 0) {
      // new
      setMeals((prev) => {
        const curOrder = [{ id: mealId, quantity: +quantity }, ...prev];
        // console.log("addMealHandler =", curOrder);
        return curOrder;
      });
    } else {
      setMeals((prev) => {
        const curOrder = [...prev];
        curOrder[idx]["quantity"] = +quantity;
        return curOrder;
      });
    }
  };
  const deleteMealHandler = (mealId) => {
    // console.debug(`deleteMealHandler: id=${mealId}`);
    const idx = meals.findIndex((meal) => meal.id === mealId);
    if (idx > -1)
      setMeals((prev) => {
        const newOrder = [...prev];
        newOrder.splice(idx, 1);
      });
    else
      console.log(`Meal(${mealId}) is not found in order, cannot be deleted`);
  };
  const onUpdateHandler = (mealId, val) => {
    console.debug(`onUpdateHandler: (${mealId}, ${+val})`);
    const idx = meals.findIndex((meal) => meal.id === mealId);
    if (idx > -1) {
      const newVal = Math.max(meals[idx]["quantity"] + val, 0);
      setMeals((prev) => {
        const curOrder = [...prev];
        curOrder[idx]["quantity"] = newVal;
        return curOrder;
      });
    }
  };
  const getOrder = () => {
    return meals;
  };
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
        cleanOrder: cleanUp,
      }}
    >
      {props.children}
    </OrderContext.Provider>
  );
};
export default OrderContext;
