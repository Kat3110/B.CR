import * as React from "react";
import "./dialog-edit.css";
import DialogPattern from "../dialog-pattern";
import TextField from "@mui/material/TextField";
import Badge from "@mui/material/Badge";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import InputAdornment from "@mui/material/InputAdornment";
import GroupButton from "../group-button";
import DropdownMenu from "../dropdown-menu";
import DialogResetManager from "../dialog-reset-manager";
import { countryData } from "../../utils/country";
import { isEmpty } from "lodash";

export function DialogEdit({
  state,
  open,
  handleClose,
  handleOpen,
  handleUpdate,
  handleState,
  handleCountry,
  handleRemove,
  handleReset,
  trigger,
}) {
  const selectCountry = isEmpty(state.nation)
    ? { icon: undefined, name: "" }
    : (function () {
        const { icon, name } = countryData.filter(
          (item) => item.code === state.nation,
        )[0];
        return { icon, name };
      })();
  return (
    <>
      <DialogPattern
        custom="dialog-edit"
        titleCenter="center"
        open={open.edit}
        handleOpen={() => handleOpen("edit")}
        handleClose={() => handleClose("edit")}
        trigger={trigger}
        notClose={true}
        title={<div className="dialog-edit__title">Edit</div>}
        content={
          <div className={"dialog-edit__content"}>
            <div className={"dialog-edit__top"}>
              <div className="dialog-edit__left">
                <div className="dialog-edit__box">
                  <Badge
                    variant="dot"
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "left",
                    }}
                  >
                    <TextField
                      type="text"
                      variant="outlined"
                      name="name"
                      placeholder="Name"
                      value={state.name}
                      onChange={handleState}
                    />
                  </Badge>
                  <Badge
                    variant="dot"
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "left",
                    }}
                  >
                    <TextField
                      type="tel"
                      variant="outlined"
                      name="nation"
                      placeholder="Nation"
                      value={selectCountry.name}
                      InputProps={{
                        readOnly: true,
                        startAdornment: selectCountry.icon ? (
                          <InputAdornment
                            style={{ width: "auto" }}
                            position="start"
                          >
                            {selectCountry.icon}
                          </InputAdornment>
                        ) : undefined,
                      }}
                    />

                    <DropdownMenu
                      className="dialog-add-member__drop"
                      trigger={
                        <span className="dialog-add-member__help">Find</span>
                      }
                      content={countryData.map((country) => (
                        <div
                          className="page-membership__drop"
                          onClick={() => handleCountry(country.code)}
                          key={country.code}
                        >
                          {country.icon} {country.name}
                        </div>
                      ))}
                    />
                  </Badge>
                  <Badge
                    variant="dot"
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "left",
                    }}
                  >
                    <TextField
                      type="email"
                      placeholder="ID (Email adress)"
                      value={state.email}
                      name="email"
                      variant="outlined"
                      InputProps={{ readOnly: true }}
                    />
                    {/*<span className='dialog-edit__help dialog-edit__email'>Enter in correct format.</span>*/}
                  </Badge>

                  <TextField
                    type="email"
                    placeholder="Company name"
                    variant="outlined"
                    value={state.company}
                    onChange={handleState}
                    name="company"
                  />

                  <TextField
                    type="email"
                    placeholder="Position"
                    value={state.position}
                    onChange={handleState}
                    name="position"
                    variant="outlined"
                  />

                  <div className="dialog-edit__radio-group">
                    <RadioGroup
                      row
                      name="role"
                      value={state.role}
                      onChange={handleState}
                    >
                      <FormControlLabel
                        value={0}
                        control={<Radio />}
                        label="Client"
                      />
                      <FormControlLabel
                        value={3}
                        control={<Radio />}
                        label="Manager"
                      />
                      <FormControlLabel
                        value={2}
                        control={<Radio />}
                        label="Master"
                      />
                    </RadioGroup>
                  </div>
                </div>
              </div>
              <div className="dialog-edit__right">
                <div className="dialog-edit__date">
                  <div className="dialog-edit__typo">Joined</div>
                  <span>{state.joinedAt}</span>
                </div>
                <div className="dialog-edit__date">
                  <div className="dialog-edit__typo">Last access</div>
                  <span>{state.lastAccessAt}</span>
                </div>
                <div className="dialog-edit__block">
                  <div className="dialog-edit__typo">Edit log</div>
                  <div className="dialog-edit__time">
                    <div>YYYY-MM-DD HH:MM</div>
                    <div>YYYY-MM-DD HH:MM</div>
                    <div>YYYY-MM-DD HH:MM</div>
                    <div>YYYY-MM-DD HH:MM</div>
                    <div>YYYY-MM-DD HH:MM</div>
                  </div>
                </div>
                <div className="dialog-edit__input">
                  <div className="dialog-edit__typo">Note</div>
                  <textarea rows={5}></textarea>
                </div>
              </div>
            </div>
            <div className="dialog-edit__bottom">
              <div className="dialog-edit__btn">
                <DialogResetManager
                  open={open.reset}
                  handleOpen={() => handleOpen("reset")}
                  handleClose={() => handleClose("reset")}
                  onClick={handleReset}
                  trigger={<div>Reset password</div>}
                  title="Are you sure to reset password?"
                  content={
                    <>
                      A new password (4 digits) will be emailed to{" "}
                      <span> {state.name}.</span>
                    </>
                  }
                ></DialogResetManager>
                <DialogResetManager
                  open={open.remove}
                  handleOpen={() => handleOpen("remove")}
                  handleClose={() => handleClose("remove")}
                  onClick={handleRemove}
                  trigger={<div>Remove</div>}
                  title="Are you sure to remove account?"
                  content={
                    <div style={{ color: "rgba(0, 0, 0, 0.5)" }}>
                      Data related to <span> {state.name} </span> will remain,
                      but the account cannot be recovered.
                    </div>
                  }
                ></DialogResetManager>
              </div>
              <GroupButton
                close={() => handleClose("edit")}
                onClick={handleUpdate}
                textTwo="Apply"
              />
            </div>
          </div>
        }
      />
    </>
  );
}
