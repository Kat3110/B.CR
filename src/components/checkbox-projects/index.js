import * as React from 'react';
import './style.css'

function CheckboxProjects(props) {
    return (
        <label className="checkbox-projects" style={{color: props.color ? props.color : null}}>
            {props.text}
            <input type="checkbox" />
            <span className="checkbox-projects__checkmark"></span>
        </label>
    );
}

export default CheckboxProjects;