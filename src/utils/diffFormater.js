import dayjs from "dayjs";

export const diffFormater = (date) => {
  const now = dayjs();
  const curDate = dayjs(date);
  const minDiff = now.diff(curDate, "minute");
  if (minDiff < 1) return "Just now";
  if (minDiff < 60) return `${minDiff} mintues ago`;
  const hourDiff = now.diff(curDate, "hour");
  if (hourDiff < 24) return `${hourDiff} hours ago`;
  const dayDiff = now.diff(curDate, "day");
  if (dayDiff < 7) return `${dayDiff} days ago`;
  return curDate.format("MMM DD, YYYY");
};
