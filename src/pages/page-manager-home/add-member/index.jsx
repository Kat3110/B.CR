import React from "react";
import { Add } from "./Add";
import {
  useRegisterMutation,
  useCheckExistEmailMutation,
} from "services/admin";
import { isEmpty } from "lodash";
import { typeCheck } from "utils/validation";
import { colorGenerate } from "utils/colorGenerate";

export default function AddMember() {
  // state
  const initialState = {
    id: "",
    name: "",
    password: "",
    country: "",
    company: "",
    position: "",
    role: 0,
  };

  const [registerInfo, setRegisterInfo] = React.useState(initialState);
  const [valid, setValid] = React.useState({
    id: false,
    name: false,
    password: false,
  });
  const [open, setOpen] = React.useState(false);

  // rtk
  const [register, { isLoading }] = useRegisterMutation();
  const [existEmailCheck] = useCheckExistEmailMutation();

  // btn disable flag
  const disabledBtn = (function () {
    const validation = Object.values(valid).some((item) => item);
    const requireValue = ["id", "name", "password", "country"];
    const requireCheck = Object.entries(registerInfo).some(
      ([name, value]) => requireValue.includes(name) && isEmpty(value.trim()),
    );

    return validation || requireCheck || isLoading;
  })();

  // handler
  const handleRegister = () => {
    register({
      email: registerInfo.id,
      password: registerInfo.password,
      name: registerInfo.name,
      companyName: registerInfo.company,
      nation: registerInfo.country,
      role: registerInfo.role,
      profileColor: colorGenerate(),
    }).then((data) => console.log(data));
  };

  const handleRegisterInfo = (event) => {
    const { name, value } = event.target;

    const typeCheckList = ["id", "password"];
    if (typeCheckList.includes(name)) {
      const check = typeCheck(value, name);
      setValid((prev) => ({ ...prev, [name]: !check }));

      // email exist check
      if (name === "id" && check) {
        existEmailCheck(value)
          .unwrap()
          .then(({ data: { result } }) => {
            setValid((prev) => ({ ...prev, [name]: result }));
          });
      }
    }

    setRegisterInfo((prev) => ({
      ...prev,
      [name]: name === "password" ? value.trim() : value,
    }));
  };

  const handleCountry = (code) => {
    setRegisterInfo((prev) => ({ ...prev, country: code }));
  };

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    setRegisterInfo(initialState);
  };

  return (
    <Add
      open={open}
      disabled={disabledBtn}
      valid={valid}
      registerInfo={registerInfo}
      handleRegister={handleRegister}
      handleRegisterInfo={handleRegisterInfo}
      handleCountry={handleCountry}
      handleOpen={handleOpen}
      handleClose={handleClose}
    />
  );
}
