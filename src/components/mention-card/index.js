import * as React from 'react';
import './style.css'
import CapitalLetter from "../capital-letter";


function MentionCard(props) {
    return (
        <div className='mention-card'>
            <span className='mention-card__time'>{props.time}</span>
            <span className='mention-card__person'>
                <CapitalLetter
                    letter={props.firstName[0]}
                    bgColor={props.color}
                />
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