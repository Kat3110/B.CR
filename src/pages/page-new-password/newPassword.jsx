import * as React from "react";
import "./page-new-password.css";
import Header from "../../layout/header";
import Button from "../../components/button";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import { ReactComponent as EyeClosed } from "../../assets/EyeClosed.svg";
import { ReactComponent as Close } from "../../assets/Plus.svg";
import { ReactComponent as Eye } from "../../assets/Eye.svg";

export function NewPassword({
  email,
  password,
  disabled,
  open,
  handleClose,
  handlePassword,
  handleUpdate,
}) {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <Header welcome />
      <div className="page-new-password container">
        <div className="page-new-password__typo">
          <h2 className="page-new-password__title">Set a new password</h2>
          <div className="page-new-password__subtitle">
            You can set a new password for {email}
          </div>
        </div>
        <div className="page-new-password__select">
          <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
            <OutlinedInput
              id="outlined-adornment-password"
              placeholder="Password"
              value={password}
              onChange={handlePassword}
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <Eye /> : <EyeClosed />}
                  </IconButton>
                </InputAdornment>
              }
            />
            <span className="page-password__help">
              8 to 16 letters and numbers mixed
            </span>
          </FormControl>

          <Button
            className="page-new-password__btn"
            text="Save Change"
            color="pink"
            disabled={disabled}
            onClick={handleUpdate}
          />
        </div>
        {open && (
          <div className="page-new-password__attention">
            Your password has been updated.
            <Close onClick={handleClose} />
          </div>
        )}
      </div>
    </>
  );
}
