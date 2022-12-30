import * as React from 'react';
import './style.css'
import CustomTooltip from "../custom-tooltip";
import CapitalLetter from "../capital-letter";
import {useState} from "react";

function ProjectCard(props) {

    const [accounts, setAccounts] = useState(props.accounts)

    return (<div className='home-feed__card project-card'>
        <div className="project-card__top">
            <img src={props.img}/>
            <div className="project-card__tooltip">
                <CustomTooltip content={props.content} hover={props.content} size="17px" weight="700" />
            </div>
            <span className='project-card__time'>{props.time}</span>
        </div>
        <div className="project-card__bottom">
            <div className='project-card__bar'>
                <div className='project-card__percent' style={{width: `${props.percent}%`}}>
                    <div className='project-card__number'
                         style={ props.percent > 85 ? { right: '0', borderRadius: '14.5px 14.4px 0 14.4px'} : null }
                    >{props.percent}%</div>
                </div>
            </div>
            <div className='project-card__accounts'>
                { accounts?.map((account) => (
                    <CapitalLetter
                        letter={account.letter}
                        key={account.color+account.letter}
                        bgColor={account.color}
                    />
                ))}
            </div>
        </div>
    </div>);
}

export default ProjectCard;