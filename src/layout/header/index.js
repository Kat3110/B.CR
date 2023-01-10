import * as React from "react";
import logo from "../../assets/logo.svg";
import HeaderBar from "../header-bar";
import './header.css';
import HeaderBarLogin from "../header-bar-login";
import {useState} from "react";

function Header(props) {
    const [join, setJoin] = useState(props.join)

    return (
        <header className="header">
            <div className="header__box container">
                <img src={logo}/>
                {!join ?
                    <HeaderBar onClick={props.onClick} />
                    :
                    <HeaderBarLogin welcome />
                }
            </div>
        </header>
    );
}

export default Header;
