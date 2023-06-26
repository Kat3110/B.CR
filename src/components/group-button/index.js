import * as React from "react";
import "./group-btn.css";
import Button from "../button";

function GroupButton(props) {
  return (
    <div
      className="group-btn"
      style={{ justifyContent: props.justify ? props.justify : null }}
    >
      <Button
        onClick={props.close}
        text="Cancel"
        color={props.colorFirst ? props.colorFirst : "default"}
        size={props.size ? props.size : "l"}
      />
      <Button
        onClick={props.onClick}
        disabled={props.disabled}
        text={props.textTwo ? props.textTwo : "Confirm"}
        color={props.color ? props.color : "black"}
        size={props.size ? props.size : "l"}
      />
    </div>
  );
}

export default GroupButton;
