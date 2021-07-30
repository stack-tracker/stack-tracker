import React from 'react';

function Locations(props) {

  const { locations } = props;

  return (
    <ul className="text-4xl w-80 mx-10 py-10 border-8 border-gray-900 text-center self-center">
      {locations.map(location => (
        <li className="py-10" key={location}>
          <button>{location}</button>
        </li>
      ))}
    </ul>
  )
}

export default Locations;