import * as React from "react";
import "./button-filter.css";

function ButtonFilter(props) {
  return (
    <button
      onClick={props.onClick}
      className={`button-filter button-filter__color-${
        props.active ? "pink" : "default"
      }`}
    >
      {props.number}
      <span className={"button-filter__text"}>{props.text}</span>
      <span className={"button-filter__text--mobile"}>{props.text[0]}</span>
    </button>
  );
}
export default ButtonFilter;
