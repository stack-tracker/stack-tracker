import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Signup from './pages/Signup';
import Header from './components/Header';

function App() {
  return (
    <div className="flex flex-col">
      <Header />
      <Router>
        <div>
          <Route exact path="/" component={Signup} />
        </div>
      </Router>
    </div>
  );
}

export default App;
