import React from 'react'
import SideNav from '../functions/sideNav'
import AllPost from './AllPost'
// import "../css/welcomePage.css"


const TweetPage = ({showPosts}) => {

    return (
        < > 
            <h1>Welcome To Bitter!!</h1>
                <AllPost showPosts = {showPosts}/>   
        </>
    )
}

export default TweetPage