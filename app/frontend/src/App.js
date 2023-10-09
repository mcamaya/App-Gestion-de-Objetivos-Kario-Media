import React, {useEffect} from 'react';
import { BrowserRouter as Router, Route, Switch, useLocation } from 'react-router-dom';
import './App.css';
import Login from './components/login.jsx';
import Saludo from './components/saludo.jsx';

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
          <Route exact path="/saludo">
            <div className='bg-login'>
              <Saludo />
            </div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
