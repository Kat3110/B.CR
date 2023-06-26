import * as React from "react";
import "./project-layout.css";
import BackgroundImg from "../../components/background-img";
import bgImage2 from "../../assets/maskBG2.jpg";
import InputSearch from "../../components/input-search";
import BoxBlur from "../../components/box-blur";
import { NavLink } from "react-router-dom";
import { ReactComponent as Plus } from "../../assets/Plus.svg";

function ProjectsLayout(props) {
  return (
    <div className="project-layout">
      <BackgroundImg background={bgImage2} />
      <div className="project-layout__box container">
        <div className="project-layout__left">
          <div className="project-layout__items">
            <div className="tabs">
              <div className="tabs__list">
                {props.projects ? (
                  <>
                    <div className="tabs__tab Mui-selected">
                      <div>Projects</div>
                    </div>
                    <NavLink
                      to="/projects/template/undefined/undefined"
                      style={{ textDecoration: "none" }}
                    >
                      <div className="tabs__tab">
                        <div>Templates</div>
                      </div>
                    </NavLink>
                    <a
                      className="project-layout__btn"
                      href="/projects/create/undefined"
                    >
                      <Plus />
                      Add project
                    </a>
                  </>
                ) : (
                  <>
                    <NavLink
                      to="/projects/undefined/undefined/undefined"
                      style={{ textDecoration: "none" }}
                    >
                      <div className="tabs__tab">
                        <div>Projects</div>
                      </div>
                    </NavLink>
                    <div className="tabs__tab Mui-selected">
                      <div>Templates</div>
                    </div>
                  </>
                )}
              </div>
              <InputSearch
                value={props.searchString}
                onChange={props.handleSearchString}
              />
            </div>
          </div>
          {props.checkboxes ? (
            props.checkboxes
          ) : (
            <BoxBlur
              hght="233px"
              text={props.projects ? "No projects." : "No templates."}
            />
          )}
        </div>
        <div className="project-layout__right">
          {props.tabs && props.tabs}
          {props.content && props.content}
          {!props.tabs && <BoxBlur hght="450px" text={"No blocks."} />}
        </div>
      </div>
    </div>
  );
}

export default ProjectsLayout;
