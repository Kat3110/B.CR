import * as React from "react";
import logo from "../../assets/logo.svg";
import HeaderBar from "../header-bar";
import './header.css';

function Header(props) {
    return (
        <header className="header">
            <div className="header__box container">
                <img src={logo}/>
                <HeaderBar onClick={props.onClick} />
            </div>
        </header>
    );
}

export default Header;