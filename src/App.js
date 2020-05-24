import React from 'react';
import './App.css';
import { Route, Switch } from "react-router-dom";
import Home from './components/welcomePage'
import NavBar from './components/NavBar'


function App() {
  return (
    <div className="App">
  <NavBar/>
    <Switch>
      <Route exact path={"/"} component={Home}/> 
      <Route component={Error} />
    </Switch>
    </div>
  );
}

export default App;
