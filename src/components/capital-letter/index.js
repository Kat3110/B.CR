import * as React from "react";
import { isEmpty } from "lodash";
import "./capital-letter.css";

function CapitalLetter(props) {
  return (
    <span
      className="capital-letter"
      style={{
        backgroundColor: props.bgColor ? props.bgColor : "black",
      }}
    >
      {isEmpty(props.letter) ? "" : props.letter[0]}
    </span>
  );
}
export default CapitalLetter;
