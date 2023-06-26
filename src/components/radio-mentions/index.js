import * as React from 'react';
import './radio-mentions.css'

//radio
function RadioMentions(props) {

    return (
        <label className="radio-mentions">
            <input type="radio" defaultChecked={props.check} name="radio" />
            <h3 className='radio-mentions__title'>{props.title}</h3>
            <span className="radio-mentions__checkmark"></span>
        </label>
    );
}

export default RadioMentions;
