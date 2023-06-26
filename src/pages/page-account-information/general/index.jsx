import React from "react";
import { General } from "./general";
import { useSelector, useDispatch } from "react-redux";
import { selectMe, updateUser } from "app/auth";
import { useUpdateProfileMutation } from "services/auth";
import { isEmpty } from "lodash";

export default function GeneralContainer() {
  const {
    email,
    name,
    nation: country,
    company,
    department: position,
    role,
  } = useSelector(selectMe);
  const dispatch = useDispatch();

  const [state, setState] = React.useState({
    email,
    name,
    country,
    company,
    position,
  });

  const [update, { isLoading, isSuccess }] = useUpdateProfileMutation();

  const handleUserInfo = (event) => {
    const { name, value } = event.target;
    setState((prev) => ({ ...prev, [name]: value }));
  };

  const handleCountry = (code) => {
    setState((prev) => ({ ...prev, country: code }));
  };

  const handleUpdate = () => {
    update({
      name: state.name,
      companyName: state.company,
      department: state.position,
      nation: state.country,
      role,
    })
      .unwrap()
      .then(
        ({
          data: {
            name,
            nation,
            Business: { companyName: company, department },
          },
        }) => {
          dispatch(
            updateUser({
              name,
              nation,
              company,
              department,
            }),
          );
        },
      );
  };

  const disabled = isLoading || isEmpty(state.name);

  return (
    <General
      userInfo={state}
      disabled={disabled}
      isSuccess={isSuccess}
      handleUserInfo={handleUserInfo}
      handleCountry={handleCountry}
      handleUpdate={handleUpdate}
    />
  );
}
