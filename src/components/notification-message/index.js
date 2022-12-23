import * as React from 'react';
import './style.css'


function NotificationMessage(props) {
    return (
        <div className='massage__box'>
            <div className='massage__box_name'>
                <img src={props.img}  className='massage__box_name_icon'/>
                <p className='massage__box_name_text'>{props.name}</p>
            </div>
            <p className='massage__box_content'>
                {props.content} <span> {props.charis}</span>
            </p>
            <div className='massage__box_date'>
                <span>{props.time}</span>
                <p>{props.text}</p>
            </div>
        </div>
    );
}

export default NotificationMessage;