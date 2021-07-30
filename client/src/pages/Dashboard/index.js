import React from 'react';
import Locations from '../../components/Locations';


function Dashboard() {

    const user = {
      username: 'pokrGuy93',
      email: 'poker@fake.com'
    }

    const games = [
      {
        location: 'place 1',
        hours: 5,
        low_limit: .05,
        high_limit: .10,
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
        low_limit: .05,
        high_limit: .10,
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
        low_limit: .05,
        high_limit: .10,
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
        low_limit: .05,
        high_limit: .10,
        buy_in: 10,
        cash_out: 50,
        date: Date.now(),
        result: 40,
        cash_per_hour: 8,
        bb_per_hour: 80
      },
    ];
    
    const locationArr = games.map(game => {
      return game.location;
    });
  console.log(locationArr);
  return(
    <div className="grid grid-cols-2 h-screen">
      <Locations locations={locationArr}/>
      <span className="text-6xl text-gray-900 leading-normal self-center justify-self-center">Welcome to your dashboard, {user.username}!</span>
    </div>
  )
}

export default Dashboard;