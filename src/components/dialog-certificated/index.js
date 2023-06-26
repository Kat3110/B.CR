import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import "./dialog-certificated.css";

import GroupButton from "../group-button";

function DialogCertificated({ open, onClose, onResend, disabled }) {
  return (
    <div className="dialog-certificated">
      <Dialog
        className="dialog-certificated__window"
        open={open}
        onClose={onClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent className="dialog-certificated__box">
          <h2 className="dialog-certificated__title">Not certificated yet</h2>
          <p className="dialog-certificated__subtitle">
            Please certificate you email.
            <br />
            {
              "If you haven't received the cetificate mail, please click the resend button."
            }
          </p>
        </DialogContent>
        <GroupButton
          close={onClose}
          onClick={onResend}
          disabled={disabled}
          textTwo="Resend"
        />
      </Dialog>
    </div>
  );
}

export default DialogCertificated;
