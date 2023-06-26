import * as React from "react";
import "./create-project.css";
import DialogUploadImg from "components/dialog-upload-img";
import bcgCreate from "assets/bcgCreate.svg";
import DialogTemplates from "components/dialog-templates";
import Header from "layout/header";
import { SelectImg } from "utils/selectImg";

export function CreateProject({
  project,
  disabled,
  isLoading,
  handleProject,
  handleCreate,
}) {
  return (
    <>
      <Header join titlePage={"Projects"} />
      <div className="create-project">
        <div className="create-project__after">
          <img className="page-membership__img" src={bcgCreate} alt="." />
          <div className="create-project__box container">
            <div className="create-project__picture">
              <img src={SelectImg(project.image)} alt="." />
              <div className="create-project__edit">
                <DialogUploadImg
                  image={project.image}
                  onChange={(path) => handleProject("image", path)}
                />
              </div>
            </div>
            <div className="create-project__pattern">
              <input
                className="create-project__text"
                type="text"
                value={project.template.title}
                placeholder="Choose a template or start from the beginning."
                readOnly
              />
              <div className="create-project__edit">
                <DialogTemplates
                  templateInfo={project.template}
                  onChange={(templateInfo) =>
                    handleProject("template", templateInfo)
                  }
                />
              </div>
            </div>
            <div className="create-project__block">
              <input
                className="create-project__title"
                type="text"
                placeholder="Enter the project title."
                value={project.title}
                onChange={(e) => handleProject("title", e.target.value)}
              />
              <button
                className={
                  disabled
                    ? "create-project__btn"
                    : "create-project__btn-active"
                }
                onClick={handleCreate}
                disabled={disabled || isLoading}
              >
                Start!
              </button>
            </div>
          </div>
        </div>
        {/* {!status ? (
          <div className="create-project__before">
            {pm ? (
              <BackgroundImg background={bgImage} />
            ) : (
              <BackgroundImg background={bgImage2} />
            )}
            <h2 className="create-project__typo">
              {pm ? "We need your awesome project!" : "You do not have access."}
            </h2>
            <p className="create-project__subtitle">
              {pm ? (
                <>
                  B.CR is the best collaboration tool to
                  <br />
                  successfully launch your project.
                </>
              ) : (
                <>
                  You can view the contents after invited to the project.
                  <br />
                  Please ask the PM for an invitation and try again.
                </>
              )}
            </p>

            {pm ? (
              <button
                onClick={() => setStatus(!status)}
                className="create-project__make create-project__button"
              >
                Make a project
              </button>
            ) : (
              <div className="create-project__button-group">
                <a
                  href="/projects/all"
                  className="create-project__projects create-project__button"
                >
                  Projects
                </a>
                <button className="create-project__home create-project__button">
                  Home Feed
                </button>
              </div>
            )}
          </div>
        ) : (
          
        )} */}
      </div>
    </>
  );
}
