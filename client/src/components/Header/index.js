import React from 'react';
import { Link } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faPlus } from '@fortawesome/free-solid-svg-icons';

const bars = <FontAwesomeIcon icon={faBars} />
const plus = <FontAwesomeIcon icon={faPlus} />

function Header() {
  return(
    <header className="z-100">
      <div className="h-screen bg-gray-500 bg-poker-image bg-cover bg-blend-overlay">
        <h1 className="font-serif text-gray-100 drop-shadow-2xl text-8xl absolute inset-x-48 inset-y-56">Stack Tracker</h1>
        <h2 className="font-serif text-gray-100 text-6xl py-5 absolute inset-x-48 inset-y-80">The Poker Bankroll App</h2>
      </div>
        <nav>
          <ul className="flex flex-row w-full bg-gray-800 font-serif text-4xl px-16 py-10 text-gray-100 justify-between fixed top-0">
          <div className="group">
              <li>
                
                <button className="pr-20">{bars}</button>
                <ul className="bg-gray-800 transform scale-0 text-center p-6 group-hover:scale-100 absolute transition duration-150 ease-in-out origin-top w-max">
                  <Link to='/dashboard'><li className="py-2 hover:text-gray-600 transform hover:scale-110 duration-75">Dashboard</li></Link>
                  <li className="py-2 hover:text-gray-600 transform hover:scale-110 duration-75">Overview</li>
                  <li className="py-2 hover:text-gray-600 transform hover:scale-110 duration-75">Sessions</li>
                  <Link to='/locations'><li className="py-2 hover:text-gray-600 transform hover:scale-110 duration-75">Locations</li></Link>
                  <Link to='/charts'><li className="py-2 hover:text-gray-600 transform hover:scale-110 duration-75">Charts</li></Link>
                  <Link to='/addsession'><li className="py-2 hover:text-gray-600 transform hover:scale-110 duration-75">{plus}</li></Link>
                </ul>
              </li>
            </div>
            <li>
              <span className="text-red-500 px-2">♥</span>
              <span className="text-black text-5xl px-2">♠</span>
              <span className="text-red-500 px-2">♦</span>
              <span className="text-black px-2 text-5xl">♣</span>
            </li>
            
            <li>
              <button>Logout</button>
            </li>
          </ul>
        </nav>
    </header>
  )
}

export default Header;