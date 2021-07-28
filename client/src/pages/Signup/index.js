import React from 'react';

function Signup() {
  return (
    <section className="flex flex-col">
      <h2 className="font-serif mx-auto mt-10 text-5xl">Contact Me</h2>

        <form className="font-sans mx-auto w-96" >

          <div className="grid grid-cols-1 my-5">
            <label className="text-2xl" >Username:</label>
            <input className="bg-blue-50 border-gray-400" type="text" name="name" />
          </div>

          <div className="grid grid-cols-1 my-5">
            <label className="text-2xl" htmlFor="email">Email Address:</label>
            <input className="bg-blue-50 border-gray-400" type="email" name="email" />
          </div>

          <div className="grid grid-cols-1 my-5">
            <label className="text-2xl" htmlFor="password">Password:</label>
            <textarea className="bg-blue-50 border-gray-400" name="message" />
          </div>

          <button className="font-sans text-gray-800 text-2xl bg-gray-300 w-2/6" type="submit">Submit</button>

        </form>

      </section>
  )
}

export default Signup;