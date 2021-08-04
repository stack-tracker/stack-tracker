import React, { useState } from 'react';
import SignupForm from '../../components/SignupForm';
import LoginForm from '../../components/LoginForm';


function LoginSignup() {

  const [signupState, setLoginSignupState] = useState(true);
  
  function loginClickHandler() {
    setLoginSignupState(signupState => !signupState);
  }

  return (
    <section className="flex flex-col h-screen justify-center">
      <div className="flex flex-row justify-center">
        <h2 id= 'login' className="inline font-serif px-10 text-5xl">{ signupState ? "Sign Up!" : "Login!"} </h2>
        <button className="inline text-xl mx-10 text-blue-600 underline" onClick={loginClickHandler}>{ signupState ? "Login" : "Sign Up"}</button>
      </div>
      { signupState ? <SignupForm /> : <LoginForm /> }
    </section>
  )
}

export default LoginSignup;