import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { LOGIN } from "../../utils/mutations";
import Auth from "../../utils/auth";
function LoginForm() {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const { email, password } = formState;

  const [login] = useMutation(LOGIN);

  function changeHandler(e) {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  }

  async function submitHandler(e) {
    e.preventDefault();
    console.log(formState);
    try {
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <form
        className="font-sans mx-auto w-96"
        type="submit"
        onSubmit={submitHandler}
      >
        <div className="grid grid-cols-1 my-5">
          <label className="text-2xl" htmlFor="email">
            Email Address:
          </label>
          <input
            className="py-1 text-xl bg-blue-50 border-gray-400"
            type="email"
            name="email"
            defaultValue={email}
            onChange={changeHandler}
          />
        </div>

        <div className="grid grid-cols-1 my-5">
          <label className="text-2xl" htmlFor="password">
            Password:
          </label>
          <input
            className="py-1 text-xl bg-blue-50 border-gray-400"
            type="password"
            name="password"
            defaultValue={password}
            onChange={changeHandler}
          />
        </div>

        <div className="flex flex-row">
          <button className="py-1 font-sans text-gray-800 text-2xl bg-gray-300 w-2/6">
            Submit
          </button>
        </div>
      </form>
    </>
  );
}

export default LoginForm;
