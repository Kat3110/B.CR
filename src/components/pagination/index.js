import * as React from "react";
import "./pagination.css";
import DropdownMenu from "../dropdown-menu";
import Button from "../../components/button";
import { pageBtnGenerator } from "./utils";
import { ReactComponent as ArrowDouble } from "../../assets/CaretDoubleLeft.svg";
import { ReactComponent as Arrow } from "../../assets/CaretLeft.svg";
import { ReactComponent as ArrowDown } from "../../assets/CaretDown.svg";
import { ReactComponent as ArrowUp } from "../../assets/CaretUp.svg";

function Pagination({ page: { page, perPage }, pageLength, handlePage }) {
  return (
    <>
      <div className="pagination">
        <div className="pagination__box">
          <div className="pagination__page">Page</div>
          <div className="pagination__leaf">
            <span>{page} </span>/ {pageLength}
          </div>
        </div>
        <div className="pagination__number">
          <div className="pagination__svg">
            <ArrowDouble />
            <Arrow />
          </div>
          {pageBtnGenerator(page, pageLength, handlePage)}
          <div className="pagination__svg">
            <Arrow className="pagination__svg-rotate" />
            <ArrowDouble className="pagination__svg-rotate" />
          </div>
        </div>
        <div className="pagination__drop">
          <div>Lists per page</div>
          <DropdownMenu
            nameClass="pagination__drop-menu"
            trigger={
              <Button reverse={true} text={perPage} icon={<ArrowDown />} />
            }
            changeTrigger={
              <Button reverse={true} text={perPage} icon={<ArrowUp />} />
            }
            content={
              <div className="pagination__drop-list">
                <span onClick={() => handlePage("perPage", 10)}>10</span>
                <span onClick={() => handlePage("perPage", 20)}>20</span>
                <span onClick={() => handlePage("perPage", 200)}>200</span>
              </div>
            }
          />
        </div>
      </div>
      <div className="pagination pagination--mobile">
        <div className="pagination__head">
          <div className="pagination__number">
            <div className="pagination__svg">
              <ArrowDouble />
              <Arrow />
            </div>
            <span className="pagination__number-active">1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
            <span>5</span>
            <div className="pagination__svg">
              <ArrowDouble className="pagination__svg-rotate" />
              <Arrow className="pagination__svg-rotate" />
            </div>
          </div>
        </div>
        <div className="pagination__body">
          <div className="pagination__box">
            <div className="pagination__page">Page</div>
            <div className="pagination__leaf">
              <span>1 </span>/ 27
            </div>
          </div>
          <div className="pagination__drop">
            <div>Lists per page</div>
            <DropdownMenu
              nameClass="pagination__drop-menu"
              trigger={
                <Button reverse={true} text={"10"} icon={<ArrowDown />} />
              }
              changeTrigger={
                <Button reverse={true} text={"10"} icon={<ArrowUp />} />
              }
              content={
                <div className="pagination__drop-list">
                  <span>1</span>
                  <span>2</span>
                  <span>3</span>
                  <span>4</span>
                  <span>5</span>
                  <span>6</span>
                  <span>7</span>
                  <span>8</span>
                  <span>9</span>
                  <span>10</span>
                </div>
              }
            />
          </div>
        </div>
      </div>
    </>
  );
}
export default Pagination;
