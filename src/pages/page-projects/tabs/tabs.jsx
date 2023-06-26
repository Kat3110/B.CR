import React from "react";
import TabContext from "@mui/lab/TabContext";
import TextField from "@mui/material/TextField";
import CustomTooltip from "components/custom-tooltip";
import RadioProjects from "components/radio-projects";
import ButtonChange from "components/button-change";
import Button from "components/button";
import CapitalLetter from "components/capital-letter";
import DropdownMenu from "components/dropdown-menu";
import CheckboxCustom from "components/checkbox-custom";
import CheckboxesDelete from "components/checkboxes-delete";
import DialogCancel from "components/dialog-cancel";
import DialogSave from "components/dialog-save";
import DialogMembers from "components/dialog-members";
import DialogFiles from "components/dialog-files";
import DialogUrl from "components/dialog-url";
import Img from "assets/icon1.jpg";
import { ReactComponent as Change } from "assets/change.svg";
import { ReactComponent as DoneIcon } from "assets/PencilSimpleLine.svg";
import DialogInstallTemplate from "components/dialog-install-template";
import DialogMentions from "components/dialog-mentions";
import { SelectImg } from "utils/selectImg";
import { take } from "lodash";
import clsx from "clsx";
import { useSelector } from "react-redux";
import { selectMe } from "app/auth";
import DialogUploadImg from "components/dialog-upload-img";

const arrayCapitalLetter = [
  {
    letter: "p",
    bgColor: "#00A3FF",
  },
  {
    letter: "u",
    bgColor: "#FFD702",
  },
  {
    letter: "h",
    bgColor: "#00E99E",
  },
  {
    letter: "t",
  },
  {
    letter: "a",
  },
];

export function Tabs({
  projectId,
  projectInfo,
  stageList,
  stage,
  project,
  stageInfo,
  diabledSave,
  handleStage,
  handleTitle,
  handleStageInfo,
  handleStageCreate,
  handleStageDelete,
  handleImage,
  handleUpdate,
  handleInitailizeVlaue,
  moveStage,
}) {
  const [edit, setEdit] = React.useState(false);

  const { id } = useSelector(selectMe);

  const isPm = React.useMemo(() => {
    return projectInfo.ProjectRoles.some(
      (item) => item.role === 1 && item.userId === id,
    );
  }, [id, projectInfo]);

  const changeClass = (e) => {
    let allCustoms = document.querySelectorAll(".page-projects__custom");

    if (e.target.classList.contains("page-projects__custom-active")) {
      e.target.classList.remove("page-projects__custom-active");
    } else {
      allCustoms.forEach((item) =>
        item.classList.remove("page-projects__custom-active"),
      );
      e.target.classList.add("page-projects__custom-active");
    }
  };

  const update = async () => {
    await handleUpdate();
    setEdit(false);
  };

  React.useEffect(() => {
    setEdit(false);
  }, [projectId]);

  return edit ? (
    <div className="project-layout__tabs tabs">
      <div className="page-projects__typo page-template__typo">
        <div className="page-projects__card page-template__card">
          <DialogUploadImg
            image={project.image}
            onChange={handleImage}
            project
          />
          <TextField
            required
            id="outlined-required"
            value={project.title}
            onChange={handleTitle}
          />
        </div>
        <div className="page-projects__group-button page-template__group-button">
          <DoneIcon className="page-projects__edit" />
          <DialogCancel
            onClick={() => {
              setEdit(false);
              handleInitailizeVlaue();
            }}
          />
          <Button
            text="Save"
            color="pink"
            size="s"
            disabled={diabledSave}
            onClick={update}
          />
        </div>
      </div>
      <CheckboxesDelete
        data={stageInfo.map((item, i) => ({
          value: i,
          id: item.id,
          label: item.name,
          checked: item.status,
        }))}
        handleDelete={handleStageDelete}
        handleCreate={handleStageCreate}
        handleEdit={handleStageInfo}
        moveStage={moveStage}
      />
    </div>
  ) : (
    <>
      <TabContext value={stage}>
        <div className="project-layout__tabs--mobile tabs">
          <RadioProjects
            check={true}
            completed={true}
            img={Img}
            color=""
            title="Dr.G First Project"
            name="Yves Saint Laurent"
            pinned="false"
            badge=""
            key="1"
          />
          <div className="page-projects__typo--mobile">
            <div className="page-projects__box--mobile">
              <div className="page-projects__account page-template__account project-card__accounts">
                {arrayCapitalLetter.map((letter, index) => (
                  <CapitalLetter
                    letter={letter.letter}
                    bgColor={letter.bgColor}
                    key={index}
                  />
                ))}
              </div>
              <div className="page-projects__group-button page-template__group-button">
                {isPm && (
                  <>
                    <DialogMembers projectId={projectId} />
                    <DialogInstallTemplate />
                    <DialogSave stageList={stageList} />
                  </>
                )}
                <DropdownMenu
                  id={2}
                  trigger={<ButtonChange icon={<Change />} />}
                  content={
                    <div className="dropdown-menu__list">
                      <DialogMentions />
                      <DialogFiles />
                      <DialogUrl />
                    </div>
                  }
                />
              </div>
            </div>
            <div className="page-projects__customs">
              {stageList.map((item) => (
                <div
                  className="page-projects__custom"
                  onClick={changeClass}
                  key={item.id}
                >
                  <CustomTooltip
                    content={<CheckboxCustom checked={item.status} />}
                    hover="Complete stage"
                  />
                  {item.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </TabContext>
      <div className="project-layout__tabs tabs">
        <TabContext value={stage}>
          <div className="page-projects__typo page-template__typo">
            <div className="page-projects__card page-template__card">
              <img
                src={SelectImg(projectInfo.projectImage)}
                alt=""
                style={{ width: "50px", borderRadius: 10 }}
              />
              <h2 className="page-projects__title page-template__title">
                {projectInfo.name}
              </h2>
            </div>
            <div className="page-projects__box page-template__box">
              <div className="page-projects__account page-template__account project-card__accounts">
                {take(projectInfo.ProjectRoles, 5).map((item, index) => (
                  <CapitalLetter
                    letter={item.User.name}
                    bgColor={item.User.profileColor}
                    key={index}
                  />
                ))}
              </div>
              <div className="page-projects__group-button page-template__group-button">
                <DialogMembers projectId={projectId} />
                {isPm && (
                  <>
                    <div onClick={() => setEdit(true)}>
                      <ButtonChange icon={<DoneIcon />} />
                    </div>
                    <DialogSave stageList={stageList} />
                  </>
                )}
                <DropdownMenu
                  id={2}
                  trigger={<ButtonChange icon={<Change />} />}
                  content={
                    <div className="dropdown-menu__list">
                      <DialogMentions />
                      <DialogFiles />
                      <DialogUrl />
                    </div>
                  }
                />
              </div>
            </div>
          </div>
          <div className="page-projects__customs">
            {stageList.map((item) => (
              <div
                className={
                  stage === item.id.toString()
                    ? clsx(
                        "page-projects__custom",
                        "page-projects__custom-active",
                      )
                    : "page-projects__custom"
                }
                onClick={() => handleStage(item.id.toString())}
                key={item.id}
              >
                <CustomTooltip
                  content={<CheckboxCustom checked={item.status} disabled />}
                  hover={item.name}
                />
                {item.name}
              </div>
            ))}
          </div>
        </TabContext>
      </div>
    </>
  );
}
