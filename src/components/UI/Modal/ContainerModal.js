import React from "react";

import Card from "../Card/Card";
import styles from "./ContainerModal,css";

const Modal = (props) => {
  return (
    <div>
      <div className={styles.backdrop} onClick={props.reset}></div>

      <Card className={styles.modal}>
        {props.header && (
          <header className={styles.header}>{props.header}</header>
        )}
        <div className={styles.content}>{props.content}</div>
        {props.footer && (
          <footer className={styles.actions}>{props.footer}</footer>
        )}
      </Card>
    </div>
  );
};

export default Modal;
