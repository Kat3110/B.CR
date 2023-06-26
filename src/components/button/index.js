import * as React from "react";
import "./button.css";

function Button(props) {
  return (
    <button
      disabled={props.disabled}
      onClick={props.onClick}
      className={`button button__size-${
        props.size ? props.size : "m"
      } button__color-${
        props.color && !props.disabled ? props.color : "default"
      }`}
    >
      {props.reverse ? (
        <>
          {props.text}
          {props.icon}
        </>
      ) : (
        <>
          {props.icon}
          {props.text}
        </>
      )}
    </button>
  );
}
export default Button;
