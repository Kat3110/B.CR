import * as React from "react";
import "./radio-projects.css";
import { ReactComponent as Pinned } from "assets/pinned.svg";
import CapitalLetter from "../capital-letter";
import Badge from "@mui/material/Badge";
import { SelectImg } from "utils/selectImg";

function RadioProjects({
  id,
  pinned,
  check,
  badge,
  img,
  completed,
  title,
  name,
  color,
  handleCheck,
  handlePinned,
}) {
  const handlePinnedFun = React.useCallback(
    (e) => {
      e.preventDefault();
      handlePinned(!pinned, id);
    },
    [handlePinned, id, pinned],
  );

  return (
    <label className="radio-projects">
      <input
        type="checkbox"
        checked={check}
        name="checkbox"
        onChange={() => handleCheck(id)}
      />
      <div className="radio-projects__card">
        {badge ? (
          <Badge className="radio-projects__badge" badgeContent={badge}>
            <img className="radio-projects__card_img" src={img} alt="." />
          </Badge>
        ) : (
          <img
            className="radio-projects__card_img"
            src={SelectImg(img)}
            alt="."
          />
        )}
        <div className="radio-projects__card_box">
          <h3 className="radio-projects__typo">
            {completed ? <span>Completed</span> : null}
            {title}
          </h3>
          <div className="radio-projects__name">
            <CapitalLetter letter={name[0]} bgColor={color} />
            {name}
          </div>
        </div>
        <Pinned
          onClick={handlePinnedFun}
          className={"radio-projects__pinned" + (pinned ? " pinned" : "")}
        />
      </div>
      <span className="radio-projects__checkmark"></span>
    </label>
  );
}

export default RadioProjects;
