import * as React from 'react';
import './style.css'


function ChannelsCard(props) {
    return (
        <div className='channels__block'>
            <div className='channels__card'>
                <div className='channels__card_descript'>
                    <span className='channels__card_time'>{props.time}</span>
                    <p className='channels__card_content'>{props.content}<span>{props.charis}</span></p>
                </div>
                <div className='channels__card_account'>
                    <img src={props.icon}/>
                    <p className='channels__card_name'>{props.name}</p>
                </div>
            </div>
        </div>
    );
}

export default ChannelsCard;