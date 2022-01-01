import React, { useContext } from "react";

import AuthContext from "../../store/auth-context";

import classes from "./Navigation.module.css";

const Navigation = (props) => {
  const ctx = useContext(AuthContext);
  return (
    <nav className={classes.nav}>
      <ul>
        {ctx.isLoggedIn && (
          <>
            <li>
              <a href="/">My Order History</a>
            </li>
            <li>
              <button onClick={ctx.onLogout}>Logout</button>
            </li>
          </>
        )}
        {!ctx.isLoggedIn && (
          <li>
            <button onClick={ctx.onLogin}>Login</button>
          </li>
        )}
        <li>
          {/* TODO: change to CartButton icon and counter */}
          <button onClick={props.onViewCart}>View Cart</button>
        </li>
        {/* </li> */}
      </ul>
    </nav>
  );
};

export default Navigation;
