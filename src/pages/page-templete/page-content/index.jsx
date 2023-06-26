import React from "react";
import BoxTemplate from "components/box-template";
import Editor from "components/editor";
import { useDispatch } from "react-redux";
import { updateBlocks } from "app/template";

export function PageContentReadOnly({ selectData, stageId }) {
  const blockList = selectData.Stages.filter((item) => item.id === stageId)[0]
    .Blocks;
  return blockList.map((item) => (
    <BoxTemplate key={item.id}>
      <Editor id={item.id} content={item.content} readOnly={true} />
    </BoxTemplate>
  ));
}

export function PageContentEdit({ selectData, stageId }) {
  const dispatch = useDispatch();

  const blockList = React.useMemo(() => {
    return selectData.Stages.filter((item) => item.id === stageId)[0].Blocks;
    //eslint-disable-next-line
  }, []);

  const handleContent = (id, content) => {
    dispatch(updateBlocks({ id, content, stageId }));
  };

  return blockList.map((item) => (
    <BoxTemplate key={item.id}>
      <Editor
        id={item.id}
        content={item.content}
        readOnly={false}
        handleContent={handleContent}
      />
    </BoxTemplate>
  ));
}
