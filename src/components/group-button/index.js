import * as React from 'react';
import './group-btn.css'
import Button from "../button";

function GroupButton(props) {
    return (
        <div className='group-btn' style={{ justifyContent: props.justify ? props.justify : null }}>
            <Button onClick={props.onClick} text='Cancel' color='default' size='l'/>
            <Button onClick={props.close} text='Confirm' color='black' size='l'/>
        </div>
    );
}

export default GroupButton;