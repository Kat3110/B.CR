import React from 'react';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import './chart-insight.css';
import {ReactComponent as List} from "../../assets/ListChecks.svg";
import {ReactComponent as Arrow} from "../../assets/CaretUp.svg";

import './chart-insight.css';
import 'chart.js/auto';


import {Line} from 'react-chartjs-2';
import Button from "../button";
import DropdownMenu from "../dropdown-menu";
import Checkbox from "../checkbox";
import RadioProjects from "../radio-projects";

const data = {
    labels: [
        '1', '2', '3', '4', '5', '6', '7', '8', '9', '10',
        '11', '12', 'Today', '14', '15', '16', '17', '18', '19', '20',
        '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'
    ],
    datasets: [
        {
            label: 'PROJ. #1: NIKE',
            lineTension: 0.3,
            data: [33, 23, 25, 21, 24, 15, 33, 23, 35, 21, 34, 26, 20, 33, 11, 30, 37, 24, 33, 31, 15, 14, 20, 15, 24, 18, 36, 35, 16, 37, 32],
            fill: true,
            backgroundColor: 'transparent',
            borderColor: '#FF007A'
        },
        {
            label: 'PROJ. #2: Etude',
            lineTension: 0.3,
            data: [33, 15, 35, 21, 14, 26, 13, 35, 21, 34, 36, 20, 15, 24, 18, 36, 27, 14, 17, 25, 34, 16, 35, 10, 13, 33, 16, 20, 34, 20, 30],
            fill: false,
            borderColor: '#FFD702'
        },
        {
            label: 'PROJ. #3: Channel',
            lineTension: 0.3,
            data: [33, 25, 25, 11, 24, 36, 10, 15, 31, 21, 17, 30, 25, 13, 28, 26, 17, 34, 27, 35, 14, 26, 15, 19, 15, 33, 11, 20, 34, 10, 32],
            fill: false,
            borderColor: '#00E99E'
        }
    ],
}

const options = {
    elements: {
        point: {
            radius: 2
        }
    },
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            display: false
        },
        datalabels: {
            display: false,
        },
    },
    scales: {
        y: {
            grid: {
                display: false
            }
        },
        x: {
            position: 'top',
        },
    }
}

export default function ChartInsight() {
    return (
        <>
            <div className='chart-insight__menu'>
                <div className='chart-insight__button-group'>
                    <div className='chart-insight__button chart-insight__button-active'>Day</div>
                    <div className='chart-insight__button'>Month</div>
                    <div className='chart-insight__button'>Year</div>
                </div>
                <div className='chart-insight__box'>
                    <div className='chart-insight__legend'>
                        {data.datasets.map((dataset) => (
                            <button
                                key={dataset.label}
                            >
                                <span style={{backgroundColor: dataset.borderColor}}></span>
                                {dataset.label}
                            </button>
                        ))}
                    </div>
                    <DropdownMenu
                        nameClass='chart-insight__drop-menu'
                        trigger={<Button icon={<List/>}/>}
                        changeTrigger={<Button icon={<Arrow/>}/>}
                        content={
                            <div className='chart-insight__checkbox'>
                                <Checkbox text='Charis 2023 Summer Kids Package' checked/>
                                <Checkbox text='Dr.G 2022, 2023 Christmas' checked/>
                                <Checkbox text='Moonshot Secret Project'/>
                                <Checkbox text='Centellian 24+ Renewal' checked/>
                                <Checkbox text='Espoir 2024 Spring Project'/>
                                <Checkbox text='Voynoon Concptual Production'/>
                            </div>
                    }/>
                </div>
            </div>
            <div className='page-insight__times'>
                <span>1 H</span>
                <span>30 M</span>
                <span>0 M</span>
            </div>
            <div className='chart-insight'>
                <div>
                    <Line
                        className='chart-insight__line'
                        options={options}
                        data={data}
                        plugins={[ChartDataLabels]}
                    />
                </div>
            </div>
        </>
    );
}