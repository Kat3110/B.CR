import * as React from "react";
import "./page-membership.css";
import bcgCreate from "../../assets/bcgCreate.svg";
import Badge from "@mui/material/Badge";
import TextField from "@mui/material/TextField";
import { InputAdornment, OutlinedInput } from "@mui/material";
import { IconButton } from "@mui/joy";
import { ReactComponent as VisibilityOff } from "../../assets/EyeClosed.svg";
import { ReactComponent as Visibility } from "../../assets/Eye.svg";
import Checkbox from "../../components/checkbox";
import Button from "../../components/button";
import Header from "../../layout/header";
import DialogWelcome from "../../components/dialog-welcome";
import DropdownMenu from "../../components/dropdown-menu";
import { countryData } from "../../utils/country";
import { isEmpty } from "lodash";

function Membership({
  registerInfo,
  valid,
  disabled,
  handleRegister,
  handleRegisterInfo,
  handleCountry,
}) {
  const [visible, setVisible] = React.useState(false);

  const handleVisible = () => {
    setVisible((prev) => !prev);
  };

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
      <Header membership />
      <div className="page-membership container">
        <img className="page-membership__img" src={bcgCreate} alt="" />
        <div className="page-membership__box">
          <div
            className={`page-membership__input ${
              valid.id ? "page-membership__input-error" : ""
            }`}
          >
            <Badge
              variant="dot"
              anchorOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
            >
              <TextField
                name="id"
                value={registerInfo.id}
                onChange={handleRegisterInfo}
                placeholder="ID (Email adress)"
              />
            </Badge>
            <span className="page-membership__help-text">
              {valid.id
                ? "Please enter a valid email address."
                : "An authentication mail will be sent."}
            </span>
          </div>
          <div
            className={`page-membership__input ${
              valid.name ? "page-membership__input-error" : ""
            }`}
          >
            <Badge
              variant="dot"
              anchorOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
            >
              <TextField
                name="name"
                value={registerInfo.name}
                onChange={handleRegisterInfo}
                placeholder="Name"
              />
            </Badge>
          </div>

          <div
            className={`page-membership__input ${
              valid.password ? "page-membership__input-error" : ""
            }`}
          >
            <Badge
              variant="dot"
              anchorOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
            >
              <OutlinedInput
                placeholder="Password"
                name="password"
                value={registerInfo.password}
                onChange={handleRegisterInfo}
                type={visible ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleVisible}
                      edge="end"
                    >
                      {visible ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </Badge>

            <span className="page-membership__help-text">
              {valid.password
                ? "Please enter 8-16 characters in English and numbers."
                : "8 to 16 letters and numbers mixed"}
            </span>
          </div>

          <Badge
            variant="dot"
            anchorOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
          >
            <DropdownMenu
              className="dialog-add-member__drop page-membership__menu"
              trigger={
                <TextField
                  type="tel"
                  variant="outlined"
                  placeholder="Country"
                  value={selectCountry.name}
                  InputProps={{
                    readOnly: true,
                    startAdornment: selectCountry.icon ? (
                      <InputAdornment position="start">
                        {selectCountry.icon}
                      </InputAdornment>
                    ) : undefined,
                  }}
                  sx={{
                    "& .MuiInputBase-input.Mui-disabled": {
                      WebkitTextFillColor: "rgba(0, 0, 0, 0.87)",
                    },
                  }}
                />
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
          <Checkbox
            name="terms"
            onChange={handleRegisterInfo}
            checked={registerInfo.terms}
            text={
              <div>
                Creating an account means you’re okay with our
                <br />
                <span>Terms of Service, Privacy Policy, </span>and our default
                <span> Notification Settings.</span>
              </div>
            }
          />
          <DialogWelcome
            trigger={
              <Button
                color={disabled ? "disabled" : "pink"}
                text=" Go!"
                disabled={disabled}
                onClick={handleRegister}
              />
            }
            btn
            title="Welcome to join with us!"
            content={
              <>
                <span>Verify your email.</span>
                <br />
                We’ve just sent a verification mail to{" "}
                <span>bryce.right@bcr.com.</span>
                <br />
                Once verified, you’ll be able to continue.
              </>
            }
          />
        </div>
      </div>
    </>
  );
}

export default Membership;
