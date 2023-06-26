import React from "react";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import Tab from "@mui/material/Tab";
import TabPanel from "@mui/lab/TabPanel";
import ButtonChange from "components/button-change";
import { ReactComponent as DeleteIcon } from "assets/Trash.svg";
import { ReactComponent as DoneIcon } from "assets/PencilSimpleLine.svg";
import { ReactComponent as Check } from "assets/Check.svg";
import TextField from "@mui/material/TextField";
import ChipsDelete from "components/chip-delete";
import DialogCancel from "components/dialog-cancel";
import DialogInstallTemplate from "components/dialog-install-template";
import Button from "components/button";
import { isEmpty } from "lodash";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectMe } from "app/auth";

export function Tabs({
  selectData,
  stage,
  edit,
  setEdit,
  handleChange,
  handleDelete,
}) {
  const navigate = useNavigate();
  const { id } = useSelector(selectMe);
  const tabList = React.useMemo(() => {
    const isValue = selectData.Stages.filter(
      (item) => item.id === Number(stage),
    );
    return isEmpty(isValue)
      ? undefined
      : selectData.Stages.map((tab) => (
          <Tab
            style={{ cursor: "pointer" }}
            className="tabs__tab"
            value={tab.id.toString()}
            disableRipple
            label={<div>{tab.name}</div>}
            key={tab.id}
          />
        ));
  }, [stage, selectData]);

  const chipData = React.useMemo(() => {
    return selectData.Stages.map((item) => ({ id: item.id, name: item.name }));
  }, [selectData]);

  const isAuthor = React.useMemo(() => {
    return selectData.createdBy === id;
  }, [id, selectData.createdBy]);

  return (
    <>
      {stage ? (
        edit ? (
          <div className="project-layout__tabs page-template__tabs-change tabs">
            <div className="page-template__typo">
              <TextField
                required
                id="outlined-required"
                value={selectData.name}
              />
              <div className="page-template__group-button">
                <DoneIcon />
                <DialogCancel onClick={() => setEdit(!edit)} />
                <Button size={"s"} color={"black"} text="Save"></Button>
              </div>
            </div>
            <ChipsDelete chipData={chipData} edit />
          </div>
        ) : (
          <>
            <div className="page-template--mobile">
              <TabContext value={stage}>
                <div className="page-template__typo--mobile">
                  <h2 className="page-template__title--mobile">
                    {selectData.name}
                  </h2>
                  <TabList
                    className="tabs__list--mobile page-template__tabs-list--mobile"
                    onChange={handleChange}
                  >
                    {tabList}
                  </TabList>
                </div>

                <div className="page-template__group-button--mobile">
                  <button
                    className="page-template__btn"
                    onClick={() =>
                      navigate(`/projects/create/${selectData.id}`)
                    }
                  >
                    <Check />
                    Use template
                  </button>
                  <div className="page-template__change--mobile">
                    <DialogInstallTemplate template />
                    <ButtonChange
                      onClick={handleDelete}
                      icon={<DeleteIcon />}
                    />
                  </div>
                </div>
              </TabContext>
            </div>

            <div className="project-layout__tabs tabs">
              <TabContext value={stage}>
                <div className="page-template__typo">
                  <h2 className="page-template__title">{selectData.name}</h2>
                  <div className="page-template__group-button">
                    <button
                      className="page-template__btn"
                      onClick={() =>
                        navigate(`/projects/create/${selectData.id}`)
                      }
                    >
                      <Check />
                      Use template
                    </button>
                    {isAuthor && (
                      <>
                        <ButtonChange
                          onClick={() => setEdit(!edit)}
                          icon={<DoneIcon />}
                        />
                        <ButtonChange
                          onClick={handleDelete}
                          icon={<DeleteIcon />}
                        />
                      </>
                    )}
                  </div>
                </div>
                <TabList
                  className="tabs__list page-template__tabs-list"
                  onChange={handleChange}
                >
                  {tabList}
                </TabList>
                {selectData.Stages.map((tab) => (
                  <TabPanel
                    value={tab.id.toString()}
                    sx={{ p: 0 }}
                    key={tab.id}
                  />
                ))}
              </TabContext>
            </div>
          </>
        )
      ) : undefined}
    </>
  );
}
