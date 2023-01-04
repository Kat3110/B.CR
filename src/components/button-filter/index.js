import * as React from 'react';
import './style.css'

function ButtonFilter(props) {
    return (
        <button
            onClick={props.onClick}
            className={
                `button-filter button-filter__color-${props.color ? props.color : 'default'}`
            }>
            {props.text}
        </button>
    );
}
export default ButtonFilter;