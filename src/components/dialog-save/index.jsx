import React from "react";
import { DialogSave } from "./dialogSave";
import { stageListFetch } from "./dataFetchFun";
import { isEmpty } from "lodash";
import { useCreateTemplateMutation } from "services/templates";
import { useNavigate } from "react-router-dom";

export default function DialogSaveContainer({ stageList }) {
  // state
  const [title, setTitle] = React.useState("");
  const [stageId, setStageId] = React.useState(
    stageList.map((item) => item.id),
  );

  // rtk
  const [create, { isLoading }] = useCreateTemplateMutation();

  // react-router-dom
  const navigate = useNavigate();

  // value
  const stageListData = React.useMemo(() => {
    return stageListFetch(stageList, stageId);
  }, [stageId, stageList]);
  const disabled = React.useMemo(() => {
    return isEmpty(title) || isEmpty(stageId) || isLoading;
  }, [stageId, title, isLoading]);

  // handler
  const handleSelectId = React.useCallback((id) => {
    setStageId((prev) => {
      if (prev.includes(id)) return prev.filter((item) => item !== id);
      return [...prev, id];
    });
  }, []);
  const handleTitle = React.useCallback((e) => {
    setTitle(e.target.value);
  }, []);

  const handleCreate = React.useCallback(() => {
    create({ stageIds: stageId, isPublic: 0, name: title }).then((data) => {
      console.log(data);
    });
  }, [create, stageId, title]);

  React.useEffect(() => {
    setTitle("");
    setStageId(stageList.map((item) => item.id));
  }, [stageList]);

  return (
    <DialogSave
      stageList={stageListData}
      disabled={disabled}
      title={title}
      handleTitle={handleTitle}
      handleSelectId={handleSelectId}
      handleCreate={handleCreate}
    />
  );
}
