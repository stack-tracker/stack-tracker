import React, { useState } from 'react';
import LocationsBar from '../../components/LocationsBar';
import LocationTable from '../../components/LocationTable';

const user = {
    username: 'pokrGuy93',
    email: 'poker@fake.com',
    games: [
      {
        location: 'place 1',
        hours: 5,
        small_blind: .05,
        big_blind: .10,
        buy_in: 10,
        cash_out: 50,
        date: Date.now(),
        result: 40,
        cash_per_hour: 8,
        bb_per_hour: 80
      },
      {
        location: 'place 2',
        hours: 5,
        small_blind: .05,
        big_blind: .10,
        buy_in: 10,
        cash_out: 50,
        date: Date.now(),
        result: 40,
        cash_per_hour: 8,
        bb_per_hour: 80
      },
      {
        location: 'place 3',
        hours: 5,
        small_blind: .05,
        big_blind: .10,
        buy_in: 10,
        cash_out: 50,
        date: Date.now(),
        result: 40,
        cash_per_hour: 8,
        bb_per_hour: 80
      },
      {
        location: 'place 4',
        hours: 5,
        small_blind: .05,
        big_blind: .10,
        buy_in: 10,
        cash_out: 50,
        date: Date.now(),
        result: 40,
        cash_per_hour: 8,
        bb_per_hour: 80
      },
      {
        location: 'place 4',
        hours: 5,
        small_blind: .05,
        big_blind: .10,
        buy_in: 10,
        cash_out: 80,
        date: Date.now(),
        result: 70,
        cash_per_hour: 14,
        bb_per_hour: 140
      },
    ]
  };

function getLocations() {
  const locationsArr = user.games.map(game => {
    return game.location;
  });

  const uniqueLocations = [...new Set(locationsArr)];
  return uniqueLocations;
};


function Locations() {
  const locations = getLocations();
  
  const [locationState, setLocationState] = useState('');
  
  console.log(locationState);
  
 

  return(
    <div className="grid gap-6 grid-cols-3 h-screen">
      <LocationsBar locations={locations} locationState={locationState} setLocationState={setLocationState} />
      { locationState !== '' && <LocationTable user={ user } locationState={locationState} /> }
    </div>
  )
}

export default Locations;