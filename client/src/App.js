import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import Locations from './pages/Locations';

import Header from './components/Header';
import Charts from './components/Charts';

function App() {
  return (
    <div className="flex flex-col">
      <Router>
        <Header />
          <Switch>
            <Route exact path="/" component={Signup} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/charts" component={Charts} />
            <Route exact path="/locations" component={Locations} />
          </Switch>
      </Router>
    </div>
  );
}

export default App;
