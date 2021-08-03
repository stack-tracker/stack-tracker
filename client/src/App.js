import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { setContext } from "@apollo/client/link/context";
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";

import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Locations from "./pages/Locations";
import AddSession from "./pages/AddSession";

import Header from "./components/Header";
import Charts from "./components/Charts";

const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="flex flex-col">
        <Router>
          <Header />
          <Switch>
            <Route exact path="/" component={Signup} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/charts" component={Charts} />
            <Route exact path="/locations" component={Locations} />
            <Route exact path="/addsession" component={AddSession} />
          </Switch>
        </Router>
      </div>
    </ApolloProvider>
  );
}

export default App;
