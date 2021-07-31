import React from 'react';
import Sidebar from '../../components/Sidebar';


function Dashboard() {

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
      ]
    };
    
    
    const locationArr = user.games.map(game => {
      return game.location;
    });
  console.log(locationArr);
  return(
    <div className="grid gap-6 grid-cols-3 h-screen">
      <Sidebar/>
      <span className="text-6xl text-gray-900 leading-normal col-span-2 self-center place-self-start">Welcome to your dashboard, {user.username}!</span>
    </div>
  )
}

export default Dashboard;