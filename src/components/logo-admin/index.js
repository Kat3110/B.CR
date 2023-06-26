import * as React from 'react';
import {ReactComponent as Logo} from "../../assets/logo.svg";
import './logo-admin.css';

function LogoAdmin() {

    return (
        <div className='logo-admin'>
            <Logo/>
            <div className='logo-admin__text'>Admin</div>
        </div>
    );
}

export default LogoAdmin;
