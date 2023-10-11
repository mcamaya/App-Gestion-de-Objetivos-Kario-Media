import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './App.css';
import Login from './components/login.jsx';
import Saludo from './components/saludo.jsx';
import Navbar from './components/navbar.jsx';
import Panel from './components/panel.jsx';
import MetaDashboard from './components/metaDashboard';
import PanelFormulario from "./components/PanelFormulario.jsx";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <div className="bg-login">
              <Login />
            </div>
          </Route>
          <Route exact path="/welcome">
            <div className="bg-login">
              <Saludo />
            </div>
          </Route>
          <Route>
            <Navbar />
            <Switch>
              <Route exact path="/home">
                <Panel />
                <Link to="/home/formulario">
                  <button> IR A OTRO LADO </button>
                </Link>
              </Route>
              <Route exact path="/tasks">
                <Link to="/home">
                  <button> IR A home </button>
                </Link>
              </Route>
              <Route exact path="/home/formulario">
                <PanelFormulario />
                <Link to="/home">
                  <button> IR A home </button>
                </Link>
              </Route>
              <Route exact path="/meta-dashboard">
                <MetaDashboard />
              </Route>
            </Switch>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
