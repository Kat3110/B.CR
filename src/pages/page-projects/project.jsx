import * as React from "react";
import "./page-projects.css";
import Header from "layout/header";
import ProjectsLayout from "layout/projects-layout";
import RadioProjects from "components/radio-projects";
import Contents from "./page-contents";
import Tabs from "./tabs";
import { isEmpty } from "lodash";
import { useParams, useNavigate } from "react-router-dom";

export function Projects({
  listData,
  searchString,
  handleSearchString,
  handleFavorite,
  handleSelectId,
}) {
  const navigate = useNavigate();
  const { projectId, stageId } = useParams();
  const handleStage = React.useCallback(
    (newValue) => {
      navigate(`/projects/${projectId}/${newValue}/undefined`);
    },
    //eslint-disable-next-line
    [projectId],
  );

  const selectId = React.useMemo(() => {
    return projectId === "undefined" ? undefined : Number(projectId);
  }, [projectId]);
  const stage = React.useMemo(() => {
    return stageId === "undefined" ? "" : stageId;
  }, [stageId]);

  return (
    <>
      <Header join titlePage={"Projects"} />
      <div className="page-projects">
        <ProjectsLayout
          projects={true}
          searchString={searchString}
          handleSearchString={handleSearchString}
          checkboxes={
            !isEmpty(listData) && (
              <>
                <div className="radio-projects__checkboxes">
                  {listData.map((item) => (
                    <RadioProjects
                      id={item.id}
                      check={item.id === selectId}
                      completed={item.complete}
                      img={item.projectImage}
                      color={item.creatorInfo.profileColor}
                      title={item.name}
                      name={item.creatorInfo.name}
                      pinned={item.favorite}
                      handleCheck={handleSelectId}
                      handlePinned={handleFavorite}
                      key={item.id}
                    />
                  ))}
                </div>
                <div className="page-projects__overflow"></div>
              </>
            )
          }
          tabs={
            selectId && (
              <Tabs
                projectId={selectId}
                stage={stage}
                handleStage={handleStage}
              />
            )
          }
          content={!isEmpty(stage) && <Contents stageId={Number(stage)} />}
        />
      </div>
    </>
  );
}
