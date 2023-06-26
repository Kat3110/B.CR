import * as React from "react";
import "./dialog-install-template.css";
import GroupButton from "../group-button";
import { ReactComponent as Edit } from "../../assets/PencilSimpleLine.svg";
import Icon from "../../assets/icon3.jpg";
import Dialog from "@mui/material/Dialog";
import ChipsDelete from "../chip-delete";
import CheckboxesDelete from "../checkboxes-delete";

function DialogInstallTemplate(props) {
  const arrayListCustom = [
    {
      value: 0,
      label: "Outline",
      checked: "checked",
    },
    {
      value: 1,
      label: "Ingredient",
    },
    {
      value: 2,
      label: "Certify",
    },
    {
      value: 3,
      label: "Package",
    },
    {
      value: 4,
      label: "Test",
    },
    {
      value: 5,
      label: "Manufacture",
    },
  ];
  const [fullWidth, setFullWidth] = React.useState(true);
  const [maxWidth, setMaxWidth] = React.useState("lg");
  const handleMaxWidthChange = (event) => {
    setMaxWidth(event.target.value);
  };
  const handleFullWidthChange = (event) => {
    setFullWidth(event.target.checked);
  };
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const [value, setValue] = React.useState("2");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="dialog-templates">
      <button
        className="dialog-templates__button dialog__btn"
        onClick={handleClickOpen}
      >
        <Edit />
      </button>
      <Dialog
        open={open}
        onClose={handleClose}
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        className="dialog__window dialog-templates__window dialog-install-templates"
      >
        {props.template ? (
          <>
            <div className="dialog-templates__box">
              <div className="dialog-install-templates__title">
                Set your template
              </div>
              <div className="dialog-install-templates__name">
                Dr.G First Project
              </div>
              <ChipsDelete />
            </div>
            <div className="dialog-templates__btn">
              <GroupButton
                textTwo="Save"
                close={handleClose}
                justify="flex-end"
              />
            </div>
          </>
        ) : (
          <>
            <div className="dialog-templates__box">
              <div className="dialog-install-templates__title">
                Set your template
              </div>
              <div className="dialog-install-templates__img">
                <img src={Icon} alt="" />
                <div className="dialog-install-templates__add">
                  <Edit />
                </div>
              </div>
              <div className="dialog-install-templates__name">
                Dr.G First Project
              </div>
              <CheckboxesDelete equals data={arrayListCustom} />
            </div>

            <div className="dialog-templates__btn">
              <GroupButton
                textTwo="Save"
                close={handleClose}
                justify="flex-end"
              />
            </div>
          </>
        )}
      </Dialog>
    </div>
  );
}

export default DialogInstallTemplate;
