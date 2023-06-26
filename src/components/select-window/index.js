import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import "./select-window.css";

function SelectWindow({
  width,
  value,
  name,
  array,
  color,
  onChange,
  readOnly,
}) {
  const MenuProps = {
    PaperProps: {
      style: {
        padding: "0px 8px",
        width: width ? width : 138,
        background: "#FFFFFF",
        boxShadow: "0px 25px 30px rgba(0, 0, 0, 0.12)",
        borderRadius: "0 0 5px 5px",
        marginTop: "-1px",
      },
    },
  };

  return (
    <div className="select-window">
      <Select
        value={value}
        className="select-window__select"
        name={name}
        onChange={onChange}
        MenuProps={MenuProps}
        readOnly={readOnly}
        style={{
          backgroundColor: color ? color : "rgba(0, 0, 0, 0.04)",
          minWidth: width ? `${width}px` : "138px",
        }}
      >
        {array.map((option) => (
          <MenuItem
            className="select-window__option"
            value={option.value}
            key={option.value + option.label}
          >
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </div>
  );
}
export default SelectWindow;
