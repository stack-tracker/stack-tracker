import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faPlus } from '@fortawesome/free-solid-svg-icons';
import { HashLink } from 'react-router-hash-link';

const bars = <FontAwesomeIcon icon={faBars} />
const plus = <FontAwesomeIcon icon={faPlus} />

function Header() {
  if (Auth.loggedIn()) {
    return(
      <header className="z-100 border-8 top-1">
        <div className="pl-20 justify-end flex border-8 flex-col h-96 w-full bg-gray-500 bg-poker-image bg-cover bg-blend-overlay">
          <h1 className="font-serif text-gray-100 drop-shadow-2xl text-6xl md:text-8xl inset-x-48 inset-y-44">Stack Tracker:</h1>
          <h2 className="font-serif text-gray-100 text-4xl md:text-6xl py-5 inset-x-48 inset-y-96">The Poker Bankroll App</h2>
        </div>
          <nav>
            <ul className="flex flex-row w-full bg-gray-800 font-serif md:flex-row flex-col-reverse text-center item-center justify-center text-4xl px-16 md:py-10 text-gray-100 justify-between fixed top-0">
            <div className="group">
                <li>
                  
                  <button className="md:pr-20">{bars}</button>
                  <ul className="bg-gray-800 transform scale-0 text-center p-6 group-hover:scale-100 absolute transition duration-150 ease-in-out origin-top w-max">
                    <Link to='/dashboard'><li className="py-2 hover:text-gray-600 transform hover:scale-110 duration-75">Dashboard</li></Link>
                    <Link to='/sessions'><li className="py-2 hover:text-gray-600 transform hover:scale-110 duration-75">Sessions</li></Link>
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
                <a href="/" onClick={() => Auth.logout()}>Logout</a>
              </li>
            </ul>
          </nav>
      </header>
    )
  } else {
    return(
      <header className="z-100">
        <div className="pl-20 justify-end flex flex-col h-96 w-screen bg-gray-500 bg-poker-image bg-cover bg-blend-overlay">
          <h1 className="font-serif text-gray-100 drop-shadow-2xl text-8xl inset-x-48 inset-y-44">Stack Tracker:</h1>
          <h2 className="font-serif text-gray-100 text-6xl py-5 inset-x-48 inset-y-96">The Poker Bankroll App</h2>
        </div>
          <nav>
            <ul className="flex flex-row w-full bg-gray-800 font-serif text-4xl px-16 py-10 text-gray-100 justify-between fixed top-0">
            <div className="group">
            </div>
              <li>
                <span className="text-red-500 px-2">♥</span>
                <span className="text-black text-5xl px-2">♠</span>
                <span className="text-red-500 px-2">♦</span>
                <span className="text-black px-2 text-5xl">♣</span>
              </li>
              
              <li>
                <HashLink smooth to='/#login'>Login</HashLink>
              </li>
            </ul>
          </nav>
      </header>
    )
  }
}

export default Header;