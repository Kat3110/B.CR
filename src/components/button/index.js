import * as React from 'react';
import './style.css'

function Button(props) {
    return (
        <button
            onClick={props.onClick}
            className={
                `button button__size-${props.size ? props.size : 'm'} button__color-${props.color ? props.color : 'default'}`
            }>
            {props.text}
        </button>
    );
}
export default Button;