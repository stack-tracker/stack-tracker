import React, { useState } from "react";
import LocationsBar from "../../components/LocationsBar";
import LocationTable from "../../components/LocationTable";
import { useQuery } from "@apollo/client";
import { QUERY_USER } from "../../utils/queries";

import Auth from "../../utils/auth";
import { BrowserRouter as Route, Redirect } from "react-router-dom";
import Signup from "../../pages/Signup";

function Locations() {
  const [locationState, setLocationState] = useState("");
  const { loading, data } = useQuery(QUERY_USER);

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
