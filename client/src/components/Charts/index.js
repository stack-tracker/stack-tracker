import React from 'react';
import { PieChart, Pie, Tooltip, Cell } from 'recharts';

const Chart = () => {
    const data = [
        {name: "Facebook", value: 2000000000},
        {name: "Instagram", value: 1500000000},
        {name: "Twitter", value: 1000000000},
        {name: "TikTok", value: 500000000},
    ];

    return (
        <div className="Chart">
            <h1>Social Media User</h1>
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
                <Pie dataKey="value" data={data02} cx={500} cy={200} innerRadius={40} outerRadius={80} fill="#82ca9d" />
                <Tooltip />
            </PieChart> 
        </div>
    )
}

export default Charts;