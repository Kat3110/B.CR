import React from "react";
import { HomeFeed } from "./homeFeed";
import { useLazyGetProjectListQuery } from "services/projects";
import { useGetNotificationQuery } from "services/notifications";
import { isUndefined } from "lodash";
import { useNavigate } from "react-router-dom";

export default function HomeFeedContainer() {
  const [page, setPage] = React.useState(1);
  const [projectData, setProjectData] = React.useState([]);
  const [ref, setRef] = React.useState(null);

  const navigate = useNavigate();

  const defaultArgs = { page: 1, limit: 5 };
  const [getProject, { isLoading }] = useLazyGetProjectListQuery();
  const { data: updateData } = useGetNotificationQuery({
    type: 2,
    ...defaultArgs,
  });
  const { data: mentionData } = useGetNotificationQuery({
    type: 3,
    ...defaultArgs,
  });
  const { data: noticeData } = useGetNotificationQuery({
    type: 1,
    ...defaultArgs,
  });

  const getProjectData = React.useCallback(() => {
    getProject({ page, limit: 10 })
      .unwrap()
      .then(({ data, count }) => {
        const newData = data.map((item) => {
          const { Stages, ProjectRoles } = item;
          const percent = Math.floor(
            (Stages.filter((item) => item.status).length / Stages.length) * 100,
          );
          const account = ProjectRoles.map(({ User }) => ({
            letter: User.name,
            color: User.profileColor,
          }));

          return {
            ...item,
            percent,
            account,
          };
        });

        setProjectData((prev) => {
          const arr = [...prev, ...newData];
          return arr.length + 5 <= count ? arr : arr.slice(0, count);
        });

        setPage((prev) => {
          return prev + 1;
        });
      });
  }, [getProject, page]);

  const notificationData = React.useMemo(() => {
    return {
      updateData: isUndefined(updateData)
        ? []
        : updateData.data.data.map((item) => item),
      mentionData: isUndefined(mentionData)
        ? []
        : mentionData.data.data.map((item) => item),
      noticeData: isUndefined(noticeData)
        ? []
        : noticeData.data.data.map((item) => item),
    };
  }, [updateData, mentionData, noticeData]);

  React.useEffect(() => {
    function updateScrollPosition() {
      const { clientWidth, scrollWidth, scrollLeft } = ref;
      if (clientWidth + Math.floor(scrollLeft) === scrollWidth && !isLoading)
        getProjectData();
    }
    if (ref) {
      const value = ref;
      value.addEventListener("scroll", updateScrollPosition, false);
      return () => {
        value.removeEventListener("scroll", updateScrollPosition, false);
      };
    }
    // eslint-disable-next-line
  }, [ref]);

  React.useEffect(() => {
    getProjectData();
    // eslint-disable-next-line
  }, []);

  const onClick = (item) => {
    const { projectId, stageId, blockId } = item;

    navigate(
      `/projects/${projectId}/${stageId || "undefind"}/${
        blockId || "undefind"
      }`,
    );
  };

  return (
    <HomeFeed
      divRef={setRef}
      onClick={onClick}
      projectData={projectData}
      notificationData={notificationData}
    />
  );
}
