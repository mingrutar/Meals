import React, { useContext } from "react";

import AuthContext from "../../store/auth-context";
import OrderContext from "../../store/order-context";

import classes from "./Navigation.module.css";

const Navigation = (props) => {
  const authCtx = useContext(AuthContext);
  const orderCtx = useContext(OrderContext);
  return (
    <nav className={classes.nav}>
      <ul>
        {authCtx.isLoggedIn && (
          <>
            <li>
              <a href="/">My Order History</a>
            </li>
            <li>
              <button onClick={authCtx.onLogout}>Logout</button>
            </li>
          </>
        )}
        {!authCtx.isLoggedIn && (
          <li>
            <button onClick={authCtx.onLogin}>Login</button>
          </li>
        )}
        <li>
          {/* TODO: change to CartButton icon and counter */}
          <button onClick={props.onViewCart}>
            View Cart ({orderCtx.totalMeals})
          </button>
        </li>
        {/* </li> */}
      </ul>
    </nav>
  );
};

export default Navigation;
