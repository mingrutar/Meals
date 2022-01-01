import React, { useState, useEffect, useContext, createContext } from "react";

const OrderContext = createContext({
  order: () => {},
  onAdd: (mealId, quantity) => {},
  onRemove: (mealId) => {},
});

export const OrderContextProvide = (props) => {
  const [numberMeals, setNumberMeal] = useState(0);

  const Order = {
    meals: [], // {id, quatity}
    deliverType: 1,
    customer: { name: "John", phone: "123-333-4444" }, //placeholder
  };
  const addMealHandler = (mealId, quantity) => {
    console.debug(`addMealHandler: id=${mealId}, quatity=${quantity}`);
    // const meals = Order.meals.find((meal) => meal.id === mealId);
    // if (meals.length === 0) {
    //   Order.meals.add({ id: mealId, quantity: quantity });
    //   setNumberMeal(Order.meals.length);
    // } else {
    //   console.debug(
    //     `updating quatity for  ${mealId} from ${meals[0].quantity} to ${quantity}`
    //   );
    //   meals[0].quantity = quantity;
    // }
  };
  const deleteMealHandler = (mealId) => {
    console.debug(`deleteMealHandler: id=${mealId}`);
    // const idx = Order.meals.findIndex((meal) => meal.id === mealId);
    // if (idx > -1) {
    //   Order.meals.splice(idx, 1);
    //   setNumberMeal(Order.meals.length);
    // } else
    //   console.log(`Meal ${mealId} is not found in order, cannot be deleted`);
  };
  const getOrder = () => {
    return Order;
  };
  return (
    <OrderContext.Provider
      value={{
        numberMeals,
        onAdd: addMealHandler,
        onRemove: deleteMealHandler,
        order: getOrder,
      }}
    >
      {props.children}
    </OrderContext.Provider>
  );
};
export default OrderContext;
