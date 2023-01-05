import * as React from 'react';
import './style.css'

function LinkWithIcon(props) {
    return (
        <div className="link-with-icon">
            <span className="link-with-icon__img">
                <img src={props.icon} alt='' />
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