import * as React from 'react';
import { NavLink } from "react-router-dom";
import './header-bar-login.css'
import { ReactComponent as Smail } from "../../assets/smail.svg";
import { ReactComponent as Loup } from "../../assets/loup.svg";

const pages = [
    {
        name: 'FAQ',
        url: '/faq'
    },
    {
        name: 'Sign in',
        url: '/sign'
    },
    {
        name: 'Join',
        url: '/insights'
    },
];

function HeaderBarLogin(props) {

    return (
        <div className='header-bar-login'>
            <div>
                {
                    props.welcome
                        ?
                        <div className='header-bar-login__box'>
                            <Smail />
                            <span className='header-bar-login__text'>Welcome</span>
                        </div>
                        :
                        <div className='header-bar-login__box'>
                            <Loup />
                            <span className='header-bar-login__text'>Find your ID</span>
                        </div>
                }
            </div>
            <div className='header-bar-login__links'>
                {pages.map((page) => (
                    <NavLink
                        to={page.url}
                        key={page.name}
                        className={({ isActive }) =>
                            isActive ? 'header-bar-login__link header-bar-login__link-active' : 'header-bar-login__link'
                        }
                    >
                        {page.name}
                    </NavLink>
                ))}
            </div>
        </div>
    );
}

export default HeaderBarLogin;
