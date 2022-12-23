import * as React from 'react';
import InsightsCard from '../insights-card/index'
import ArrowUUpLeft from '../../assets/ArrowUUpLeft.svg'
import ArrowElbowLeft from '../../assets/ArrowElbowLeft.svg'
import TrendUp from '../../assets/TrendUp.svg'
import TrendDown from '../../assets/TrendDown.svg'
import Acc from '../../assets/yhujk.svg'
import Acc2 from '../../assets/icon-acc.svg'
import Acc3 from '../../assets/accA.svg'
import Acc4 from '../../assets/accE.svg'
import Acc5 from '../../assets/icon-acc2.svg'

import './style.css'
import Link from "@mui/material/Link";

const insightsCard = [
    {
        iconArrow: ArrowUUpLeft,
        text: 'Fastest response time',
        content: 'Moonshot Secret Project',
        number: '17',
        time: 'Minutes',
        account: Acc,
        name: 'Aron H.'
    },
    {
        iconArrow: ArrowElbowLeft,
        text: 'Slowest response time',
        content: 'Dr.G 2022, 2023 Christmas',
        number: '35',
        time: 'Minutes',
        account: Acc2,
        name: 'AYves Saint Laurent'
    },
    {
        iconArrow: TrendUp,
        text: 'Largest data amount',
        content: 'Centellian 24+ Renewal',
        number: '5',
        time: 'Minutes',
        account: Acc3,
        name: 'Angelica'
    },
    {
        iconArrow: TrendDown,
        text: 'Smallest data amount',
        content: 'Espoir 2024 Spring Project',
        number: '42',
        time: 'Minutes',
        account: Acc4,
        name: 'EDGAR'
    },
    {
        iconArrow: TrendUp,
        text: 'Largest data amount',
        content: 'Charis 2023 Summer Kids Package',
        number: '12',
        time: 'Minutes',
        account: Acc5,
        name: 'Hubert Benjamin'
    },
];

function BoxInsights(props) {
    return (
        <div className='box-insights box-channels'>
            <h2 className='box__title'>
                <img src={props.imag}/>
                {props.title}
            </h2>
            <div className='box-insights__flex'>
                {insightsCard.map((card) => (
                    <InsightsCard iconArrow={card.iconArrow}
                                  text={card.text}
                                  content={card.content}
                                  number={card.number}
                                  time={card.time}
                                  account={card.account}
                                  name={card.name}
                                  key={card.name}
                    />
                ))}
            </div>
        </div>
    );
}

export default BoxInsights;