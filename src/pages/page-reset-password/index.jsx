import React from "react";
import { Reset } from "./reset";
import { useForgotPasswordMutation } from "services/auth";
import { typeCheck } from "utils/validation";

export default function ResetContainer() {
  const [email, setEmail] = React.useState("");
  const [valid, setValid] = React.useState(false);

  const [send, { isLoading }] = useForgotPasswordMutation();

  const disabled = React.useMemo(() => {
    return valid || isLoading;
  }, [valid, isLoading]);

  const handleEmail = (e) => {
    setValid(!typeCheck(email, "email"));
    setEmail(e.target.value);
  };
  const handleSend = () => {
    send({ email })
      .unwrap()
      .catch((e) => console.log(e));
  };

  return (
    <Reset
      email={email}
      valid={valid}
      disabled={disabled}
      handleEmail={handleEmail}
      handleSend={handleSend}
    />
  );
}
