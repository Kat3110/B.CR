import * as React from "react";
import "./nav-menu-mobile.css";
import { ReactComponent as Menu } from "../../assets/BurgerMenu.svg";
import { ReactComponent as CaretUp } from "../../assets/CaretUpMenu.svg";
import DropdownMenu from "../dropdown-menu";
import { NavLink, useNavigate } from "react-router-dom";
import CapitalLetter from "../capital-letter";
import { useSelector } from "react-redux";
import { selectMe } from "app/auth";

function NavMenuMobile(props) {
  const { name, profileColor } = useSelector(selectMe);
  const navigate = useNavigate();
  return (
    <div className="nav-menu-mobile">
      <DropdownMenu
        trigger={<Menu />}
        nameClass={"nav-menu-mobile__content"}
        close={<CaretUp />}
        content={
          <div className="nav-menu-mobile__links">
            <div className="nav-menu-mobile__title-page">{props.titlePage}</div>
            {props.links.map((page, index) => (
              <NavLink
                to={page.url}
                key={index}
                className={({ isActive }) =>
                  isActive
                    ? "nav-menu-mobile__link nav-menu-mobile__link-active"
                    : "nav-menu-mobile__link"
                }
              >
                {page.name}
              </NavLink>
            ))}
            <div
              className="nav-menu-mobile__name"
              onClick={() => navigate("/account")}
            >
              <CapitalLetter letter={name} bgColor={profileColor} /> {name}
            </div>
          </div>
        }
      />
    </div>
  );
}

export default NavMenuMobile;
