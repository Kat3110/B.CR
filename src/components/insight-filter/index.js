import * as React from 'react';
import './style.css'
import DatePickers from "../../components/date-pickers";
import ButtonFilter from "../button-filter";


function InsightFilter() {

    return (
        <div className='insight-filter'>
            <h2 className='insight-filter__title'>Projects data</h2>
            <div className='insight-filter__row-first'>
                <h3 className='insight-filter__subtitle'>Period</h3>
                <div className='insight-filter__date'>
                    <DatePickers/> ~ <DatePickers/>
                </div>
                <ButtonFilter color='default' text='2 Days'/>
                <ButtonFilter color='default' text='1 Day'/>
                <ButtonFilter color='default' text='1 Month'/>
                <ButtonFilter color='pink' text='3 Months'/>
                <ButtonFilter color='default' text='6 Months'/>
                <ButtonFilter color='default' text='1 Year'/>
            </div>
            <div className='insight-filter__row-second'>
                <h3 className='insight-filter__subtitle'>Project</h3>
            </div>
            <div className='insight-filter__row-third'>
                <h3 className='insight-filter__subtitle'>Step</h3>
            </div>
        </div>
    );
}

export default InsightFilter;