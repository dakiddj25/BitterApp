import React from 'react';
// import './App.css';
import { Route, Switch } from "react-router-dom";
import Home from './components/welcomePage'
import NavBar from './components/NavBar'
import TweetPage from './components/TweetPage';


function App() {
  return (
    <div className="App">
  <NavBar/>
    <Switch>
      <Route exact path={"/"} component={Home}/> 
      <Route path={"/tweet"} component={TweetPage}/>
      <Route component={Error} />
    </Switch>
    </div>
  );
}

export default App;
