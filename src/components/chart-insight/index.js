import React from 'react';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import './chart-insight.css';
import 'chart.js/auto';


import {Line} from 'react-chartjs-2';

const data = {
    labels: [
        '1', '2', '3', '4', '5', '6', '7', '8', '9', '10',
        '11', '12', '13', '14', '15', '16', '17', '18', '19', '20',
        '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'
    ],
    datasets: [
        {
            label: 'First dataset',
            lineTension: 0.2,
            data: [33, 23, 25, 21, 24, 15, 33, 23, 35, 21, 34, 26, 20, 33, 11, 30, 37, 24, 33, 31, 15, 14, 20, 15, 24, 18, 36, 35, 16, 37, 32],
            fill: true,
            backgroundColor: 'transparent',
            borderColor: '#FF007A'
        },
        {
            label: 'Second dataset',
            lineTension: 0.2,
            data: [33, 15, 35, 21, 14, 26, 13, 35, 21, 34, 36, 20, 15, 24, 18, 36, 27, 14, 17, 25, 34, 16, 35, 10, 13, 33, 16, 20, 34, 20, 30],
            fill: false,
            borderColor: '#FFD702'
        },
        {
            label: 'Third dataset',
            lineTension: 0.2,
            data: [33, 25, 25, 11, 24, 36, 10, 15, 31, 21, 17, 30, 25, 13, 28, 26, 17, 34, 27, 35, 14, 26, 15, 19, 15, 33, 11, 20, 34, 10, 32],
            fill: false,
            borderColor: '#00E99E'
        }
    ],
}

const options = {
    responsive: true,
    plugins: {
        // datalabels: {
        //     anchor: 'start',
        //     color: 'pink',
        //     labels: {
        //         value: {},
        //         title: {
        //             color: 'blue'
        //         }
        //     }
        // }
    }
}

export default function ChartInsight() {
    return (
        <div className='chart-insight'>
            <Line
                options={options}
                data={data}
                plugins={[ChartDataLabels]}
            />
        </div>
    );
}