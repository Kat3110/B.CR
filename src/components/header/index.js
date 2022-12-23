import * as React from "react";
import background from '../../assets/maskBG.png';
import logo from "../../assets/logo.svg";
import HeaderBar from "../header-bar";
import './style.css';

function Header() {
    return (
        <header className="header">
            <img src={background} className="header__background" alt="background" />
            <div className="header__box container">
                <img src={logo}/>
                <HeaderBar />
            </div>
        </header>
    );
}

export default Header;