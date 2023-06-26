import React from "react";
import { Projects } from "./project";
import { useGetProjectListQuery } from "services/projects";
import {
  useGetFavortiesQuery,
  useCreateFavoriteMutation,
  useDeleteFavoriteByIdMutation,
} from "services/favorites";
import { filterData } from "./dataFetchFun";
import { isEmpty, isNull } from "lodash";
import { getSocket } from "utils/socket";
import { updateUser } from "app/auth";
import { addUpdateList, resetUpdateList } from "app/project";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

export default function ProjectContainer() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { projectId, stageId, blockId } = useParams();

  const { data } = useGetProjectListQuery();
  const { data: favoriteData, refetch: favoriteRefetch } =
    useGetFavortiesQuery();
  const [createFavorite] = useCreateFavoriteMutation();
  const [deleteFavorite] = useDeleteFavoriteByIdMutation();

  const [selectId, setSelectId] = React.useState(null);
  const [searchString, setSearchString] = React.useState("");

  const listData = React.useMemo(() => {
    const value = filterData(data, searchString, favoriteData);
    return value;
  }, [data, searchString, favoriteData]);

  const selectData = React.useMemo(() => {
    if (isNull(selectId) || !listData.some((item) => item.id === selectId))
      return undefined;
    return listData.filter((item) => item.id === selectId)[0];
  }, [selectId, listData]);

  const handleSearchString = (event) => {
    setSearchString(event.target.value);
  };
  const handleSelectId = (id) => {
    setSelectId(id);
  };
  const handleFavorite = React.useCallback(
    (favorite, projectId) => {
      if (favorite) {
        createFavorite({ projectId }).then(() => favoriteRefetch());
      } else {
        console.log(favoriteData);
        deleteFavorite(
          favoriteData.data.filter((item) => item.projectId === projectId)[0]
            .id,
        ).then(() => favoriteRefetch());
      }
    },
    [favoriteData, createFavorite, deleteFavorite, favoriteRefetch],
  );

  React.useEffect(() => {
    if (!isNull(selectId)) {
      const socket = getSocket(selectId);
      try {
        socket.on("connect", () => {
          dispatch(updateUser({ socketId: socket.id }));
        });
        socket.on("data", (data) => {
          if (socket.id !== data.senderId) dispatch(addUpdateList(data.data));
        });
        socket.on("disconnect", () => {
          dispatch(updateUser({ socketId: null }));
        });
      } catch (e) {
        console.log(e);
      }

      return () => {
        socket.disconnect();
        socket.off("connect");
        socket.off("Data");
        socket.off("disconnect");
        dispatch(resetUpdateList());
      };
    }
  }, [dispatch, selectId]);

  React.useEffect(() => {
    if (!isNull(selectId))
      navigate(`/projects/${selectId}/undefined/undefined`);
    //eslint-disable-next-line
  }, [selectId]);
  React.useEffect(() => {
    if (
      projectId !== "undefined" &&
      !isEmpty(listData) &&
      !listData.some((item) => item.id === Number(projectId))
    )
      navigate(`/projects/undefined/undefined/undefined`);
    //eslint-disable-next-line
  }, [listData, projectId]);
  React.useEffect(() => {
    if (
      (blockId !== "undefined" &&
        (stageId === "undefined" || projectId === "undefined")) ||
      (stageId !== "undefined" && projectId === "undefined")
    )
      navigate(`/projects/undefined/undefined/undefined`);
    //eslint-disable-next-line
  }, [projectId, stageId, blockId]);

  return (
    <Projects
      selectData={selectData}
      listData={listData}
      searchString={searchString}
      handleSearchString={handleSearchString}
      handleSelectId={handleSelectId}
      handleFavorite={handleFavorite}
    />
  );
}
