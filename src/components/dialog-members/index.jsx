import React from "react";
import { DialogMembers } from "./dialogMember";
import {
  useLazyGetProjectRoleQuery,
  useDeleteProjectRoleMutation,
  useUpdateProjectRoleMutation,
} from "services/project-role";
import {
  useCreateInvitationMutation,
  useLazyGetInvitationsQuery,
  useDeleteInvitationByIdMutation,
  useUpdateInvitationByIdMutation,
} from "services/invitations";
import { isUndefined } from "lodash";
import { typeCheck } from "utils/validation";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectMe } from "app/auth";

export default function DialogMemberContainer({ projectId }) {
  const { id: userId } = useSelector(selectMe);

  const [email, setEmail] = React.useState("");
  const [role, setRole] = React.useState(1);
  const [sendList, setSendList] = React.useState([]);
  const [open, setOpen] = React.useState(false);

  const [getUserData, { data }] = useLazyGetProjectRoleQuery();
  const [getInvitations, { data: invitationData }] =
    useLazyGetInvitationsQuery();
  const [invite, { isLoading }] = useCreateInvitationMutation();
  const [deleteUser] = useDeleteProjectRoleMutation();
  const [deleteInvite] = useDeleteInvitationByIdMutation();
  const [updateInvite] = useUpdateInvitationByIdMutation();
  const [updateUser] = useUpdateProjectRoleMutation();

  const navigate = useNavigate();

  const memberList = React.useMemo(() => {
    if (isUndefined(data)) return [];
    return data.data;
  }, [data]);
  const invitationsList = React.useMemo(() => {
    if (isUndefined(invitationData)) return [];
    return invitationData.data;
  }, [invitationData]);
  const isPm = React.useMemo(() => {
    const find = memberList.find((item) => item.userId === userId);
    return find ? find.role === 1 : false;
  }, [memberList, userId]);

  const handleEmail = React.useCallback((e) => {
    setEmail(e.target.value);
  }, []);
  const handleSendList = React.useCallback(
    (e) => {
      if (e.key === "Enter") {
        if (!typeCheck(email, "email"))
          return alert("Email type is incorrect.");
        if (sendList.includes(email))
          return alert("This email already exists.");
        if (memberList.some((item) => item.User.email === email))
          return alert("This user already exists.");
        if (invitationsList.some((item) => item.email === email))
          return alert("This user is already invited.");
        setSendList((prev) => [...prev, email]);
        setEmail("");
      }
    },
    [email, invitationsList, memberList, sendList],
  );
  const handleRole = React.useCallback((e) => {
    setRole(e.target.value);
  }, []);
  const handleDelete = React.useCallback((chipData) => {
    setSendList((chips) => chips.filter((_chip, i) => i !== chipData.key));
  }, []);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleRefetch = React.useCallback(async () => {
    await getUserData(projectId);
    await getInvitations(projectId);
    setEmail("");
    setSendList([]);
    isPm ? setRole(1) : setRole(2);
  }, [getInvitations, getUserData, isPm, projectId]);
  const handleInvite = React.useCallback(async () => {
    await Promise.all(
      sendList.map(async (item) => {
        await invite({ projectId, email: item, role, invitations: "" });
      }),
    );
    await handleRefetch();
  }, [handleRefetch, invite, projectId, role, sendList]);
  const handleDeleteUser = React.useCallback(
    async (id, isMe) => {
      deleteUser({ id, projectId });
      if (isMe) navigate(0);
      await handleRefetch();
    },
    [deleteUser, handleRefetch, navigate, projectId],
  );
  const handleDeleteInvite = React.useCallback(
    async (id) => {
      await deleteInvite(id);
      await handleRefetch();
    },
    [deleteInvite, handleRefetch],
  );
  const handleUpdateInvite = React.useCallback(
    async (id, role, email) => {
      await updateInvite({ id, role, projectId, email });
      await handleRefetch();
    },
    [handleRefetch, projectId, updateInvite],
  );
  const handleUpdateUser = React.useCallback(
    async (id, role, userId) => {
      await updateUser({ id, projectId, role, userId });
      await handleRefetch();
    },
    [handleRefetch, projectId, updateUser],
  );

  React.useEffect(() => {
    if (open) {
      handleRefetch();
    }
  }, [open, handleRefetch]);

  return (
    <DialogMembers
      email={email}
      memberList={memberList}
      invitationsList={invitationsList}
      sendList={sendList}
      role={role}
      open={open}
      disabled={isLoading}
      isPm={isPm}
      handleUpdateUser={handleUpdateUser}
      handleUpdateInvite={handleUpdateInvite}
      handleDeleteUser={handleDeleteUser}
      handleDeleteInvite={handleDeleteInvite}
      handleInvite={handleInvite}
      handleEmail={handleEmail}
      handleSendList={handleSendList}
      handleDelete={handleDelete}
      handleOpen={handleOpen}
      handleClose={handleClose}
      handleRole={handleRole}
    />
  );
}
