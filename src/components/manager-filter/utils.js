import { buttonFilterData } from "./data";

export const filterBtnData = (startDate, endDate) => {
  return buttonFilterData.map((item) => {
    const { number, type } = item;
    return {
      ...item,
      active: endDate.subtract(number, type).startOf("day").isSame(startDate),
    };
  });
};
