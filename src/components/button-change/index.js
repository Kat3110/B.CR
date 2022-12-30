import * as React from 'react';
import './style.css'

function ButtonChange(props) {
    return (
        <button className='button-change'>
            <img className='button-change__icon' src={props.icon} />
        </button>
    );
}
export default ButtonChange;