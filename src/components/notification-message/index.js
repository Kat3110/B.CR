import * as React from 'react';
import './style.css'


function NotificationMessage(props) {
    return (
        <div className='notification-message'>
            <div className='notification-message__profile'>
                <img src={props.img}  className='notification-message__icon'/>
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