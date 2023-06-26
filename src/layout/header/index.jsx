import * as React from "react";
import logo from "../../assets/logo.svg";
import HeaderBar from "../header-bar";
import "./header.css";
import HeaderBarLogin from "../header-bar-login";

const pages = [
  {
    name: "Home Feed",
    url: "/home",
  },
  {
    name: "Projects",
    url: "/projects/undefined/undefined/undefined",
  },
  {
    name: "Insights",
    url: "/insights",
  },
];

const pagesWithPreferences = [
  {
    name: "Home Feed",
    url: "/",
  },
  {
    name: "Projects",
    url: "/projects/undefined/undefined/undefined",
  },
  {
    name: "Insights",
    url: "/insights",
  },
  {
    name: "FAQ",
    url: "/faq",
  },
];

function Header(props) {
  return (
    <header className="header">
      <div className="header__box container">
        <img className="header__logo" src={logo} alt="logo" />
        {props.onlyImg ? null : (
          <>
            {props.join ? (
              <HeaderBar
                array={!props.preferences ? pages : pagesWithPreferences}
                onPmClick={props.onPmClick}
                titlePage={props.titlePage}
                signIn={props.signIn}
              />
            ) : (
              <HeaderBarLogin
                welcome={props.welcome}
                id={props.findId}
                password={props.findPw}
                registration={props.registration}
                onClick={props.onClick}
                titlePage={props.titlePage}
              />
            )}
          </>
        )}
      </div>
    </header>
  );
}

export default Header;
