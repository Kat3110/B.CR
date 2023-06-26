import React from "react";
import Badge from "@mui/material/Badge";
import Button from "components/button";
import { InputAdornment, OutlinedInput } from "@mui/material";
import { IconButton } from "@mui/joy";
import { ReactComponent as VisibilityOff } from "assets/EyeClosed.svg";
import { ReactComponent as Visibility } from "assets/Eye.svg";
import { ReactComponent as Smile } from "assets/SmileyMeh.svg";
import DialogCsv from "components/dialog-csv";
import GroupButton from "components/group-button";
import { isUndefined } from "lodash";

export function Delete({
  password,
  data,
  disabled,
  error: { error, msg },
  handlePassword,
  handleConfirm,
  handleDelete,
}) {
  const [showPassword, setShowPassword] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  React.useEffect(() => {
    if (!isUndefined(data)) {
      if (data.data) handleOpen();
    }
  }, [data]);

  return (
    <div className="page-account-information__content page-edit-profile__content">
      <h2 className="page-account-information__title page-insight__title">
        Delete account
      </h2>
      <div className="page-account-information__window page-edit-profile__box">
        <div className="page-edit-profile__important">
          <Smile />
          <div className="page-edit-profile__read">Must read</div>
        </div>
        <div className="page-account-information__text page-edit-profile__text">
          Even if you withdraw, the contents that you’ve created do not removed.
          There will be no way to restore your account.
          <br />
          <br />
          If you still want to leave, please enter your password.
        </div>
      </div>
      <div
        className={`page-membership__input ${
          error ? "page-membership__input-error" : ""
        }`}
      >
        <Badge
          variant="dot"
          anchorOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
        >
          <span className="page-account-information__label page-edit-profile__label">
            Enter password
          </span>
          <OutlinedInput
            value={password}
            onChange={handlePassword}
            type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  edge="end"
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
          />
        </Badge>

        <span className="page-membership__help-text">
          {error ? msg : "8 to 16 letters and numbers mixed"}
        </span>
      </div>
      <DialogCsv
        open={open}
        handleOpen={handleOpen}
        handleClose={handleClose}
        title={<p className="page-account-information__typo">Are you sure?</p>}
        trigger={
          <Button
            text="Delete my account"
            color="pink"
            disabled={disabled}
            onClick={handleConfirm}
          />
        }
        content={
          <div className="page-account-information__contain">
            <div>
              <div>Are you sure you want to delete your account?</div>
              <div>Be advised, account deletion is final.</div>
            </div>
            <GroupButton close={handleClose} onClick={handleDelete} />
          </div>
        }
      />
    </div>
  );
}
