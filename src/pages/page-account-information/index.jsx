import * as React from "react";
import "./page-account-information.css";
import "./page-edit-profile.css";
import Header from "../../layout/header";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import Tab from "@mui/material/Tab";
import { ReactComponent as PencilSimpleLineSmall } from "../../assets/PencilSimpleLineSmall.svg";
import { ReactComponent as HandWaving } from "../../assets/HandWaving.svg";
import { ReactComponent as BellRinging } from "../../assets/BellRinging.svg";
import { ReactComponent as LockKey } from "../../assets/LockKey.svg";
import TabPanel from "@mui/lab/TabPanel";
import General from "./general";
import Password from "./password";
import Email from "./email";
import Delete from "./delete";

function PageAccountInformation() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Header join titlePage={"Profile"} />
      <div className="page-account-information container">
        <div className="page-account-information__menu page-insight__menu">
          <h2 className="page-account-information__title page-insight__title">
            Profile
          </h2>
          <TabContext
            value={value}
            className="page-account-information__tabs page-insight__tabs"
          >
            <TabList
              onChange={handleChange}
              className="page-account-information__list page-insight__list"
            >
              <Tab
                disableRipple
                label={
                  <>
                    <PencilSimpleLineSmall className="page-account-information__svg page-insight__svg" />
                    General
                  </>
                }
                value="1"
                className="page-account-information__tab page-insight__tab"
              />
              <Tab
                disableRipple
                label={
                  <>
                    <LockKey className="page-account-information__svg page-insight__svg" />
                    Password
                  </>
                }
                value="2"
                className="page-account-information__tab page-insight__tab"
              />
              <Tab
                disableRipple
                label={
                  <>
                    <BellRinging className="page-account-information__svg page-insight__svg" />
                    Email notification
                  </>
                }
                value="3"
                className="page-account-information__tab page-insight__tab"
              />
              <Tab
                disableRipple
                label={
                  <>
                    <HandWaving className="page-account-information__svg page-insight__svg" />
                    Delete account
                  </>
                }
                value="4"
                className="page-account-information__tab page-insight__tab"
              />
            </TabList>
          </TabContext>
        </div>

        <div className="page-account-information__wrapper">
          <TabContext
            value={value}
            className="page-account-information__tabs page-edit-profile__tabs"
          >
            <TabPanel value="1">
              <General />
            </TabPanel>

            <TabPanel value="2">
              <Password />
            </TabPanel>

            <TabPanel value="3">
              <Email />
            </TabPanel>

            <TabPanel value="4">
              <Delete />
            </TabPanel>
          </TabContext>
        </div>
      </div>
    </>
  );
}

export default PageAccountInformation;
