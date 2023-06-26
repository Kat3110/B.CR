import * as React from "react";
import "./dialog-add-member.css";
import DialogPattern from "components/dialog-pattern";
import Button from "components/button";
import TextField from "@mui/material/TextField";
import Badge from "@mui/material/Badge";
import { InputAdornment, OutlinedInput } from "@mui/material";
import { IconButton } from "@mui/joy";
import { ReactComponent as VisibilityOff } from "assets/EyeClosed.svg";
import { ReactComponent as Visibility } from "assets/Eye.svg";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import GroupButton from "components/group-button";
import DropdownMenu from "components/dropdown-menu";
import { countryData } from "utils/country";
import { isEmpty } from "lodash";

export function Add({
  open,
  disabled,
  valid,
  registerInfo,
  handleRegister,
  handleRegisterInfo,
  handleCountry,
  handleOpen,
  handleClose,
}) {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const selectCountry = isEmpty(registerInfo.country)
    ? { icon: undefined, name: "" }
    : (function () {
        const { icon, name } = countryData.filter(
          (item) => item.code === registerInfo.country,
        )[0];
        return { icon, name };
      })();

  return (
    <>
      <DialogPattern
        custom="dialog-add-member"
        titleCenter="center"
        open={open}
        handleOpen={handleOpen}
        handleClose={handleClose}
        trigger={<Button size="s" text="Add" color="black" />}
        notClose="true"
        title={<div className="dialog-add-member__title">Add a member</div>}
        content={
          <div className="dialog-add-member__box">
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
                placeholder="Name"
                name="name"
                value={registerInfo.name}
                onChange={handleRegisterInfo}
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
                placeholder="Nation"
                name="country"
                value={selectCountry.name}
                InputProps={{
                  readOnly: true,
                  startAdornment: selectCountry.icon ? (
                    <InputAdornment style={{ width: "auto" }} position="start">
                      {selectCountry.icon}
                    </InputAdornment>
                  ) : undefined,
                }}
              />

              <DropdownMenu
                className="dialog-add-member__drop"
                trigger={<span className="dialog-add-member__help">Find</span>}
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
                variant="outlined"
                name="id"
                value={registerInfo.id}
                onChange={handleRegisterInfo}
              />
              <span className="dialog-add-member__help dialog-add-member__email">
                Enter in correct format.
              </span>
            </Badge>

            <Badge
              variant="dot"
              anchorOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
            >
              <OutlinedInput
                placeholder="Password"
                type={showPassword ? "text" : "password"}
                name="password"
                value={registerInfo.password}
                onChange={handleRegisterInfo}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      edge="end"
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
              />
              <span className="dialog-add-member__help dialog-add-member__pw">
                8 to 16 letters, numbers mixed
              </span>
            </Badge>

            <TextField
              type="email"
              placeholder="Company name"
              variant="outlined"
              name="company"
              value={registerInfo.company}
              onChange={handleRegisterInfo}
            />

            <TextField
              type="email"
              placeholder="Position"
              variant="outlined"
              name="position"
              value={registerInfo.position}
              onChange={handleRegisterInfo}
            />
            <div className="dialog-add-member__block">
              Authority
              <div className="dialog-add-member__radio-group">
                <RadioGroup
                  name="role"
                  value={registerInfo.role}
                  onChange={handleRegisterInfo}
                  row
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
            <GroupButton
              textTwo="Add"
              disabled={disabled}
              close={handleClose}
              onClick={handleRegister}
            />
          </div>
        }
      />
    </>
  );
}
