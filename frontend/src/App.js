import React from 'react';
// import './App.css';
import { Route, Switch } from "react-router-dom";
import Home from './components/welcomePage'
import NavBar from './components/NavBar'
import TweetPage from './components/TweetPage';
import Login from './components/login';
import AuthProvider from './provider/AuthContext';
import { AuthRoute, ProtectedRoute } from './util/routesUtil'


function App() {
  return (
    <div className="App">
    <AuthProvider>
       
        <Switch>
          <Route exact path={"/"} component={Home}/> 
          <ProtectedRoute path={"/tweet"} component={TweetPage}/>
          <AuthRoute path={"/login"} component={Login}/>
          <Route component={Error} />
        </Switch>
    </AuthProvider>
  
    </div>
  );
}

export default App;
