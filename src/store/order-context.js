import React, { useState, useContext, createContext } from "react";

const OrderContext = createContext({
  Order: [],
  OnAdd: (menuId, quantity) => {},
  OnRemove: (menuId) => {},
});

export const OrderContextProvide = (props) => {
  const []
};
export default OrderContext;
