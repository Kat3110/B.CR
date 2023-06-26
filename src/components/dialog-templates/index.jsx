import React from "react";
import { DialogTemplates } from "./dialogTemplates";
import { useGetTemplatesQuery } from "services/templates";
import { templateDataFetch } from "./dataFetchFun";
import { useSelector } from "react-redux";
import { selectMe } from "app/auth";
import { isNull, isEmpty, isUndefined } from "lodash";
import { useParams } from "react-router-dom";

export default function DialogTemplatesContainer({
  templateInfo: { id: templateId },
  onChange,
}) {
  const { templateId: templateParam } = useParams();

  const { id } = useSelector(selectMe);

  const [isMyData, setIsMyData] = React.useState(false);
  const [selectId, setSelectId] = React.useState(templateId);
  const [open, setOpen] = React.useState(false);
  const [searchString, setSearchString] = React.useState("");

  const { data } = useGetTemplatesQuery();

  const listData = React.useMemo(() => {
    const value = templateDataFetch(data, id, isMyData, searchString);
    if (!isEmpty(value)) setSelectId(value[0].id);
    return value;
  }, [data, id, isMyData, searchString]);

  const selectData = React.useMemo(() => {
    if (isNull(selectId) || !listData.some((item) => item.id === selectId))
      return undefined;
    const data = listData.filter((item) => item.id === selectId)[0];
    return { ...data, isAuthor: data.createdBy === id };
  }, [id, listData, selectId]);

  const handleIsMyData = () => {
    setIsMyData((prev) => !prev);
  };
  const handleSelectId = (id) => {
    setSelectId(id);
  };
  const handleConfirm = React.useCallback(() => {
    if (!isNull(selectId) && !isUndefined(selectData)) {
      onChange({ id: selectId, title: selectData.name });
      handleClose();
    }
  }, [onChange, selectData, selectId]);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const setInitialState = React.useCallback(() => {
    setIsMyData(false);
    setSelectId(templateId);
    setSearchString("");
  }, [templateId]);
  const handleSearchString = (e) => {
    setSearchString(e.target.value);
  };

  React.useEffect(() => {
    if (open) setInitialState();
  }, [open, setInitialState]);

  React.useEffect(() => {
    if (!isEmpty(listData) && templateParam !== "undefined") {
      const filter = listData.filter(
        (item) => item.id === Number(templateParam),
      );
      if (!isEmpty(filter))
        onChange({ id: filter[0].id, title: filter[0].name });
    }
    //eslint-disable-next-line
  }, [templateParam, listData]);

  return (
    <DialogTemplates
      isMyData={isMyData}
      selectId={selectId}
      listData={listData}
      selectData={selectData}
      open={open}
      searchString={searchString}
      handleIsMyData={handleIsMyData}
      handleSelectId={handleSelectId}
      handleConfirm={handleConfirm}
      handleClickOpen={handleClickOpen}
      handleClose={handleClose}
      handleSearchString={handleSearchString}
    />
  );
}
