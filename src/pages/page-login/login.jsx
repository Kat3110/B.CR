import * as React from "react";
import "./page-login.css";
import TextField from "@mui/material/TextField";
import bcgCreate from "../../assets/bcgCreate.svg";
import Header from "../../layout/header";
import DialogCertificated from "../../components/dialog-certificated";
import { ReactComponent as Close } from "../../assets/Plus.svg";
import Button from "components/button";
import { useNavigate } from "react-router-dom";

export function Login({
  value,
  valid,
  open,
  resendLoading,
  handleValue,
  handleLogin,
  handleOpen,
  handleResend,
}) {
  const navigate = useNavigate();

  return (
    <>
      {/*use props welcome, findId, findPw for change Header title*/}
      <Header welcome />
      <div className="page-login container">
        <div className="page-login__form">
          <img src={bcgCreate} alt="." />
          <div className="page-login__label">
            <TextField
              type="email"
              placeholder="Email"
              variant="outlined"
              name="email"
              value={value.email}
              onChange={handleValue}
            />
          </div>
          <div className="page-login__form-password">
            <div className="page-login__label">
              <TextField
                placeholder="Password"
                type="password"
                name="password"
                value={value.password}
                onChange={handleValue}
              />
            </div>
            <div className="page-login__error-welcome">
              {valid && "Please check your Email and Password."}
            </div>
            <Button color="pink" text="Sign In" onClick={handleLogin} />
            <DialogCertificated
              open={open.resend}
              onClose={() => handleOpen("resend", false)}
              onResend={handleResend}
              disabled={resendLoading}
            />
          </div>
          <div className="page-login__recovery-welcome">
            <span
              className="page-login__text"
              onClick={() => navigate("/reset-password")}
            >
              Forgot password?
            </span>
            <div className="page-login__box-welcome">
              <span className="page-login__member">Not a member?</span>
              <span
                className="page-login__text"
                onClick={() => navigate("/membership")}
              >
                Join now.
              </span>
            </div>
          </div>
        </div>
        {open.success && (
          <div className="page-login__attention page-account-information__attention">
            Your email has been verified successfully.
            <Close
              style={{ cursor: "pointer" }}
              onClick={() => handleOpen("success", false)}
            />
          </div>
        )}
      </div>
    </>
  );
}
