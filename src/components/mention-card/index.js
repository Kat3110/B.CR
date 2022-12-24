import * as React from 'react';
import './style.css'


function MentionCard(props) {
    return (
        <div className='mention-card'>
            <span className='mention-card__time'>{props.time}</span>
            <span className='mention-card__person'>
                {props.firstImg ? <img src={props.firstImg}/> : null}
                {props.firstName}
            </span>
            <span>mentioned</span>
            <span className='mention-card__person'>
                {props.secondImg ? <img src={props.secondImg}/> : null}
                {props.secondName}
            </span>
            <span>in</span>
            <button>{props.button}</button>
        </div>
    );
}

export default MentionCard;