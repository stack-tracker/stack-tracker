import React, { useState } from "react";
import LocationsBar from "../../components/LocationsBar";
import LocationTable from "../../components/LocationTable";
import { useQuery } from "@apollo/client";
import { QUERY_USER } from "../../utils/queries";

import Auth from "../../utils/auth";
import { BrowserRouter as Route, Redirect } from "react-router-dom";
import Signup from "../../pages/Signup";

// const user = {
//     username: 'pokrGuy93',
//     email: 'poker@fake.com',
//     games: [
//       {
//         location: 'place 1',
//         hours: 5,
//         small_blind: .05,
//         big_blind: .10,
//         buy_in: 10,
//         cash_out: 50,
//         date: Date.now(),
//         result: 40,
//         cash_per_hour: 8,
//         bb_per_hour: 80
//       },
//       {
//         location: 'place 2',
//         hours: 5,
//         small_blind: .05,
//         big_blind: .10,
//         buy_in: 10,
//         cash_out: 50,
//         date: Date.now(),
//         result: 40,
//         cash_per_hour: 8,
//         bb_per_hour: 80
//       },
//       {
//         location: 'place 3',
//         hours: 5,
//         small_blind: .05,
//         big_blind: .10,
//         buy_in: 10,
//         cash_out: 50,
//         date: Date.now(),
//         result: 40,
//         cash_per_hour: 8,
//         bb_per_hour: 80
//       },
//       {
//         location: 'place 4',
//         hours: 5,
//         small_blind: .05,
//         big_blind: .10,
//         buy_in: 10,
//         cash_out: 50,
//         date: Date.now(),
//         result: 40,
//         cash_per_hour: 8,
//         bb_per_hour: 80
//       },
//       {
//         location: 'place 4',
//         hours: 5,
//         small_blind: .05,
//         big_blind: .10,
//         buy_in: 10,
//         cash_out: 80,
//         date: Date.now(),
//         result: 70,
//         cash_per_hour: 14,
//         bb_per_hour: 140
//       },
//     ]
//   };

function Locations() {
  const [locationState, setLocationState] = useState("");
  const { loading, data } = useQuery(QUERY_USER);
  console.log(data);

  function getLocations() {
    if (loading) {
      return "loading";
    }
    // maps over user.games and returns an array of just the locations
    const locationsArr = data.user.games.map((game) => {
      return game.location;
    });
    // returns an array of unique locations
    const uniqueLocations = [...new Set(locationsArr)];
    return uniqueLocations;
  }

  if (Auth.loggedIn()) {
    const locations = getLocations();
    console.log(locationState);
    return (
      <div className="h-screen flex flex-wrap lg:flex-nowrap">
        {!loading && (
          <LocationsBar
            locations={locations}
            locationState={locationState}
            setLocationState={setLocationState}
          />
        )}
        {loading ? (
          <span>Loading...</span>
        ) : (
          <LocationTable
            locationState={locationState}
            games={data.user.games}
          />
        )}
      </div>
    );
  } else {
    return (
      <Route>
        <Redirect to="/" /> : <Signup />
      </Route>
    );
  }
}

export default Locations;
