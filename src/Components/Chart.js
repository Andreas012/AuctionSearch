import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';

import './Chart.css'

function Chart(props) {

    const [values, setValues] = useState([]);
    const [date, setDates] = useState([]);

    useEffect(() => {
        for (var i = 0; i < Object.keys(props.rawPrice.props).length; i++) {
            if (props.rawPrice.props[i] !== undefined) {
                values.push(props.rawPrice.props[i].minBuyout)
            }
        }
        setValues([...values]);

        for (var i = 0; i < Object.keys(props.rawPrice.props).length; i++) {
            if (props.rawPrice.props[i] !== undefined) {
                var dateTime = new Date(props.rawPrice.props[i].scannedAt)
                date.push(dateTime.getFullYear() + '-' + (dateTime.getMonth() + 1).toString().padStart(2, 0) + '-' + dateTime.getDate() + ' ' + dateTime.getHours().toString().padStart(2, 0) + ':' + dateTime.getMinutes().toString().padStart(2, 0));
            }
        }
        setDates([...date]);

    }, []);

    const data = {
        labels: date,
        datasets: [
            {
                label: 'Price',
                data: values,
                fill: false,
                backgroundColor: 'rgb(255, 255, 255)',
                borderColor: 'rgb(255, 255, 255)',
            },
        ],
    };

    const options = {
        scales: {
            yAxes: [
                {
                    ticks: {
                        beginAtZero: false,
                    },
                },
            ],
        },
    };

    return (
        <>
            <Line className="chart" data={data} options={options} />
        </>
    );
}

export default Chart;