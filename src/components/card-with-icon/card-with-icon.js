import * as React from 'react';
import './card-with-icon.css';
import CapitalLetter from "../capital-letter";
import LinkWithIcon from "../link-with-icon";

function CardWithIcon(props) {

    return (
        <div className='card-with-icon'>
            <div className='card-with-icon__content'>
                {props.image ?
                    <img className='card-with-icon__image' src={props.image} alt='' />
                    : null}
                <div className='card-with-icon__text'>
                    {props.name ?
                        <div className='card-with-icon__name'>
                            <CapitalLetter letter={props.name[0]} bgColor={props.color} />{props.name}
                        </div>
                        : null}
                    {props.date ?
                        <div className='card-with-icon__date'>
                            {props.date}
                        </div>
                        : null}
                    {props.link ? <LinkWithIcon link={props.link} icon={props.icon} /> : null}
                </div>
            </div>
            <a href={props.svg} className='card-with-icon__svg'>
                {props.svg}
            </a>
        </div>
    );
}

export default CardWithIcon;