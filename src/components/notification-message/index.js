import * as React from 'react';
import './notification-message.css'
import CapitalLetter from "../capital-letter";


function NotificationMessage(props) {
    return (
        <div className='notification-message'>
            <div className='notification-message__profile'>
                <CapitalLetter
                    letter={props.name[0]}
                    bgColor={props.color}
                />
                <p className='notification-message__name'>{props.name}</p>
            </div>
            <p className='notification-message__content'>
                {props.content} <span> {props.charis}</span>
            </p>
            <div className='notification-message__date'>
                <span>{props.time}</span>
                <p>{props.text}</p>
            </div>
        </div>
    );
}

export default NotificationMessage;