import React from 'react';

function LocationsBar(props) {
  const { locations } = props;
  return (
    <ul className="text-4xl w-80 ml-10 py-10 border-8 border-gray-900 text-center self-center">
      {locations.map(location => (
        <li className="py-10">
          <button key={location} className="hover:text-gray-600 transform hover:scale-105 duration-75">{location}</button>
        </li>       
      ))}

    </ul>
  )
}

export default LocationsBar;