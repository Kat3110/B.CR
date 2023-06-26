import * as React from "react";
import Dialog from "@mui/material/Dialog";
import "./dialog-templates.css";
import { ReactComponent as Edit } from "../../assets/PencilSimpleLine.svg";
import InputSearch from "../input-search";
import Checkbox from "../checkbox";
import GroupButton from "../group-button";
import CheckboxTemplate from "../checkbox-template";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { isUndefined, isEmpty } from "lodash";
import BlockList from "../block-list";

export function DialogTemplates({
  isMyData,
  listData,
  selectId,
  selectData,
  open,
  searchString,
  handleIsMyData,
  handleSelectId,
  handleConfirm,
  handleClickOpen,
  handleClose,
  handleSearchString,
}) {
  const fullWidth = true;
  const maxWidth = "lg";

  const [stage, setStage] = React.useState("");

  const stageData = React.useMemo(() => {
    if (isUndefined(selectData)) return { tabs: undefined, blocks: undefined };
    const isValue = selectData.Stages.filter(
      (item) => item.id.toString() === stage,
    );
    return isEmpty(isValue)
      ? { tabs: undefined, blocks: undefined }
      : {
          tabs: selectData.Stages.map((tab) => (
            <Tab
              className="tabs__tab"
              value={tab.id.toString()}
              disableRipple
              label={<div>{tab.name}</div>}
              key={tab.id}
            />
          )),
          blocks: selectData.Stages.map((stage) => (
            <TabPanel key={stage.id} value={stage.id.toString()} sx={{ p: 0 }}>
              <BlockList stageId={stage.id} />
            </TabPanel>
          )),
        };
  }, [stage, selectData]);

  const handleChange = (_event, newValue) => {
    setStage(newValue);
  };

  React.useEffect(() => {
    if (!isUndefined(selectData)) setStage(selectData.Stages[0].id.toString());
  }, [selectData]);

  return (
    <div className="dialog-templates">
      <button className="dialog__btn" onClick={handleClickOpen}>
        <Edit />
      </button>
      <Dialog
        open={open}
        onClose={handleClose}
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        className="dialog__window dialog-templates__window"
      >
        <div className="dialog-templates__box">
          <div className="dialog-templates__left">
            <h2 className="dialog-templates__title">Templates</h2>
            <div className="dialog-templates__search">
              <InputSearch value={searchString} onChange={handleSearchString} />
              <Checkbox
                checked={isMyData}
                text="Show Only My Templates"
                color="rgba(0,0,0,0.25)"
                onChange={handleIsMyData}
              />
            </div>
            <div className="dialog-templates__container">
              <div className="dialog-templates__scroll">
                {listData.map((item) => (
                  <CheckboxTemplate
                    check={item.id === selectId}
                    title={item.name}
                    time={item.updatedAt}
                    onClick={() => handleSelectId(item.id)}
                    key={item.id}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="dialog-templates__right">
            <h2 className="dialog-templates__title">Preview</h2>
            <div className="tabs">
              <TabContext value={stage}>
                <TabList className="tabs__list" onChange={handleChange}>
                  {stageData.tabs}
                </TabList>
                <div className="dialog-templates__block">
                  <div className="dialog-templates__scroll">
                    {stageData.blocks}
                  </div>
                </div>
              </TabContext>
            </div>
          </div>
        </div>
        <div className="dialog-templates__btn">
          <GroupButton
            onClick={handleConfirm}
            close={handleClose}
            justify="flex-end"
          />
        </div>
      </Dialog>
    </div>
  );
}
