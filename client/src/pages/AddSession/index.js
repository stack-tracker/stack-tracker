import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDollarSign } from '@fortawesome/free-solid-svg-icons';
import { useQuery } from '@apollo/client';
import { QUERY_USER_BASIC } from '../../utils/queries';
import { useMutation } from '@apollo/client';
import { ADD_GAME } from '../../utils/mutations';

const dollar = <FontAwesomeIcon icon={faDollarSign} />

function AddSession() {
  // returns user ID
  const { data } = useQuery(QUERY_USER_BASIC);

  const [formState, setFormState] = useState(
    {
      location: '',
      date: '',
      hours: 1,
      buy_in: 1,
      small_blind: 0.05,
      big_blind: 0.10,
      cash_out: 0.01
    }
  );

  const {
    date,
    location,
    hours,
    buy_in,
    small_blind,
    big_blind,
    cash_out
  } = formState;

  function changeHandler(e) { 
    setFormState({ ...formState, [e.target.name]: e.target.value })   
  }
  
  const [addGame, { loading, error} ] = useMutation(ADD_GAME);

  if (loading) return 'Submitting...';
  if(error) return `Submission error! ${error.message}`;

  const submitHandler = async event => {
    event.preventDefault();
    // parse values into needed type
    const variables = {
      ...formState,
      hours: parseFloat(formState.hours),
      buy_in: parseInt(formState.buy_in),
      small_blind: parseFloat(formState.small_blind),
      big_blind: parseFloat(formState.big_blind),
      cash_out: parseFloat(formState.cash_out),
      userId: data.user._id,
      username: data.user.username
    }
    
    try {
      await addGame({variables});
      window.location.assign('/dashboard')
    }
    catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="grid grid-col-1 h-screen content-center">
      <span className="text-6xl text-gray-900 text-center pb-6">Add a Session!</span>
      <form className="font-sans mx-auto w-96 border-4 border-gray-900 py-4 px-6"  type="submit" onSubmit={submitHandler}>
        <div className="grid grid-cols-1 my-5">
          <label className="text-2xl ml-3" htmlFor="date">Date:</label>
          <input className="py-1 text-xl bg-blue-50 border-gray-400 w-11/12 ml-3" type="date" defaultValue={date} name="date" onChange={changeHandler} />
        </div>

        <div className="grid grid-cols-1 my-5">
          <label className="text-2xl ml-3" htmlFor="date">Location:</label>
          <input className="py-1 text-xl bg-blue-50 border-gray-400 w-11/12 ml-3" type="text" defaultValue={location} name="location" onChange={changeHandler} />
        </div>

        <div className="grid grid-cols-1 my-5">
          <label className="text-2xl ml-3" htmlFor="hours">Hours:</label>
          <input className="py-1 text-xl bg-blue-50 border-gray-400 w-11/12 ml-3" type="number" step="0.1" min="1" max="10" defaultValue={hours} name="hours" onChange={changeHandler} />
        </div>

        <div className="grid grid-cols-1 my-5">
          <label className="text-2xl ml-3" htmlFor="buy_in">Buy In:</label>
          <div>
            <span className="text-xl">{dollar}</span>
            <input className="py-1 text-xl bg-blue-50 border-gray-400 w-11/12 ml-1" type="number" step="1" min="1" name="buy_in" defaultValue={buy_in} onChange={changeHandler} />
          </div>
        </div>

        <div className="grid grid-cols-1 my-5">
          <label className="text-2xl ml-3" htmlFor="small_blind">Small Blind:</label>
          <div>
            <span className="text-xl">{dollar}</span>
            <input className="py-1 text-xl bg-blue-50 border-gray-400 w-11/12 ml-1" type="number" step="0.01" min="0.01" name="small_blind" defaultValue={small_blind} onChange={changeHandler} />
          </div>
        </div>

        <div className="grid grid-cols-1 my-5">
          <label className="text-2xl col-span-2 ml-3" htmlFor="big_blind">Big Blind:</label>
          <div>
            <span className="text-xl">{dollar}</span>
            <input className="py-1 text-xl bg-blue-50 border-gray-400 w-11/12 ml-1 " type="number" step="0.01" min="0.01" name="big_blind" defaultValue={big_blind} onChange={changeHandler} />
          </div>
        </div>

        <div className="grid grid-cols-1 my-5">
          <label className="text-2xl col-span-2 ml-3" htmlFor="cash_out">Cash Out:</label>
          <div>
            <span className="text-xl">{dollar}</span>
            <input className="py-1 text-xl bg-blue-50 border-gray-400 w-11/12 ml-1 " type="number" step="0.01" min="-10000000000.00" name="cash_out" defaultValue={cash_out} onChange={changeHandler} />
          </div>
        </div>
    
        <div className="mt-6">
          <button className="py-1 font-sans text-gray-800 text-2xl bg-gray-300 w-2/6 ml-3 w-11/12">Submit</button>
        </div>
      </form>
      {error && <span className="grid grid-cols-1 my-5 text-xl text-gray-900 text-center">Add session failed</span>}
    </div>
  )
}

export default AddSession;