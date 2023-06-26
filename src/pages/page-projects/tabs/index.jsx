import React from "react";
import { Tabs } from "./tabs";
import {
  useGetProjectByIdQuery,
  useUpdateProjectMutation,
} from "services/projects";
import {
  useGetStagesQuery,
  useCreateStageMutation,
  useUpdateStageMutation,
  useDeleteStageMutation,
} from "services/stages";
import { compact, isEmpty, isUndefined, orderBy } from "lodash";
import update from "immutability-helper";

export default function TabContainer({ projectId, stage, handleStage }) {
  const [project, setProject] = React.useState({ title: "", image: "" });
  const [stageInfo, setStageInfo] = React.useState([]);
  const [deleteList, setDeleteList] = React.useState([]);

  const {
    data: projectData,
    refetch: projectRefetch,
    isFetching,
  } = useGetProjectByIdQuery(projectId);
  const {
    data,
    refetch,
    isFetching: stageFetching,
  } = useGetStagesQuery({ projectId });
  const [updateProject, { isLoading }] = useUpdateProjectMutation();
  const [createStage, { isLoading: createLoading }] = useCreateStageMutation();
  const [updateStage, { isLoading: updateLoading }] = useUpdateStageMutation();
  const [deleteStage, { isLoading: deleteLoading }] = useDeleteStageMutation();

  const projectInfo = React.useMemo(() => {
    if (isUndefined(projectData))
      return { projectImage: "", name: "", ProjectRoles: [] };
    return projectData.data;
  }, [projectData]);
  const stageList = React.useMemo(() => {
    if (isUndefined(data)) return [];
    return orderBy(data.data, ["order"], ["asc"]);
  }, [data]);
  const stageInfoFilter = React.useMemo(() => {
    return stageInfo.filter((item) => item.type !== "delete");
  }, [stageInfo]);
  const diabledSave = React.useMemo(() => {
    return (
      isFetching ||
      stageFetching ||
      isLoading ||
      createLoading ||
      updateLoading ||
      deleteLoading
    );
  }, [
    isFetching,
    stageFetching,
    isLoading,
    createLoading,
    updateLoading,
    deleteLoading,
  ]);

  const handleStageInfo = (index, status, name) => {
    setStageInfo((prev) => {
      return prev.map((item, i) =>
        i === index
          ? {
              ...item,
              status: status ? 1 : 0,
              name,
            }
          : item,
      );
    });
  };
  const handleStageDelete = (index) => {
    setStageInfo((prev) => {
      return prev.filter((item, i) => {
        if (i === index) {
          item.type !== "create" && setDeleteList((prev) => [...prev, item]);
          return false;
        }
        return true;
      });
    });
  };
  const handleStageCreate = () => {
    setStageInfo((prev) => [
      ...prev,
      {
        name: "",
        order: prev.length + 1,
        status: 0,
        projectId,
        type: "create",
      },
    ]);
  };
  const handleTitle = (e) => {
    setProject((prev) => ({ ...prev, title: e.target.value }));
  };
  const handleImage = (value) => {
    setProject((prev) => ({ ...prev, image: value }));
  };
  const handleInitailizeVlaue = React.useCallback(() => {
    setProject({ title: projectInfo.name, image: projectInfo.projectImage });
    setStageInfo(stageList.map((item) => ({ ...item, type: "current" })));
  }, [stageList, projectInfo]);
  const handleUpdate = React.useCallback(async () => {
    await updateProject({
      id: projectId,
      name: project.title,
      projectImage: project.image,
    });
    await Promise.all(
      compact(
        stageInfo.map(async (item, i) => {
          if (item.type === "current")
            return await updateStage({
              id: item.id,
              status: item.status,
              name: item.name,
              order: i + 1,
            });
          return await createStage({
            projectId,
            status: item.status,
            name: item.name === "" ? "No title." : item.name,
            order: i + 1,
          });
        }),
      ),
    );
    if (!isEmpty(deleteList))
      await Promise.all(
        deleteList.map(async (item) => {
          return await deleteStage(item.id);
        }),
      );
    await projectRefetch();
    await refetch();
  }, [
    projectId,
    project,
    stageInfo,
    deleteList,
    updateProject,
    projectRefetch,
    refetch,
    updateStage,
    createStage,
    deleteStage,
  ]);
  const moveStage = React.useCallback((dragIndex, hoverIndex) => {
    setStageInfo((prev) =>
      update(prev, {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, prev[dragIndex]],
        ],
      }),
    );
  }, []);

  React.useEffect(() => {
    handleInitailizeVlaue();
  }, [handleInitailizeVlaue]);

  React.useEffect(() => {
    if (
      !isEmpty(stageList) &&
      (isUndefined(stage) ||
        !stageList.some((item) => item.id === Number(stage)))
    ) {
      handleStage(stageList[0].id.toString());
    }
  }, [handleStage, stage, stageList]);

  return (
    <Tabs
      projectId={projectId}
      stageList={stageList}
      projectInfo={projectInfo}
      stage={stage}
      project={project}
      stageInfo={stageInfoFilter}
      diabledSave={diabledSave}
      handleStage={handleStage}
      handleUpdate={handleUpdate}
      handleTitle={handleTitle}
      handleStageCreate={handleStageCreate}
      handleStageInfo={handleStageInfo}
      handleStageDelete={handleStageDelete}
      handleInitailizeVlaue={handleInitailizeVlaue}
      handleImage={handleImage}
      moveStage={moveStage}
    />
  );
}
