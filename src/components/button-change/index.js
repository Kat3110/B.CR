import * as React from 'react';
import style from './style.css'

function ButtonChange(props) {
    return (
        <div>
            <button className='button-change'>
                <img className='button-change__icon' src={props.icon} />
            </button>
        </div>
    );
}
export default ButtonChange;