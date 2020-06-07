import React from 'react'
import SideNav from '../functions/sideNav'
import AllPost from './AllPost'


const TweetPage = () => {

    return (
        <>
        <h1>Tweet Page</h1>
        {/* <SideNav/> */}
            <div className = 'feedin'>
                <AllPost/>   
            </div>
            {/* <div className="three">
                <h1>3rd Componet</h1>
            </div> */}
        </>
    )
}

export default TweetPage