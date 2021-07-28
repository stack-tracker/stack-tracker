import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Signup from './pages/Signup';

function App() {
  return (
    <div className="flex flex-col">

    <Router>
        <div>
          <Route exact path="/signup" component={Signup} />
        </div>
    </Router>
    </div>
  );
}

export default App;
