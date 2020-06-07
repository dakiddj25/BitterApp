import React from 'react'
import SideNav from '../functions/sideNav'
import AllPost from './AllPost'
import "../css/welcomePage.css"


const TweetPage = () => {

    return (
        <div className = 'body'>
        
        {/* <SideNav/> */}
            <div className = 'feedin'>
            <h1>Welcome To Bitter!!</h1>
                <AllPost/>   
            </div>
            <div className="three">
                <h1>3rd Componet</h1>
            </div>
        </div>
    )
}

export default TweetPage