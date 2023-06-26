import React from "react";
import { DialogEdit } from "./dialogEdit";
import {
  useLazyGetUserByIdQuery,
  useLazyGetUserHistoryQuery,
  useUpdateUserMutation,
  useDeleteMemberMutation,
  useForgotPasswordMutation,
} from "services/admin";

export default function DialogEditContainer(props) {
  const initialOpenState = {
    edit: false,
    reset: false,
    remove: false,
  };

  const [state, setState] = React.useState({
    name: "",
    nation: "",
    email: "",
    company: "",
    position: "",
    role: 0,
    joinedAt: "",
    lastAccessAt: "",
    editLog: [],
    note: "",
  });
  const [open, setOpen] = React.useState(initialOpenState);

  const [getData] = useLazyGetUserByIdQuery();
  const [getHistory] = useLazyGetUserHistoryQuery();
  const [update] = useUpdateUserMutation();
  const [remove] = useDeleteMemberMutation();
  const [reset] = useForgotPasswordMutation();

  const handleOpen = (type) => {
    setOpen((prev) => ({ ...prev, [type]: true }));
  };
  const handleClose = (type) => {
    setOpen((prev) => ({ ...prev, [type]: false }));
  };
  const handleUpdate = () => {
    update({
      id: props.id,
      name: state.name,
      companyName: state.company,
      department: state.position,
      role: state.role,
      nation: state.nation,
    }).then(handleRefetch);
  };
  const handleState = (event) => {
    const { name, value } = event.target;
    setState((prev) => ({ ...prev, [name]: value }));
  };
  const handleCountry = (code) => {
    setState((prev) => ({ ...prev, nation: code }));
  };
  const handleRemove = () => {
    remove(props.id).then(handleRefetch);
  };
  const handleReset = () => {
    reset({ email: state.email }).then(() => handleClose("reset"));
  };
  const handleRefetch = () => {
    setOpen(initialOpenState);
    props.refetch();
  };

  React.useEffect(() => {
    if (open.edit) {
      getData(props.id)
        .unwrap()
        .then((data) => setState((prev) => ({ ...prev, ...data })));
      getHistory(props.id)
        .unwrap()
        .then((data) => {
          console.log(data);
        });
    }
  }, [getData, getHistory, props.id, open.edit]);

  return (
    <DialogEdit
      state={state}
      open={open}
      handleOpen={handleOpen}
      handleClose={handleClose}
      handleUpdate={handleUpdate}
      handleState={handleState}
      handleCountry={handleCountry}
      handleRemove={handleRemove}
      handleReset={handleReset}
      {...props}
    />
  );
}
