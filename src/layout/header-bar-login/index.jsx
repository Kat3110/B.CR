import * as React from "react";
import "./header-bar-login.css";
import { ReactComponent as Smail } from "../../assets/smail.svg";
import { ReactComponent as Loup } from "../../assets/loup.svg";
import { useNavigate } from "react-router-dom";

const pages = [
  {
    name: "Sign in",
    url: "/",
  },
  {
    name: "Join",
    url: "/membership",
  },
];

function HeaderBarLogin(props) {
  const navigate = useNavigate();

  return (
    <div className="header-bar-login">
      <div>
        {props.welcome ? (
          <div className="header-bar-login__box">
            <Smail />
            <span className="header-bar-login__text">Welcome</span>
          </div>
        ) : null}
        {props.password ? (
          <div className="header-bar-login__box">
            <Loup />
            <span className="header-bar-login__text">Find your password</span>
          </div>
        ) : null}
        {props.id ? (
          <div className="header-bar-login__box">
            <Loup />
            <span className="header-bar-login__text">Find your ID</span>
          </div>
        ) : null}
        {props.registration ? (
          <div className="header-bar-login__box">
            <Smail />
            <span className="header-bar-login__text">
              Join us! your dream will makable!
            </span>
          </div>
        ) : null}
        {props.membership ? (
          <div className="header-bar-login__box">
            <span className="header-bar-login__text">
              Join us! your dream will makable!
            </span>
          </div>
        ) : null}
      </div>
      <div className="header-bar-login__links">
        {pages.map((page) => (
          <div
            key={page.name}
            className="header-bar-login__link"
            onClick={() => navigate(page.url)}
          >
            {page.name}
          </div>
        ))}
      </div>
    </div>
  );
}

export default HeaderBarLogin;
