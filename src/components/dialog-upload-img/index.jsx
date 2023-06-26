import * as React from "react";
import "./dialog-upload-img.css";
import { ReactComponent as Edit } from "assets/PencilSimpleLine.svg";
import { ReactComponent as Pluse } from "assets/Plus.svg";
import Dialog from "@mui/material/Dialog";
import GroupButton from "../group-button";
import { imageData } from "./imageData";
import { SelectImg } from "utils/selectImg";
import FileUploader from "../file-uploader";
import { isEmpty } from "lodash";

export default function DialogUploadImg({
  image: selectImage,
  onChange,
  project,
}) {
  const [image, setImage] = React.useState(selectImage);
  const [open, setOpen] = React.useState(false);
  const inputRef = React.useRef(null);

  const inputClick = () => {
    inputRef.current.click();
  };
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleCofirm = () => {
    onChange(image);
    handleClose();
  };
  const handleImage = (path) => {
    setImage(path);
  };

  return (
    <div className="dialog-upload-img">
      <button className="dialog__btn" onClick={handleClickOpen}>
        {project ? (
          <img
            src={SelectImg(selectImage)}
            alt=""
            style={{ width: "50px", borderRadius: 10, cursor: "pointer" }}
          />
        ) : (
          <Edit />
        )}
      </button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        fullWidth={true}
        maxWidth="sm"
        className="dialog__window"
      >
        <div className="dialog-upload-img__box">
          <div className="flex-one">
            <h2 className="dialog-upload-img__title">Set your profile.</h2>
            <div className="dialog-upload-img__list">
              <span>Allowed</span>
              <span className="dialog-upload-img__item">within 5MB</span>
              <span className="dialog-upload-img__item dialog-upload-img__item_before">
                JPG
              </span>
              <span className="dialog-upload-img__item dialog-upload-img__item_before">
                PNG
              </span>
            </div>
            <div className="dialog-upload-img__picture">
              <img src={SelectImg(image)} alt="." />
              <div className="dialog-upload-img__add">
                {isEmpty(image) ? (
                  <Pluse style={{ cursor: "pointer" }} onClick={inputClick} />
                ) : (
                  <Edit style={{ cursor: "pointer" }} onClick={inputClick} />
                )}
              </div>
            </div>
            <div className="dialog-upload-img__colors">
              {imageData.map((item) => (
                <div
                  className={item.className}
                  key={item.className}
                  onClick={() => setImage(item.name)}
                />
              ))}
            </div>
          </div>
          <GroupButton close={handleClose} onClick={handleCofirm} />
        </div>
        <FileUploader
          inputRef={inputRef}
          format={["image/png", "image/jpeg"]}
          limit={5000000}
          handleImage={handleImage}
        />
      </Dialog>
    </div>
  );
}
