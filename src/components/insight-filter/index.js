import * as React from 'react';
import './insight-filter.css'
import DatePickers from "../../components/date-pickers";
import ButtonFilter from "../button-filter";
import Button from "../../components/button";
import SelectWindow from "../../components/select-window";
import InsightTitle from "../insight-title";

const arraySelectStep = [
    {
        value: 1,
        label: 'Concept'
    },
    {
        value: 2,
        label: 'Prescription'
    },
    {
        value: 3,
        label: 'Container'
    },
    {
        value: 4,
        label: 'Package'
    },
    {
        value: 5,
        label: 'Test'
    },
    {
        value: 6,
        label: 'Order'
    }
]
const arraySelect = [
    {
        value: 1,
        label: 'Dr.F 2022, 2023 Christmas'
    },
    {
        value: 2,
        label: 'Dr.G 2022, 2023 Christmas'
    },
    {
        value: 3,
        label: 'Dr.A 2020, 2021 Christmas'
    },
    {
        value: 4,
        label: 'Dr.W 2022, 2023 Christmas'
    }
]


function InsightFilter(props) {

    return (
        <div className='insight-filter'>
            {props.title ?
                <InsightTitle title={props.title} image={props.image}/>
                : null}
            <div className='insight-filter__box'>
                <div className='insight-filter__row-first'>
                    <h3 className='insight-filter__subtitle'>Period</h3>
                    <div className='insight-filter__date'>
                        <DatePickers/> ~ <DatePickers/>
                    </div>
                    <div className='insight-filter__btn'>
                        <ButtonFilter color='default' number={'2'} text='Days'/>
                        <ButtonFilter color='default' number={'1'} text='Day'/>
                        <ButtonFilter color='default' number={'1'} text='Month'/>
                        <ButtonFilter color={props.active ? 'pink' : 'default'} number={'3'}  text='Months'/>
                        <ButtonFilter color='default' number={'6'}  text='Months'/>
                        <ButtonFilter color='default' number={'1'} text='Year'/>
                    </div>

                </div>
                <div className='insight-filter__row-second'>
                    <h3 className='insight-filter__subtitle'>Project</h3>
                    <SelectWindow value={2} array={arraySelect} width={348}/>
                </div>
                <div className='insight-filter__row-third'>
                    <h3 className='insight-filter__subtitle'>Step</h3>
                    <SelectWindow value={2} array={arraySelectStep} width={348}/>
                </div>
                <Button text='Apply' color='default' size='l' />
            </div>
        </div>
    );
}

export default InsightFilter;
