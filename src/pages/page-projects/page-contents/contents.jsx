import React from "react";
import BoxTemplate from "components/box-template";
import CapitalLetter from "components/capital-letter";
import { ReactComponent as Logo } from "assets/logo.svg";
import { ReactComponent as Microphone } from "assets/microphone.svg";
import { ReactComponent as Close } from "assets/Plus.svg";
import DialogMakeBlock from "components/dialog-make-block";
import DropdownProjectsAccount from "components/dropdown-projects-account";
import Editor from "components/editor";
import { roleFormater } from "utils/roleFormater";
import { diffFormater } from "utils/diffFormater";

export function Contents({ blocks, handleCreate, handleContent }) {
  return (
    <>
      <div className="page-projects__council page-template__council">
        <Logo className="page-projects__council-logo" />
        <div className="page-projects__council-box page-template__council-box">
          <span>
            <Microphone />
            NOTICE
          </span>
          <p className="page-projects__council-text page-template__council-text">
            Toner concept and prescription suggestions ...
          </p>
          <div className="page-projects__council-close page-template__council-close">
            <Close />
          </div>
        </div>
      </div>

      <div className="page-projects__block page-template__block">
        {blocks.map((item) => (
          <div key={item.id}>
            <div className="account page-projects__account page-template__account project-card__accounts">
              <DropdownProjectsAccount />
              {item.Mentions.map((mention) => (
                <CapitalLetter
                  letter={mention.User.name}
                  bgColor={mention.User.profileColor}
                  key={mention.userId}
                />
              ))}
            </div>

            <BoxTemplate
              id={item.id}
              name={item.User.name}
              role={roleFormater(item.User.role)}
              date={diffFormater(item.createdAt)}
              bgColor={item.User.profileColor}
              change={item.isAuthor}
            >
              <Editor
                id={item.id}
                content={item.content}
                handleContent={handleContent}
                readOnly={!item.isAuthor}
              />
            </BoxTemplate>
          </div>
        ))}
      </div>

      <DialogMakeBlock handleCreate={handleCreate} />
    </>
  );
}
