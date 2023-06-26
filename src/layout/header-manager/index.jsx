import * as React from "react";
import "./header-manager.css";
import LogoAdmin from "../../components/logo-admin";
import NavMenuMobile from "../../components/nav-menu-mobile";
import { useDispatch } from "react-redux";
import { adminLogout } from "app/auth";

const pages = [
  {
    name: "Members",
    url: "/members",
  },
  {
    name: "OTHER MENU",
    url: "/other-menu",
  },
  {
    name: "OTHER MENU",
    url: "/other-menu",
  },
];

function HeaderManager() {
  const dispatch = useDispatch();

  return (
    <header className="header-manager">
      <LogoAdmin />
      <div className="header-manager__box container">
        <div className="header-manager__links">
          <span className="header-manager__link header-manager__link-active">
            Members
          </span>
          <span className="header-manager__link">OTHER MENU</span>
          <span className="header-manager__link">OTHER MENU</span>
        </div>
        <NavMenuMobile links={pages} titlePage={"Admin"} />
        <p
          style={{ cursor: "pointer" }}
          onClick={() => dispatch(adminLogout())}
        >
          Sign out
        </p>
      </div>
    </header>
  );
}

export default HeaderManager;
