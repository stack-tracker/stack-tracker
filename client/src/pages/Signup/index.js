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
        <h2 id= 'login' className="inline font-serif px-10 text-5xl">{ signupState ? "Log in!" : "Sign Up!"} </h2>
        <button className="inline text-xl mx-10 text-blue-600 underline" onClick={loginClickHandler}>{ signupState ? "Sign up" : "Log in"}</button>
      </div>
      { signupState ? <LoginForm /> : <SignupForm /> }
    </section>
  )
}

export default LoginSignup;