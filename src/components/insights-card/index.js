import * as React from 'react';
import './style.css'


function InsightsCard(props) {
    return (
        <div className='insights__card'>
            <div className='insights__data'>
                <img src={props.iconArrow}/>
                <span className='insights__text'>{props.text}</span>
            </div>
            <p className='insights__content'>{props.content}</p>
            <div className='insights__block'>
                <p className='insights__time'><span>{props.number}</span>{props.time}</p>
                <div className='insights__account'>
                    <img src={props.account}/>
                    <p className='insights__name'>{props.name}</p>
                </div>
            </div>
        </div>
    );
}

export default InsightsCard;