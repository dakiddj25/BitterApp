import React from 'react';
// import './App.css';
import { Route, Switch } from "react-router-dom";
import Home from './components/welcomePage'
import Profile from './components/ProfilePage'
import TweetPage from './components/TweetPage';
import Login from './components/login';
import AuthProvider from './provider/AuthContext';
import { AuthRoute, ProtectedRoute } from './util/routesUtil'
import LoggedInView from './components/LoggedInView'


function App() {
  return (
    <div className="App">
    <AuthProvider>
       
        <Switch>
        
          <AuthRoute exact path={"/"} >
          <Home/>
          </AuthRoute>

          <ProtectedRoute path={'/loggedin'} >
            <LoggedInView/>
          </ProtectedRoute>

          {/* <ProtectedRoute path={"/tweet"} >
            <TweetPage/>
          </ProtectedRoute>

          <ProtectedRoute path={"/profile"} >
            <Profile/>
          </ProtectedRoute> */}

          <Route path={"/login"} component={Login}/>
          <Route component={Error} />
        </Switch>
    </AuthProvider>
  
    </div>
  );
}

export default App;
