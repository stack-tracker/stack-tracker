import React from "react";

function LocationTable(props) {
  const { games, locationState } = props;

  // getLocationData() returns an array of games from selected location
  /* 
    looks like:
    [
      {
        bb_per_hour,
        big_blind,
        small_blind,
        location,
        buy_in,
        cash_out,
        result,
        date,
        hours,
        cash_per_hour,
      }, 
      {
        ...
      }
    ]
  */
  function getLocationData() {
    var result = games.filter((game) => {
      return game.location === locationState;
    });
    console.log(result);
    return result;
  }

  let locationData = getLocationData();

  if (!locationState) {
    return (
      <div className=" self-center text-4xl text-gray-900 mx-10 ">
        Select a Location!
      </div>
    );
  }

  return (
    <div className="flex flex-wrap self-center md:mx-10 md:overscroll-x-none ">
      <div className="mb-4 py-6 text-gray-900">
        <span className="text-5xl">{locationState}</span>
      </div>
      <table className="p-4">
        <thead className="border-t-4 border-b-2 border-gray-900 text-xl text-gray-900">
          <tr>
            <th className="border-l-4 border-gray-900 p-3">Date</th>
            <th className="border-l-2 border-gray-900 p-3">Hours</th>
            <th className="border-l-2 border-gray-900 p-3">Buy In</th>
            <th className="border-l-2 border-gray-900 p-3">Small Blind</th>
            <th className="border-l-2 border-gray-900 p-3">Big Blind</th>
            <th className="border-l-2 border-gray-900 p-3">Cash Out</th>
            <th className="border-l-2 border-gray-900 p-3">Result</th>
            <th className="border-l-2 border-gray-900 p-3">Cash Per Hour</th>
            <th className="border-r-4 border-l-2 border-gray-900 p-3">
              Big Blind Per Hour
            </th>
          </tr>
        </thead>
        <tbody className="border-l-4 border-r-4 border-b-4 border-gray-900 text-lg text-gray-900">
          {locationData.map((game, i) => (
            <tr key={i} className="border-b-2 border-gray-900">
              <td className="border-l-2 border-gray-900 p-3">{game.date}</td>
              <td className="border-l-2 border-gray-900 p-3">{game.hours}</td>
              <td className="border-l-2 border-gray-900 p-3">${game.buy_in}</td>
              <td className="border-l-2 border-gray-900 p-3">
                ${game.small_blind}
              </td>
              <td className="border-l-2 border-gray-900 p-3">
                ${game.big_blind}
              </td>
              <td className="border-l-2 border-gray-900 p-3">
                ${game.cash_out}
              </td>
              <td className="border-l-2 border-gray-900 p-3">${game.result}</td>
              <td className="border-l-2 border-gray-900 p-3">
                ${game.cash_per_hour}
              </td>
              <td className="border-l-2 border-gray-900 p-3">
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
