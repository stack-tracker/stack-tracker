import React from 'react';

function Header() {
  return(
    <header>
      <div className="h-screen bg-gray-500 bg-poker-image bg-cover bg-blend-overlay">
        <h1 className="font-serif text-gray-100 drop-shadow-2xl text-8xl absolute inset-x-48 inset-y-56">Stack Tracker</h1>
        <h2 className="font-serif text-gray-100 text-6xl py-5 absolute inset-x-48 inset-y-80">The Poker Bankroll App</h2>
      </div>
        <nav>
          <ul className="flex flex-row w-full bg-gray-900 font-serif text-4xl py-10 text-gray-100 justify-evenly fixed top-0">
            <li>NavBar</li>
            <li>PlaceHolders</li>
            <li>Here</li>
            <li>And Here</li>
          </ul>
        </nav>
    </header>
  )
}

export default Header;