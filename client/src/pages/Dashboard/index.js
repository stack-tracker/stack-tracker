import React from 'react';
import Locations from '../../components/Locations';

function Dashboard() {
  return(
    <div className="grid grid-cols-2 h-screen">
      <Locations />
      <span className="text-6xl text-gray-900 self-center justify-self-center">Welcome to your dashboard, "user"!</span>
    </div>
  )
}

export default Dashboard;