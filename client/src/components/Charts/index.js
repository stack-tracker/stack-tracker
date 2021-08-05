import React, { useEffect } from 'react';
import { LineChart, Line, Legend, Tooltip, BarChart, CartesianGrid, XAxis, YAxis, ReferenceLine, Bar } from 'recharts';
import Auth from '../../utils/auth';
import { BrowserRouter as Route, Redirect } from 'react-router-dom';
import Signup from '../../pages/Signup'
import { QUERY_USER } from '../../utils/queries';
import { useQuery } from '@apollo/client';

const Charts = () => {
    const { loading, data } = useQuery(QUERY_USER);
    if (loading || !data) {
        return (
          null
        )
      }

    let arrayBarGraph = data.user.games;
    let sessions = [];
    let lineBankroll = [];
    let totalResult;
    let newArray = [];
    
    arrayBarGraph.map(games => {
        sessions.push({sessionDate: games.date, profit: games.result})
        lineBankroll.push({sessionDate: games.date, bankroll: totalResult})
        newArray.push(games.result);
    })

    console.log(newArray);
    function accumulate (arr) {
        arr.map((sum => value => sum += value)(0));
        return arr;
    }
    console.log(accumulate(newArray));


    const bbPerHour = [
        {sessionDate: "7/5/2021", bbPerHour: 5, dollarsPerHour: 15},
        {sessionDate: "7/8/2021", bbPerHour: 8, dollarsPerHour: 25},
        {sessionDate: "7/12/2021", bbPerHour: 6, dollarsPerHour: 17},
        {sessionDate: "7/15/2021", bbPerHour: 12, dollarsPerHour: 8},
        {sessionDate: "7/16/2021", bbPerHour: 4, dollarsPerHour: 12},
        {sessionDate: "7/19/2021", bbPerHour: 6, dollarsPerHour: 18},
        {sessionDate: "7/20/2021", bbPerHour: 12, dollarsPerHour: 12},
        {sessionDate: "7/21/2021", bbPerHour: 15, dollarsPerHour: 11},
        {sessionDate: "7/22/2021", bbPerHour: 2, dollarsPerHour: 22},
        {sessionDate: "7/23/2021", bbPerHour: 7, dollarsPerHour: 30},
        {sessionDate: "7/24/2021", bbPerHour: 3, dollarsPerHour: 25},
        {sessionDate: "7/25/2021", bbPerHour: -5, dollarsPerHour: 14},
        {sessionDate: "7/28/2021", bbPerHour: -10, dollarsPerHour: 25},
        {sessionDate: "7/29/2021", bbPerHour: 10, dollarsPerHour: 14},
        {sessionDate: "7/30/2021", bbPerHour: 15, dollarsPerHour: 25},
        {sessionDate: "7/31/2021", bbPerHour: 8, dollarsPerHour: 25},
    ];

        if (Auth.loggedIn()) {
        return (
            <div className="Charts">
                <h1>Overview</h1>
                <h2>Total Bankroll</h2>
                <LineChart
                    width={500}
                    height={300}
                    data={lineBankroll}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="sessionDate" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="bankroll" stroke="#8884d8" activeDot={{ r: 8 }} />
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
                    <XAxis dataKey="sessionDate" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <ReferenceLine y={0} stroke="#000" />
                    <Bar dataKey="profit" fill="#82ca9d" />
                </BarChart>
                <h2>bb/Hour</h2>
                <LineChart
                    width={500}
                    height={300}
                    data={bbPerHour}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="sessionDate" />
                    <YAxis yAxisId="left" />
            <YAxis yAxisId="right" orientation="right" />
            <Tooltip />
            <Legend />
            <Line yAxisId="left" type="monotone" dataKey="bbPerHour" stroke="#8884d8" activeDot={{ r: 8 }} />
            <Line yAxisId="right" type="monotone" dataKey="dollarsPerHour" stroke="#82ca9d" />
                </LineChart>
            </div>
        )} else {
            return (
                <Route>
                    <Redirect to="/" /> : <Signup />
                </Route>
    )}
} 

export default Charts;