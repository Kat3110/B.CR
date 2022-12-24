import * as React from 'react';
import './style.css'
import CustomTooltip from "../custom-tooltip";


function ChannelsCard(props) {
    return (
        <div className='channels-card'>
            <div className='channels-card__descript'>
                <span className='channels-card__time'>{props.time}</span>
                <p className='channels-card__content'>{props.content}<span>{props.charis}</span></p>
            </div>
            <div className='channels-card__account'>
                <img src={props.icon}/>
                <p className='channels-card__name'>
                    <CustomTooltip content={props.name} hover={props.email} size="13px" weight="400" />
                </p>
            </div>
        </div>
    );
}

export default ChannelsCard;