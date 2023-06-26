import * as React from "react";
import "./project-card.css";
import CustomTooltip from "../custom-tooltip";
import CapitalLetter from "../capital-letter";

function ProjectCard(props) {
  return (
    <div
      style={{ cursor: "pointer" }}
      onClick={props.onClick}
      className="home-feed__card project-card"
    >
      <div className="project-card__top">
        <img
          style={{ width: 80, height: 80, borderRadius: 5 }}
          src={props.img}
          alt=""
        />
        <div>
          <div className="project-card__tooltip">
            <CustomTooltip
              content={props.content}
              hover={props.content}
              size="17px"
              weight="700"
            />
          </div>
          <span className="project-card__time">{props.time}</span>
        </div>
      </div>
      <div className="project-card__bottom">
        <div className="project-card__bar">
          <div
            className="project-card__percent"
            style={{ width: `${props.percent}%` }}
          >
            <div
              className="project-card__number"
              style={
                props.percent > 85
                  ? { right: "0", borderRadius: "14.5px 14.4px 0 14.4px" }
                  : null
              }
            >
              {props.percent}%
            </div>
          </div>
        </div>
        <div className="project-card__accounts">
          {props.accounts?.map((account) => (
            <CapitalLetter
              letter={account.letter}
              key={account.color + account.letter}
              bgColor={account.color}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
