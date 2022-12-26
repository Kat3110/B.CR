import * as React from 'react';
import './style.css'


function Checkbox(props) {

    return (
        <label className="checkbox" style={{color: props.color ? props.color : null}}>
            {props.text}
            <input type="checkbox" />
            <span className="checkbox__checkmark"></span>
        </label>
    );
}

export default Checkbox;
