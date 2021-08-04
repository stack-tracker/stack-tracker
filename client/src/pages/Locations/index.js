import React, { useState } from 'react';
import LocationsBar from '../../components/LocationsBar';
import LocationTable from '../../components/LocationTable';
import { useQuery } from '@apollo/client';
import { QUERY_USER} from '../../utils/queries';

function Locations() {
  const [locationState, setLocationState] = useState('');
  const { loading, data } = useQuery(QUERY_USER);
  console.log(data)

  function getLocations() {
    if(loading) {
      return "loading"
    }
    // maps over user.games and returns an array of just the locations
    const locationsArr = data.user.games.map(game => {
    return game.location;
    });
    // returns an array of unique locations
    const uniqueLocations = [...new Set(locationsArr)];
    return uniqueLocations;
  };
  
  const locations = getLocations();
  console.log(locationState)
  return(
    <div className="grid gap-6 grid-cols-3 h-screen">
      { !loading && <LocationsBar locations={locations} locationState={locationState} setLocationState={setLocationState} /> }
      { loading ? <span>Loading...</span> : <LocationTable locationState={locationState} games={data.user.games} /> }
    </div>
  )
}

export default Locations;