import React from "react";

function LocationTable(props) {
  const { games, locationState } = props;

  function getLocationData() {
    var result = games.filter((game) => {
      return game.location === locationState;
    });
    return result;
  }

  let locationData = getLocationData();

  // sort by date
  locationData = locationData
    .slice()
    .sort((a, b) => b.date.localeCompare(a.date));

  function sumResult() {
    const locationData = getLocationData();
    console.log(locationData);
    let sum = 0;
    for (let i = 0; i < locationData.length; i++) {
      sum += locationData[i].result;
      console.log(sum);
    }
    return sum;
  }

  function meanCashPerHour() {
    const locationData = getLocationData();
    let mean = 0;
    for (let i = 0; i < locationData.length; i++) {
      mean += locationData[i].cash_per_hour / locationData.length;
    }
    return mean.toFixed(2);
  }

  function meanBigBlindPerHour() {
    const locationData = getLocationData();
    let mean = 0;
    for (let i = 0; i < locationData.length; i++) {
      mean += locationData[i].bb_per_hour / locationData.length;
    }
    return mean.toFixed(2);
  }

  const resultSum = sumResult();
  const meanCph = meanCashPerHour();
  const meanBbph = meanBigBlindPerHour();

  if (!locationState) {
    return (
      <div className=" self-center text-4xl text-gray-900 mx-10 ">
        Select a Location!
      </div>
    );
  }

  return (
    <div className="flex flex-wrap self-center md:mx-10 md:overscroll-x-none">
      <div className="mb-4 py-6 text-gray-900">
        <span className="text-5xl p-5">{locationState}:</span>
      </div>

      <table className="p-4 mb-4 border-8 border-gray-900 self-center bg-gray-300">
        <thead>
          <tr>
            <th className="border-r-4 border-gray-900 p-3">Bankroll:</th>
            <td className="border-r-4 border-gray-900 p-3">${resultSum}</td>
            <th className="p-3">
              Average Cash per Hour:
            </th>
            <td className="border-r-4 border-gray-900 p-3">${meanCph}</td>
            <th className="border-r-4 border-gray-900 p-3 ">
              Average Big Blinds per Hour:
            </th>
            <td className="p-3">{meanBbph}</td>
          </tr>
        </thead>
      </table>

      <table className="border-8 border-gray-900 p-4 bg-gray-300">
        <thead className="border-t-4 border-b-2 border-gray-900 text-xl text-gray-900">
          <tr className="border-b-8 border-gray-900">
            <th className="border-r-4 border-gray-900 p-3">Date</th>
            <th className="border-r-4 border-gray-900 p-3">Hours</th>
            <th className="border-r-4 border-gray-900 p-3">Buy In</th>
            <th className="border-r-4 border-gray-900 p-3">Small Blind</th>
            <th className="border-r-4 border-gray-900 p-3">Big Blind</th>
            <th className="border-r-4 border-gray-900 p-3">Cash Out</th>
            <th className="border-r-4 border-gray-900 p-3">Result</th>
            <th className="border-r-4 border-gray-900 p-3">Cash Per Hour</th>
            <th className="p-3">
              Big Blind Per Hour
            </th>
          </tr>
        </thead>
        <tbody className="border-l-4 border-r-4 border-b-4 border-gray-900 text-lg text-gray-900">
          {locationData.map((game, i) => (
            <tr key={i} className="border-b-4 border-gray-900">
              <td className="border-r-2 border-gray-900 p-3">{game.date}</td>
              <td className="border-r-2 border-gray-900 p-3">{game.hours}</td>
              <td className="border-r-2 border-gray-900 p-3">${game.buy_in}</td>
              <td className="border-r-2 border-gray-900 p-3">
                ${game.small_blind}
              </td>
              <td className="border-r-2 border-gray-900 p-3">
                ${game.big_blind}
              </td>
              <td className="border-r-2 border-gray-900 p-3">
                ${game.cash_out}
              </td>
              <td className="border-r-2 border-gray-900 p-3">${game.result}</td>
              <td className="border-r-2 border-gray-900 p-3">
                ${game.cash_per_hour}
              </td>
              <td className="p-3">
                {game.bb_per_hour}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default LocationTable;
