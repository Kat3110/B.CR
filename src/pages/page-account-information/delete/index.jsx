import React from "react";
import { Delete } from "./delete";
import { typeCheck } from "utils/validation";
import { userLogout, selectMe } from "app/auth";
import { useSelector, useDispatch } from "react-redux";
import {
  useConfirmPasswordMutation,
  useSoftDeleteUserMutation,
} from "services/user";
import { isEmpty } from "lodash";

export default function DeleteContainer() {
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState({ error: false, msg: "" });

  const { id } = useSelector(selectMe);
  const dispatch = useDispatch();

  const [confirm, { data, isLoading }] = useConfirmPasswordMutation();
  const [deleteUser] = useSoftDeleteUserMutation();

  const handlePassword = (event) => {
    const { value } = event.target;
    setError({
      error: !typeCheck(value, "password"),
      msg: "Please enter 8-16 characters in English and numbers.",
    });
    setPassword(value.trim());
  };

  const handleConfirm = () => {
    confirm({ password })
      .unwrap()
      .then(({ data }) => {
        if (!data)
          setError({
            error: true,
            msg: "The password does not match.",
          });
      });
  };

  const handleDelete = () => {
    deleteUser(id).then(() => dispatch(userLogout()));
  };

  const disabled = isLoading || isEmpty(password) || error.error;

  return (
    <Delete
      password={password}
      disabled={disabled}
      error={error}
      data={data}
      handlePassword={handlePassword}
      handleConfirm={handleConfirm}
      handleDelete={handleDelete}
    />
  );
}
