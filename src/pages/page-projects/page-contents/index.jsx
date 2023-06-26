import React from "react";
import {
  useLazyGetBlocksQuery,
  useCreateBlockMutation,
  useUpdateBlockByIdMutation,
  useLazyGetBlockByIdQuery,
} from "services/blocks";
import { Contents } from "./contents";
import { useDispatch, useSelector } from "react-redux";
import { selectMe } from "app/auth";
import { getUpdateList, deleteUpdateList } from "app/project";
import { compact, isEmpty } from "lodash";
import { useParams, useNavigate } from "react-router-dom";

export default function ContentsContainer({ stageId }) {
  const [getBlocks] = useLazyGetBlocksQuery();
  const [create] = useCreateBlockMutation();
  const [update] = useUpdateBlockByIdMutation();
  const [getBlocksById] = useLazyGetBlockByIdQuery();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { projectId, stageId: stageParams, blockId } = useParams();

  const { id } = useSelector(selectMe);
  const updateList = useSelector(getUpdateList);

  const [blocks, setBlocks] = React.useState([]);

  const handleGetBlocks = React.useCallback(() => {
    if (stageId !== 0) {
      getBlocks(stageId)
        .unwrap()
        .then(({ data }) => {
          if (
            blockId !== "undefined" &&
            !data.some((item) => item.id === Number(blockId))
          )
            navigate(`/projects/${projectId}/${stageParams}/undefined`);
          setBlocks(
            data.map((item) => ({
              ...item,
              isAuthor: item.createdBy === id,
            })),
          );
        });
    }
    //eslint-disable-next-line
  }, [blockId, getBlocks, id, projectId, stageId, stageParams]);

  const handleCreate = (data) => {
    create({ stageId, content: data })
      .unwrap()
      .then(({ data: { id: blockId } }) => {
        getBlocksById(blockId)
          .unwrap()
          .then(({ data }) =>
            setBlocks((prev) => [
              ...prev,
              { ...data, isAuthor: data.createdBy === id },
            ]),
          );
      });
  };

  const handleContent = React.useCallback(
    (id, content) => {
      update({ id, content, stageId });
    },
    [stageId, update],
  );

  const fetchData = React.useCallback(
    async (data) => {
      if (data.some((item) => item.type === "block")) {
        await Promise.all(
          compact(
            data.map(async (item) => {
              if (item.type === "block") {
                if (item.action === "delete")
                  return setBlocks((prev) =>
                    prev.filter((blocks) => blocks.id !== item.id),
                  );
                return await getBlocksById(item.id)
                  .unwrap()
                  .then(({ data }) => {
                    setBlocks((prev) => {
                      if (item.action === "update") {
                        return prev.map((item) =>
                          item.id === data.id ? { ...item, ...data } : item,
                        );
                      }
                      return [
                        ...prev,
                        { ...data, isAuthor: data.createdBy === id },
                      ];
                    });
                  });
              }
              return undefined;
            }),
          ),
        );
      }
      dispatch(deleteUpdateList(data.map((item) => item.id)));
    },
    [dispatch, getBlocksById, id],
  );

  React.useEffect(() => {
    if (
      !isEmpty(updateList) &&
      updateList.some((item) => item.type === "block")
    )
      fetchData(updateList);
  }, [fetchData, updateList]);

  React.useEffect(() => {
    handleGetBlocks();
  }, [handleGetBlocks]);

  return (
    <Contents
      blocks={blocks}
      handleCreate={handleCreate}
      handleContent={handleContent}
    />
  );
}
