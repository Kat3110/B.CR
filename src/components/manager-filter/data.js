const menu = {
  permission: [
    {
      value: "all",
      label: "All",
    },
    {
      value: 2,
      label: "Master",
    },
    {
      value: 3,
      label: "Manager",
    },
    {
      value: 0,
      label: "Client",
    },
  ],
  state: [
    {
      value: "all",
      label: "All",
    },
    {
      value: "activities",
      label: "Activities",
    },
    {
      value: "withdrawal",
      label: "Withdrawal",
    },
  ],
  searchType: [
    {
      value: "name",
      label: "Name",
    },
    {
      value: "email",
      label: "Email",
    },
    {
      value: "company",
      label: "Company",
    },
  ],
};

export const selectBoxData = Object.entries(menu).map(([name, value]) => ({
  name,
  array: value,
}));

export const arraySelectStepNew = [
  {
    value: "subscription",
    label: "Joined",
  },
  {
    value: "latest_access",
    label: "Last access",
  },
];

export const buttonFilterData = [
  { number: "2", text: "Days", type: "day" },
  { number: "1", text: "Day", type: "day" },
  { number: "1", text: "Month", type: "month" },
  { number: "3", text: "Months", type: "month" },
  { number: "6", text: "Months", type: "month" },
  { number: "1", text: "Year", type: "year" },
];
