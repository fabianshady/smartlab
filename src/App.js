import React from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
} from "react-router-dom";
import { Component } from "react";
import Home from "./components/Home";
import Labs from "./components/Labs";
import Proys from "./components/Proys";
import Header from "./components/Header";
import Regist from "./components/Regist";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/labs">Laboratorios</Link>
            </li>
            <li>
              <Link to="/proys">Proyectores</Link>
            </li>
            <li>
              <Link to="/regist">Registrarse</Link>
            </li>
          </ul>
        </nav>
        
        <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/labs" component={Labs}/>
        <Route exact path="/proys" component={Proys}/>
        <Route exact path="/regist" component={Regist}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;