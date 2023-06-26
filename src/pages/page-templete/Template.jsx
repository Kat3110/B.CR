import * as React from "react";
import { useState } from "react";
import "./page-template.css";
import Checkbox from "components/checkbox";
import CheckboxTemplate from "components/checkbox-template";
import ProjectsLayout from "layout/projects-layout";
import Header from "layout/header";
import { isEmpty, isUndefined } from "lodash";
import { Tabs } from "./tabs";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { getTemplate } from "app/template";
import { PageContentEdit, PageContentReadOnly } from "./page-content";

export function Template({
  isMyData,
  listData,
  selectId,
  searchString,
  handleIsMyData,
  handleSelectId,
  handleSearchString,
  handleDelete,
}) {
  const [edit, setEdit] = useState(false);
  const selectData = useSelector(getTemplate);

  const navigate = useNavigate();
  const { templateId: templateParam, stageId: stageParam } = useParams();

  const stage = React.useMemo(() => {
    if (stageParam === "undefined") return "";
    return stageParam;
  }, [stageParam]);

  const handleChange = (_event, newValue) => {
    navigate(`/projects/template/${templateParam}/${newValue}`);
  };

  React.useEffect(() => {
    if (stageParam === "undefined" && selectData && !isEmpty(selectData.Stages))
      navigate(
        `/projects/template/${templateParam}/${selectData.Stages[0].id.toString()}`,
      );
    //eslint-disable-next-line
  }, [selectData, stageParam, templateParam]);

  React.useEffect(() => {
    if (!isEmpty(stage)) setEdit(false);
  }, [stage]);

  return (
    <>
      <Header join titlePage={"Projects"} />
      <div className="page-template">
        <ProjectsLayout
          projects={false}
          searchString={searchString}
          handleSearchString={handleSearchString}
          checkboxes={
            <div className="page-template__checkboxes">
              <Checkbox
                text="Show Only My Templates"
                color="rgba(0,0,0,0.5)"
                checked={isMyData}
                onChange={() => handleIsMyData()}
              />
              {!isEmpty(listData) && (
                <>
                  {listData.map((item) => (
                    <CheckboxTemplate
                      check={item.id === selectId}
                      title={item.name}
                      time={item.updatedAt}
                      onClick={() => handleSelectId(item.id)}
                      key={item.id}
                    />
                  ))}
                </>
              )}
            </div>
          }
          tabs={
            !isUndefined(selectData) && (
              <Tabs
                stage={stage}
                edit={edit}
                selectData={selectData}
                setEdit={setEdit}
                handleChange={handleChange}
                handleDelete={handleDelete}
              />
            )
          }
          content={
            !isUndefined(selectData) &&
            !isEmpty(stage) && (
              <div className="page-template__block">
                <div className="page-template__block">
                  {edit ? (
                    <PageContentEdit
                      selectData={selectData}
                      stageId={Number(stage)}
                    />
                  ) : (
                    <PageContentReadOnly
                      selectData={selectData}
                      stageId={Number(stage)}
                    />
                  )}
                </div>
              </div>
            )
          }
        />
      </div>
    </>
  );
}
