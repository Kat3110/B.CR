import React from "react";
import "./page-manager-home.css";
import HeaderManager from "../../layout/header-manager";
import ManagerFilter from "../../components/manager-filter";
import InsightTableUsersTwo from "../../components/insight-table-users-two";
import AddMembers from "./add-members";
import AddMember from "./add-member";

export default function AdminHome({
  period,
  filter,
  page,
  userData,
  handlePeriod,
  handlePeriodType,
  handelDateBtn,
  handleFilter,
  handleResetFilter,
  handleSearch,
  handlePage,
  refetch,
}) {
  const [showAdd, setShowAdd] = React.useState(false);

  return (
    <>
      <HeaderManager />
      <div className="page-dssd.manager-home container">
        <ManagerFilter
          period={period}
          filter={filter}
          handlePeriod={handlePeriod}
          handlePeriodType={handlePeriodType}
          handelDateBtn={handelDateBtn}
          handleFilter={handleFilter}
          handleResetFilter={handleResetFilter}
          handleSearch={handleSearch}
        />

        {showAdd ? (
          <div className="page-manager-home__add-member">
            <div className="page-manager-home__links">
              <span className="page-manager-home__link-active">
                Add a member
              </span>
              <span onClick={() => setShowAdd((prev) => !prev)}>
                Add members
              </span>
            </div>
            <div className="page-manager-home__group-button">
              <AddMember />
            </div>
          </div>
        ) : (
          <AddMembers setShowAdd={setShowAdd} />
        )}
        <div className="page-manager-home__table">
          <InsightTableUsersTwo
            manager
            data={userData}
            page={page}
            handlePage={handlePage}
            refetch={refetch}
          />
        </div>
      </div>
    </>
  );
}
