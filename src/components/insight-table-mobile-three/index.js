import * as React from 'react';
import './insight-table-mobile-three.css'


function InsightTableMobileThree(props) {

    return (
        <>
            <div className='insight-table-mobile'>
                <h3 className='insight-table-mobile__typo'>{props.title}</h3>
                <div className='insight-table-mobile__box'>
                    <div className='insight-table-mobile__number'>{props.rank}</div>
                    <div className='insight-table-mobile__name'><span>PM</span>{props.name}</div>
                    <div className='insight-table-mobile__name insight-table-mobile__total'><span>Total</span>{props.total}</div>
                </div>
                <div className='insight-table-mobile__table'>
                    <div className='insight-table-mobile__blocks'>
                        <div className='insight-table-mobile__title'>Text</div>
                        <div className='insight-table-mobile__data'>{props.text}</div>
                    </div>
                    <div className='insight-table-mobile__blocks'>
                        <div className='insight-table-mobile__title'>Emoji</div>
                        <div className='insight-table-mobile__data'>{props.emoji}</div>
                    </div>
                    <div className='insight-table-mobile__blocks'>
                        <div className='insight-table-mobile__title'>Image</div>
                        <div className='insight-table-mobile__data'>{props.image}</div>
                    </div>
                    <div className='insight-table-mobile__blocks'>
                        <div className='insight-table-mobile__title'>Link</div>
                        <div className='insight-table-mobile__data'>{props.link}</div>
                    </div>
                    <div className='insight-table-mobile__blocks'>
                        <div className='insight-table-mobile__title'>Video</div>
                        <div className='insight-table-mobile__data'>{props.video}</div>
                    </div>
                    <div className='insight-table-mobile__blocks'>
                        <div className='insight-table-mobile__title'>File</div>
                        <div className='insight-table-mobile__data'>{props.file}</div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default InsightTableMobileThree;
