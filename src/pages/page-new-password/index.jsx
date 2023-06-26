import React from "react";
import { NewPassword } from "./newPassword";
import { useParams } from "react-router-dom";
import {
  useUpdatePasswordMutation,
  useGetEmailByTokenQuery,
} from "services/auth";
import { typeCheck } from "utils/validation";

export default function NewPasswordContainer() {
  const { token } = useParams();

  const [password, setPassword] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [open, setOpen] = React.useState(false);

  const { data } = useGetEmailByTokenQuery(token);
  const [update, { isLoading }] = useUpdatePasswordMutation();

  const disabled = React.useMemo(() => {
    return isLoading || !typeCheck(password, "password");
  }, [isLoading, password]);

  const handleClose = () => {
    setOpen(false);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleUpdate = () => {
    update({ email, password, token })
      .unwrap()
      .then(() => {
        setOpen(true);
      })
      .catch((e) => console.log(e));
  };

  React.useEffect(() => {
    if (data) {
      const { data: email } = data;
      setEmail(email);
    }
  }, [data]);

  return (
    <NewPassword
      email={email}
      password={password}
      disabled={disabled}
      open={open}
      handleClose={handleClose}
      handlePassword={handlePassword}
      handleUpdate={handleUpdate}
    />
  );
}
