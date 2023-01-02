import * as React from 'react';
import { NavLink } from "react-router-dom";
import './style.css'
import CapitalLetter from "../../components/capital-letter";
import DropdownNotification from "../../components/dropdown-notification";

const pages = [
    {
        name: 'Home Feed',
        url: '/'
    },
    {
        name: 'Projects',
        url: '/projects'
    },
    {
        name: 'Insights',
        url: '/insights'
    },
    {
        name: 'FAQ',
        url: '/faq'
    },
];

function HeaderBar() {

    return (
        <div className='header-bar'>
            <div className='header-bar__links'>
                {pages.map((page) => (
                    <NavLink
                        to={page.url}
                        key={page.name}
                        className={({ isActive }) =>
                            isActive ? 'header-bar__link header-bar__link-active' : 'header-bar__link'
                        }
                    >
                        {page.name}
                    </NavLink>
                ))}
            </div>
            <div className='header-bar__buttons'>
                <DropdownNotification id='1' />
                <button
                    className='header-bar__icon'>
                    <CapitalLetter
                        letter='b'
                        bgColor='#FFD702'
                    />
                    <p className='header-bar__account'>Bryce L.</p>
                </button>
            </div>
        </div>
    );
}

export default HeaderBar;