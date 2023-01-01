import * as React from 'react';
import './style.css'

function ButtonChange(props) {
    return (
        <button className='button-change'>
            {props.icon}
        </button>
    );
}
export default ButtonChange;