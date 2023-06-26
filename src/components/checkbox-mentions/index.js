import * as React from 'react';
import './checkbox-mentions.css'

function CheckboxMentions(props) {
    return (
        <label className="checkbox-mentions" style={{color: props.color ? props.color : null}}>
            <div className="checkbox-mentions__content">
                {props.text}
            </div>
            <input type="checkbox" defaultChecked={props.checked} disabled={props.disabled} />
            <div className="checkbox-mentions__checkmark"></div>
        </label>
    );
}

export default CheckboxMentions;
