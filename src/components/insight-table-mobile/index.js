import * as React from 'react';
import './insight-table-mobile.css'


function InsightTableMobile(props) {


    return (
        <>
            <div className='insight-table-mobile'>
                <h3 className='insight-table-mobile__typo'>{props.title}</h3>
                <div className='insight-table-mobile__box'>
                    <div className='insight-table-mobile__number'>{props.rank}</div>
                    <div className='insight-table-mobile__name'><span>PM</span>{props.name}</div>
                </div>
                <div className='insight-table-mobile__table'>
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

export default InsightTableMobile;
