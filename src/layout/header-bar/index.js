import * as React from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import "./header-bar.css";
import CapitalLetter from "components/capital-letter";
import NavMenuMobile from "components/nav-menu-mobile";
import { useSelector, useDispatch } from "react-redux";
import { selectMe, userLogout } from "app/auth";
import DropdownNotification from "components/dropdown-notification";

function HeaderBar(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { name, profileColor } = useSelector(selectMe);

  const location = useLocation();

  return (
    <div className="header-bar">
      <div className="header-bar__links">
        {props.array.map((page) => (
          <NavLink
            to={page.url}
            key={page.name}
            className={({ isActive }) =>
              isActive ||
              (page.url.includes("/projects") &&
                location.pathname.includes("/projects"))
                ? "header-bar__link header-bar__link-active"
                : "header-bar__link"
            }
          >
            {page.name}
          </NavLink>
        ))}
        <div className="header-bar__title-page">{props.titlePage}</div>
      </div>
      <div className="header-bar__buttons">
        {!props.signIn ? (
          <DropdownNotification id="1" />
        ) : (
          <div className="header-bar__sign">Sign in</div>
        )}
        <NavMenuMobile links={props.array} titlePage={props.titlePage} />
        <button className="header-bar__icon">
          <CapitalLetter
            letter={name.charAt(0).toUpperCase()}
            bgColor={profileColor}
          />
          <p
            onClick={() => navigate("/account")}
            className="header-bar__account"
          >
            {name}
          </p>
        </button>
        <p
          style={{
            cursor: "pointer",
            fontWeight: 400,
            fontSize: 15,
            color: "#000000",
          }}
          onClick={() => dispatch(userLogout())}
        >
          Sign out
        </p>
      </div>
    </div>
  );
}

export default HeaderBar;
