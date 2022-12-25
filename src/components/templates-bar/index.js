import * as React from 'react';
import './style.css'
import {NavLink} from "react-router-dom";

const pages = [{
    name: 'Outline', url: '/'
}, {
    name: 'Ingredient', url: '/'
}, {
    name: 'Certify', url: '/'
}, {
    name: 'Package', url: '/'
}, {
    name: 'Test', url: '/'
}, {
    name: 'Manufacture', url: '/'
},];

function TemplatesBar() {

    return (

        <div className='templates-bar__links'>
            {pages.map((page) => (
                <NavLink
                    to={page.url}
                    key={page.name}
                    className={({isActive}) => isActive ? 'templates-bar__link header-bar__link-active' : 'templates-bar__link'}
                >
                    {page.name}
                </NavLink>))}
        </div>
    );
}

export default TemplatesBar;