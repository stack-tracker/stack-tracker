import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';

import Header from './components/Header';

function App() {
  return (
    <div className="flex flex-col">
      <Router>
        <Header />
          <Switch>
            <Route exact path="/" component={Signup} />
            <Route exact path="/dashboard" component={Dashboard} />
          </Switch>
      </Router>
    </div>
  );
}

export default App;
