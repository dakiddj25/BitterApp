import React from 'react'
import SideNav from '../functions/sideNav'
import AllPost from './AllPost'
import "../css/welcomePage.css"


const TweetPage = () => {

    return (
        <div >
        
            <div >
            <h1>Welcome To Bitter!!</h1>
                <AllPost/>   
            </div>
    
        </div>
    )
}

export default TweetPage