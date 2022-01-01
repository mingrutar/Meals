import React from "react";
import ReactDOM from "react-dom";

import { OrderContextProvide } from "./store/order-context";
import App from "./App";

import "./index.css";

ReactDOM.render(
  <OrderContextProvide>
    <App />
  </OrderContextProvide>,
  document.getElementById("root")
);
