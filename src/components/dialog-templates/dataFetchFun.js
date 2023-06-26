import { isUndefined } from "lodash";
import dayjs from "dayjs";

export const templateDataFetch = (data, userId, isMyData, searchString) => {
  if (isUndefined(data)) return [];
  const { data: templateData } = data;
  return templateDataFormat(
    templateData.filter((item) => {
      const myData = isMyData ? item.createdBy === userId : true;
      return myData && item.name.includes(searchString);
    }),
  );
};

const templateDataFormat = (data) => {
  return data.map((item) => ({
    ...item,
    updatedAt: dayjs(item.updatedAt)
      .format("MMM D - h:mm A")
      .replace("-", "at"),
  }));
};
