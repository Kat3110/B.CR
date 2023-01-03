import * as React from 'react';
import './style.css'

function ButtonChange(props) {
    return (
        <button onClick={props.onClick} className='button-change'>
            {props.icon}
        </button>
    );
}
export default ButtonChange;