import * as React from 'react';
import Link from '@mui/material/Link';
import Avatar from '../../assets/account.svg';
import NotificationPopover from "../notification-popover";
import './style.css'

const pages = ['Home feed ', 'Projects', 'Insights', 'FAQ'];

function HeaderBar() {
    return (
        <div className='header-bar'>
            <div className='header-bar__links'>
                {pages.map((page) => (
                    <Link className='header-bar__link'
                        component="button" key={page}>
                        {page}
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