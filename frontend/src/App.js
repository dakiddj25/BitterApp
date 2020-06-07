import React from 'react';
import { Route, Switch } from "react-router-dom";
import Home from './components/welcomePage'
import Profile from './components/ProfilePage'
import TweetPage from './components/TweetPage';
import Login from './components/login';
import AuthProvider from './provider/AuthContext';
import { AuthRoute, ProtectedRoute } from './util/routesUtil'
import LoggedInView from './components/LoggedInView'
import { logout } from './util/firebaseFunctions'

function App() {
  return (
    <div className="body">
    <AuthProvider>
       
        <Switch>
        
          <AuthRoute exact path={"/"} >
          <Home/>
          </AuthRoute>

          <AuthRoute exact path={"/loggedout"} >
          {logout}
          </AuthRoute>

          <ProtectedRoute path={'/loggedin'} >
            <LoggedInView/>
          </ProtectedRoute>


          <Route path={"/login"} component={Login}/>
          <Route component={Error} />
        </Switch>
    </AuthProvider>
  
    </div>
  );
}

export default App;
