import * as React from 'react';
import './page-error.css'
import {ReactComponent as Logo} from "../../assets/logo.svg";


function PageError() {


    return (
        <div className='page-error container'>
                <Logo className='page-error__logo' />
                <div className='page-error__box'>
                    <span>404</span>
                    <span>Page not found</span>
                </div>
            <a className='page-error__link' href="/">
                <button className='page-error__btn'>Go Home</button>
            </a>

        </div>
    );
}

export default PageError;
