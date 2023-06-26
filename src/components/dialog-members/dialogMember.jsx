import * as React from "react";
import "./dialog-members.css";
import { ReactComponent as Setting } from "assets/setting.svg";
import ButtonChange from "../button-change";
import InputSearch from "../input-search";
import ChipMember from "../chip-member";
import CapitalLetter from "../capital-letter";
import SelectWindow from "../select-window";
import DialogPattern from "../dialog-pattern";
import DialogRemove from "../dialog-remove";
import Button from "../button";
import GroupButton from "../group-button";
import { ReactComponent as PaperPlaneTilt } from "assets/PaperPlaneTilt.svg";
import { isEmpty } from "lodash";
import { useSelector } from "react-redux";
import { selectMe } from "app/auth";
import { arraySelect } from "./data";

export function DialogMembers({
  email,
  memberList,
  invitationsList,
  sendList,
  role,
  open,
  disabled,
  isPm,
  handleUpdateUser,
  handleUpdateInvite,
  handleDeleteUser,
  handleDeleteInvite,
  handleInvite,
  handleEmail,
  handleSendList,
  handleDelete,
  handleOpen,
  handleClose,
  handleRole,
}) {
  const { id: userId } = useSelector(selectMe);
  const [removeUser, setRemoveUser] = React.useState({
    id: null,
    email: "",
    name: "",
  });
  const [removeOpen, setRemoveOpen] = React.useState(false);
  const handleRemoveClose = () => {
    setRemoveOpen(false);
  };

  return (
    <>
      <DialogPattern
        trigger={<ButtonChange icon={<Setting />} />}
        icon={<Setting />}
        title="Members"
        custom={"dialog-members"}
        open={open}
        handleOpen={handleOpen}
        handleClose={handleClose}
        content={
          <>
            <div className="dialog-members__search">
              <InputSearch
                value={email}
                onChange={handleEmail}
                onKeyDown={handleSendList}
                text="Email adress"
                select={isPm}
                role={role}
                handleRole={handleRole}
              />
              <Button
                icon={<PaperPlaneTilt />}
                size="m"
                text="Send"
                color="pink"
                onClick={handleInvite}
                disabled={disabled || isEmpty(sendList)}
              />
            </div>
            <div className="dialog-members__chips">
              <ChipMember
                chipData={sendList.map((item, i) => ({ key: i, label: item }))}
                handleDelete={handleDelete}
              />
            </div>
            <div className="dialog-members__list">
              {memberList.map((member) => (
                <div className="dialog-members__item" key={member.id}>
                  <div>
                    <CapitalLetter
                      bgColor={member.User.profileColor}
                      letter={member.User.name}
                    />
                    {member.User.name}
                  </div>
                  <div>
                    {isPm ? (
                      <SelectWindow
                        value={member.role}
                        array={arraySelect(
                          member.userId === userId,
                          isPm,
                          false,
                        )}
                        onChange={(e) => {
                          if (e.target.value === 3) {
                            const isMy = member.userId === userId;
                            if (isMy) {
                              handleDeleteUser(member.id, true);
                            } else {
                              setRemoveUser({
                                id: member.id,
                                email: member.User.email,
                                name: member.User.name,
                              });
                              setRemoveOpen(true);
                            }
                          } else {
                            handleUpdateUser(
                              member.id,
                              e.target.value,
                              member.userId,
                            );
                          }
                        }}
                      />
                    ) : member.userId === userId ? (
                      <SelectWindow
                        value={member.role}
                        array={arraySelect(true, isPm, false)}
                        onChange={(e) => {
                          if (e.target.value === 3) {
                            handleDeleteUser(member.id, true);
                          }
                        }}
                      />
                    ) : (
                      <SelectWindow
                        value={member.role}
                        array={arraySelect(
                          member.userId === userId,
                          isPm,
                          false,
                        )}
                        readOnly
                      />
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div className="dialog-members__invitation">
              <h3>Invitation pending</h3>
              <div className="dialog-members__list">
                {invitationsList.map((pending) => (
                  <div className="dialog-members__item" key={pending.id}>
                    <div>{pending.email}</div>
                    <div>
                      <SelectWindow
                        value={pending.role}
                        array={arraySelect(false, isPm, true)}
                        readOnly={!isPm}
                        onChange={(e) =>
                          e.target.value === 3
                            ? handleDeleteInvite(pending.id)
                            : handleUpdateInvite(
                                pending.id,
                                e.target.value,
                                pending.email,
                              )
                        }
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="dialog-members__btn">
              <GroupButton />
            </div>
            <DialogRemove
              open={removeOpen}
              email={removeUser.email}
              name={removeUser.name}
              handleClose={handleRemoveClose}
              onClick={() => handleDeleteUser(removeUser.id, false)}
            />
          </>
        }
      />
    </>
  );
}
