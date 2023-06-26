import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import "./dialog-pattern.css";
import { ReactComponent as Close } from "../../assets/Plus.svg";

function DialogPattern({
  trigger,
  custom,
  icon,
  title,
  notClose,
  content,
  open,
  handleOpen,
  widthInherit,
  handleClose,
  triggerStyle,
}) {
  return (
    <>
      <div
        onClick={handleOpen}
        style={
          triggerStyle
            ? triggerStyle
            : !widthInherit
            ? { width: "inherit" }
            : null
        }
      >
        {trigger}
      </div>
      <Dialog
        className={`dialog-pattern__window ${custom ? custom : ""}`}
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent className="dialog-pattern__box">
          <div className="dialog-pattern__headline">
            <h2 className={`dialog-pattern__title`}>
              {icon}
              {title}
            </h2>
            {notClose ? null : (
              <Close className="dialog-pattern__close" onClick={handleClose} />
            )}
          </div>
          <div className="dialog-pattern__content">{content}</div>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default DialogPattern;
