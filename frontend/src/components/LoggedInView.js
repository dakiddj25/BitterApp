import React from 'react'
import { Route } from 'react-router-dom'
import SideNav from '../functions/sideNav'
import Tweet from '../components/TweetPage'
import ProfilePage from '../components/ProfilePage'
import Explore from '../components/explore'

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

        <Route path ="/loggedin/explore">
            <Explore/>
        </Route>
        </>
    )

}


export default LoggedInView