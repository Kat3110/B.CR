import * as React from 'react';
import './checkbox-custom.css'

function CheckboxCustom(props) {
    return (
        <label className="checkbox-custom" style={{color: props.color ? props.color : null}}>
            <input type="checkbox" />
            <span className="checkbox-custom__checkmark"></span>
        </label>
    );
}

export default CheckboxCustom;