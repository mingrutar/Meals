import React from "react";

import styles from "./Card.module.css";

const Card = (props) => {
  const classes = `${styles.card} ${props.className}`;
  console.log(classes);
  return (
    // <div className={styles.card}>{props.children}</div>
    <div className={classes}>{props.children}</div>
  );
};
export default Card;
