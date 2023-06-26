import * as React from "react";
import "./dialog-comments.css";
import { ReactComponent as Chat } from "assets/ChatCircleTextPink.svg";
import DialogPattern from "../dialog-pattern";
import CardComments from "../card-comments";
import GroupButton from "../group-button";
import InputSearch from "../input-search";
import { ReactComponent as ChatCircleText } from "assets/ChatCircleText.svg";
import dayjs from "dayjs";

export function DialogComments({
  open,
  comment,
  commentList,
  disabled,
  handleCreate,
  handleDelete,
  handleOpen,
  handleClose,
  handleComment,
}) {
  return (
    <>
      <DialogPattern
        className="dialog-comments"
        trigger={<ChatCircleText />}
        icon={<Chat />}
        title="Comments"
        custom="dialog-comments"
        open={open}
        handleOpen={handleOpen}
        handleClose={handleClose}
        triggerStyle={{ width: 20, height: 20 }}
        content={
          <>
            <div className="dialog-comments__scroll">
              <div className="dialog-comments__cards">
                {commentList.map((card) => (
                  <CardComments
                    name={card.User.name}
                    color={card.User.profileColor}
                    time={dayjs(card.createdAt)
                      .format("MMM D, YYYY - h:mm A")
                      .replace("-", "at")}
                    comment={card.content}
                    handleDelete={handleDelete}
                    value={card.id}
                    key={card.id}
                  />
                ))}
              </div>
            </div>
            <div className="dialog-comments__textarea">
              <textarea
                placeholder="Write it here."
                maxLength={500}
                rows="10"
                value={comment}
                onChange={handleComment}
              ></textarea>
              <div className="dialog-comments__buttons">
                <GroupButton
                  disabled={disabled}
                  size="m"
                  onClick={handleCreate}
                />
              </div>
            </div>
            <InputSearch />
          </>
        }
      />
    </>
  );
}
