import React, { useRef, useImperativeHandle } from "react";

import classes from "./Input.module.css";
/**
 * React.forwardRef + useImperativeHandle
 *  - should try to avaid, but useful for controling a HTML element like input
 */
// enable parent component to use ref
// can ref to this ref
const Input = React.forwardRef((props, ref) => {
  const inputRef = useRef();

  // useEffect(() => {
  //   inputRef.current.focus();
  // }, []);

  const activate = () => {
    inputRef.current.focus();
  };
  // can expose variable as well
  useImperativeHandle(ref, () => {
    return {
      focus: activate, // focus (call by outside) => activate(insideFunc)
    };
  });
  return (
    <div className={classes.input}>
      <label htmlFor={props.id}>{props.label}</label>
      <input
        ref={inputRef}
        // type={props.type}
        id={props.id}
        value={props.value}
        // onChange={props.onChange}
        onBlur={props.onBlur}
      />
    </div>
  );
});

export default Input;
