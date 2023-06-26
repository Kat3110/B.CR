import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import "./dialog-remove.css";
import GroupButton from "../group-button";
import CapitalLetter from "../capital-letter";

export default function DialogRemove({
  open,
  handleClose,
  email,
  name,
  onClick,
}) {
  return (
    <div className="dialog-remove">
      <Dialog
        className="dialog-remove__window"
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent className="dialog-remove__box">
          <h2 className="dialog-remove__title">Are you sure?</h2>
          <div className="dialog-remove__content">
            <p className="dialog-remove__subtitle">
              Are you sure you want to remove
            </p>
            <div className="dialog-remove__account">
              <div className="dialog-remove__name">
                <CapitalLetter bgColor="#00E99E" letter="H" /> {name}
              </div>
              <div className="dialog-remove__mail">{email}</div>
            </div>
            <p className="dialog-remove__subtitle">
              from the project?
              <br />
              They may not be able to access this project anymore.
            </p>
          </div>
        </DialogContent>
        <GroupButton close={handleClose} onClick={onClick} />
      </Dialog>
    </div>
  );
}
