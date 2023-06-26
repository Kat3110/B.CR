import dayjs from "dayjs";

export const generateVariable = (period, filter) => {
  return {
    periodType: period.type,
    from: period.startDate,
    to: period.endDate,
    role: filter.permission,
    typeUser: filter.state,
    typeSearch: filter.searchType,
    searchText: filter.searchString,
  };
};

export const initialState = {
  period: {
    type: "subscription",
    startDate: dayjs().startOf("day"),
    endDate: dayjs().endOf("day"),
  },
  filter: {
    permission: "all",
    state: "all",
    searchType: "name",
    searchString: "",
  },
  variable: function () {
    return generateVariable(this.period, this.filter);
  },
};
