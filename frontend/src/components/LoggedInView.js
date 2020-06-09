import React from 'react'
import { Route } from 'react-router-dom'
import SideNav from '../functions/sideNav'
import Tweet from '../components/TweetPage'
import ProfilePage from '../components/ProfilePage'
import Explore from '../components/explore'
import '../css/mains.css'

const LoggedInView = () => {
    return (
        <div className = 'body'>
        
            <SideNav/>
                
            <Route path ="/loggedin/tweet">
                <Tweet/>
                
            </Route>

            <Route path ="/loggedin/Profile">
                <ProfilePage/>
            <div className = 'explore'>
                <Explore/>
            </div>

            </Route>
            <div className = "trys">
                <Route path ="/loggedin/explore">
                    <Explore/>
                </Route>
                
            </div>
        </div>
    )

}


export default LoggedInView