import * as React from "react";
import "./page-reset-password.css";
import Header from "../../layout/header";
import TextField from "@mui/material/TextField";
import Button from "../../components/button";

export function Reset({ email, valid, disabled, handleEmail, handleSend }) {
  return (
    <>
      <Header welcome />
      <div className="page-reset-password container">
        <div className="page-reset-password__typo">
          <h2 className="page-reset-password__title">Reset your password</h2>
          <div className="page-reset-password__subtitle">
            Please enter you email address.
            <br />
            You will receive a link to create a new password via email.
          </div>
        </div>
        <div className="page-reset-password__select">
          <TextField
            type="Email"
            className="page-reset-password__email"
            placeholder="Email"
            variant="outlined"
            value={email}
            onChange={handleEmail}
          />

          <div className="page-reset-password__email-help">
            {valid && "Please enter a valid email address."}
          </div>

          <div className="page-reset-password__link">
            <Button
              text="Reset Password"
              color="pink"
              disabled={disabled}
              onClick={handleSend}
            />
          </div>
        </div>
      </div>
    </>
  );
}
