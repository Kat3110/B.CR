import * as React from "react";
import "./dialog-welcome.css";
import DialogPattern from "../dialog-pattern";
import Button from "../button";
import Clap from "../../assets/CLAP.png";

function DialogWelcome(props) {
  const [goHome, setGoHome] = React.useState(props.home ? false : true);

  return (
    <>
      <DialogPattern
        custom="dialog-welcome"
        titleCenter="center"
        trigger={
          props.trigger ? (
            props.trigger
          ) : (
            <Button size="s" text="Add CSV" color="black" />
          )
        }
        notClose="true"
        title={
          goHome ? (
            ""
          ) : (
            <div className="dialog-welcome__title">
              Welcome to join with us!
            </div>
          )
        }
        content={
          <div className="dialog-welcome__box">
            {goHome ? (
              <>
                <img className="dialog-welcome__img" src={Clap} alt="" />
                <button className="dialog-welcome__btn">Complete!</button>
              </>
            ) : (
              <>
                <p className="dialog-welcome__subtitle">
                  <span>Verify your email.</span>
                  <br />
                  We’ve just sent a verification mail to{" "}
                  <span>bryce.right@bcr.com.</span>
                  <br />
                  Once verified, you’ll be able to continue.
                </p>
                <a className="page-membership__link" href="/login">
                  <button className="dialog-welcome__btn">Go to home</button>
                </a>
              </>
            )}
          </div>
        }
      />
    </>
  );
}

export default DialogWelcome;
