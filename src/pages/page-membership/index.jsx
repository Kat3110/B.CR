import React from "react";
import { isEmpty } from "lodash";
import { useRegisterMutation, useCheckExistEmailMutation } from "services/auth";
import Membership from "./Membership";
import { typeCheck } from "utils/validation";
import { colorGenerate } from "utils/colorGenerate";
import { useNavigate } from "react-router-dom";

export default function MembershipContainer() {
  // state
  const [registerInfo, setRegisterInfo] = React.useState({
    id: "",
    name: "",
    password: "",
    country: "",
    company: "",
    position: "",
    terms: false,
  });
  const [valid, setValid] = React.useState({
    id: false,
    name: false,
    password: false,
  });

  const navigate = useNavigate();

  // rtk
  const [register, { isLoading }] = useRegisterMutation();
  const [existEmailCheck] = useCheckExistEmailMutation();

  // btn disable flag
  const disabledBtn = (function () {
    const validation = Object.values(valid).some((item) => item);
    const requireValue = ["id", "name", "password", "country"];
    const requireCheck =
      Object.entries(registerInfo).some(
        ([name, value]) => requireValue.includes(name) && isEmpty(value.trim()),
      ) || !registerInfo.terms;

    return validation || requireCheck || isLoading;
  })();

  // handler
  const handleRegister = () => {
    register({
      email: registerInfo.id,
      password: registerInfo.password,
      name: registerInfo.name,
      companyName: registerInfo.company,
      department: registerInfo.position,
      nation: registerInfo.country,
      role: 0,
      profileColor: colorGenerate(),
    }).then(() => navigate("/login"));
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
      [name]: name === "terms" ? !prev[name] : value,
    }));
  };

  const handleCountry = (code) => {
    setRegisterInfo((prev) => ({ ...prev, country: code }));
  };

  return (
    <Membership
      registerInfo={registerInfo}
      valid={valid}
      disabled={disabledBtn}
      handleRegister={handleRegister}
      handleRegisterInfo={handleRegisterInfo}
      handleCountry={handleCountry}
    />
  );
}
