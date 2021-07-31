import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const plus = <FontAwesomeIcon icon={faPlus} />
function SideBar() {


  return (
    <ul className="text-4xl w-80 ml-10 py-10 border-8 border-gray-900 text-center self-center">
      <li className="py-10">
        <button className="hover:text-gray-600 transform hover:scale-105 duration-75">Overview</button>
      </li>
      <li className="py-10 ">
        <button className="hover:text-gray-600 transform hover:scale-105 duration-75">Sessions</button>
      </li>
      <li className="py-10">
        <button className="hover:text-gray-600 transform hover:scale-105 duration-75">Locations</button>
      </li>
      <li className="py-10">
        <button className="hover:text-gray-600 transform hover:scale-105 duration-75">Charts</button>
      </li>
      <li className="py-10">
        <button className="text-5xl text-gray-900 hover:text-gray-600 transform hover:scale-105 duration-75">{plus}</button>
      </li>
    </ul>
  )
}

export default SideBar;