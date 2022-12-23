import * as React from 'react';
import Link from '@mui/material/Link';
import Avatar from '../../assets/account.svg';
import NotificationPopover from "../notification-popover";
import './style.css'

const pages = [
    {
        name: 'Home feed ',
        url: '/'
    },
    {
        name: 'Projects',
        url: '/projects'
    },
    {
        name: 'Insights',
        url: '/'
    },
    {
        name: 'FAQ',
        url: '/'
    },
];

function HeaderBar() {
    return (
        <div className='header-bar'>
            <div className='header-bar__links'>
                {pages.map((page) => (
                    <Link className='header-bar__link'
                        component="button" key={page.name}>
                        {page.name}
                    </Link>))}
            </div>
            <div className='header-bar__buttons'>
                <NotificationPopover/>
                <button
                    className='header-bar__icon'>
                    <img src={Avatar}/>
                    <p className='header-bar__account'>Bryce L.</p>
                </button>
            </div>
        </div>
    );
}

export default HeaderBar;