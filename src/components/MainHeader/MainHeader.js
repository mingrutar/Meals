import React from "react";

import Navigation from "./Navigation";
import classes from "./MainHeader.module.css";

const MainHeader = (props) => {
  return (
    <header className={classes["main-header"]}>
      <div className="">
        <h2>React Meals</h2>
        <Navigation onViewCart={props.onViewCart} />
      </div>
    </header>
  );
};

export default MainHeader;
