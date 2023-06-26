import React from "react";
import Home from "./home";
import { initialState, generateVariable } from "./data";
import { useLazyGetUsersQuery } from "services/admin";
import dayjs from "dayjs";

export default function AdminHomeContainer() {
  // state
  const [period, setPeriod] = React.useState(initialState.period);
  const [filter, setFilter] = React.useState(initialState.filter);
  const [page, setPage] = React.useState({ page: 1, perPage: 10 });
  const [variable, setVariable] = React.useState(initialState.variable());

  // rtk
  const [getUser, { data }] = useLazyGetUsersQuery();

  // data fetch function
  const getUserData = React.useCallback(() => {
    getUser({
      ...variable,
      from: variable.from.toISOString(),
      to: variable.to.toISOString(),
      page: page.page,
      limit: page.perPage,
    }).catch((e) => console.log(e));
  }, [getUser, page.page, page.perPage, variable]);

  // handler
  const handlePeriod = (type, date) => {
    const dateOf =
      type === "startDate" ? date.startOf("day") : date.endOf("day");
    const error =
      type === "startDate"
        ? period.endDate.isBefore(dateOf)
        : period.startDate.isAfter(dateOf);
    if (error) return;
    setPeriod((prev) => ({ ...prev, [type]: dateOf }));
  };

  const handlePeriodType = (event) => {
    const { value } = event.target;
    setPeriod((prev) => ({ ...prev, type: value }));
  };

  const handelDateBtn = (type, value) => {
    const endDate = dayjs().endOf("day");
    const startDate = dayjs().subtract(value, type).startOf("day");
    setPeriod((prev) => ({ ...prev, startDate, endDate }));
  };

  const handleFilter = (event) => {
    const { name, value } = event.target;
    setFilter((prev) => ({ ...prev, [name]: value }));
  };

  const handlePage = (type, value) => {
    setPage((prev) => ({ ...prev, [type]: value }));
  };

  const handleResetFilter = () => {
    setPeriod(initialState.period);
    setFilter(initialState.filter);
  };

  const handleSearch = () => {
    setVariable(generateVariable(period, filter));
  };

  // effect
  React.useEffect(() => {
    getUserData();
  }, [getUserData]);

  return (
    <Home
      period={period}
      filter={filter}
      page={page}
      userData={data ? data : { data: [], pageLength: 1 }}
      handlePeriod={handlePeriod}
      handlePeriodType={handlePeriodType}
      handelDateBtn={handelDateBtn}
      handleFilter={handleFilter}
      handlePage={handlePage}
      handleResetFilter={handleResetFilter}
      handleSearch={handleSearch}
      refetch={getUserData}
    />
  );
}
