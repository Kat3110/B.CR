import React from "react";
import { Login } from "./login";
import { useLoginMutation, useSendRegistrationMutation } from "services/auth";
import { useNavigate } from "react-router-dom";
import { isEmpty } from "lodash";

export default function LoginContainer() {
  // state
  const [value, setValue] = React.useState({
    email: "",
    password: "",
  });
  const [valid, setValid] = React.useState(false);
  const [open, setOpen] = React.useState({ resend: false, success: false });

  // react-router-dom navigate
  const navigate = useNavigate();

  // rtk
  const [login, { isLoading }] = useLoginMutation();
  const [resend, { isLoading: resendLoading }] = useSendRegistrationMutation();

  // handler
  const handleValue = (event) => {
    const { name, value } = event.target;
    setValue((prev) => ({ ...prev, [name]: value }));
  };

  const handleLogin = () => {
    if (isEmpty(value.email) || isEmpty(value.password)) {
      setValid(true);
    } else {
      login(value)
        .unwrap()
        .then(() => {
          navigate("/home");
        })
        .catch(({ data: { message } }) => {
          if (message === "User is not a confirmed user") {
            handleOpen("resend", true);
            valid && setValid(false);
          } else {
            setValid(true);
          }
        });
    }
  };

  const handleOpen = (type, value) => {
    setOpen((prev) => ({ ...prev, [type]: value }));
  };

  const handleResend = () => {
    resend({ email: value.email })
      .unwrap()
      .then(() => handleOpen("resend", false))
      .catch((e) => console.log(e));
  };

  return (
    <Login
      value={value}
      valid={valid}
      open={open}
      disabledBtn={isLoading}
      resendLoading={resendLoading}
      handleValue={handleValue}
      handleLogin={handleLogin}
      handleOpen={handleOpen}
      handleResend={handleResend}
    />
  );
}
