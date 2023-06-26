import * as React from "react";
import "./box-template.css";
import { ReactComponent as Lock } from "assets/LockLaminated.svg";
import { ReactComponent as CaretRight } from "assets/CaretRight.svg";
import { ReactComponent as LockSimpleOpen } from "assets/LockSimpleOpen.svg";
import { ReactComponent as TrashGray } from "assets/TrashGray.svg";
import { ReactComponent as ShareNetwork } from "assets/ShareNetwork.svg";
import { ReactComponent as Microphone } from "assets/microphoneCustom.svg";
import { useState } from "react";
import DialogComments from "components/dialog-comments";
import DropdownMentions from "../dropdown-mentions";

function BoxTemplate(props) {
  const [change, setChange] = useState(false);

  return (
    <div
      className={`box-template ${
        props.disabled ? "box-template__disabled" : ""
      }`}
    >
      <div
        className="box-template__img"
        style={{
          backgroundColor: props.bgColor
            ? props.bgColor
            : "rgba(0, 0, 0, 0.05)",
        }}
      >
        {props.name ? props.name[0] : null}
      </div>
      <div className="box-template__content">
        {props.lock ? (
          <div className="box-template__lock">
            <Lock />
          </div>
        ) : (
          props.change && (
            <>
              <div className="box-template__group box-template__group--mobile">
                <div className="box-template__item--mobile">
                  <div className="box-template__item">
                    <Microphone />
                  </div>
                  <div className="box-template__item">
                    <LockSimpleOpen />
                  </div>
                  <div className="box-template__item">
                    <DialogComments blockId={props.id} />
                  </div>
                  <DropdownMentions />
                  <div className="box-template__item">
                    <ShareNetwork />
                  </div>
                  <div className="box-template__item">
                    <TrashGray />
                  </div>
                </div>
                <div
                  onClick={() => setChange(!change)}
                  className="box-template__change"
                >
                  <CaretRight />
                </div>
              </div>
            </>
          )
        )}
        {props.name ? (
          <div className="box-template__box">
            <div
              className="box-template__img box-template__img--mobile"
              style={{
                backgroundColor: props.bgColor
                  ? props.bgColor
                  : "rgba(0, 0, 0, 0.05)",
              }}
            >
              {props.name ? props.name[0] : null}
            </div>
            <div className={"box-template__head"}>
              <div className={"box-template__head-top"}>
                <span className="box-template__name">{props.name}</span>
                <span className="box-template__manager">{props.role}</span>
              </div>
              {props.date ? (
                <span className="box-template__date">{props.date}</span>
              ) : null}
            </div>
          </div>
        ) : null}
        {props.children}
      </div>
    </div>
  );
}

export default BoxTemplate;
