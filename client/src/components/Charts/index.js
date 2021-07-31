import React from 'react';
import { LineChart, Line, Legend, Tooltip, BarChart, CartesianGrid, XAxis, YAxis, ReferenceLine, Bar } from 'recharts';

const Charts = () => {
    const sessions = [
        {date: "7/5/2021", Profit: 1000},
        {date: "7/8/2021", Profit: 200},
        {date: "7/12/2021", Profit: -300},
        {date: "7/15/2021", Profit: 400},
        {date: "7/16/2021", Profit: 500},
        {date: "7/19/2021", Profit: -146},
        {date: "7/20/2021", Profit: 91},
        {date: "7/21/2021", Profit: 409},
        {date: "7/22/2021", Profit: -200},
        {date: "7/23/2021", Profit: 567},
        {date: "7/24/2021", Profit: -286},
        {date: "7/25/2021", Profit: -120},
        {date: "7/28/2021", Profit: 230},
        {date: "7/29/2021", Profit: 444},
        {date: "7/30/2021", Profit: -220},
        {date: "7/31/2021", Profit: 556},
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
            <h1>Overview</h1>
            <h2>Total Bankroll</h2>
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
                <Legend />
                <ReferenceLine y={0} stroke="#000" />
                <Bar dataKey="Profit" fill="#82ca9d" />
            </BarChart>
        </div>
    )
}

export default Charts;