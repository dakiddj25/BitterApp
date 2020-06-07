import React from 'react'
import { Route } from 'react-router-dom'
import SideNav from '../functions/sideNav'
import Tweet from '../components/TweetPage'
import ProfilePage from '../components/ProfilePage'
import Explore from '../components/explore'
import '../css/mains.css'

const LoggedInView = () => {
    return (
        <>
        
            <SideNav/>

                
            <Route path ="/loggedin/tweet">
                <Tweet/>
            </Route>

            <Route path ="/loggedin/Profile">
                <ProfilePage/>
            </Route>
        <div className = "trys">
            <Route path ="/loggedin/explore">
                <Explore/>
            </Route>
            
        </div>
        </>
    )

}


export default LoggedInView