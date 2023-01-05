import * as React from 'react';
import './checkbox.css'

function Checkbox(props) {
    return (
        <label className="checkbox" style={{color: props.color ? props.color : null}}>
            {props.text}
            <input type="checkbox" defaultChecked={props.checked} disabled={props.disabled} />
            <span className="checkbox__checkmark"></span>
        </label>
    );
}

export default Checkbox;
