import * as React from 'react';
import './style.css'
import CustomTooltip from "../custom-tooltip";
import cardAccG from '../../assets/accBlackG.svg'
import cardAccH from '../../assets/icon-acc2.svg'
import cardAccA from '../../assets/accA.svg'
import cardAccB from '../../assets/accB.svg'
import cardAccE from '../../assets/accE.svg'
import cardAccY from '../../assets/icon-acc.svg'

function ProjectCard(props) {
    const accounts = [cardAccY, cardAccE, cardAccB, cardAccA, cardAccH, cardAccG]

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
                {accounts.map((account) => (
                    <img src={account} key={account}/>
                ))}
            </div>
        </div>
    </div>);
}

export default ProjectCard;