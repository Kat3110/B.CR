import * as React from "react";
import "./dialog-csv.css";
import DialogPattern from "../dialog-pattern";

function DialogCsv({ trigger, title, content, open, handleOpen, handleClose }) {
  return (
    <>
      <DialogPattern
        custom="dialog-csv"
        titleCenter="center"
        trigger={trigger}
        notClose
        open={open}
        handleOpen={handleOpen}
        handleClose={handleClose}
        title={title}
        content={content}
      />
    </>
  );
}

export default DialogCsv;
