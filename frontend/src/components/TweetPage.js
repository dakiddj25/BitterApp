import React from 'react'
import { logout } from '../util/firebaseFunctions'
import SideNav from '../functions/tweetNav'
import Feedindex from '../functions/Feedindex'


const TweetPage = () => {


    return (
        <>
        <h1>Consists of 3 components</h1>
        <p>Side Nav</p>
        <SideNav/>
        <p>Posts</p>
            <div className = 'feedin'>
                <Feedindex/>
            </div>
        <p>explore Posts</p>
        <button onClick = {logout}>Log out</button>
        </>
    )
}

export default TweetPage