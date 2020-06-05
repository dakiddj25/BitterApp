import React from 'react'
import SideNav from '../functions/sideNav'
import AllPost from './AllPost'


const TweetPage = () => {

    return (
        <>
        <h1>Tweet Page</h1>
        <SideNav/>
            <div className = 'feedin'>
                <AllPost/>   
            </div>
        </>
    )
}

export default TweetPage