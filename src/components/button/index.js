import * as React from 'react';
import './button.css'

function Button(props) {
    return (
        <button
            onClick={props.onClick}
            className={
                `button button__size-${props.size ? props.size : 'm'} button__color-${props.color ? props.color : 'default'}`
            }>
            {props.icon}
            {props.text}
        </button>
    );
}
export default Button;