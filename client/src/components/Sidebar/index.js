import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons';



const plus = <FontAwesomeIcon icon={faPlus} />
function SideBar() {


  return (
    <ul className="text-4xl w-80 ml-10 py-10 border-8 border-gray-900 text-center self-center">
      <li className="py-10">
        <button className="hover:text-gray-600 transform hover:scale-110 duration-75">Overview</button>
      </li>
      <li className="py-10 ">
        <button className="hover:text-gray-600 transform hover:scale-110 duration-75">Sessions</button>
      </li>
      <li className="py-10">
        <Link to={'/locations'}>
          <button className="hover:text-gray-600 transform hover:scale-110 duration-75">Locations</button>
        </Link>
      </li>
      <li className="py-10">
        <Link to={"/charts"}>
          <button className="hover:text-gray-600 transform hover:scale-110 duration-75">Charts</button>
        </Link>
      </li>
      <li className="py-10">
        <Link to={"/addsession"}>
          <button className="text-5xl text-gray-900 hover:text-gray-600 transform hover:scale-110 duration-75">{plus}</button>
        </Link>
      </li>
    </ul>
  )
}

export default SideBar;