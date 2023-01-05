import * as React from 'react';
import './channels-card.css'
import CustomTooltip from "../custom-tooltip";
import CapitalLetter from "../capital-letter";


function ChannelsCard(props) {
    return (
        <div className='channels-card'>
            <div className='channels-card__descript'>
                <span className='channels-card__time'>{props.time}</span>
                <p className='channels-card__content'>{props.content}<span>{props.charis}</span></p>
            </div>
            <div className='channels-card__account'>
                <CapitalLetter
                    letter={props.name[0]}
                    bgColor={props.color}
                />
                <p className='channels-card__name'>
                    <CustomTooltip content={props.name} hover={props.email} size="13px" weight="400" />
                </p>
            </div>
        </div>
    );
}

export default ChannelsCard;