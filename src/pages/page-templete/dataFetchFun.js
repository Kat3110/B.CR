import { isUndefined, isEmpty } from "lodash";
import dayjs from "dayjs";

export const templateDataFetch = (data, userId, isMyData, searchString) => {
  if (isUndefined(data)) return [];
  const { data: templateData } = data;
  const filterData = filterDataFun(
    templateData,
    userId,
    isMyData,
    searchString,
  );

  return templateDataFormat(filterData, userId);
};

const filterDataFun = (data, userId, isMyData, searchString) => {
  return data.filter((item) => {
    const myData = isMyData ? item.createdBy === userId : true;
    const search = !isEmpty(searchString)
      ? item.name.includes(searchString)
      : true;
    return myData && search;
  });
};

const templateDataFormat = (data, userId) => {
  return data.map((item) => ({
    ...item,
    isAuthor: item.createdBy === userId,
    updatedAt: dayjs(item.updatedAt)
      .format("MMM D - h:mm A")
      .replace("-", "at"),
  }));
};
