import React from "react";
import { CreateProject } from "./createProject";
import { isEmpty, isNull } from "lodash";
import { useCreateProjectMutation } from "services/projects";
import { selectMe } from "app/auth";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function CreateProjectContainer() {
  const { role } = useSelector(selectMe);
  const navigate = useNavigate();

  const [project, setProject] = React.useState({
    image: "",
    template: { id: null, title: "" },
    title: "",
  });

  const [create, { isLoading }] = useCreateProjectMutation();

  const disabled = React.useMemo(() => {
    return isEmpty(project.image) ||
      isNull(project.template.id) ||
      isEmpty(project.title)
      ? true
      : false;
  }, [project]);

  const handleProject = (type, value) => {
    setProject((prev) => ({ ...prev, [type]: value }));
  };

  const handleCreate = () => {
    create({
      name: project.title,
      projectImage: project.image,
      templateId: project.template.id,
    })
      .unwrap()
      .then(({ data }) => navigate(`/projects/${data.id}/undefined/undefined`))
      .catch((e) => console.log(e));
  };

  return (
    <CreateProject
      project={project}
      disabled={disabled}
      isLoading={isLoading}
      handleProject={handleProject}
      handleCreate={handleCreate}
    />
  );
}
