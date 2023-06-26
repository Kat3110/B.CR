import React from "react";
import DropdownNotification from "./dropdown-notification";
import {
  useSeenNotificationMutation,
  useGetNotificationAlertQuery,
  useLazyGetNotificationAlertQuery,
} from "services/notifications";
import { isUndefined } from "lodash";
import { useNavigate } from "react-router-dom";

const defaultArgs = { page: 1, limit: 5 };
export default function DropdownNotificationContainer() {
  const navigate = useNavigate();

  const { data: updateData } = useGetNotificationAlertQuery(
    {
      type: 2,
      ...defaultArgs,
    },
    { pollingInterval: 5000 },
  );
  const { data: mentionData } = useGetNotificationAlertQuery(
    {
      type: 3,
      ...defaultArgs,
    },
    { pollingInterval: 5000 },
  );
  const { data: noticeData } = useGetNotificationAlertQuery(
    {
      type: 1,
      ...defaultArgs,
    },
    { pollingInterval: 5000 },
  );

  const [update] = useSeenNotificationMutation();
  const [getData] = useLazyGetNotificationAlertQuery();

  const onClick = (item) => {
    const { id, status, projectId, stageId, blockId } = item;

    if (!status) {
      update([id])
        .then((res) => {
          navigate(
            `/projects/${projectId}/${stageId || "undefind"}/${
              blockId || "undefind"
            }`,
          );
        })
        .catch((err) => console.log(err));

      return;
    }
    navigate(
      `/projects/${projectId}/${stageId || "undefind"}/${
        blockId || "undefind"
      }`,
    );
  };

  const notificationData = React.useMemo(() => {
    return {
      updateData: isUndefined(updateData)
        ? {
            readData: { data: [], count: 0 },
            unreadData: { data: [], count: 0 },
          }
        : updateData.data,
      mentionData: isUndefined(mentionData)
        ? {
            readData: { data: [], count: 0 },
            unreadData: { data: [], count: 0 },
          }
        : mentionData.data,
      noticeData: isUndefined(noticeData)
        ? {
            readData: { data: [], count: 0 },
            unreadData: { data: [], count: 0 },
          }
        : noticeData.data,
    };
  }, [updateData, mentionData, noticeData]);

  return (
    <DropdownNotification
      onClick={onClick}
      getData={getData}
      updateList={notificationData.updateData}
      mentionList={notificationData.mentionData}
      noticeList={notificationData.noticeData}
    />
  );
}
