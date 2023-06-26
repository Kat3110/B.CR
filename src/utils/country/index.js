import React from "react";
import Icon from "country-flag-icons/react/3x2";
import { countryList } from "./countryList";

export const countryData = countryList.map((item) => {
  const IconComponent = Icon[item.Code];
  return {
    name: item.Name,
    code: item.Code,
    icon: <IconComponent style={{ width: 20, height: 15 }} />,
  };
});
