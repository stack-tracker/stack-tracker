import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_USER } from '../../utils/queries';

function Sessions() {

  const { loading, data } = useQuery(QUERY_USER);
  
  console.log(data)
    if (loading || !data) {
      return (
        null
      )
    }
  
  // sort by date
  let sessionData = data.user.games;
  sessionData = sessionData.slice().sort( (a,b) => b.date.localeCompare(a.date) )

  function sumResult() {
    let sum = 0;
    for(let i=0; i<data.user.games.length; i++) {
      sum += data.user.games[i].result;
    }
    return sum;

  }

  function meanCashPerHour() {
    let mean = 0;
    for(let i=0; i<data.user.games.length; i++) {
      mean += data.user.games[i].cash_per_hour / data.user.games.length;
    }
    return mean.toFixed(2);
  }

  function meanBbPerHour() {
    let mean = 0;
    for(let i=0; i<data.user.games.length; i++) {
      mean += data.user.games[i].bb_per_hour / data.user.games.length;
    }
    return mean.toFixed(2);
  }

  const meanBbph = meanBbPerHour();
  const meanCph = meanCashPerHour();
  const bankRoll = sumResult();  

  return(
    <div className="flex flex-col items-center justify-center h-screen">
      <span className="font-serif text-6xl p-6">{data.user.username}'s Sessions!</span>

      <table className="p-4 mb-4 self-center">
        <thead>
          <tr className="border-r-4 border-t-4 border-b-4 border-gray-900">
            <th className="border-2 border-gray-900 p-3">Bankroll:</th>
            <td className="border-2 border-gray-900 p-3">${bankRoll}</td>
            <th className="border-2 border-gray-900 p-3 ">Average Cash per Hour:</th>
            <td className="border-2 border-gray-900 p-3">${meanCph}</td>
            <th className="border-2 border-gray-900 p-3 ">Average Big Blinds per Hour:</th>
            <td className="border-2 border-gray-900 p-3">{meanBbph}</td>
          </tr>
        </thead>
      </table>

      <table className="p-4">
        <thead className="border-t-4 border-b-2 border-gray-900 text-xl text-gray-900">
          <tr className="border-t-4 border-gray-900">
            <th className="border-l-4 border-gray-900 p-3">Date</th>
            <th className="border-l-2 border-gray-900 p-3">Location</th>
            <th className="border-l-2 border-gray-900 p-3">Hours</th>
            <th className="border-l-2 border-gray-900 p-3">Buy In</th>
            <th className="border-l-2 border-gray-900 p-3">Small Blind</th>
            <th className="border-l-2 border-gray-900 p-3">Big Blind</th>
            <th className="border-l-2 border-gray-900 p-3">Cash Out</th>
            <th className="border-l-2 border-gray-900 p-3">Result</th>
            <th className="border-l-2 border-gray-900 p-3">Cash Per Hour</th>
            <th className="border-r-4 border-l-2 border-gray-900 p-3">Big Blind Per Hour</th>
          </tr>
        </thead>
        <tbody className="border-l-4 border-r-4 border-b-4 border-gray-900 text-lg text-gray-900">
        {sessionData.map((game, i) => (
          <tr key={i} className="border-b-2 border-gray-900">
            <td className="border-l-2 border-gray-900 p-3">{game.date}</td>
            <td className="border-l-2 border-gray-900 p-3">{game.location}</td>
            <td className="border-l-2 border-gray-900 p-3">{game.hours}</td>
            <td className="border-l-2 border-gray-900 p-3">${game.buy_in}</td>
            <td className="border-l-2 border-gray-900 p-3">${game.small_blind}</td>
            <td className="border-l-2 border-gray-900 p-3">${game.big_blind}</td>
            <td className="border-l-2 border-gray-900 p-3">${game.cash_out}</td>
            <td className="border-l-2 border-gray-900 p-3">${game.result}</td>
            <td className="border-l-2 border-gray-900 p-3">${game.cash_per_hour}</td>
            <td className="border-l-2 border-gray-900 p-3">{game.bb_per_hour}</td>
          </tr>
        ))}
            
      </tbody>
      </table>
    </div>
  )
}

export default Sessions;