import * as React from 'react';
import './style.css'


function InsightsCard(props) {
    return (
        <div className='home-fead__card insights-card'>
            <div className='insights-card__data'>
                <img src={props.iconArrow}/>
                <span className='insights-card__text'>{props.text}</span>
            </div>
            <p className='insights-card__content'>{props.content}</p>
            <div className='insights-card__block'>
                <p className='insights-card__time'><span>{props.number}</span>{props.time}</p>
                <div className='insights-card__account'>
                    <img src={props.account}/>
                    <p className='insights-card__name'>{props.name}</p>
                </div>
            </div>
        </div>
    );
}

export default InsightsCard;