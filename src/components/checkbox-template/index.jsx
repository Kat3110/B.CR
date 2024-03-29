import * as React from "react";
import "./checkbox-template.css";

//radio
function CheckboxTemplate(props) {
  return (
    <label className="checkbox-template" onClick={props.onClick}>
      <input
        type="radio"
        checked={props.check}
        name="radio"
        onChange={(e) => e.preventDefault()}
      />
      <div className="checkbox-template__card">
        <h3 className="checkbox-template__typo">{props.title}</h3>
        <div className="checkbox-template__date">
          <span>Last modified</span>
          {props.time}
        </div>
      </div>
      <span className="checkbox-template__checkmark"></span>
    </label>
  );
}

export default CheckboxTemplate;
