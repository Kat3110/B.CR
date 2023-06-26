import React from "react";
import Badge from "@mui/material/Badge";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import Button from "components/button";
import { ReactComponent as Close } from "assets/Plus.svg";
import DropdownMenu from "components/dropdown-menu";
import { countryData } from "utils/country";
import { isEmpty } from "lodash";

export function General({
  userInfo,
  disabled,
  isSuccess,
  handleUserInfo,
  handleCountry,
  handleUpdate,
}) {
  const selectCountry = isEmpty(userInfo.country)
    ? ""
    : (function () {
        const { icon, name } = countryData.filter(
          (item) => item.code === userInfo.country,
        )[0];
        return { icon, name };
      })();

  const [success, setSuccess] = React.useState(false);

  const handleClose = () => {
    setSuccess(false);
  };

  React.useEffect(() => {
    if (isSuccess) setSuccess(true);
  }, [isSuccess]);

  return (
    <div className="page-account-information__content page-edit-profile__content">
      <div className={"page-edit-profile__content"}>
        <h2 className="page-account-information__title page-insight__title">
          General
        </h2>
        <Badge
          color="secondary"
          variant="dot"
          anchorOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
        >
          <span className="page-account-information__label page-edit-profile__label">
            email
          </span>
          <TextField
            type="text"
            variant="outlined"
            value={userInfo.email}
            disabled
          />
        </Badge>

        <Badge
          color="secondary"
          variant="dot"
          anchorOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
        >
          <span className="page-account-information__label page-edit-profile__label">
            Name
          </span>
          <TextField
            type="tel"
            variant="outlined"
            value={userInfo.name}
            name="name"
            onChange={handleUserInfo}
          />
        </Badge>
        <div className="page-account-information__country">
          <span className="page-account-information__label page-edit-profile__label">
            Country
          </span>
          <DropdownMenu
            className="page-account-information__drop"
            trigger={
              <TextField
                type="tel"
                variant="outlined"
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
        </div>

        <div className="page-account-information__text-field page-edit-profile__text-field">
          <span className="page-account-information__label page-edit-profile__label">
            Company name
          </span>
          <TextField
            type="email"
            variant="outlined"
            value={userInfo.company}
            name="company"
            onChange={handleUserInfo}
          />
        </div>

        <div className="page-account-information__text-field page-edit-profile__text-field">
          <span className="page-account-information__label page-edit-profile__label">
            Position
          </span>
          <TextField
            type="text"
            variant="outlined"
            value={userInfo.position}
            name="position"
            onChange={handleUserInfo}
          />
        </div>
        <Button
          text="Save Changes"
          color="pink"
          disabled={disabled}
          onClick={handleUpdate}
        />
      </div>

      {success && (
        <div className="page-account-information__attention">
          Your account has been updated.
          <Close style={{ cursor: "pointer" }} onClick={handleClose} />
        </div>
      )}
    </div>
  );
}
