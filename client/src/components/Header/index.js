import React from 'react';
import { Link } from 'react-router-dom'

function Header() {
  return(
    <header>
      <div className="h-screen bg-gray-500 bg-poker-image bg-cover bg-blend-overlay">
        <h1 className="font-serif text-gray-100 drop-shadow-2xl text-8xl absolute inset-x-48 inset-y-56">Stack Tracker</h1>
        <h2 className="font-serif text-gray-100 text-6xl py-5 absolute inset-x-48 inset-y-80">The Poker Bankroll App</h2>
      </div>
        <nav>
          <ul className="flex flex-row w-full bg-gray-900 font-serif text-4xl px-16 py-10 text-gray-100 justify-between fixed top-0">
            <Link to={'/dashboard'}>
              <li>
                <button>Dashboard</button>
              </li>
            </Link>
            <li>
              <button>Logout</button>
            </li>
          </ul>
        </nav>
    </header>
  )
}

export default Header;