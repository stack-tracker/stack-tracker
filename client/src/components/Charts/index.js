import React from 'react';
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

    let sessionData = data.user.games;
    sessionData = sessionData.slice().sort( (a,b) => a.date.localeCompare(b.date) )
    console.log(sessionData);

    let arrayBarGraph = sessionData;
    let sessions = [];
    
    arrayBarGraph.map(games => {
        sessions.push({sessionDate: games.date, profit: games.result})
    })

    let resultsArr = [];
    for (let i=0; i<data.user.games.length; i++) {
      resultsArr.push(data.user.games[i].result);
    }
    //accumulate results; add next index of array to sum of previous indexes
    resultsArr = resultsArr.map((result, i) => resultsArr.slice(0, i + 1).reduce((a, b) => a + b));
    console.log(resultsArr);

    let lineBankroll = sessionData.map((game, i) => {
      return {sessionDate: game.date, bankroll: resultsArr[i] }
    });
    
    let bbPerHour = [];
    bbPerHour = sessionData.map(game => {
      return {sessionDate: game.date, bbPerHour: game.bb_per_hour, dollarsPerHour: game.cash_per_hour}
    });
    console.log(bbPerHour);

        if (Auth.loggedIn()) {
        return (
            <div className="z-10 Charts p-6 text-gray-800">
              <h1 className="font-bold font-serif text-6xl text-center p-10">Chart Overview</h1>
              <div className="flex flex-col xl:flex-row items-center xl:justify-between">
                <div className="flex flex-col my-4 justify-center items-center border-8 border-gray-900 p-4">
                  <h2 className="p-4 text-xl font-bold">Total Bankroll</h2>
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
                </div>
                <div className="flex flex-col my-4 justify-center items-center border-8 border-gray-900 p-4">
                  <h2 className="p-4 text-xl font-bold">Individual Sessions</h2>
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
                </div>
                <div className="flex flex-col my-4 justify-center items-center border-8 border-gray-900 p-4">
                  <h2 className="p-4 text-xl font-bold">Big Blinds Per Hour</h2>
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
              </div>
            </div>
        )} else {
            return (
                <Route>
                    <Redirect to="/" /> : <Signup />
                </Route>
    )}
} 

export default Charts;