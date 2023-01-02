import * as React from "react";
import logo from "../../assets/logo.svg";
import HeaderBar from "../header-bar";
import './style.css';

function Header() {
    return (
        <header className="header">
            <div className="header__box container">
                <img src={logo}/>
                <HeaderBar />
            </div>
        </header>
    );
}

export default Header;