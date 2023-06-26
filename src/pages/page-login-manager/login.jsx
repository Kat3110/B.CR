import React from "react";
import "./page-login-manager.css";
import TextField from "@mui/material/TextField";
import LogoAdmin from "components/logo-admin";

export default function AdminLogin({
  value: { email, password },
  valid: { email: errorEmail, password: errorPassword },
  disabledBtn,
  handleLogin,
  handleValue,
}) {
  return (
    <>
      <div className="page-login-manager">
        <LogoAdmin />
        <div className="page-login-manager__allowance">
          <div className="page-login__label">
            <TextField
              type="email"
              className={`${
                errorEmail.error ? `page-login__input-error` : null
              }`}
              placeholder="e-mail adress"
              variant="outlined"
              name="email"
              valie={email}
              onChange={handleValue}
            />
            <div
              className={`page-login__error ${
                errorEmail.error ? `page-login__error-show` : null
              }`}
            >
              {errorEmail.type === "format" ? "Wrong format" : "Unregistered"}
            </div>
          </div>
          <div className="page-login__form-password">
            <div className="page-login__label">
              <TextField
                className={`${
                  errorPassword.error ? `page-login__input-error` : null
                }`}
                placeholder="Password"
                type="password"
                name="password"
                value={password}
                onChange={handleValue}
              />
              <div
                className={`page-login__error ${
                  errorPassword.error ? `page-login__error-show` : null
                }`}
              >
                {errorPassword.type === "format"
                  ? "More than 8 characters"
                  : "Wrong password"}
              </div>
            </div>
            <button
              onClick={handleLogin}
              disabled={disabledBtn}
              className="page-login__btn"
            >
              Go!
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
