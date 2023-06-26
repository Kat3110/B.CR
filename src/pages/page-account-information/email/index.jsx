import React from "react";
import { Email } from "./email";
import {
  useGetEmailSettingQuery,
  useUpsertEmailSettingMutation,
} from "services/user";
import { isUndefined, isNull } from "lodash";

export default function EmailContainer() {
  const [check, setCheck] = React.useState({
    mention: true,
    block: true,
    comment: true,
    marketing: true,
  });

  const { data: checkData } = useGetEmailSettingQuery();
  const [update, { isLoading, isSuccess }] = useUpsertEmailSettingMutation();

  const handleCheck = (event) => {
    const { name } = event.target;
    setCheck((prev) => ({ ...prev, [name]: !prev[name] }));
  };

  const handleUpdate = () => {
    update(check)
      .unwrap()
      .then(({ data: { _id, ...data } }) => setCheck(data));
  };

  React.useEffect(() => {
    if (!isUndefined(checkData) && !isNull(checkData.data)) {
      const { mention, block, comment, marketing } = checkData.data;
      setCheck({ mention, block, comment, marketing });
    }
  }, [checkData]);

  return (
    <Email
      check={check}
      disabled={isLoading}
      isSuccess={isSuccess}
      handleCheck={handleCheck}
      handleUpdate={handleUpdate}
    />
  );
}
