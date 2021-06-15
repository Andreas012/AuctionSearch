import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';

import './Chart.css'

function Chart() {

    const json = {
        "slug": "anathema-alliance",
        "itemId": 2589,
        "name": "Linen Cloth",
        "uniqueName": "linen-cloth",
        "timerange": 7,
        "data": [
            {
                "marketValue": 226,
                "minBuyout": 226,
                "quantity": 211,
                "scannedAt": "2021-06-09T01:49:35.000Z"
            },
            {
                "marketValue": 226,
                "minBuyout": 226,
                "quantity": 59,
                "scannedAt": "2021-06-09T16:54:21.000Z"
            },
            {
                "marketValue": 130,
                "minBuyout": 25,
                "quantity": 179,
                "scannedAt": "2021-06-09T18:52:33.000Z"
            },
            {
                "marketValue": 25,
                "minBuyout": 25,
                "quantity": 241,
                "scannedAt": "2021-06-09T23:27:20.000Z"
            },
            {
                "marketValue": 25,
                "minBuyout": 25,
                "quantity": 215,
                "scannedAt": "2021-06-10T02:11:11.000Z"
            },
            {
                "marketValue": 195,
                "minBuyout": 195,
                "quantity": 105,
                "scannedAt": "2021-06-10T03:41:34.000Z"
            },
            {
                "marketValue": 192,
                "minBuyout": 192,
                "quantity": 19,
                "scannedAt": "2021-06-10T05:27:04.000Z"
            },
            {
                "marketValue": 192,
                "minBuyout": 192,
                "quantity": 19,
                "scannedAt": "2021-06-10T07:48:12.000Z"
            },
            {
                "marketValue": 192,
                "minBuyout": 192,
                "quantity": 15,
                "scannedAt": "2021-06-10T14:57:45.000Z"
            },
            {
                "marketValue": 192,
                "minBuyout": 192,
                "quantity": 15,
                "scannedAt": "2021-06-10T16:19:07.000Z"
            },
            {
                "marketValue": 192,
                "minBuyout": 192,
                "quantity": 14,
                "scannedAt": "2021-06-10T19:14:56.000Z"
            },
            {
                "marketValue": 300,
                "minBuyout": 300,
                "quantity": 20,
                "scannedAt": "2021-06-10T22:23:40.000Z"
            },
            {
                "marketValue": 300,
                "minBuyout": 300,
                "quantity": 20,
                "scannedAt": "2021-06-11T00:35:46.000Z"
            },
            {
                "marketValue": 300,
                "minBuyout": 300,
                "quantity": 20,
                "scannedAt": "2021-06-11T01:22:07.000Z"
            },
            {
                "marketValue": 125,
                "minBuyout": 125,
                "quantity": 240,
                "scannedAt": "2021-06-11T03:49:35.000Z"
            },
            {
                "marketValue": 125,
                "minBuyout": 125,
                "quantity": 240,
                "scannedAt": "2021-06-11T05:56:04.000Z"
            },
            {
                "marketValue": 125,
                "minBuyout": 125,
                "quantity": 240,
                "scannedAt": "2021-06-11T06:40:20.000Z"
            },
            {
                "marketValue": 125,
                "minBuyout": 125,
                "quantity": 240,
                "scannedAt": "2021-06-11T14:06:48.000Z"
            },
            {
                "marketValue": 125,
                "minBuyout": 125,
                "quantity": 246,
                "scannedAt": "2021-06-11T15:26:20.000Z"
            },
            {
                "marketValue": 125,
                "minBuyout": 125,
                "quantity": 246,
                "scannedAt": "2021-06-11T16:14:33.000Z"
            },
            {
                "marketValue": 125,
                "minBuyout": 125,
                "quantity": 246,
                "scannedAt": "2021-06-11T20:20:39.000Z"
            },
            {
                "marketValue": 125,
                "minBuyout": 125,
                "quantity": 246,
                "scannedAt": "2021-06-11T21:03:35.000Z"
            },
            {
                "marketValue": 250,
                "minBuyout": 250,
                "quantity": 215,
                "scannedAt": "2021-06-12T00:49:30.000Z"
            },
            {
                "marketValue": 250,
                "minBuyout": 250,
                "quantity": 215,
                "scannedAt": "2021-06-12T02:01:44.000Z"
            },
            {
                "marketValue": 249,
                "minBuyout": 249,
                "quantity": 274,
                "scannedAt": "2021-06-12T04:19:43.000Z"
            },
            {
                "marketValue": 250,
                "minBuyout": 249,
                "quantity": 234,
                "scannedAt": "2021-06-12T06:37:25.000Z"
            },
            {
                "marketValue": 214,
                "minBuyout": 178,
                "quantity": 315,
                "scannedAt": "2021-06-12T17:19:52.000Z"
            },
            {
                "marketValue": 177,
                "minBuyout": 150,
                "quantity": 335,
                "scannedAt": "2021-06-12T19:28:38.000Z"
            },
            {
                "marketValue": 149,
                "minBuyout": 149,
                "quantity": 341,
                "scannedAt": "2021-06-12T23:15:36.000Z"
            },
            {
                "marketValue": 149,
                "minBuyout": 149,
                "quantity": 132,
                "scannedAt": "2021-06-13T01:37:03.000Z"
            },
            {
                "marketValue": 178,
                "minBuyout": 178,
                "quantity": 52,
                "scannedAt": "2021-06-13T03:22:11.000Z"
            },
            {
                "marketValue": 178,
                "minBuyout": 178,
                "quantity": 52,
                "scannedAt": "2021-06-13T04:27:10.000Z"
            },
            {
                "marketValue": 171,
                "minBuyout": 171,
                "quantity": 66,
                "scannedAt": "2021-06-13T16:44:37.000Z"
            },
            {
                "marketValue": 171,
                "minBuyout": 171,
                "quantity": 66,
                "scannedAt": "2021-06-13T19:19:10.000Z"
            },
            {
                "marketValue": 171,
                "minBuyout": 171,
                "quantity": 66,
                "scannedAt": "2021-06-13T22:03:52.000Z"
            },
            {
                "marketValue": 175,
                "minBuyout": 170,
                "quantity": 51,
                "scannedAt": "2021-06-14T00:06:13.000Z"
            },
            {
                "marketValue": 175,
                "minBuyout": 170,
                "quantity": 51,
                "scannedAt": "2021-06-14T03:08:41.000Z"
            },
            {
                "marketValue": 170,
                "minBuyout": 170,
                "quantity": 11,
                "scannedAt": "2021-06-14T07:31:04.000Z"
            },
            {
                "marketValue": 173,
                "minBuyout": 170,
                "quantity": 31,
                "scannedAt": "2021-06-14T11:23:41.000Z"
            },
            {
                "marketValue": 170,
                "minBuyout": 170,
                "quantity": 25,
                "scannedAt": "2021-06-14T14:27:25.000Z"
            },
            {
                "marketValue": 169,
                "minBuyout": 169,
                "quantity": 53,
                "scannedAt": "2021-06-14T17:49:56.000Z"
            },
            {
                "marketValue": 524,
                "minBuyout": 169,
                "quantity": 129,
                "scannedAt": "2021-06-14T18:28:36.000Z"
            },
            {
                "marketValue": 168,
                "minBuyout": 168,
                "quantity": 204,
                "scannedAt": "2021-06-14T23:32:54.000Z"
            },
            {
                "marketValue": 168,
                "minBuyout": 167,
                "quantity": 209,
                "scannedAt": "2021-06-15T01:38:08.000Z"
            },
            {
                "marketValue": 371,
                "minBuyout": 166,
                "quantity": 116,
                "scannedAt": "2021-06-15T11:40:13.000Z"
            },
            {
                "marketValue": 454,
                "minBuyout": 166,
                "quantity": 111,
                "scannedAt": "2021-06-15T15:18:15.000Z"
            }
        ]
    }

    const data = {
        labels: ['1', '2', '3', '4', '5', '6'],
        datasets: [
            {
                label: 'Price',
                data: [12, 19, 3, 5, 2, 3],
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