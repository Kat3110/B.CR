import * as React from "react";
import "./card-comments.css";
import { ReactComponent as Trash } from "../../assets/Trash.svg";
import CapitalLetter from "../capital-letter";

function DialogComments(props) {
  return (
    <div className="card-comments">
      <button
        className="card-comments__remove"
        onClick={() => props.handleDelete(props.value)}
      >
        <Trash />
      </button>
      <div className="card-comments__account">
        <CapitalLetter letter={props.name[0]} bgColor={props.color} />
        {props.name}
      </div>
      <div className="card-comments__time">{props.time}</div>
      <div className="card-comments__comment">{props.comment}</div>
    </div>
  );
}

export default DialogComments;
