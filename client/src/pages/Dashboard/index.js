import React from "react";
import Sidebar from "../../components/Sidebar";
import { useQuery } from "@apollo/client";
import { QUERY_USER_BASIC } from "../../utils/queries";

import Auth from "../../utils/auth";
import { BrowserRouter as Route, Redirect } from "react-router-dom";
import Signup from "../../pages/Signup";

function Dashboard() {
  const { loading, data } = useQuery(QUERY_USER_BASIC);

  if (Auth.loggedIn()) {
    console.log(data);
    return (
      <div className="h-screen flex flex-col-reverse md:flex-row justify-center item-center text-center mt-20 flex-col">
        <Sidebar />
        <span className="text-6xl text-gray-900 leading-normal col-span-2 self-center place-self-start mx-12 flex-auto">
          {loading
            ? "Hello"
            : `Welcome to your dashboard,  ${data.user.username}!`}
        </span>
      </div>
    );
  } else {
    return (
      <Route>
        <Redirect to="/" /> : <Signup />
      </Route>
    );
  }
}

export default Dashboard;
