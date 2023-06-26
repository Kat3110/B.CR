import React from "react";
import { Template } from "./Template";
import {
  useGetTemplatesQuery,
  useDeleteTemplateMutation,
  useLazyGetTemplatesByIdQuery,
} from "services/templates";
import { templateDataFetch } from "./dataFetchFun";
import { useSelector, useDispatch } from "react-redux";
import { selectMe } from "app/auth";
import { isNull } from "lodash";
import { useNavigate, useParams } from "react-router-dom";
import { setTemplate } from "app/template";

export default function TemplateContainer() {
  const { id } = useSelector(selectMe);

  const [isMyData, setIsMyData] = React.useState(false);
  const [searchString, setSearchString] = React.useState("");
  const { data, refetch } = useGetTemplatesQuery();
  const [deleteTemplate, { isLoading: deleteLoading }] =
    useDeleteTemplateMutation();
  const [getTemplate] = useLazyGetTemplatesByIdQuery();

  const { templateId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const selectId = React.useMemo(() => {
    if (templateId === "undefined") return null;
    return Number(templateId);
  }, [templateId]);
  const listData = React.useMemo(() => {
    const value = templateDataFetch(data, id, isMyData, searchString);
    return value;
  }, [data, id, isMyData, searchString]);

  const handleIsMyData = () => {
    setIsMyData((prev) => !prev);
  };
  const handleRefetch = () => {
    refetch();
  };
  const handleSelectId = (id) => {
    navigate(`/projects/template/${id}/undefined`);
  };
  const handleSearchString = (event) => {
    setSearchString(event.target.value);
  };
  const handleDelete = () => {
    if (!deleteLoading) {
      deleteTemplate(selectId).then(() => {
        refetch();
      });
    }
  };

  React.useEffect(() => {
    if (templateId !== "undefined") {
      getTemplate(Number(templateId))
        .unwrap()
        .then(({ data }) => {
          dispatch(setTemplate(data));
        });
    }
  }, [dispatch, getTemplate, templateId]);

  return (
    <Template
      isMyData={isMyData}
      listData={listData}
      selectId={selectId}
      searchString={searchString}
      handleIsMyData={handleIsMyData}
      handleRefetch={handleRefetch}
      handleSelectId={handleSelectId}
      handleSearchString={handleSearchString}
      handleDelete={handleDelete}
    />
  );
}
