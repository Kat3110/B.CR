import * as React from "react";
import { DialogComments } from "./dialog-comments";
import {
  useLazyGetCommentsQuery,
  useCreateCommentMutation,
  useDeleteCommentByIdMutation,
} from "services/comments";
import { isUndefined, orderBy } from "lodash";

export default function DialogCommentsContainer({ blockId }) {
  const [open, setOpen] = React.useState(false);
  const [comment, setComment] = React.useState("");

  const [getComments, { data }] = useLazyGetCommentsQuery(blockId);
  const [create, { isLoading }] = useCreateCommentMutation();
  const [deleteComments] = useDeleteCommentByIdMutation();

  const commentList = React.useMemo(() => {
    if (isUndefined(data)) return [];
    return orderBy(data.data, ["createdAt"], ["desc"]);
  }, [data]);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleComment = React.useCallback((e) => {
    setComment(e.target.value);
  }, []);
  const handleRefetch = React.useCallback(() => {
    setComment("");
    getComments(blockId);
  }, [blockId, getComments]);
  const handleCreate = React.useCallback(() => {
    create({ blockId, content: comment }).then(() => {
      handleRefetch();
    });
  }, [blockId, comment, create, handleRefetch]);
  const handleDelete = React.useCallback(
    (id) => {
      deleteComments(id).then(() => {
        handleRefetch();
      });
    },
    [deleteComments, handleRefetch],
  );

  React.useEffect(() => {
    if (open) {
      setComment("");
      getComments(blockId);
    }
  }, [blockId, getComments, open]);

  return (
    <DialogComments
      open={open}
      comment={comment}
      commentList={commentList}
      disabled={isLoading || comment.length === 0}
      handleCreate={handleCreate}
      handleDelete={handleDelete}
      handleOpen={handleOpen}
      handleClose={handleClose}
      handleComment={handleComment}
    />
  );
}
