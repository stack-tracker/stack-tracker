import React from 'react';
import { PieChart, Pie, Tooltip, BarChart, CartesianGrid, XAxis, YAxis, ReferenceLine, Bar } from 'recharts';

const Charts = () => {
    const data = [
        {name: "Facebook", value: 2000000000},
        {name: "Instagram", value: 1500000000},
        {name: "Twitter", value: 1000000000},
        {name: "TikTok", value: 500000000},
        {name: "Stupid", value: -200000000}
    ];

    return (
        <div className="Charts">
            <h1>Social Media Users</h1>
            <PieChart width={400} height={400}>
                <Pie
                    dataKey="value"
                    isAnimationActive={false}
                    data={data}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    fill="#8884d8"
                    label
                />
                <Tooltip />
            </PieChart>
            <BarChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
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