import * as React from 'react';
import './insight-table-projects-mobile.css'
import CapitalLetter from "../capital-letter";


function InsightTableProjectsMobile(props) {

    return (
        <>
            <div className='insight-table-projects-mobile insight-table-mobile'>
                <h3 className='insight-table-mobile__typo'>{props.title}</h3>
                <div className='insight-table-mobile__box'>
                    <div className='insight-table-projects-mobile-name'>
                        <CapitalLetter letter={props.name} bgColor={props.color}/>
                        <div className='insight-table-projects-mobile-email'>
                            <div>{props.name} </div>
                            <div>{props.email}</div>
                        </div>
                    </div>
                    <div className='insight-table-projects-mobile-authority'>
                        <div className='insight-table-mobile__name'><span>Authority</span>{props.authority}</div>
                        <div className='insight-table-mobile__name insight-table-mobile__total'>
                            <span>Last access</span>{props.access}</div>
                    </div>

                </div>
                <div className='insight-table-mobile__table'>
                    <div className='insight-table-mobile__blocks'>
                        <div className='insight-table-mobile__title'>Joined</div>
                        <div className='insight-table-mobile__data'>{props.joined}</div>
                    </div>
                    <div className='insight-table-mobile__blocks'>
                        <div className='insight-table-mobile__title'>Blocks</div>
                        <div className='insight-table-mobile__data'>{props.blocks}</div>
                    </div>
                    <div className='insight-table-mobile__blocks'>
                        <div className='insight-table-mobile__title'>Mentions</div>
                        <div className='insight-table-mobile__data'>{props.mentions}</div>
                    </div>
                    <div className='insight-table-mobile__blocks'>
                        <div className='insight-table-mobile__title'>Response time</div>
                        <div className='insight-table-mobile__data'>{props.time}</div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default InsightTableProjectsMobile;
