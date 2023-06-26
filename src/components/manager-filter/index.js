import * as React from "react";
import "./manager-filter.css";
import { selectBoxData, arraySelectStepNew, buttonFilterData } from "./data";
import { filterBtnData } from "./utils";
import DatePickers from "../../components/date-pickers";
import ButtonFilter from "../button-filter";
import Button from "../../components/button";
import SelectWindow from "../../components/select-window";
import InputSearch from "../input-search";

function ManagerFilter({
  period,
  filter,
  handlePeriod,
  handlePeriodType,
  handelDateBtn,
  handleFilter,
  handleResetFilter,
  handleSearch,
}) {
  return (
    <div className="manager-filter">
      <div className="insight-filter__row-first">
        <h3 className="insight-filter__subtitle">Period</h3>
        <SelectWindow
          value={period.type}
          array={arraySelectStepNew}
          width={158}
          onChange={handlePeriodType}
        />
        <div className="insight-filter__date">
          <DatePickers
            type="startDate"
            value={period.startDate}
            handlePeriod={handlePeriod}
          />
          ~
          <DatePickers
            type="endDate"
            value={period.endDate}
            handlePeriod={handlePeriod}
          />
        </div>
        <div className="manager-filter__buttons">
          {filterBtnData(period.startDate, period.endDate).map(
            (item, index) => (
              <ButtonFilter
                key={index}
                number={item.number}
                text={item.text}
                active={item.active}
                onClick={() => handelDateBtn(item.type, item.number)}
              />
            ),
          )}
        </div>
      </div>
      <div className="manager-filter__row-second">
        <h3 className="insight-filter__subtitle">Condition</h3>
        <div className="manager-filter__row-selects">
          {selectBoxData.map((item, i) => (
            <SelectWindow
              key={i}
              name={item.name}
              value={filter[item.name]}
              array={item.array}
              width={158}
              onChange={handleFilter}
            />
          ))}
        </div>
        <div className="manager-filter__row-search">
          <InputSearch
            text="Please enter your keywords."
            value={filter.searchString}
            name="searchString"
            onChange={handleFilter}
          />
          <div className="manager-filter__row-btn">
            <Button
              text="Reset"
              color="default"
              size="s"
              onClick={handleResetFilter}
            />
            <Button
              text="Search"
              color="black"
              size="s"
              onClick={handleSearch}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ManagerFilter;
