import React from "react";
import Button from "components/button";
import { ReactComponent as Close } from "assets/Plus.svg";
import Checkbox from "components/checkbox";

export function Email({
  check: { mention, block, comment, marketing },
  disabled,
  isSuccess,
  handleCheck,
  handleUpdate,
}) {
  const [success, setSuccess] = React.useState(false);

  const handleClose = () => {
    setSuccess(false);
  };

  React.useEffect(() => {
    if (isSuccess) setSuccess(true);
  }, [isSuccess]);

  return (
    <div className="page-account-information__content page-edit-profile__content">
      <div className={"page-edit-profile__content"}>
        <h2 className="page-account-information__title page-insight__title">
          Email notifications
        </h2>
        <div className="page-account-information__box">
          <h3 className="page-account-information__subtitle">Notification</h3>
          <div className="page-account-information__check">
            <Checkbox
              text="Mention"
              name="mention"
              checked={mention}
              onChange={handleCheck}
            />
            <Checkbox
              text="Block Lock/Lock-off"
              name="block"
              checked={block}
              onChange={handleCheck}
            />
            <Checkbox
              text="Comments on your block"
              name="comment"
              checked={comment}
              onChange={handleCheck}
            />
          </div>
        </div>

        <div className="page-account-information__box">
          <h3 className="page-account-information__subtitle">
            Letters from B.Cradle
          </h3>
          <div className="page-account-information__check">
            <Checkbox
              text="Marketing"
              name="marketing"
              checked={marketing}
              onChange={handleCheck}
            />
          </div>
        </div>

        <Button
          text="Save Changes"
          color="pink"
          disabled={disabled}
          onClick={handleUpdate}
        />
      </div>

      {success && (
        <div className="page-account-information__attention">
          Email notification setting has been updated.
          <Close style={{ cursor: "pointer" }} onClick={handleClose} />
        </div>
      )}
    </div>
  );
}
