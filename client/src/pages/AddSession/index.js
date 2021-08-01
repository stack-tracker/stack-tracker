import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDollarSign } from '@fortawesome/free-solid-svg-icons';

const dollar = <FontAwesomeIcon icon={faDollarSign} />

function AddSession() {
  return (
    <div className="grid grid-col-1 h-screen content-center">
      <span className="text-6xl text-gray-900 text-center pb-6">Add a Session!</span>
      <form className="font-sans mx-auto w-96 border-4 border-gray-900 py-4 px-6"  type="submit" >
        <div className="grid grid-cols-1 my-5">
          <label className="text-2xl ml-3" htmlFor="date">Date:</label>
          <input className="py-1 text-xl bg-blue-50 border-gray-400 w-11/12 ml-3" type="date" name="date" />
        </div>

        <div className="grid grid-cols-1 my-5">
          <label className="text-2xl ml-3" htmlFor="hours">Hours:</label>
          <input className="py-1 text-xl bg-blue-50 border-gray-400 w-11/12 ml-3" type="number" step="1" min="1" max="10" defaultValue="1" name="hours" />
        </div>

        <div className="grid grid-cols-1 my-5">
          <label className="text-2xl ml-3" htmlFor="buy_in">Buy In:</label>
          <div>
            <span className="text-xl">{dollar}</span>
            <input className="py-1 text-xl bg-blue-50 border-gray-400 w-11/12 ml-1" type="number" step="1" min="1" name="buy_in" defaultValue="1" />
          </div>
        </div>

        <div className="grid grid-cols-1 my-5">
          <label className="text-2xl ml-3" htmlFor="small_blind">Small Blind:</label>
          <div>
            <span className="text-xl">{dollar}</span>
            <input className="py-1 text-xl bg-blue-50 border-gray-400 w-11/12 ml-1" type="number" step="0.01" min="0.01" name="small_blind" defaultValue="0.05" />
          </div>
        </div>

        <div className="grid grid-cols-1 my-5">
          <label className="text-2xl col-span-2 ml-3" htmlFor="big_blind">Big Blind:</label>
          <div>
            <span className="text-xl">{dollar}</span>
            <input className="py-1 text-xl bg-blue-50 border-gray-400 w-11/12 ml-1 " type="number" step="0.01" min="0.01" name="big_blind" defaultValue="0.10" />
          </div>
        
        </div>
    
        <div className="mt-6">
          <button className="py-1 font-sans text-gray-800 text-2xl bg-gray-300 w-2/6 ml-3 w-11/12">Submit</button>
        </div>
      </form>
    </div>
  )
}

export default AddSession;