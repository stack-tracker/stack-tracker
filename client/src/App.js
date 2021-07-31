import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';

import Header from './components/Header';
import Charts from './components/Charts';

function App() {
  return (
    <div className="flex flex-col">
      <Header />
      <Router>
          <Switch>
            <Route exact path="/" component={Signup} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/charts" component={Charts} />
          </Switch>
      </Router>
    </div>
  );
}

export default App;
