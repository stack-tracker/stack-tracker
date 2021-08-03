import React from 'react';
import Sidebar from '../../components/Sidebar';
import { useQuery } from '@apollo/client';
import { QUERY_USER} from '../../utils/queries';




function Dashboard() {

    const { loading, data } = useQuery(QUERY_USER);
    console.log(data)
    
    
  
  return(
    <div className="grid gap-6 grid-cols-3 h-screen">
      <Sidebar/>
      <span className="text-6xl text-gray-900 leading-normal col-span-2 self-center place-self-start">{loading ? "Hello" : `Welcome to your dashboard,  ${data.user.username}`}</span>
    </div>
  )
}

export default Dashboard;