import React, { useState, useEffect } from "react";
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
import data_labs from './components/labs.json';
import data_projs from './components/projs.json';

function App() {
  const [labs1, setLabs1] = useState([]);
  const [proys1, setProys1] = useState([]);
  const [ret, setRet] = useState("Samsung");
  useEffect(() => {
    setLabs1(data_labs);
    setProys1(data_projs);
  }, []);
  return (
    <Router>
      <div className="App">
        <Header />

        <nav>
          <ul>
            <li>
              <Link to="/">
                <img src="https://img.icons8.com/color/36/000000/home.png" />
                <div>Home</div>
              </Link>
            </li>
            <li>
              <Link to="/labs">
                <img src="https://img.icons8.com/external-tal-revivo-green-tal-revivo/36/000000/external-computer-connected-to-another-pc-for-networking-network-green-tal-revivo.png" />
                <div>Laboratorios</div>
              </Link>
            </li>
            <li>
              <Link to="/proys">

                <img src="https://img.icons8.com/color/36/000000/video-projector.png" />
                <div>Proyectores</div>
              </Link>
            </li>
            <li>
              <Link to="/regist">
                <img src="https://img.icons8.com/color/36/000000/edit-user-male--v1.png" />
                <div>Aparta</div>
              </Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/labs">
            <Labs
              labs1={labs1}

            />
          </Route>
          <Route exact path="/proys">
            <Proys
              proys1={proys1}
            />
          </Route>
          <Route exact path="/regist">
            <Regist
              setLabs1={setLabs1}
              labs1={labs1}
              proys1={proys1}
              setProys1={setProys1}
              ret={ret}
              setRet={setRet}
            />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;