import React from "react";
import { Password } from "./password";
import { typeCheck } from "utils/validation";
import {
  useConfirmPasswordMutation,
  useChangePasswordMutation,
} from "services/user";
import { isEmpty } from "lodash";

export default function PasswordContainer() {
  const [state, setState] = React.useState({
    password: "",
    newPassword: "",
  });
  const [error, setError] = React.useState({
    password: { error: false, msg: "" },
    newPassword: { error: false, msg: "" },
  });

  const [confirm] = useConfirmPasswordMutation();
  const [update, { isLoading, isSuccess }] = useChangePasswordMutation();

  const handleState = (event) => {
    const { name, value } = event.target;
    setError((prev) => ({
      ...prev,
      [name]: {
        error: !typeCheck(value, "password"),
        msg: "Please enter 8-16 characters in English and numbers.",
      },
    }));
    setState((prev) => ({ ...prev, [name]: value.trim() }));
  };

  const handleUpdate = () => {
    confirm({ password: state.password })
      .unwrap()
      .then(({ data }) => {
        if (data) {
          update({
            oldPassword: state.password,
            newPassword: state.newPassword,
          }).then(() =>
            setState({
              password: "",
              newPassword: "",
            }),
          );
        } else {
          setError((prev) => ({
            ...prev,
            password: {
              error: true,
              msg: "The old password does not match.",
            },
          }));
        }
      });
  };

  React.useEffect(() => {
    if (
      !error.newPassword.error &&
      state.password === state.newPassword &&
      !isEmpty(state.newPassword)
    )
      setError((prev) => ({
        ...prev,
        newPassword: {
          error: true,
          msg: "Same as the old password",
        },
      }));
  }, [error.newPassword.error, state.newPassword, state.password]);

  const disabled =
    isLoading ||
    isEmpty(state.password) ||
    isEmpty(state.newPassword) ||
    error.password.error ||
    error.newPassword.error;

  return (
    <Password
      state={state}
      error={error}
      disabled={disabled}
      isSuccess={isSuccess}
      handleState={handleState}
      handleUpdate={handleUpdate}
    />
  );
}
