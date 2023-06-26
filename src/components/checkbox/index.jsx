import * as React from "react";
import "./checkbox.css";

function Checkbox(props) {
  const inputRef = React.useRef(null);
  const inputClick = () => {
    inputRef.current.click();
  };
  return (
    <label
      className="checkbox"
      style={{ color: props.color ? props.color : null }}
      htmlFor={props.name}
    >
      {props.edit ? (
        <>
          <input
            type="text"
            placeholder="Stage name"
            value={props.text}
            onChange={props.handleText}
          />
        </>
      ) : (
        props.text
      )}
      <input
        type="checkbox"
        name={props.name}
        onChange={props.onChange}
        checked={props.checked}
        disabled={props.disabled}
        id={props.name}
        ref={inputRef}
      />
      <span onClick={inputClick} className="checkbox__checkmark"></span>
    </label>
  );
}

export default Checkbox;
