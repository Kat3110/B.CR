import React from "react";
import { BlocksList } from "./blockList";
import { useGetBlocksQuery } from "services/blocks";
import { isUndefined } from "lodash";

export default function BLocksListContainer({ stageId }) {
  const { data } = useGetBlocksQuery(stageId);

  const listData = React.useMemo(() => {
    if (isUndefined(data)) return [];
    return data.data;
  }, [data]);
  return <BlocksList data={listData} />;
}
