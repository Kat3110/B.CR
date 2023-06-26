import * as React from "react";
import "./channels-card.css";
import CustomTooltip from "../custom-tooltip";
import CapitalLetter from "../capital-letter";

function ChannelsCard(props) {
  const { item, onClick } = props;

  const handleMove = () => {
    onClick(item);
  };
  return (
    <>
      <div className="channels-card" onClick={handleMove}>
        <div className="channels-card__descript">
          <span className="channels-card__time">{props.time}</span>
          <p className="channels-card__content">
            {props.content}
            <span>{props.charis}</span>
          </p>
        </div>
        <div className="channels-card__account">
          <CustomTooltip
            content={
              <CapitalLetter letter={props.name[0]} bgColor={props.color} />
            }
            hover={props.email}
            size="13px"
            weight="400"
          />
          <p className="channels-card__name">
            <CustomTooltip
              content={props.name}
              hover={props.email}
              size="13px"
              weight="400"
            />
          </p>
        </div>
      </div>
      <div className="channels-card--mobile" onClick={handleMove}>
        <div className="channels-card__header--mobile">
          <span className="channels-card__time">{props.time}</span>
          <p className="channels-card__name">
            <CapitalLetter letter={props.name[0]} bgColor={props.color} />
            <CustomTooltip
              content={props.name}
              hover={props.email}
              size="13px"
              weight="400"
            />
          </p>
        </div>
        <p className="channels-card__content">
          {props.content}
          <span>{props.charis}</span>
        </p>
      </div>
    </>
  );
}

export default ChannelsCard;
