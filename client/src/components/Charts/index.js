import React from 'react';
import { LineChart, Line, Legend, Tooltip, BarChart, CartesianGrid, XAxis, YAxis, ReferenceLine, Bar } from 'recharts';

const Charts = () => {
    const sessions = [
        {date: "7/5/2021", value: 1000},
        {date: "7/8/2021", value: 200},
        {date: "7/12/2021", value: -300},
        {date: "7/15/2021", value: 400},
        {date: "7/16/2021", value: 500},
        {date: "7/19/2021", value: -146},
        {date: "7/20/2021", value: 91},
        {date: "7/21/2021", value: 409},
        {date: "7/22/2021", value: -200},
        {date: "7/23/2021", value: 567},
        {date: "7/24/2021", value: -286},
        {date: "7/25/2021", value: -120},
        {date: "7/28/2021", value: 230},
        {date: "7/29/2021", value: 444},
        {date: "7/30/2021", value: -220},
        {date: "7/31/2021", value: 556},
    ];

    const bankroll = [
        {date: "7/5/2021", Bankroll: 1000},
        {date: "7/8/2021", Bankroll: 1200},
        {date: "7/12/2021", Bankroll: 900},
        {date: "7/15/2021", Bankroll: 1300},
        {date: "7/16/2021", Bankroll: 1800},
        {date: "7/19/2021", Bankroll: 1654},
        {date: "7/20/2021", Bankroll: 1745},
        {date: "7/21/2021", Bankroll: 2154},
        {date: "7/22/2021", Bankroll: 1954},
        {date: "7/23/2021", Bankroll: 2521},
        {date: "7/24/2021", Bankroll: 2235},
        {date: "7/25/2021", Bankroll: 2115},
        {date: "7/28/2021", Bankroll: 2345},
        {date: "7/29/2021", Bankroll: 2789},
        {date: "7/30/2021", Bankroll: 2569},
        {date: "7/31/2021", Bankroll: 3125},
    ]

    return (
        <div className="Charts">
            <h1>Overall Poker Bankroll</h1>
            <h2>Total Bank Roll</h2>
            <LineChart
                width={500}
                height={300}
                data={bankroll}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="Bankroll" stroke="#8884d8" activeDot={{ r: 8 }} />
            </LineChart>
            <h2>Individual Sessions</h2>
            <BarChart
                width={500}
                height={300}
                data={sessions}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <ReferenceLine y={0} stroke="#000" />
                <Bar dataKey="value" fill="#8884d8" />
                <Bar dataKey="value" fill="#82ca9d" />
            </BarChart>
        </div>
    )
}

export default Charts;