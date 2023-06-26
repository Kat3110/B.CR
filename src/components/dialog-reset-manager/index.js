import * as React from "react";
import "./dialog-reset-manager.css";
import DialogPattern from "../dialog-pattern";
import GroupButton from "../group-button";

function DialogResetManager({
  open,
  handleOpen,
  handleClose,
  onClick,
  trigger,
  title,
  content,
  textTwo,
}) {
  return (
    <>
      <DialogPattern
        open={open}
        handleOpen={handleOpen}
        handleClose={handleClose}
        custom="dialog-reset-manager"
        titleCenter="center"
        trigger={trigger}
        notClose="true"
        title={title}
        content={
          <>
            <div className="dialog-reset-manager__box">
              <p className="dialog-reset-manager__subtitle">{content}</p>

              <GroupButton
                close={handleClose}
                textTwo={textTwo}
                onClick={onClick}
              />
            </div>
          </>
        }
      />
    </>
  );
}

export default DialogResetManager;
