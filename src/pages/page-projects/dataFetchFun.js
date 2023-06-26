import { isUndefined, isEmpty, orderBy } from "lodash";

export const filterData = (data, searchString, favoriteData) => {
  if (isUndefined(data) || isUndefined(favoriteData)) return [];
  const { data: projectData } = data;
  const { data: favoriteList } = favoriteData;
  if (isEmpty(searchString)) return dataFetchFun(projectData, favoriteList);
  return dataFetchFun(
    projectData.filter((item) => item.name.includes(searchString)),
    favoriteList,
  );
};

const dataFetchFun = (data, favoriteData) => {
  const value = data.map((item) => {
    const { createdBy, ProjectRoles } = item;
    const creator = ProjectRoles.filter((user) => user.userId === createdBy);
    const favoriteFilterData = favoriteData.filter(
      (fav) => fav.projectId === item.id,
    );
    return {
      ...item,
      complete: item.Stages.every((stage) => stage.status),
      favorite: favoriteData.some((fav) => fav.projectId === item.id),
      favoriteAt: isEmpty(favoriteFilterData)
        ? undefined
        : favoriteFilterData[0].createdAt,
      creatorInfo: isEmpty(creator)
        ? { profileColor: null, name: "" }
        : creator[0].User,
    };
  });

  return orderBy(value, ["favorite", "favoriteAt"], ["desc", "desc"]);
};
