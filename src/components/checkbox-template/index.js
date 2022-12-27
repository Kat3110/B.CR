import * as React from 'react';
import './style.css'


function CheckboxTemplate(props) {

    return (
        <label className="checkbox-template">
            <input type="radio" defaultChecked={props.check} name="radio" />
            <div className='checkbox-template__card'>
                <h3 className='checkbox-template__typo'>{props.title}</h3>
                <div className='checkbox-template__date'>
                    <span>Last modified</span>
                    {props.time}
                </div>
            </div>
            <span className="checkbox-template__checkmark"></span>
        </label>
    );
}

export default CheckboxTemplate;