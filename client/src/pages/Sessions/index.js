import React from "react";
import { useQuery } from "@apollo/client";
import { QUERY_USER } from "../../utils/queries";

function Sessions() {

  const { loading, data } = useQuery(QUERY_USER);

  if (loading || !data) {
    return <span className="text-center text-4xl text cener">Retrieving your data...</span>;
  }

  // sort by date
  let sessionData = data.user.games;
  sessionData = sessionData
    .slice()
    .sort((a, b) => b.date.localeCompare(a.date));

  function sumResult() {
    let sum = 0;
    for (let i = 0; i < data.user.games.length; i++) {
      sum += data.user.games[i].result;
    }
    return sum;
  }

  function meanCashPerHour() {
    let mean = 0;
    for (let i = 0; i < data.user.games.length; i++) {
      mean += data.user.games[i].cash_per_hour / data.user.games.length;
    }
    return mean.toFixed(2);
  }

  function meanBbPerHour() {
    let mean = 0;
    for (let i = 0; i < data.user.games.length; i++) {
      mean += data.user.games[i].bb_per_hour / data.user.games.length;
    }
    return mean.toFixed(2);
  }

  const meanBbph = meanBbPerHour();
  const meanCph = meanCashPerHour();
  const bankRoll = sumResult();

  return (
    <>
      <div className="grid grid-cols-2 p-5 m-5">
        <table className="col-span-2 p-4 mb-4 border-8 border-gray-900 self-center bg-gray-300 max-w-min min-w-max justify-self-center">
          <tbody>

            <tr className="border-b-2 border-gray-900">
              <th className="border-r-2 border-gray-900 p-3">Bankroll:</th>
              <td className="p-3">${bankRoll}</td>
            </tr>
            <tr className="border-b-2 border-gray-900">
              <th className="border-r-2 border-gray-900 p-3"><span>Average<br/>Cash/Hour:</span></th>
              <td className="p-3">${meanCph}</td>
            </tr>
            <tr className="border-b-2 border-gray-900">
              <th className="border-r-2 border-gray-900 p-3"><span>Average<br /> Big Blinds/Hour:</span></th>
              <td className="p-3">{meanBbph}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="flex justify-center">
        <span className="font-serif font-bold text-6xl text-center text-gray-900 p-6">
          {data.user.username}'s Sessions!
        </span>
      </div>

      <div className="md:mx-4 grid gap-8 grid-cols-2 mb-10">
        {sessionData.map((game, i) => (
          <table key={i} className="border-8 col-span-2 md:col-span-1 border-gray-900 bg-gray-300">
            <thead>
              <tr key={i} className="border-b-8 border-gray-900 text-center">
                <th className="border-r- border-gray-900 p-0 md:p-1"><span>Date:<br/>{game.date}</span></th>
                <td></td>
                <th className="border-r- border-gray-900 p-0 md:p-1"><span>Location:<br/>{game.location}</span></th>
              </tr>
            </thead>
          
            <thead>
              <tr>
                <th className="border-r-2 border-gray-900 p-0 md:p-1">Hours</th>
                <th className="border-r-2 border-gray-900 p-0 md:p-1">Buy In</th>
                <th className="border-r-2 border-gray-900 p-0 md:p-1">Small Blind</th>
                <th className="p-0 md:p-1">Big Blind</th>
              </tr>
            </thead>

            <tbody>
              <tr key={i} className="border-t-2 border-gray-900 text-center">
                <td className="border-r-2 border-gray-900 p-0 md:p-1">{game.hours}</td>
                <td className="border-r-2 border-gray-900 p-0 md:p-1">${game.buy_in}</td>
                <td className="border-r-2 border-gray-900 p-0 md:p-1">{game.big_blind}</td>
                <td className="p-0 md:p-1">${game.small_blind}</td>
              </tr>
            </tbody>

            <thead>
              <tr key={i} className="border-t-4 border-gray-900">
                <th className="border-r-2 border-gray-900 p-0 md:p-1">Cash Out</th>
                <th className="border-r-2 border-gray-900 p-0 md:p-1">Result</th>
                <th className="border-r-2 border-gray-900 p-0 md:p-1"><span>Cash<br/>per Hour</span></th>
                <th className="p-0 md:p-1"><span>Big Blind<br/>per Hour</span></th>
              </tr>
            </thead>
            <tbody>
              <tr key={i} className="border-t-2 border-b-4 border-gray-900 text-center">
                <td className="border-r-2 border-gray-900 p-0 md:p-1">{game.cash_out}</td>
                <td className="border-r-2 border-gray-900 p-0 md:p-1">{game.result}</td>
                <td className="border-r-2 border-gray-900 p-0 md:p-1">${game.cash_per_hour}</td>
                <td className="p-0 md:p-1">${game.bb_per_hour}</td>
              </tr>
            </tbody>
          </table>
        ))}
      </div>
    </>
  );
}

export default Sessions;
