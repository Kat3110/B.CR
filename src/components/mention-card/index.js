import * as React from "react";
import "./mention-card.css";
import CapitalLetter from "../capital-letter";

function MentionCard(props) {
  const { onClick, item } = props;

  const handleMove = () => {
    onClick(item);
  };
  return (
    <>
      <div className="mention-card" onClick={handleMove}>
        <span className="mention-card__time">{props.time}</span>
        <span className="mention-card__person">
          <CapitalLetter letter={props.firstName[0]} bgColor={props.color} />
          {props.firstName}
        </span>
        <span>mentioned</span>
        <span className="mention-card__person">
          {props.secondName === "You" ? (
            props.secondName
          ) : (
            <>
              <CapitalLetter
                letter={props.secondName[0]}
                bgColor={props.colorTwo}
              />
              {props.secondName}
            </>
          )}
        </span>
        <span>in</span>
        <button>{props.button}</button>
      </div>

      <div className="mention-card--mobile" onClick={handleMove}>
        <span className="mention-card__time">{props.time}</span>
        <div className="mention-card--mobile__box">
          <span className="mention-card__person">
            <CapitalLetter letter={props.firstName[0]} bgColor={props.color} />
            {props.firstName}
          </span>
          <span>mentioned </span>
          <span> in</span>
          <span className="mention-card__person">
            {props.secondName === "You" ? (
              props.secondName
            ) : (
              <>
                <CapitalLetter
                  letter={props.secondName[0]}
                  bgColor={props.colorTwo}
                />
                {props.secondName}
              </>
            )}
          </span>
        </div>
        <button>{props.button}</button>
      </div>
    </>
  );
}

export default MentionCard;
