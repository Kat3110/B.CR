import * as React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import { ReactComponent as Glass } from "../../assets/MagnifyingGlass.svg";
import { ReactComponent as Slider } from "../../assets/Sliders.svg";
import "./input-search.css";
import SelectWindow from "../select-window";

const arraySelect = [
  {
    value: 1,
    label: "PM",
  },
  {
    value: 2,
    label: "Member",
  },
];

function InputSearch(props) {
  return (
    <Paper className="input-search">
      {props.detailed ? (
        <div className="input-search__detailed">
          <Slider /> Detailed search
        </div>
      ) : null}
      {props.select ? (
        <div className="input-search__select" placeholder={props.text}>
          <SelectWindow
            color="white"
            value={props.role}
            onChange={props.handleRole}
            array={arraySelect}
          />
        </div>
      ) : null}
      <InputBase
        className="input-search__base"
        placeholder={props.text ? props.text : "Search"}
        value={props.value}
        name={props.name}
        onChange={props.onChange}
        onKeyDown={props.onKeyDown}
      />
      <div className="input-search__btn">
        <Glass />
      </div>
    </Paper>
  );
}

export default InputSearch;
