import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './App.css';
import Login from './components/login.jsx';
import Saludo from './components/saludo.jsx';
import Navbar from './components/navbar.jsx';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <div className='bg-login'>
              <Login />
            </div>
          </Route>
          <Route exact path="/welcome">
            <div className='bg-login'>
              <Saludo />
            </div>
          </Route>
          <Route>
            <Navbar />
            <Switch>
              <Route exact path="/home">
                <h1>Home</h1>
                <Link to="/taks">
                    <button > IR A OTRO LADO </button>
                </Link>
              </Route>
              <Route exact path="/taks">
                <h1>otro lado</h1>
                <Link to="/home">
                    <button > IR A home </button>
                </Link>
              </Route>
            </Switch>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
