import React from "react";
import Badge from "@mui/material/Badge";
import Button from "components/button";
import { ReactComponent as Close } from "assets/Plus.svg";
import { InputAdornment, OutlinedInput } from "@mui/material";
import { IconButton } from "@mui/joy";
import { ReactComponent as VisibilityOff } from "assets/EyeClosed.svg";
import { ReactComponent as Visibility } from "assets/Eye.svg";

export function Password({
  state,
  error,
  disabled,
  isSuccess,
  handleState,
  handleUpdate,
}) {
  const [show, setShow] = React.useState({
    password: false,
    newPassword: false,
  });

  const [success, setSuccess] = React.useState(false);

  const handleClose = () => {
    setSuccess(false);
  };

  const handleShow = (type) => {
    setShow((prev) => ({ ...prev, [type]: !prev[type] }));
  };

  React.useEffect(() => {
    if (isSuccess) setSuccess(true);
  }, [isSuccess]);

  return (
    <div className="page-account-information__content page-edit-profile__content">
      <div className="page-edit-profile__content page-account-information__gap ">
        <h2 className="page-account-information__title page-insight__title">
          Password
        </h2>
        <div
          className={`page-membership__input ${
            error.password.error ? "page-membership__input-error" : ""
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
              Old password
            </span>
            <OutlinedInput
              value={state.password}
              type={show.password ? "text" : "password"}
              name="password"
              onChange={handleState}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => handleShow("password")}
                    edge="end"
                  >
                    {show.password ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </Badge>

          <span className="page-membership__help-text">
            {error.password.error
              ? error.password.msg
              : "8 to 16 letters and numbers mixed"}
          </span>
        </div>

        <div
          className={`page-membership__input ${
            error.newPassword.error ? "page-membership__input-error" : ""
          }`}
          style={{ marginTop: 10 }}
        >
          <Badge
            variant="dot"
            anchorOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
          >
            <span className="page-account-information__label page-edit-profile__label">
              New password
            </span>
            <OutlinedInput
              className="page-membership__pw"
              value={state.newPassword}
              name="newPassword"
              onChange={handleState}
              type={show.newPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => handleShow("newPassword")}
                    edge="end"
                  >
                    {show.newPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </Badge>
          <span className="page-membership__help-text">
            {error.newPassword.error
              ? error.newPassword.msg
              : "8 to 16 letters and numbers mixed"}
          </span>
        </div>

        <Button
          text="Save Changes"
          color="pink"
          disabled={disabled}
          onClick={handleUpdate}
        />
      </div>

      {success && (
        <div className="page-account-information__attention">
          Your password has been updated.
          <Close style={{ cursor: "pointer" }} onClick={handleClose} />
        </div>
      )}
    </div>
  );
}
