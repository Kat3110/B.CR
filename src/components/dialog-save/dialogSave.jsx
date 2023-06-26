import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import { ReactComponent as Save } from "../../assets/Download.svg";
import "./dialog-save.css";
import TextField from "@mui/material/TextField";
import Button from "../button";
import GroupButton from "../group-button";
import ButtonChange from "../button-change";

export function DialogSave({
  stageList,
  disabled,
  title,
  handleTitle,
  handleSelectId,
  handleCreate,
}) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="dialog-save">
      <ButtonChange onClick={handleClickOpen} icon={<Save />} />
      <Dialog
        className="dialog-save__window"
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent className="dialog-save__box">
          <h2 className="dialog-save__title">
            <Save />
            Save as Template
          </h2>
          <div className="dialog-save__headline">
            <p className="dialog-save__subtitle">Title</p>
            <TextField
              id="outlined-basic"
              variant="outlined"
              placeholder="Title"
              value={title}
              onChange={handleTitle}
            />
          </div>

          <div className="dialog-save__headline">
            <p className="dialog-save__subtitle">Stage</p>
            <div className="dialog-save__buttons">
              {stageList.map((item) => (
                <Button
                  key={item.id}
                  text={item.name}
                  color={item.checked ? "pink" : "default"}
                  size="m"
                  onClick={() => handleSelectId(item.id)}
                />
              ))}
            </div>
          </div>
        </DialogContent>
        <GroupButton
          disabled={disabled}
          onClick={handleCreate}
          close={handleClose}
        />
      </Dialog>
    </div>
  );
}
