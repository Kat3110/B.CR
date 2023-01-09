import * as React from 'react';
import './link-with-icon.css'
import {ReactComponent as LinkSimpleDialog} from "../../assets/LinkSimpleDialog.svg";

function LinkWithIcon(props) {
    return (
        <div className="link-with-icon">
            <span className="link-with-icon__img">
                {props.icon ?
                    <img src={props.icon} alt='' />
                    : <LinkSimpleDialog />
                }
            </span>
            <a
                className="link-with-icon__text"
                href={props.link}
            >
                {props.link}
            </a>
        </div>
    );
}
export default LinkWithIcon;