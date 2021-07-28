import React, { useState } from 'react';

function SignupForm() {
  const [formState, setFormState] = useState({ username: '', email: '', password: '' });
  const { username, email, password } = formState;
  
  function changeHandler(e) {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  } 
  
  function submitHandler(e) {
    e.preventDefault();
    console.log(formState)
  }
  return (
    <>
      <form className="font-sans mx-auto w-96"  type="submit" onSubmit={submitHandler} >
        <div className="grid grid-cols-1 my-5">
          <label className="text-2xl" htmlFor="username">Username:</label>
          <input className="py-1 text-xl bg-blue-50 border-gray-400" type="text" name="username" defaultValue={username} onChange={changeHandler} />
        </div>
  
        <div className="grid grid-cols-1 my-5">
          <label className="text-2xl" htmlFor="email">Email Address:</label>
          <input className="py-1 text-xl bg-blue-50 border-gray-400" type="email" name="email" defaultValue={email} onChange={changeHandler} />
        </div>
  
        <div className="grid grid-cols-1 my-5">
          <label className="text-2xl" htmlFor="password">Password:</label>
          <input className="py-1 text-xl bg-blue-50 border-gray-400" type="password" name="password" defaultValue={password} onChange={changeHandler} />
        </div>
        
        <div className="flex flex-row">
          <button className="py-1 font-sans text-gray-800 text-2xl bg-gray-300 w-2/6">Submit</button>
        </div>
      </form>
    </>
  )
}

export default SignupForm;