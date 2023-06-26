import React from "react";
import Login from "./login";
import { useLoginMutation } from "services/admin";
import { typeCheck } from "utils/validation";
import { isEmpty } from "lodash";
import { useNavigate } from "react-router-dom";

export default function AdminLoginContainer() {
  // state
  const [value, setValue] = React.useState({ email: "", password: "" });
  const [valid, setValid] = React.useState({
    email: { type: "format", error: false },
    password: { type: "format", error: false },
  });

  // react-router-dom navigate
  const navigate = useNavigate();

  // rtk
  const [login, { isLoading }] = useLoginMutation();

  // btn disable flag
  const disabledBtn = (function () {
    const validation = Object.values(valid).some((item) => item.error);
    const requireCheck = Object.entries(value).some(([_name, value]) =>
      isEmpty(value),
    );

    return validation || requireCheck || isLoading;
  })();

  // handler
  const handleLogin = () => {
    login(value)
      .unwrap()
      .then(() => {
        navigate("/manager-home");
      })
      .catch(({ data: { message } }) => {
        // error handling of admin login api
        if (message === "Email not exist" || message === "User deleted")
          setValid((prev) => ({
            ...prev,
            email: { error: true, type: "unregister" },
          }));
        if (message === "Password not correct")
          setValid((prev) => ({
            ...prev,
            email: { error: true, type: "wrong" },
          }));
      });
  };

  const handleValue = (event) => {
    const { name, value } = event.target;

    const check = typeCheck(value, name);
    setValid((prev) => ({
      ...prev,
      [name]: { error: !check, type: "format" },
    }));
    setValue((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <Login
      value={value}
      valid={valid}
      disabledBtn={disabledBtn}
      handleLogin={handleLogin}
      handleValue={handleValue}
    />
  );
}
