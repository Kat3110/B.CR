import * as React from "react";
import "./dialog-mentions.css";
import DialogPattern from "../dialog-pattern";
import { ReactComponent as ChatCircleTextPink } from "../../assets/ChatCircleTextPink.svg";
import CheckboxMentions from "../checkbox-mentions";
import RadioMentions from "../radio-mentions";

function DialogMentions() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <DialogPattern
        className="dialog-mentions"
        trigger={
          <>
            <ChatCircleTextPink />
            Mentions
          </>
        }
        icon={<ChatCircleTextPink />}
        title="Mentions"
        custom="dialog-mentions"
        open={open}
        handleOpen={handleOpen}
        handleClose={handleClose}
        content={
          <>
            <RadioMentions title={"Not Read"} />
            <CheckboxMentions
              text={
                <div className="dialog-mentions__card">
                  <div className="dialog-mentions__title">
                    <span>Bryce. L. </span>
                    mentioned You @<span>Package</span>
                  </div>
                  <div className="dialog-mentions__time">
                    Aug 3, 2022 at 11:27 AM
                  </div>
                  <div className="dialog-mentions__title">
                    @<span>Letty</span> Please upload the file in Dec 21.
                  </div>
                </div>
              }
            />
            <CheckboxMentions
              text={
                <div className="dialog-mentions__card">
                  <div className="dialog-mentions__title">
                    <span>Bryce. L. </span>
                    mentioned You @<span>Package</span>
                  </div>
                  <div className="dialog-mentions__time">
                    Aug 3, 2022 at 11:27 AM
                  </div>
                  <div className="dialog-mentions__title">
                    @<span>Letty</span> Please upload the file in Dec 21.
                  </div>
                </div>
              }
            />
            <CheckboxMentions
              text={
                <div className="dialog-mentions__card">
                  <div className="dialog-mentions__title">
                    <span>Bryce. L. </span>
                    mentioned You @<span>Package</span>
                  </div>
                  <div className="dialog-mentions__time">
                    Aug 3, 2022 at 11:27 AM
                  </div>
                  <div className="dialog-mentions__title">
                    @<span>Letty</span> Please upload the file in Dec 21.
                  </div>
                </div>
              }
            />
          </>
        }
      />
    </>
  );
}

export default DialogMentions;
